import { VocabCard, GameQuestion, QuestionType } from '../types';

export const generateGame = (wordBank: VocabCard[], count: number = 10): GameQuestion[] => {
  const shuffledCards = [...wordBank].sort(() => Math.random() - 0.5);
  const targetCards = shuffledCards.slice(0, Math.min(count, wordBank.length));

  return targetCards.map((card, index) => {
    const types: QuestionType[] = ['DEFINITION', 'CHOOSE_BEST_FIT', 'FILL_BLANK_FORM', 'SITUATIONAL', 'ERROR_CORRECTION'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const distractors = wordBank.filter(c => c.id !== card.id).sort(() => Math.random() - 0.5);

    let questionText = "";
    let options: string[] = [];
    let correctAnswer = card.word;
    const explanations: Record<string, string> = {};

    switch (type) {
      case 'DEFINITION':
        questionText = `Define: "${card.word}"`;
        correctAnswer = card.definition;
        options = [correctAnswer, ...distractors.slice(0, 3).map(d => d.definition)];
        options.forEach(opt => {
          if (opt === correctAnswer) {
            explanations[opt] = "Correct! This accurately describes the core meaning.";
          } else {
            const d = distractors.find(dist => dist.definition === opt);
            explanations[opt] = `Incorrect. This is actually the definition for "${d?.word}".`;
          }
        });
        break;
      
      case 'CHOOSE_BEST_FIT':
        const example = card.examples[Math.floor(Math.random() * card.examples.length)];
        const regex = new RegExp(`\\b${card.word}\\b`, 'gi');
        questionText = `Best fit: "${example.replace(regex, "____")}"`;
        correctAnswer = card.word;
        options = [correctAnswer, ...distractors.slice(0, 3).map(d => d.word)];
        options.forEach(opt => {
          if (opt === correctAnswer) {
            explanations[opt] = `Correct! "${card.word}" is used in this context.`;
          } else {
            explanations[opt] = `Incorrect. "${opt}" doesn't fit the meaning of this sentence.`;
          }
        });
        break;

      case 'FILL_BLANK_FORM':
        questionText = `Word form for "${card.word}":`;
        correctAnswer = card.wordForm as string;
        const standardForms = ['n', 'v', 'adj', 'phrase', 'adv'];
        options = [correctAnswer, ...standardForms.filter(f => f !== correctAnswer).slice(0, 3)];
        options.forEach(opt => {
          if (opt === correctAnswer) {
            explanations[opt] = "Correct! This matches the grammatical usage.";
          } else {
            explanations[opt] = `Incorrect. "${card.word}" is not typically used as a ${opt}.`;
          }
        });
        break;

      case 'SITUATIONAL':
        questionText = `What would you say? Situation: "${card.situation}"`;
        correctAnswer = card.word;
        options = [correctAnswer, ...distractors.slice(0, 3).map(d => d.word)];
        options.forEach(opt => {
          if (opt === correctAnswer) {
            explanations[opt] = "Spot on! This term perfectly captures the feeling/act described.";
          } else {
            explanations[opt] = `Wrong. "${opt}" describes a different scenario entirely.`;
          }
        });
        break;

      case 'ERROR_CORRECTION':
        const baseEx = card.examples[0];
        const wrongWord = distractors[0].word;
        const reg = new RegExp(`\\b${card.word}\\b`, 'gi');
        const sentenceWithError = baseEx.replace(reg, `<u>${wrongWord}</u>`);
        questionText = `Correct underlined error: "${sentenceWithError}"`;
        correctAnswer = card.word;
        options = [correctAnswer, ...distractors.slice(1, 4).map(d => d.word)];
        options.forEach(opt => {
          if (opt === correctAnswer) {
            explanations[opt] = `Correct! Remember: "${card.word}" means ${card.definition.toLowerCase()}`;
          } else {
            explanations[opt] = `Incorrect. Note: "${card.word}" means ${card.definition.toLowerCase()}. "${opt}" is not the right fix.`;
          }
        });
        break;
    }

    return {
      id: index,
      type,
      targetWord: card.word,
      questionText,
      imageUrl: card.imageUrl,
      options: options.sort(() => Math.random() - 0.5),
      correctAnswer,
      explanations,
      card
    };
  });
};