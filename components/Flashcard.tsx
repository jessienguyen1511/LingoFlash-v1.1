import React, { useState } from 'react';
import { VocabCard, WordForm } from '../types';
import { Volume2, Sparkles, Footprints } from 'lucide-react';
import { speakText } from '../services/geminiService';

interface FlashcardProps {
  card: VocabCard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({ card, isFlipped, onFlip }) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const handleSpeak = async (e: React.MouseEvent, text: string, id: string) => {
    e.stopPropagation();
    if (isPlaying) return;
    setIsPlaying(id);
    await speakText(text);
    setTimeout(() => setIsPlaying(null), 1500); 
  };

  const getFormColor = (form: string) => {
    const f = form.toLowerCase();
    if (f === 'n' || f === 'noun') return 'bg-blue-100 text-blue-800';
    if (f === 'adj' || f === 'adjective') return 'bg-purple-100 text-purple-800';
    if (f === 'phrase') return 'bg-amber-100 text-amber-800';
    if (f === 'v' || f === 'verb') return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className="relative w-full max-w-[340px] md:max-w-sm h-full max-h-[480px] md:max-h-[520px] aspect-[3/4.2] cursor-pointer perspective-1000 select-none mx-auto"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-[2rem] bg-cream shadow-xl border border-gray-100 flex flex-col items-center justify-center p-8 text-center">
            <div className="absolute top-6 right-6">
                <span className={`px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${getFormColor(card.wordForm)}`}>
                    {card.wordForm}
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-1.5 leading-tight">
                    {card.word}
                </h2>
                {card.phonetics && (
                   <p className="text-gray-400 font-mono text-[10px] tracking-wider mb-6 opacity-60">
                     {card.phonetics}
                   </p>
                )}
                <div className="text-accent opacity-10 mt-2">
                  <Footprints size={20} />
                </div>
            </div>
            <button 
                onClick={(e) => handleSpeak(e, card.word, 'main')}
                className={`p-3.5 rounded-full bg-white shadow-md border border-gray-50 transition-all active:scale-90 ${isPlaying === 'main' ? 'text-accent ring-4 ring-accent/5' : 'text-gray-300'}`}
            >
                <Volume2 size={20} />
            </button>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-[2rem] bg-white shadow-xl border border-gray-100 flex flex-col overflow-hidden">
            {/* Image Section - Locked Ratio */}
            <div className="relative h-[36%] w-full shrink-0 bg-[#fefcf8] overflow-hidden flex flex-col items-center justify-center border-b border-gray-50">
                <img 
                  src={card.imageUrl} 
                  alt={card.word} 
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-50/20 via-transparent to-transparent"></div>
            </div>

            <div className="flex-1 p-4 md:p-5 overflow-y-auto scrollbar-hide space-y-3">
                <div>
                    <h4 className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1 opacity-80">Meaning</h4>
                    <p className="text-[12px] text-gray-800 leading-snug font-medium">{card.definition}</p>
                </div>
                <div>
                    <h4 className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-1.5 flex items-center gap-1 opacity-80">
                        <Sparkles size={8} className="text-accent"/> Examples
                    </h4>
                    <div className="space-y-1.5">
                        {card.examples.map((ex, idx) => (
                            <div key={idx} className="bg-gray-50/50 p-2 rounded-xl border border-gray-100 relative pr-8">
                                <p className="text-[10px] text-gray-500 italic font-serif leading-tight">"{ex}"</p>
                                <button 
                                  onClick={(e) => handleSpeak(e, ex, `ex-${idx}`)} 
                                  className={`absolute top-1/2 -translate-y-1/2 right-2 p-1 transition-colors ${isPlaying === `ex-${idx}` ? 'text-accent' : 'text-gray-200'}`}
                                >
                                    <Volume2 size={12} />
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
