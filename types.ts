export enum WordForm {
  NOUN = 'n',
  ADJECTIVE = 'adj',
  PHRASE = 'phrase',
  VERB = 'v'
}

export interface VocabCard {
  id: number;
  word: string;
  phonetics?: string;
  wordForm: WordForm | string;
  definition: string;
  examples: string[];
  imageUrl: string;
  situation: string;
}

export type QuestionType = 'DEFINITION' | 'CHOOSE_BEST_FIT' | 'FILL_BLANK_FORM' | 'SITUATIONAL' | 'ERROR_CORRECTION';

export interface GameQuestion {
  id: number;
  type: QuestionType;
  targetWord: string;
  questionText: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanations: Record<string, string>; // Maps each option to an explanation of why it's right/wrong
  card: VocabCard;
}

export type AppMode = 'MENU' | 'STUDY' | 'GAME' | 'SCORE';

export interface GameResult {
  score: number;
  total: number;
  reviewedCards: VocabCard[];
}