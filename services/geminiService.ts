import { GoogleGenAI, Modality } from "@google/genai";

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
  // Ensure the buffer length is even for Int16Array
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
      // Normalize Int16 to Float32 [-1.0, 1.0]
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return audioBuffer;
}

export const speakText = async (text: string): Promise<void> => {
  if (!process.env.API_KEY) {
    console.warn("No API Key found. Using browser fallback.");
    // Fallback to basic browser synthesis if no key
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Initialize audio context on user gesture if needed
    if (!audioContext) {
      // Set sample rate to 24000 to match Gemini TTS output
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    
    if (audioContext.state === 'suspended') {
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

    if (!base64Audio) {
      throw new Error("No audio data received");
    }

    const audioBytes = decode(base64Audio);
    
    // Decode raw PCM data manually instead of using decodeAudioData
    const audioBuffer = await decodeAudioData(audioBytes, audioContext, 24000, 1);
    
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    // Silent fallback to browser TTS on error
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};