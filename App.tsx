import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Flashcard } from './components/Flashcard';
import { GameMode } from './components/GameMode';
import { ScorePage } from './components/ScorePage';
import { VOCABULARY_DATA } from './constants';
import { VocabCard, AppMode, GameResult, GameQuestion } from './types';
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw, Gamepad2, BookOpen, LayoutGrid, Sparkles } from 'lucide-react';
import { generateGame } from './utils/gameUtils';
import { generateVisual } from './services/geminiService';

export default function App() {
  const [cards, setCards] = useState<VocabCard[]>(VOCABULARY_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  
  const [mode, setMode] = useState<AppMode>('MENU');
  const [gameQuestions, setGameQuestions] = useState<GameQuestion[]>([]);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  // Background Image Cache
  const [imageMap, setImageMap] = useState<Record<number, string>>({});
  const generatingRef = useRef<Set<number>>(new Set());

  // Pre-generate logic: Look ahead 3 cards
  useEffect(() => {
    if (mode !== 'STUDY') return;

    const lookAheadCount = 3;
    const cardsToProcess = [];
    
    for (let i = 0; i <= lookAheadCount; i++) {
      const targetIndex = (currentIndex + i) % cards.length;
      const card = cards[targetIndex];
      if (!imageMap[card.id] && !generatingRef.current.has(card.id)) {
        cardsToProcess.push(card);
      }
    }

    const processQueue = async () => {
      for (const card of cardsToProcess) {
        if (generatingRef.current.has(card.id)) continue;
        
        generatingRef.current.add(card.id);
        const url = await generateVisual(card.word, card.situation);
        if (url) {
          setImageMap(prev => ({ ...prev, [card.id]: url }));
        }
        generatingRef.current.delete(card.id);
      }
    };

    if (cardsToProcess.length > 0) {
      processQueue();
    }
  }, [currentIndex, mode, cards, imageMap]);

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
    <div className="h-[100dvh] bg-[#fdfaf5] flex flex-col items-center p-4 font-sans text-ink overflow-hidden">
      
      <header className="py-4 text-center shrink-0 cursor-pointer" onClick={() => setMode('MENU')}>
        <div className="flex flex-col items-center justify-center">
           <div className="flex items-center gap-2 mb-2">
              <Sparkles size={20} className="text-accent" />
              <h1 className="text-3xl font-black font-serif italic">LingoFlash</h1>
           </div>
           {mode === 'MENU' && (
             <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide animate-in fade-in slide-in-from-top-1 duration-700 leading-relaxed">
               Review the lesson with Jessie<br />
               Choose your preferred mode to start.
             </p>
           )}
        </div>
      </header>

      <div className="flex-1 w-full flex flex-col justify-center overflow-hidden">
        {mode === 'MENU' && (
          <div className="w-full max-sm:px-4 max-w-sm mx-auto grid grid-cols-1 gap-4">
            <button onClick={startStudy} className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex items-center gap-6 active:scale-95 transition-all text-left">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                 <BookOpen size={32} />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold">Study</h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Master Word Bank</p>
              </div>
            </button>
            <button onClick={startGame} className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex items-center gap-6 active:scale-95 transition-all text-left">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                 <Gamepad2 size={32} />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold">Game</h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">10 Mixed Challenges</p>
              </div>
            </button>
          </div>
        )}

        {mode === 'STUDY' && (
          <div className="flex flex-col h-full justify-between py-4">
            <Flashcard 
              card={cards[currentIndex]} 
              isFlipped={isFlipped} 
              onFlip={() => setIsFlipped(!isFlipped)} 
              preGeneratedUrl={imageMap[cards[currentIndex].id]}
            />
            <div className="flex flex-col items-center gap-4 mt-4 shrink-0">
              <div className="flex items-center gap-6">
                <button onClick={prevCard} className="p-3 text-gray-300 hover:text-ink transition-all"><ChevronLeft size={32} /></button>
                <div className="bg-white px-5 py-2 rounded-xl border border-gray-100 font-mono text-gray-400 text-xs font-black">
                  {currentIndex + 1}/{cards.length}
                </div>
                <button onClick={nextCard} className="p-3 text-gray-300 hover:text-ink transition-all"><ChevronRight size={32} /></button>
              </div>
              <div className="flex gap-2">
                <button onClick={handleShuffle} className={`p-3 rounded-xl border text-[9px] font-black uppercase tracking-widest transition-all ${isShuffleMode ? 'bg-accent text-white border-accent' : 'bg-white text-gray-400 border-gray-200'}`}><Shuffle size={14}/></button>
                <button onClick={() => setMode('MENU')} className="p-3 rounded-xl bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest"><LayoutGrid size={14}/></button>
              </div>
            </div>
          </div>
        )}

        {mode === 'GAME' && <GameMode questions={gameQuestions} onComplete={handleGameComplete} onExit={() => setMode('MENU')} />}
        {mode === 'SCORE' && gameResult && <ScorePage result={gameResult} onRestart={startGame} onStudy={startStudy} />}
      </div>
    </div>
  );
}
