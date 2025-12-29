
import { GoogleGenAI, Modality } from "@google/genai";

// Fix: Use AudioContext type instead of the variable name audioContext
let audioContext: AudioContext | null = null;

// Helper to decode Base64 to ArrayBuffer
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to decode raw PCM audio data
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1
): Promise<AudioBuffer> {
  let buffer = data.buffer;
  if (data.byteLength % 2 !== 0) {
    buffer = data.buffer.slice(0, data.byteLength - 1);
  }

  const dataInt16 = new Int16Array(buffer);
  const frameCount = dataInt16.length / numChannels;
  const audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return audioBuffer;
}

export const speakText = async (text: string): Promise<void> => {
  if (!process.env.API_KEY) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    
    if (audioContext && audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio data");

    const audioBytes = decode(base64Audio);
    
    // Add null check for audioContext before using it
    if (audioContext) {
      const audioBuffer = await decodeAudioData(audioBytes, audioContext, 24000, 1);
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    }

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};

export const generateVisual = async (word: string, situation: string): Promise<string | null> => {
  if (!process.env.API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Core Concept: Cute Cat Mascot - Soft Flat Style
    const prompt = `A soft flat illustration featuring a cute anthropomorphic cat mascot representing the concept: "${word}".
    Context/Situation: "${situation}".
    Style Rules:
    - Main character: One primary cute cat with human-like expressive face and poses.
    - Artistic Style: Soft flat illustration, rounded shapes, smooth edges.
    - Palette: Warm, muted, friendly colors. 
    - Shading: Minimal, subtle layering, NO harsh outlines, NO black ink outlines.
    - Background: Simple, minimal, clean.
    - Tone: Friendly, approachable, calm, and professional for a learning app.
    - Mobile optimized: Clear focal point, readable at small sizes.
    Restrictions: NO human characters, NO realistic photography, NO comic book exaggeration, NO visual clutter.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.warn(`Gemini Image Generation Failed for ${word}:`, error);
    return null;
  }
};
