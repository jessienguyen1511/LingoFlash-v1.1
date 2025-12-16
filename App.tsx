import React, { useState, useEffect, useCallback } from 'react';
import { Flashcard } from './components/Flashcard';
import { VOCABULARY_DATA } from './constants';
import { VocabCard } from './types';
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw } from 'lucide-react';

export default function App() {
  const [cards, setCards] = useState<VocabCard[]>(VOCABULARY_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffleMode, setIsShuffleMode] = useState(false);

  // Keyboard navigation
  useEffect(() => {
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
  }, [currentIndex]); // Re-bind when index changes to avoid stale state if needed, though functions are stable

  const handleShuffle = () => {
    if (isShuffleMode) {
      // Reset to original order
      setCards(VOCABULARY_DATA);
      setIsShuffleMode(false);
      setCurrentIndex(0);
      setIsFlipped(false);
    } else {
      // Shuffle
      const shuffled = [...VOCABULARY_DATA].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setIsShuffleMode(true);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const nextCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200); // Small delay to reset flip state visually before changing content if desired, or instant
  }, [cards.length]);

  const prevCard = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  }, [cards.length]);

  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 font-sans text-ink">
      
      {/* Header */}
      <header className="mb-10 text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">LingoFlash</h1>
        <p className="text-gray-500 text-sm">Review your vocabulary and idioms after Jessie's class</p>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-md h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main Card Area */}
      <main className="w-full flex flex-col items-center justify-center space-y-8">
        <Flashcard 
            card={cards[currentIndex]} 
            isFlipped={isFlipped} 
            onFlip={() => setIsFlipped(!isFlipped)} 
        />

        {/* Controls */}
        <div className="flex items-center gap-6 mt-8">
            <button 
                onClick={prevCard}
                className="p-3 rounded-full text-gray-600 hover:bg-white hover:shadow-lg transition-all active:scale-95 border border-transparent hover:border-gray-200"
                aria-label="Previous card"
            >
                <ChevronLeft size={28} />
            </button>

            <span className="font-mono text-gray-400 font-medium w-16 text-center">
                {currentIndex + 1} / {cards.length}
            </span>

            <button 
                onClick={nextCard}
                className="p-3 rounded-full text-gray-600 hover:bg-white hover:shadow-lg transition-all active:scale-95 border border-transparent hover:border-gray-200"
                aria-label="Next card"
            >
                <ChevronRight size={28} />
            </button>
        </div>
      </main>

      {/* Footer Tools */}
      <div className="mt-12 flex gap-4">
        <button 
            onClick={handleShuffle}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                isShuffleMode 
                ? 'bg-accent text-white shadow-lg shadow-orange-200' 
                : 'bg-white text-gray-600 shadow-sm border border-gray-200 hover:border-accent hover:text-accent'
            }`}
        >
            <Shuffle size={16} />
            {isShuffleMode ? 'Shuffled' : 'Shuffle Deck'}
        </button>

        <button 
            onClick={() => {
                setIsFlipped(false);
                setCurrentIndex(0);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-600 shadow-sm border border-gray-200 hover:border-gray-400 transition-all font-medium text-sm"
        >
            <RotateCcw size={16} />
            Reset
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="mt-auto pt-10 text-center text-xs text-gray-400">
        <p>Press <span className="font-bold border border-gray-300 rounded px-1 mx-0.5">Space</span> to flip, arrows to navigate</p>
      </div>

    </div>
  );
}