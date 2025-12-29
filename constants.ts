import { VocabCard, WordForm } from './types';

const createMascot = (path: string, color = "#e67e22") => `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='none'><rect width='200' height='200' fill='%23fdfaf5' rx='20'/><circle cx='100' cy='110' r='50' fill='${color.replace('#','%23')}' opacity='0.1'/><path d='${path}' stroke='${color.replace('#','%23')}' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><circle cx='80' cy='95' r='4' fill='%232d2d2d'/><circle cx='120' cy='95' r='4' fill='%232d2d2d'/><path d='M95 105c1 2 4 2 5 0 1 2 4 2 5 0' stroke='%232d2d2d' stroke-width='3'/></svg>`;

export const VOCABULARY_DATA: VocabCard[] = [
  // --- WORDS FROM IMAGES (1-26) ---
  {
    id: 1,
    word: "Remote work",
    phonetics: "/rɪˈmoʊt wɜːrk/",
    wordForm: WordForm.NOUN,
    definition: "Working outside the office, usually from home.",
    imageUrl: createMascot("M60 140h80v-40h-80zM80 120h40"),
    situation: "Jessie working on a laptop from the couch.",
    examples: ["Remote work became popular after COVID.", "I enjoy the quietness of remote work.", "Companies are offering more remote work options."]
  },
  {
    id: 2,
    word: "Work-life balance",
    phonetics: "/ˌwɜːrk.laɪf ˈbæl.əns/",
    wordForm: WordForm.NOUN,
    definition: "Balance between work and personal life.",
    imageUrl: createMascot("M70 140c0-20 60-20 60 0M100 80a20 20 0 1 0 0 40 20 20 0 0 0 0-40z", "#3498db"),
    situation: "Jessie balancing a laptop on one paw and a toy on the other.",
    examples: ["Remote work can improve work-life balance.", "A good work-life balance reduces stress.", "He struggled to maintain his work-life balance."]
  },
  {
    id: 3,
    word: "Productivity",
    phonetics: "/ˌproʊ.dʌkˈtɪv.ə.t̬i/",
    wordForm: WordForm.NOUN,
    definition: "How efficiently you work.",
    imageUrl: createMascot("M100 140v-60M80 100l20-20 20 20", "#2ecc71"),
    situation: "Jessie quickly checking off items on a long to-do list.",
    examples: ["Some people are more productive at home.", "I use apps to track my daily productivity.", "Caffeine can sometimes boost your productivity."]
  },
  {
    id: 4,
    word: "Commute",
    phonetics: "/kəˈmjuːt/",
    wordForm: "n / v",
    definition: "Travel between home and work.",
    imageUrl: createMascot("M60 140l20-20 20 20 20-20 20 20"),
    situation: "Jessie sitting in a small car in traffic.",
    examples: ["I save time by not commuting.", "My daily commute takes over an hour.", "She listens to podcasts during her commute."]
  },
  {
    id: 5,
    word: "Distraction",
    phonetics: "/dɪˈstræk.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Something that breaks your focus.",
    imageUrl: createMascot("M50 140l100-40M120 100l20 20"),
    situation: "Jessie trying to read while a fly buzzes around.",
    examples: ["Home can be full of distractions.", "Turn off notifications to avoid distraction.", "The loud construction was a major distraction."]
  },
  {
    id: 6,
    word: "Collaboration",
    phonetics: "/kəˌlæb.əˈreɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Working together with others.",
    imageUrl: createMascot("M70 140h60M80 120h40M90 100h20"),
    situation: "Jessie and two friends building a tower together.",
    examples: ["Office work encourages collaboration.", "Online tools make collaboration much easier.", "Team collaboration is key to our success."]
  },
  {
    id: 7,
    word: "Isolation",
    phonetics: "/ˌaɪ.səˈleɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Feeling alone or disconnected.",
    imageUrl: createMascot("M100 110a30 30 0 1 0 0 60 30 30 0 0 0 0-60z", "#95a5a6"),
    situation: "Jessie sitting alone in a large, empty room.",
    examples: ["Remote workers may feel isolated.", "Isolation can lead to mental health issues.", "We should stay social to avoid isolation."]
  },
  {
    id: 8,
    word: "Flexibility",
    phonetics: "/ˌflek.səˈbɪl.ə.t̬i/",
    wordForm: WordForm.NOUN,
    definition: "Ability to choose time or place of work.",
    imageUrl: createMascot("M60 140s20-40 40-40 20 0 40 40"),
    situation: "Jessie stretching like a noodle.",
    examples: ["Flexibility is a key benefit of remote work.", "I value the flexibility to work in the evenings.", "A flexible schedule allows for personal errands."]
  },
  {
    id: 9,
    word: "Social fabric",
    phonetics: "/ˈsoʊ.ʃəl ˈfæb.rɪk/",
    wordForm: WordForm.NOUN,
    definition: "The network of relationships and values that hold a community together.",
    imageUrl: createMascot("M60 60h80v80h-80zM60 100h80M100 60v80"),
    situation: "Jessie sewing a quilt with many different colors.",
    examples: ["Remote work can weaken the social fabric of a company.", "Kindness strengthens the social fabric of a city.", "Shared values are the core of our social fabric."]
  },
  {
    id: 10,
    word: "Daily stand-up",
    phonetics: "/ˈdeɪ.li ˈstænd.ʌp/",
    wordForm: WordForm.NOUN,
    definition: "A short daily team meeting to share updates.",
    imageUrl: createMascot("M100 140v-40M90 120h20"),
    situation: "Jessie standing up straight and talking to a camera.",
    examples: ["During the daily stand-up, I update my team.", "Daily stand-ups should be kept under 15 minutes.", "I shared my blockers at the daily stand-up."]
  },
  {
    id: 11,
    word: "Work from anywhere",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Ability to work without being tied to an office.",
    imageUrl: createMascot("M100 60a40 40 0 1 1 0 80 40 40 0 0 1 0-80z", "#f39c12"),
    situation: "Jessie working on a laptop at the beach.",
    examples: ["Remote jobs allow people to work from anywhere.", "I dream of being able to work from anywhere.", "Work from anywhere policies are very popular."]
  },
  {
    id: 12,
    word: "Burned out",
    phonetics: "",
    wordForm: WordForm.ADJECTIVE,
    definition: "Extremely tired or stressed from work.",
    imageUrl: createMascot("M60 140h80", "#c0392b"),
    situation: "Jessie lying flat on the floor with 'X' eyes.",
    examples: ["Without boundaries, remote workers can get burned out.", "She felt completely burned out after the project.", "Taking a vacation helps when you are burned out."]
  },
  {
    id: 13,
    word: "Hybrid model",
    phonetics: "",
    wordForm: WordForm.NOUN,
    definition: "A mix of remote and office work.",
    imageUrl: createMascot("M60 140h30v-30h30v30h30", "#8e44ad"),
    situation: "Jessie with one foot in an office and one foot at home.",
    examples: ["Many companies choose a hybrid model now.", "The hybrid model offers a balance of freedom.", "I prefer the hybrid model over full office work."]
  },
  {
    id: 14,
    word: "Nine-to-five",
    phonetics: "",
    wordForm: WordForm.NOUN,
    definition: "A traditional office work schedule.",
    imageUrl: createMascot("M100 140v-40M100 100a40 40 0 1 0 0-80 40 40 0 0 0 0 80z"),
    situation: "Jessie wearing a tie and looking at a clock.",
    examples: ["I don't like the nine-to-five lifestyle.", "Most corporate jobs follow a nine-to-five routine.", "She transitioned from freelance to a nine-to-five."]
  },
  {
    id: 15,
    word: "Clock in / Clock out",
    phonetics: "",
    wordForm: WordForm.VERB,
    definition: "Start or finish work officially.",
    imageUrl: createMascot("M80 140h40M100 140v-20"),
    situation: "Jessie pressing a big red button on a machine.",
    examples: ["I clock in at 9 a.m. every day.", "Don't forget to clock out before you leave.", "The system tracks when employees clock in."]
  },
  {
    id: 16,
    word: "Work around the clock",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Work for very long hours (24/7 feel).",
    imageUrl: createMascot("M100 60a40 40 0 1 0 0 80 40 40 0 0 0 0-80zM100 80l10 10"),
    situation: "Jessie working at a desk while the sun and moon spin fast.",
    examples: ["During busy periods, we work around the clock.", "The team worked around the clock to fix the bug.", "I can't keep working around the clock like this."]
  },
  {
    id: 17,
    word: "Life satisfaction",
    phonetics: "/laɪf ˌsæt.ɪsˈfæk.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "How happy someone feels about their life overall.",
    imageUrl: createMascot("M100 110c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20", "#27ae60"),
    situation: "Jessie sitting contentedly in a rocking chair.",
    examples: ["Studies show income affects life satisfaction up to a point.", "Meaningful hobbies increase life satisfaction.", "Her life satisfaction improved after she moved."]
  },
  {
    id: 18,
    word: "Privilege",
    phonetics: "/ˈprɪv.əl.ɪdʒ/",
    wordForm: WordForm.NOUN,
    definition: "An advantage some people have that others don't.",
    imageUrl: createMascot("M100 70l20 60h-40l20-60z", "#f1c40f"),
    situation: "Jessie standing on a golden pedestal.",
    examples: ["Financial privilege can open many opportunities.", "It is important to recognize your own privilege.", "Access to education is often a privilege."]
  },
  {
    id: 19,
    word: "Emotional needs",
    phonetics: "/ɪˈmoʊ.ʃən.əl niːdz/",
    wordForm: WordForm.NOUN,
    definition: "Needs like love, connection, and belonging.",
    imageUrl: createMascot("M100 130a20 20 0 1 0 0-40 20 20 0 0 0 0 40z", "#e91e63"),
    situation: "Jessie hugging a heart-shaped pillow.",
    examples: ["Money cannot replace emotional needs.", "He felt lonely because his emotional needs weren't met.", "Friendship fulfills many of our emotional needs."]
  },
  {
    id: 20,
    word: "Trade-off",
    phonetics: "/ˈtreɪd.ɒf/",
    wordForm: WordForm.NOUN,
    definition: "A balance between two things where one is lost.",
    imageUrl: createMascot("M70 140l60-60M130 140l-60-60"),
    situation: "Jessie weighing a fish vs a toy on a scale.",
    examples: ["High-paying jobs often come with trade-offs.", "There is always a trade-off between speed and quality.", "The trade-off for a quiet home is a longer commute."]
  },
  {
    id: 21,
    word: "Meaningful",
    phonetics: "/ˈmiː.nɪŋ.fəl/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Having purpose or emotional value.",
    imageUrl: createMascot("M100 140l-30-60 60 0-30 60z", "#9b59b6"),
    situation: "Jessie looking at a single, glowing star.",
    examples: ["Meaningful relationships matter more than wealth.", "I want to do meaningful work that helps people.", "The gift was small but very meaningful to her."]
  },
  {
    id: 22,
    word: "Buy peace of mind",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Reduce stress or worry through spending or action.",
    imageUrl: createMascot("M60 140h80", "#3498db"),
    situation: "Jessie sleeping soundly inside a safe box.",
    examples: ["Having savings really buys peace of mind.", "The new insurance policy bought us peace of mind.", "Spending extra on security buys peace of mind."]
  },
  {
    id: 23,
    word: "Chase money",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Focus too much on earning at the expense of life.",
    imageUrl: createMascot("M60 140l80-40"),
    situation: "Jessie running after a flying dollar bill.",
    examples: ["Some people chase money and forget to live.", "I decided to stop chasing money and start traveling.", "Chasing money often leads to burnout."]
  },
  {
    id: 24,
    word: "Champagne problem",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "A problem that exists only because someone is privileged.",
    imageUrl: createMascot("M80 140h40v-40H80v40z", "#f1c40f"),
    situation: "Jessie crying because its milk is not the right brand.",
    examples: ["Complaining about choosing luxury vacations is a champagne problem.", "Her broken designer shoes are a total champagne problem.", "We shouldn't complain; these are champagne problems."]
  },
  {
    id: 25,
    word: "Living paycheck to paycheck",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Using almost all money as soon as you get paid.",
    imageUrl: createMascot("M70 140s20-20 60 0", "#e67e22"),
    situation: "Jessie holding an empty wallet on payday.",
    examples: ["I'm living paycheck to paycheck, so saving is hard.", "The high rent keeps them living paycheck to paycheck.", "She wants to stop living paycheck to paycheck."]
  },
  {
    id: 26,
    word: "Worth the bag",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Something is worth the money or the effort to earn it.",
    imageUrl: createMascot("M100 130a20 20 0 1 0 0-40 20 20 0 0 0 0 40z"),
    situation: "Jessie holding a heavy bag of coins and smiling.",
    examples: ["The job is stressful, but the salary is worth the bag.", "Studying late is hard, but the degree is worth the bag.", "This luxury car is definitely worth the bag."]
  },
  // --- REMAINING WORDS TO REACH 44 (27-44) ---
  {
    id: 27,
    word: "Comparison culture",
    phonetics: "/kəmˈpær.ɪ.sən ˈkʌl.tʃər/",
    wordForm: WordForm.NOUN,
    definition: "Constant habit of comparing yourself to others.",
    imageUrl: createMascot("M70 70l20-20 20 20M130 70l20-20 20 20M80 140h40M70 110h60"),
    situation: "Jessie looking at a mirror cat with more likes.",
    examples: ["Social media fuels comparison culture.", "Stop following people who trigger comparison culture.", "Comparison culture is the thief of joy."]
  },
  {
    id: 28,
    word: "Validation",
    phonetics: "/ˌvæl.ɪˈdeɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Approval or recognition from others.",
    imageUrl: createMascot("M100 130a15 15 0 1 0 0-30 15 15 0 0 0 0 30z"),
    situation: "Jessie holding a giant 'like' button.",
    examples: ["External validation is temporary.", "Seek self-validation instead.", "He constantly looks for validation from his boss."]
  },
  {
    id: 29,
    word: "Misinformation",
    phonetics: "/ˌmɪs.ɪn.fəˈmeɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "False information spread unintentionally.",
    imageUrl: createMascot("M70 140s20-20 60 0"),
    situation: "Jessie reading fake news about the moon.",
    examples: ["Misinformation spreads quickly online.", "Always fact-check to avoid misinformation.", "Misinformation can be dangerous for public health."]
  },
  {
    id: 30,
    word: "Mental well-being",
    phonetics: "/ˈmen.təl ˌwelˈbiː.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "Emotional and psychological health.",
    imageUrl: createMascot("M100 110c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20", "#27ae60"),
    situation: "Jessie meditating with closed eyes.",
    examples: ["Exercise is great for mental well-being.", "Prioritize your mental well-being above work.", "Talking to friends supports mental well-being."]
  },
  {
    id: 31,
    word: "Information overload",
    phonetics: "/ˌɪn.fəˈmeɪ.ʃən ˈoʊ.vəˌloʊd/",
    wordForm: WordForm.NOUN,
    definition: "Having too much information to process effectively.",
    imageUrl: createMascot("M50 140h100M60 120h80M80 100h40"),
    situation: "Jessie buried under a pile of screens.",
    examples: ["I feel paralyzed by information overload.", "Limit news consumption to prevent overload.", "Information overload makes decision-making hard."]
  },
  {
    id: 32,
    word: "Digital boundaries",
    phonetics: "/ˈdɪdʒ.ɪ.təl ˈbaʊn.dər.iz/",
    wordForm: WordForm.NOUN,
    definition: "Limits set to control online behavior.",
    imageUrl: createMascot("M60 140v-40h80v40"),
    situation: "Jessie locking its phone in a box.",
    examples: ["Set digital boundaries for your health.", "Respecting digital boundaries reduces stress.", "No phones at dinner is one of our digital boundaries."]
  },
  {
    id: 33,
    word: "Dopamine-driven",
    phonetics: "/ˈdoʊ.pə.miːn ˈdrɪv.ən/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Designed to trigger pleasure and reward in the brain.",
    imageUrl: createMascot("M100 140c20 0 20-20 20-20s-20-20-20-20-20 20-20 20 0 20 20 20"),
    situation: "Jessie looking excited at a notification.",
    examples: ["Social media is intentionally dopamine-driven.", "The app uses dopamine-driven mechanics.", "Scrolling becomes a dopamine-driven habit."]
  },
  {
    id: 34,
    word: "Addictive",
    phonetics: "/əˈdɪk.tɪv/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Hard to stop doing or using.",
    imageUrl: createMascot("M80 140h40v-40H80z", "#e74c3c"),
    situation: "Jessie glued to the screen.",
    examples: ["Short videos can be highly addictive.", "The game is fun but dangerously addictive.", "Sugar is known to be very addictive."]
  },
  {
    id: 35,
    word: "Superficial",
    phonetics: "/ˌsuː.pəˈfɪʃ.əl/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Focused only on the surface, not deep.",
    imageUrl: createMascot("M100 110a20 20 0 1 1 0 40 20 20 0 0 1 0-40"),
    situation: "Jessie only caring about its fur color in photos.",
    examples: ["Their connection was purely superficial.", "Don't focus on superficial metrics.", "He avoided superficial conversations."]
  },
  {
    id: 36,
    word: "Down the rabbit hole",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Spending way more time than planned following links.",
    imageUrl: createMascot("M100 110a30 30 0 1 0 0 60 30 30 0 0 0 0-60z", "#9b59b6"),
    situation: "Jessie falling into a colorful spiral.",
    examples: ["I went down the rabbit hole on Wikipedia.", "Careful not to fall down the rabbit hole.", "Research often leads down a rabbit hole."]
  },
  {
    id: 37,
    word: "It's a double-edged sword",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Has both positive and negative effects.",
    imageUrl: createMascot("M70 140l60-60M130 140L70 80"),
    situation: "Jessie holding a tablet that is bright but heavy.",
    examples: ["Free apps are a double-edged sword.", "Technology is a double-edged sword.", "His fame proved to be a double-edged sword."]
  },
  {
    id: 38,
    word: "It messes with s.o's head",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Affects someone's mental or emotional state.",
    imageUrl: createMascot("M70 120c10-20 50-20 60 0", "#34495e"),
    situation: "Jessie looking dizzy.",
    examples: ["Toxic comments mess with my head.", "That horror movie really messed with her head.", "Overthinking messes with your head."]
  },
  {
    id: 39,
    word: "Addicted to the feed",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Unable to stop checking social media updates.",
    imageUrl: createMascot("M80 140h40M80 130h40M80 120h40"),
    situation: "Jessie with its paw stuck to a mouse.",
    examples: ["He's completely addicted to the feed.", "I realized I was addicted to the feed.", "The algorithm keeps you addicted to the feed."]
  },
  {
    id: 40,
    word: "Financial security",
    phonetics: "/faɪˈnæn.ʃəl sɪˈkjʊə.rə.ti/",
    wordForm: WordForm.NOUN,
    definition: "Having enough money to meet basic needs.",
    imageUrl: createMascot("M100 130a20 20 0 1 0 0-40 20 20 0 0 0 0 40z", "#f1c40f"),
    situation: "Jessie sleeping on a giant coin.",
    examples: ["Financial security is a long-term goal.", "Savings provide financial security.", "He worked hard for financial security."]
  },
  {
    id: 41,
    word: "Well-being",
    phonetics: "/ˌwelˈbiː.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "Overall happiness and health.",
    imageUrl: createMascot("M100 140c30 0 30-30 30-30s-30-30-30-30-30 30-30 30 0 30 30 30", "#2ecc71"),
    situation: "Jessie stretching happily.",
    examples: ["Your well-being is the priority.", "Balance leads to better well-being.", "Eating well supports physical well-being."]
  },
  {
    id: 42,
    word: "Materialism",
    phonetics: "/məˈtɪə.ri.ə.lɪ.zəm/",
    wordForm: WordForm.NOUN,
    definition: "Belief that possessions bring happiness.",
    imageUrl: createMascot("M60 140h80v-30h-80z"),
    situation: "Jessie sitting on many shopping bags.",
    examples: ["Society is prone to materialism.", "Materialism can feel hollow.", "He rejected materialism for simplicity."]
  },
  {
    id: 43,
    word: "Fulfillment",
    phonetics: "/fʊlˈfɪl.mənt/",
    wordForm: WordForm.NOUN,
    definition: "Deep sense of satisfaction.",
    imageUrl: createMascot("M100 130L80 110l40 0z"),
    situation: "Jessie looking proud after painting.",
    examples: ["Helping others brings true fulfillment.", "She found fulfillment in her career.", "Hobbies provide a sense of fulfillment."]
  },
  {
    id: 44,
    word: "Stress-free",
    phonetics: "/ˌstresˈfriː/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Without worry or pressure.",
    imageUrl: createMascot("M60 130h80", "#3498db"),
    situation: "Jessie floating on a cloud.",
    examples: ["A stress-free life is a dream.", "I want a stress-free vacation.", "She created a stress-free workspace."]
  }
];
