import React, { useState } from 'react';
import { GameQuestion, GameResult, VocabCard } from '../types';
import { CheckCircle2, XCircle, Brain, ArrowRight } from 'lucide-react';

interface GameModeProps {
  questions: GameQuestion[];
  onComplete: (result: GameResult) => void;
  onExit: () => void;
}

export const GameMode: React.FC<GameModeProps> = ({ questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [reviewedCards, setReviewedCards] = useState<VocabCard[]>([]);

  const currentQ = questions[currentIndex];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    setReviewedCards(prev => [...prev, currentQ.card]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      onComplete({ 
        score: score, 
        total: questions.length, 
        reviewedCards: reviewedCards 
      });
    }
  };

  const isCorrectChoice = selectedOption === currentQ.correctAnswer;

  return (
    <div className="w-full h-[85vh] max-w-sm mx-auto flex flex-col overflow-hidden">
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col h-full overflow-hidden">
        {/* Compact Header */}
        <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center bg-gray-50/30 shrink-0">
          <div className="flex items-center gap-2">
             <Brain size={14} className="text-accent" />
             <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Question {currentIndex + 1}/10</p>
          </div>
          <button onClick={onExit} className="text-[9px] font-black uppercase text-gray-300 hover:text-red-400">Exit</button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-100 shrink-0">
           <div 
             className="h-full bg-accent transition-all duration-500" 
             style={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
           ></div>
        </div>

        <div className="p-4 flex-1 flex flex-col overflow-hidden">
          {/* Question Text */}
          <div className="mb-4 shrink-0">
            <h2 
              className="text-base font-serif font-bold text-ink leading-tight text-center px-2"
              dangerouslySetInnerHTML={{ __html: currentQ.questionText }}
            />
          </div>

          {/* Options Grid */}
          <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-2 mb-2">
            {currentQ.options.map((option, idx) => {
              const isOptionCorrect = option === currentQ.correctAnswer;
              const isOptionSelected = option === selectedOption;
              
              let btnClass = "w-full p-3 rounded-2xl border-2 transition-all flex items-center gap-3 text-left text-[11px] ";
              
              if (!isAnswered) {
                btnClass += "border-gray-100 bg-white active:border-accent active:bg-accent/5";
              } else {
                if (isOptionCorrect) {
                  btnClass += "border-green-500 bg-green-50 text-green-800 ring-2 ring-green-100";
                } else if (isOptionSelected) {
                  btnClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  btnClass += "border-gray-50 bg-gray-50/50 text-gray-300 opacity-60";
                }
              }

              return (
                <button 
                  key={idx} 
                  disabled={isAnswered} 
                  onClick={() => handleSelect(option)} 
                  className={btnClass}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 ${isAnswered && isOptionCorrect ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>
                    {isAnswered && isOptionCorrect ? <CheckCircle2 size={12} /> : String.fromCharCode(65 + idx)}
                  </div>
                  <span className="font-semibold flex-1 leading-snug">{option}</span>
                  {isAnswered && isOptionSelected && !isOptionCorrect && <XCircle className="text-red-500 shrink-0" size={14} />}
                </button>
              );
            })}
          </div>

          {/* Feedback Area - Only visible after answer */}
          <div className={`shrink-0 transition-all duration-300 overflow-hidden ${isAnswered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className={`p-3 rounded-2xl border text-[11px] leading-relaxed mb-3 ${isCorrectChoice ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
               <div className="flex items-center gap-1.5 font-black uppercase tracking-wider mb-1 text-[9px]">
                  {isCorrectChoice ? <CheckCircle2 size={10} /> : <XCircle size={10} />}
                  {isCorrectChoice ? 'Correct!' : 'Incorrect'}
               </div>
               <p className="font-medium">{selectedOption && currentQ.explanations[selectedOption]}</p>
            </div>
          </div>

          {/* Navigation Button */}
          {isAnswered && (
            <button 
              onClick={handleNext}
              className="shrink-0 w-full py-3.5 bg-ink text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 animate-in slide-in-from-bottom-2 shadow-xl shadow-ink/10"
            >
              Next Question <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};