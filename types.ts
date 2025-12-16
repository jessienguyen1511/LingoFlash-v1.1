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
  example: string;
}
