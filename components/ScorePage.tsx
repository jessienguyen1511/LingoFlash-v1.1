import React from 'react';
import { GameResult } from '../types';
import { Trophy, BookOpen, RotateCcw, Heart, Star, Award, Zap } from 'lucide-react';

interface ScorePageProps {
  result: GameResult;
  onRestart: () => void;
  onStudy: () => void;
}

export const ScorePage: React.FC<ScorePageProps> = ({ result, onRestart, onStudy }) => {
  const getEncouragement = (score: number) => {
    if (score === 10) return {
      text: "Incredible! You're a vocabulary master!",
      icon: <Award className="text-yellow-500" size={24} />,
      color: "text-yellow-600"
    };
    if (score >= 7) return {
      text: "Excellent work! You're almost at the top.",
      icon: <Star className="text-accent" size={24} />,
      color: "text-accent"
    };
    if (score >= 4) return {
      text: "Nice progress! You're building a solid foundation.",
      icon: <Zap className="text-blue-500" size={24} />,
      color: "text-blue-600"
    };
    return {
      text: "Don't give up! Every mistake is a step towards mastery.",
      icon: <Heart className="text-red-400" size={24} />,
      color: "text-red-500"
    };
  };

  const encouragement = getEncouragement(result.score);

  return (
    <div className="w-full h-[80vh] max-w-sm mx-auto flex flex-col p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 flex flex-col items-center h-full overflow-hidden">
        
        <div className="mb-2 relative">
           <div className="w-20 h-20 rounded-full bg-accent/5 flex items-center justify-center">
              <Trophy size={40} className="text-accent" />
           </div>
           <div className="absolute -bottom-1 -right-1 bg-white px-3 py-1 rounded-xl shadow-md border border-gray-100 font-black text-sm text-ink">
              {result.score}/10
           </div>
        </div>

        <h2 className="text-xl font-serif font-bold text-ink mb-1">Session Complete</h2>
        
        {/* Encouragement Statement */}
        <div className="flex flex-col items-center text-center px-2 mb-4">
           <div className="mb-1">{encouragement.icon}</div>
           <p className={`text-xs font-bold ${encouragement.color} uppercase tracking-wide leading-tight`}>
             {encouragement.text}
           </p>
        </div>

        {/* Review list restricted height to ensure buttons are visible */}
        <div className="w-full flex-1 min-h-0 bg-gray-50/50 p-4 rounded-3xl border border-gray-50 overflow-hidden flex flex-col mb-4">
           <h3 className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2 shrink-0">Reviewed Words</h3>
           <div className="flex flex-wrap gap-1.5 overflow-y-auto scrollbar-hide">
              {result.reviewedCards.map((card, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-gray-100 text-[10px] font-bold text-gray-500 shadow-sm">
                   {card.word}
                </span>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 gap-2 w-full shrink-0">
           <button 
             onClick={onRestart}
             className="flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-accent text-white font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-accent/20 transition-all active:scale-95"
           >
             <RotateCcw size={14} />
             Play Again
           </button>
           <button 
             onClick={onStudy}
             className="flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-white border-2 border-gray-100 text-gray-400 font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95"
           >
             <BookOpen size={14} />
             Study Bank
           </button>
        </div>
      </div>
    </div>
  );
};