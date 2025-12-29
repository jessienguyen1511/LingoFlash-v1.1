import React, { useState, useEffect, useCallback } from 'react';
import { Flashcard } from './components/Flashcard';
import { GameMode } from './components/GameMode';
import { ScorePage } from './components/ScorePage';
import { VOCABULARY_DATA } from './constants';
import { VocabCard, AppMode, GameResult, GameQuestion } from './types';
import { ChevronLeft, ChevronRight, Shuffle, Gamepad2, BookOpen, LayoutGrid, Sparkles } from 'lucide-react';
import { generateGame } from './utils/gameUtils';

export default function App() {
  const [cards, setCards] = useState<VocabCard[]>(VOCABULARY_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  
  const [mode, setMode] = useState<AppMode>('MENU');
  const [gameQuestions, setGameQuestions] = useState<GameQuestion[]>([]);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  useEffect(() => {
    if (mode !== 'STUDY') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        nextCard();
      } else if (e.code === 'ArrowLeft') {
        prevCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cards.length, mode]);

  const startStudy = () => {
    setMode('STUDY');
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  const startGame = () => {
    const q = generateGame(VOCABULARY_DATA, 10);
    setGameQuestions(q);
    setMode('GAME');
  };

  const handleGameComplete = (result: GameResult) => {
    setGameResult(result);
    setMode('SCORE');
  };

  const handleShuffle = () => {
    const nextShuffleState = !isShuffleMode;
    if (!nextShuffleState) {
      setCards(VOCABULARY_DATA);
    } else {
      const shuffled = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);
      setCards(shuffled);
    }
    setIsShuffleMode(nextShuffleState);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200);
  }, [cards.length]);

  const prevCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  }, [cards.length]);

  return (
    <div className="h-[100dvh] bg-[#fdfaf5] flex flex-col items-center p-4 font-sans text-ink overflow-hidden safe-bottom select-none">
      
      <header className="py-2 md:py-3 text-center shrink-0 cursor-pointer" onClick={() => setMode('MENU')}>
        <div className="flex flex-col items-center justify-center">
           <div className="flex items-center gap-2 mb-0.5">
              <Sparkles size={16} className="text-accent" />
              <h1 className="text-xl md:text-2xl font-black font-serif italic tracking-tight">LingoFlash</h1>
           </div>
           {mode === 'MENU' && (
             <p className="text-[11px] text-gray-400 font-medium tracking-wide leading-tight px-4 text-center">
               Review with Jessie<br />
               Choose your preferred mode to start
             </p>
           )}
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col justify-center overflow-hidden min-h-0">
        {mode === 'MENU' && (
          <div className="w-full max-w-sm mx-auto grid grid-cols-1 gap-3 px-4">
            <button onClick={startStudy} className="bg-white rounded-[2rem] p-5 md:p-7 shadow-xl border border-gray-100 flex items-center gap-5 active:scale-95 transition-all text-left group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1.2rem] bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                 <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-serif font-bold">Study</h2>
                <p className="text-gray-400 text-[8px] font-black uppercase tracking-widest">Master Word Bank</p>
              </div>
            </button>
            <button onClick={startGame} className="bg-white rounded-[2rem] p-5 md:p-7 shadow-xl border border-gray-100 flex items-center gap-5 active:scale-95 transition-all text-left group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-[1.2rem] bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                 <Gamepad2 size={24} />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-serif font-bold">Game</h2>
                <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">10 Mixed Challenges</p>
              </div>
            </button>
          </div>
        )}

        {mode === 'STUDY' && (
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex-1 flex flex-col justify-center min-h-0 py-1">
              <Flashcard 
                card={cards[currentIndex]} 
                isFlipped={isFlipped} 
                onFlip={() => setIsFlipped(!isFlipped)} 
              />
            </div>
            
            <nav className="flex flex-col items-center gap-2 py-2 shrink-0">
              <div className="flex items-center gap-8">
                <button onClick={prevCard} className="p-2 text-gray-200 hover:text-ink transition-all active:scale-90"><ChevronLeft size={28} /></button>
                <div className="bg-white px-4 py-1.5 rounded-xl border border-gray-100 font-mono text-gray-400 text-[9px] font-black shadow-sm">
                  {currentIndex + 1}/{cards.length}
                </div>
                <button onClick={nextCard} className="p-2 text-gray-200 hover:text-ink transition-all active:scale-90"><ChevronRight size={28} /></button>
              </div>
              <div className="flex gap-3 mb-1">
                <button onClick={handleShuffle} className={`px-4 py-2 rounded-xl border text-[8px] font-black uppercase tracking-widest transition-all shadow-sm ${isShuffleMode ? 'bg-accent text-white border-accent' : 'bg-white text-gray-400 border-gray-100'}`}>
                  <Shuffle size={12}/>
                </button>
                <button onClick={() => setMode('MENU')} className="px-4 py-2 rounded-xl bg-ink text-white text-[8px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95">
                  <LayoutGrid size={12}/>
                </button>
              </div>
            </nav>
          </div>
        )}

        {mode === 'GAME' && <GameMode questions={gameQuestions} onComplete={handleGameComplete} onExit={() => setMode('MENU')} />}
        {mode === 'SCORE' && gameResult && <ScorePage result={gameResult} onRestart={startGame} onStudy={startStudy} />}
      </main>
    </div>
  );
}
