import React, { useState } from 'react';
import { VocabCard, WordForm } from '../types';
import { Volume2, Sparkles, Loader2, Footprints } from 'lucide-react';
import { speakText } from '../services/geminiService';

interface FlashcardProps {
  card: VocabCard;
  isFlipped: boolean;
  onFlip: () => void;
  preGeneratedUrl?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ card, isFlipped, onFlip, preGeneratedUrl }) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const handleSpeak = async (e: React.MouseEvent, text: string, id: string) => {
    e.stopPropagation();
    if (isPlaying) return;
    setIsPlaying(id);
    await speakText(text);
    setTimeout(() => setIsPlaying(null), 1500); 
  };

  const getFormColor = (form: string) => {
    switch (form) {
      case WordForm.NOUN: return 'bg-blue-100 text-blue-800';
      case WordForm.ADJECTIVE: return 'bg-purple-100 text-purple-800';
      case WordForm.PHRASE: return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isLoading = !preGeneratedUrl;

  return (
    <div 
      className="relative w-full max-w-sm h-[65vh] cursor-pointer perspective-1000 select-none mx-auto"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT: Check Word, Word Form, Pronunciation */}
        <div className="absolute w-full h-full backface-hidden rounded-[2.5rem] bg-cream shadow-xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${getFormColor(card.wordForm)}`}>
                    {card.wordForm}
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-1 leading-tight">
                    {card.word}
                </h2>
                {card.phonetics && (
                   <p className="text-gray-400 font-mono text-xs tracking-wide mb-6">
                     {card.phonetics}
                   </p>
                )}
                <p className="text-gray-400 text-[10px] font-black tracking-widest uppercase">Tap to see meaning</p>
            </div>
            <button 
                onClick={(e) => handleSpeak(e, card.word, 'main')}
                className={`p-3 rounded-full bg-white shadow-lg border border-gray-100 transition-all ${isPlaying === 'main' ? 'text-accent ring-2 ring-accent/20' : 'text-gray-600'}`}
            >
                <Volume2 size={20} />
            </button>
        </div>

        {/* BACK: Meaning, Examples, and Automated Illustration */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[2.5rem] bg-white shadow-xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Image Section (Cute Cat Mascot Style) */}
            <div className="relative h-[38%] w-full shrink-0 bg-[#fdfaf5] overflow-hidden flex flex-col items-center justify-center border-b border-gray-50">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-3 text-gray-300">
                    <div className="relative">
                      <Loader2 size={28} className="animate-spin text-accent/40" />
                      <Footprints className="absolute inset-0 m-auto text-accent/20" size={12} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Jessie is drawing...</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={preGeneratedUrl} 
                      alt={card.word} 
                      className="w-full h-full object-cover grayscale-[0.05] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-5">
                       <h3 className="text-lg font-serif font-bold text-white leading-none tracking-tight">{card.word}</h3>
                       <p className="text-white/70 text-[8px] font-black uppercase tracking-widest mt-1">Illustration by Jessie AI</p>
                    </div>
                  </>
                )}
            </div>

            <div className={`flex-1 p-5 overflow-y-auto scrollbar-hide space-y-4`}>
                <div>
                    <h4 className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Definition</h4>
                    <p className="text-[13px] text-gray-800 leading-snug font-medium">{card.definition}</p>
                </div>
                <div>
                    <h4 className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2 flex items-center gap-1">
                        <Sparkles size={8} className="text-accent"/> Examples
                    </h4>
                    <div className="space-y-2">
                        {card.examples.map((ex, idx) => (
                            <div key={idx} className="bg-gray-50/50 p-2.5 rounded-xl border border-gray-100 relative pr-9">
                                <p className="text-[11px] text-gray-600 italic font-serif leading-tight">"{ex}"</p>
                                <button 
                                  onClick={(e) => handleSpeak(e, ex, `ex-${idx}`)} 
                                  className="absolute top-1/2 -translate-y-1/2 right-2 p-1.5 text-gray-300 hover:text-accent transition-colors"
                                >
                                    <Volume2 size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
