import { VocabCard, WordForm } from './types';

// Helper to create a style-compliant SVG Mascot URI with unique paths
const createMascot = (path: string, color = "#e67e22") => `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='none'><rect width='200' height='200' fill='%23fdfaf5' rx='20'/><circle cx='100' cy='110' r='50' fill='${color.replace('#','%23')}' opacity='0.1'/><path d='${path}' stroke='${color.replace('#','%23')}' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><circle cx='80' cy='95' r='4' fill='%232d2d2d'/><circle cx='120' cy='95' r='4' fill='%232d2d2d'/><path d='M95 105c1 2 4 2 5 0 1 2 4 2 5 0' stroke='%232d2d2d' stroke-width='3'/></svg>`;

export const VOCABULARY_DATA: VocabCard[] = [
  {
    id: 1,
    word: "Comparison culture",
    phonetics: "/kəmˈpær.ɪ.sən ˈkʌl.tʃər/",
    wordForm: WordForm.NOUN,
    definition: "The habit of constantly comparing yourself to others online.",
    imageUrl: createMascot("M70 70l20-20 20 20M130 70l20-20 20 20M80 140h40M70 110h60"),
    situation: "Jessie looking at a mirror that shows a 'cooler' cat with more likes.",
    examples: ["Social media fuels toxic comparison culture.", "Focus on yourself, not comparison culture.", "Comparison culture can hurt your self-esteem."]
  },
  {
    id: 2,
    word: "Validation",
    phonetics: "/ˌvæl.ɪˈdeɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Approval or recognition from others.",
    imageUrl: createMascot("M70 70l20-20 20 20M130 70l20-20 20 20M100 130a15 15 0 1 0 0-30 15 15 0 0 0 0 30z"),
    situation: "Jessie holding a giant heart-shaped 'like' button.",
    examples: ["We shouldn't depend on external validation.", "Seeking validation online is a common habit.", "He felt happy after getting social validation."]
  },
  {
    id: 3,
    word: "Misinformation",
    phonetics: "/ˌmɪs.ɪn.fəˈmeɪ.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "False or inaccurate information spread unintentionally.",
    imageUrl: createMascot("M70 70l20-20 20 20M130 70l20-20 20 20M70 140s20-20 60 0"),
    situation: "Jessie reading a newspaper that says 'The Moon is Cheese'.",
    examples: ["Misinformation spreads quickly during crises.", "Check sources to avoid misinformation.", "Digital literacy helps fight misinformation."]
  },
  {
    id: 4,
    word: "Mental well-being",
    phonetics: "/ˈmen.təl ˌwelˈbiː.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "A person's emotional and psychological health.",
    imageUrl: createMascot("M100 110c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20", "#27ae60"),
    situation: "Jessie meditating with closed eyes and a peaceful smile.",
    examples: ["Protect your mental well-being first.", "Digital detoxes improve mental well-being.", "Sleep is vital for overall mental well-being."]
  },
  {
    id: 5,
    word: "Information overload",
    phonetics: "/ˌɪn.fəˈmeɪ.ʃən ˈoʊ.vəˌloʊd/",
    wordForm: WordForm.NOUN,
    definition: "Having too much information to process effectively.",
    imageUrl: createMascot("M50 140h100M60 120h80M80 100h40"),
    situation: "Jessie buried under a mountain of tablets and books.",
    examples: ["I feel paralyzed by information overload.", "Limit sources to prevent overload.", "Information overload is a common digital issue."]
  },
  {
    id: 6,
    word: "Digital boundaries",
    phonetics: "/ˈdɪdʒ.ɪ.təl ˈbaʊn.dər.iz/",
    wordForm: WordForm.NOUN,
    definition: "Limits set to control online behavior and screen time.",
    imageUrl: createMascot("M60 140v-40h80v40"),
    situation: "Jessie putting their phone in a locked cage with a timer.",
    examples: ["Set digital boundaries for your health.", "No phones at dinner is a good boundary.", "He respects his digital boundaries every weekend."]
  },
  {
    id: 7,
    word: "Dopamine-driven",
    phonetics: "/ˈdoʊ.pə.miːn ˈdrɪv.ən/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Designed to trigger pleasure and reward in the brain.",
    imageUrl: createMascot("M100 140c20 0 20-20 20-20s-20-20-20-20-20 20-20 20 0 20 20 20"),
    situation: "Jessie looking very excited at a bright red notification.",
    examples: ["The app uses dopamine-driven mechanics.", "Social media is intentionally dopamine-driven.", "Scroll habits are often dopamine-driven."]
  },
  {
    id: 8,
    word: "Addictive",
    phonetics: "/əˈdɪk.tɪv/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Hard to stop doing or using.",
    imageUrl: createMascot("M80 140h40v-40H80z", "#e74c3c"),
    situation: "Jessie glued to the screen with a spiral in their eyes.",
    examples: ["Short videos can be highly addictive.", "The game is fun but dangerously addictive.", "Smartphones are designed to be addictive."]
  },
  {
    id: 9,
    word: "Superficial",
    phonetics: "/ˌsuː.pəˈfɪʃ.əl/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Focused only on the surface, not deep or meaningful.",
    imageUrl: createMascot("M100 110a20 20 0 1 1 0 40 20 20 0 0 1 0-40"),
    situation: "Jessie only caring about how their fur looks in a selfie.",
    examples: ["Their connection was purely superficial.", "Don't focus on superficial metrics.", "He avoided superficial conversations."]
  },
  {
    id: 10,
    word: "Distraction",
    phonetics: "/dɪˈstræk.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "Something that takes attention away from what matters.",
    imageUrl: createMascot("M50 140l100-40"),
    situation: "Jessie trying to read but chasing a floating 'notification' bug.",
    examples: ["The constant dings are a distraction.", "I need a study space with no distraction.", "Turn off your phone to avoid distraction."]
  },
  {
    id: 11,
    word: "Down the rabbit hole",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Spending way more time than planned, often following links.",
    imageUrl: createMascot("M100 110a30 30 0 1 0 0 60 30 30 0 0 0 0-60z", "#9b59b6"),
    situation: "Jessie falling into a colorful spiral of links.",
    examples: ["I went down the rabbit hole on Wikipedia.", "Careful not to fall down the rabbit hole.", "Research often leads down a rabbit hole."]
  },
  {
    id: 12,
    word: "It's a double-edged sword",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Has both positive and negative effects.",
    imageUrl: createMascot("M70 140l60-60M130 140L70 80"),
    situation: "Jessie holding a tablet that is bright but heavy.",
    examples: ["Free apps are a double-edged sword.", "Technology is a double-edged sword.", "His fame proved to be a double-edged sword."]
  },
  {
    id: 13,
    word: "It messes with s.o's head",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Affects someone's mental or emotional state.",
    imageUrl: createMascot("M70 120c10-20 50-20 60 0", "#34495e"),
    situation: "Jessie looking dizzy after seeing too many edited photos.",
    examples: ["Toxic comments mess with my head.", "That horror movie really messed with her head.", "Overthinking messes with your head."]
  },
  {
    id: 14,
    word: "Addicted to the feed",
    phonetics: "",
    wordForm: WordForm.PHRASE,
    definition: "Unable to stop checking social media updates.",
    imageUrl: createMascot("M80 140h40M80 130h40M80 120h40"),
    situation: "Jessie with their paw stuck to a scrolling mouse.",
    examples: ["He's completely addicted to the feed.", "I realized I was addicted to the feed.", "The algorithm keeps you addicted to the feed."]
  },
  {
    id: 15,
    word: "Financial security",
    phonetics: "/faɪˈnæn.ʃəl sɪˈkjʊə.rə.ti/",
    wordForm: WordForm.NOUN,
    definition: "Having enough money to meet basic needs without stress.",
    imageUrl: createMascot("M100 130a20 20 0 1 0 0-40 20 20 0 0 0 0 40z", "#f1c40f"),
    situation: "Jessie sleeping on a giant coin.",
    examples: ["Financial security is a life goal.", "Savings provide financial security.", "He worked hard for financial security."]
  },
  {
    id: 16,
    word: "Well-being",
    phonetics: "/ˌwelˈbiː.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "A person's overall happiness and health.",
    imageUrl: createMascot("M100 140c30 0 30-30 30-30s-30-30-30-30-30 30-30 30 0 30 30 30", "#2ecc71"),
    situation: "Jessie stretching happily in a sunbeam.",
    examples: ["Your well-being is the priority.", "Balance leads to better well-being.", "Eating well supports physical well-being."]
  },
  {
    id: 17,
    word: "Materialism",
    phonetics: "/məˈtɪə.ri.ə.lɪ.zəm/",
    wordForm: WordForm.NOUN,
    definition: "The belief that possessions and money bring happiness.",
    imageUrl: createMascot("M60 140h80v-30h-80z"),
    situation: "Jessie sitting on a mountain of shopping bags.",
    examples: ["Society is prone to materialism.", "Materialism can feel hollow.", "He rejected materialism for simplicity."]
  },
  {
    id: 18,
    word: "Fulfillment",
    phonetics: "/fʊlˈfɪl.mənt/",
    wordForm: WordForm.NOUN,
    definition: "A deep sense of satisfaction or purpose.",
    imageUrl: createMascot("M100 130L80 110l40 0z"),
    situation: "Jessie looking proud after finishing a painting.",
    examples: ["Helping others brings true fulfillment.", "She found fulfillment in her career.", "Hobbies provide a sense of fulfillment."]
  },
  {
    id: 19,
    word: "Stress-free",
    phonetics: "/ˌstresˈfriː/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Without worry or pressure.",
    imageUrl: createMascot("M60 130h80", "#3498db"),
    situation: "Jessie floating on a cloud.",
    examples: ["A stress-free life is a dream.", "I want a stress-free vacation.", "She created a stress-free workspace."]
  },
  {
    id: 20,
    word: "Life satisfaction",
    phonetics: "/laɪf ˌsæt.ɪsˈfæk.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "How happy someone feels about their life overall.",
    imageUrl: createMascot("M100 110c10 0 20 10 20 20s-10 20-20 20-20-10-20-20 10-20 20-20"),
    situation: "Jessie sitting contentedly in a rocking chair.",
    examples: ["High life satisfaction is healthy.", "Meaningful work boosts life satisfaction.", "Friends improve your life satisfaction."]
  },
  {
    id: 21,
    word: "Echo chamber",
    phonetics: "/ˈek.oʊ ˌtʃeɪm.bər/",
    wordForm: WordForm.NOUN,
    definition: "An environment where you only encounter confirming opinions.",
    imageUrl: createMascot("M60 100a40 40 0 0 1 80 0v40h-80z"),
    situation: "Jessie inside a box made of mirrors, repeating its own meow.",
    examples: ["Social media creates echo chambers.", "Step outside your echo chamber.", "Diverse news prevents an echo chamber."]
  },
  {
    id: 22,
    word: "FOMO",
    phonetics: "/ˈfoʊ.moʊ/",
    wordForm: WordForm.NOUN,
    definition: "The fear of missing out on rewarding experiences.",
    imageUrl: createMascot("M60 60h80v80h-80zM70 110l60-10"),
    situation: "Jessie looking at a party through a window, looking sad.",
    examples: ["I felt FOMO seeing their vacation.", "FOMO makes us check phones too often.", "Practice JOMO instead of FOMO."]
  },
  {
    id: 23,
    word: "Doomscrolling",
    phonetics: "/ˈduːm.skroʊ.lɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "The act of continuously scrolling through bad news.",
    imageUrl: createMascot("M80 140c0-20 40-20 40 0", "#e74c3c"),
    situation: "Jessie scrolling forever with a sad face late at night.",
    examples: ["Doomscrolling affects your sleep.", "Stop doomscrolling and read a book.", "I found myself doomscrolling for hours."]
  },
  {
    id: 24,
    word: "Digital footprint",
    phonetics: "/ˈdɪdʒ.ɪ.təl ˈfʊt.prɪnt/",
    wordForm: WordForm.NOUN,
    definition: "The information about a person that exists on the internet.",
    imageUrl: createMascot("M60 140c0-10 10-20 20-20s20 10 20 20"),
    situation: "Jessie walking and leaving glowing paw prints on a screen.",
    examples: ["Watch your digital footprint carefully.", "Your digital footprint lasts forever.", "Employers check your digital footprint."]
  },
  {
    id: 25,
    word: "Algorithmic bias",
    phonetics: "/ˌæl.ɡəˈrɪð.mɪk ˈbaɪ.əs/",
    wordForm: WordForm.NOUN,
    definition: "Unfair results produced by computer programs.",
    imageUrl: createMascot("M80 80h40v80h-40z", "#95a5a6"),
    situation: "A robot cat choosing only orange cats from a crowd.",
    examples: ["Algorithmic bias can lead to unfairness.", "Developers must fix algorithmic bias.", "Bias in data causes algorithmic bias."]
  },
  {
    id: 26,
    word: "Privacy setting",
    phonetics: "/ˈpraɪ.və.si ˌset.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "Controls for who can see your information.",
    imageUrl: createMascot("M100 70l40 20v40l-40 20-40-20v-40z"),
    situation: "Jessie hiding behind a large, secure shield.",
    examples: ["Check your privacy settings often.", "Strengthen your privacy settings now.", "Privacy settings protect your data."]
  },
  {
    id: 27,
    word: "Fact-checking",
    phonetics: "/ˈfækt ˌtʃek.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "Verifying the truth of a statement.",
    imageUrl: createMascot("M90 90a10 10 0 1 0 20 0 10 10 0 0 0-20 0M105 105l20 20"),
    situation: "Jessie looking at a post through a magnifying glass.",
    examples: ["Fact-checking is essential today.", "Always do your own fact-checking.", "The site provides fact-checking tools."]
  },
  {
    id: 28,
    word: "Influencer",
    phonetics: "/ˈɪn.flu.ən.sər/",
    wordForm: WordForm.NOUN,
    definition: "A person with the power to affect others' decisions.",
    imageUrl: createMascot("M100 80a20 20 0 1 0 0 40 20 20 0 0 0 0-40zM80 140h40"),
    situation: "Jessie with a ring light and a camera on a tripod.",
    examples: ["She is a popular lifestyle influencer.", "Influencers promote many products.", "Being an influencer requires hard work."]
  },
  {
    id: 29,
    word: "Viral",
    phonetics: "/ˈvaɪ.rəl/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Spreading very quickly on the internet.",
    imageUrl: createMascot("M100 80l10 30 30 0-20 20 10 30-30-20-30 20 10-30-20-20 30 0z", "#f39c12"),
    situation: "Jessie jumping over a star with millions of tiny fans.",
    examples: ["The cat video went viral instantly.", "Every creator wants to go viral.", "A viral post can change your life."]
  },
  {
    id: 30,
    word: "Clickbait",
    phonetics: "/ˈklɪk.beɪt/",
    wordForm: WordForm.NOUN,
    definition: "Content designed to encourage users to click a link.",
    imageUrl: createMascot("M100 60v80M90 140l10 10 10-10"),
    situation: "A fishing rod with a shiny glowing phone as bait.",
    examples: ["I fell for the clickbait headline.", "Clickbait often leads to poor content.", "Avoid using clickbait to gain views."]
  },
  {
    id: 31,
    word: "Cyberbullying",
    phonetics: "/ˈsaɪ.bəˌbʊl.i.ɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "The use of electronic communication to bully someone.",
    imageUrl: createMascot("M70 140l60-20", "#c0392b"),
    situation: "Jessie looking sad while mean emojis float nearby.",
    examples: ["Schools must prevent cyberbullying.", "Cyberbullying can cause deep pain.", "Report any acts of cyberbullying."]
  },
  {
    id: 32,
    word: "Digital detox",
    phonetics: "/ˌdɪdʒ.ɪ.təl ˈdiː.tɒks/",
    wordForm: WordForm.NOUN,
    definition: "A period when you stop using electronic devices.",
    imageUrl: createMascot("M80 100h40v40H80zM100 90v-20"),
    situation: "Jessie putting their phone in a deep drawer.",
    examples: ["I am on a digital detox this week.", "Digital detoxes help you recharge.", "Try a weekend digital detox."]
  },
  {
    id: 33,
    word: "Screen time",
    phonetics: "/ˈskriːn taɪm/",
    wordForm: WordForm.NOUN,
    definition: "The amount of time spent looking at a screen.",
    imageUrl: createMascot("M100 80v40l20 0M100 60a60 60 0 1 0 0 120 60 60 0 0 0 0-120"),
    situation: "Jessie looking at a giant clock made of a phone.",
    examples: ["Reduce your screen time before bed.", "My screen time was too high today.", "Monitor your children's screen time."]
  },
  {
    id: 34,
    word: "Engagement",
    phonetics: "/ɪnˈɡeɪdʒ.mənt/",
    wordForm: WordForm.NOUN,
    definition: "User interaction with content (likes, shares).",
    imageUrl: createMascot("M80 80c-10-10-30 0-10 20l20 20 20-20c20-20 0-30-10-20z", "#e91e63"),
    situation: "Jessie juggling hearts and stars.",
    examples: ["The post had high engagement rates.", "Engagement is key for influencers.", "Ask questions to boost engagement."]
  },
  {
    id: 35,
    word: "Community-driven",
    phonetics: "/kəˈmjuː.nə.ti ˈdrɪv.ən/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Led or inspired by a group of people.",
    imageUrl: createMascot("M100 60a20 20 0 1 0 0 40 20 20 0 0 0 0-40zM60 100a20 20 0 1 0 0 40 20 20 0 0 0 0-40zM140 100a20 20 0 1 0 0 40 20 20 0 0 0 0-40z"),
    situation: "A circle of cats holding paws together.",
    examples: ["The project is community-driven.", "We thrive in community-driven spaces.", "Open source is community-driven."]
  },
  {
    id: 36,
    word: "Personal growth",
    phonetics: "/ˈpɜː.sən.əl ɡroʊθ/",
    wordForm: WordForm.NOUN,
    definition: "Improving your skills and character over time.",
    imageUrl: createMascot("M100 140v-60M80 100l20-20 20 20", "#27ae60"),
    situation: "Jessie watering a plant that is growing into a cat shape.",
    examples: ["Reading supports personal growth.", "Challenges are part of personal growth.", "Set goals for your personal growth."]
  },
  {
    id: 37,
    word: "Self-care",
    phonetics: "/ˌselfˈkeər/",
    wordForm: WordForm.NOUN,
    definition: "The practice of taking care of your own health.",
    imageUrl: createMascot("M60 140h80v-40h-80zM80 100a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"),
    situation: "Jessie in a bathtub with cucumbers on its eyes.",
    examples: ["Self-care is not selfish.", "Make time for daily self-care.", "Self-care prevents burnout."]
  },
  {
    id: 38,
    word: "Resilience",
    phonetics: "/rɪˈzɪl.i.əns/",
    wordForm: WordForm.NOUN,
    definition: "The ability to recover quickly from difficulties.",
    imageUrl: createMascot("M100 140l-20-60 40 0z"),
    situation: "Jessie standing strong against a wind of emojis.",
    examples: ["Resilience is built through hardship.", "She showed great resilience in life.", "Practice resilience every day."]
  },
  {
    id: 39,
    word: "Mindfulness",
    phonetics: "/ˈmaɪnd.fəl.nəs/",
    wordForm: WordForm.NOUN,
    definition: "Focusing on being intensely aware of the present.",
    imageUrl: createMascot("M100 100a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM100 80a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"),
    situation: "Jessie balancing a small stone on its nose.",
    examples: ["Mindfulness reduces daily stress.", "I practice mindfulness in the morning.", "Focus on your breath for mindfulness."]
  },
  {
    id: 40,
    word: "Connection",
    phonetics: "/kəˈnek.ʃən/",
    wordForm: WordForm.NOUN,
    definition: "A relationship in which things or people are linked.",
    imageUrl: createMascot("M60 100h80M60 110h80", "#e67e22"),
    situation: "Two cats connected by a glowing piece of yarn.",
    examples: ["We have a strong emotional connection.", "Connection is vital for happiness.", "Build connections with your team."]
  },
  {
    id: 41,
    word: "Authenticity",
    phonetics: "/ˌɔː.θenˈtɪs.ə.ti/",
    wordForm: WordForm.NOUN,
    definition: "The quality of being real or true.",
    imageUrl: createMascot("M100 100a30 30 0 1 0 0 60 30 30 0 0 0 0-60z"),
    situation: "Jessie taking off a 'perfect cat' mask.",
    examples: ["Authenticity is attractive in people.", "Be yourself with true authenticity.", "We value authenticity in our brand."]
  },
  {
    id: 42,
    word: "Purpose-driven",
    phonetics: "/ˈpɜː.pəs ˌdrɪv.ən/",
    wordForm: WordForm.ADJECTIVE,
    definition: "Motivated by a strong sense of intention.",
    imageUrl: createMascot("M100 140l0-100M80 60l20-20 20 20"),
    situation: "Jessie following a bright North Star.",
    examples: ["He leads a purpose-driven life.", "Our company is purpose-driven.", "Purpose-driven work feels meaningful."]
  },
  {
    id: 43,
    word: "Social proof",
    phonetics: "/ˈsoʊ.ʃəl pruːf/",
    wordForm: WordForm.NOUN,
    definition: "Copying others' behavior to be correct in a situation.",
    imageUrl: createMascot("M60 140l20-20M100 140l20-20M140 140l20-20"),
    situation: "A line of cats following Jessie's lead.",
    examples: ["Testimonials are a form of social proof.", "We look for social proof when buying.", "Social proof influences our choices."]
  },
  {
    id: 44,
    word: "Networking",
    phonetics: "/ˈnet.wɜː.kɪŋ/",
    wordForm: WordForm.NOUN,
    definition: "Connecting with people for professional support.",
    imageUrl: createMascot("M60 60l80 80M140 60l-80 80"),
    situation: "Jessie connecting colored dots on a board.",
    examples: ["Networking is key for career growth.", "Attend events for better networking.", "I improved my networking skills."]
  }
];
