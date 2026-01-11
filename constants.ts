import { Experience, Category, Level } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Cafe in Paris',
    description: 'Order coffee and pastries at a cozy Parisian cafe.',
    category: Category.Practical,
    level: Level.Beginner,
    tags: ['A1'],
    emoji: '☕',
    systemInstruction: 'You are a waiter at a cozy cafe in Paris. Speak French. The user is a customer ordering coffee and pastries. Be polite but authentic.',
    accentColor: 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
  },
  {
    id: '2',
    title: 'At the Bakery',
    description: 'Buy bread and pastries at a traditional French boulangerie.',
    category: Category.Practical,
    level: Level.Beginner,
    tags: ['A1'],
    emoji: '🥐',
    systemInstruction: 'You are a baker in a French boulangerie. Speak French. Help the customer choose bread and pastries.',
    accentColor: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
  },
  {
    id: '3',
    title: 'Meeting a Friend',
    description: 'Casual greeting and small talk with a French friend.',
    category: Category.Practical,
    level: Level.Beginner,
    tags: ['A1'],
    emoji: '👋',
    systemInstruction: 'You are a close French friend of the user. Speak French. You are meeting them for the first time in a while. Use casual language (tu).',
    accentColor: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
  },
  {
    id: '4',
    title: 'Hotel Check-in',
    description: 'Check into a French hotel and ask about amenities.',
    category: Category.Practical,
    level: Level.Intermediate,
    tags: ['A2/B1'],
    emoji: '🏨',
    systemInstruction: 'You are a hotel receptionist in Paris. Speak French. Help the user check in, ask for their passport, and explain breakfast times.',
    accentColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
  },
  {
    id: '5',
    title: 'At the Restaurant',
    description: 'Full dining experience at a formal French restaurant.',
    category: Category.Practical,
    level: Level.Intermediate,
    tags: ['A2/B1'],
    emoji: '🍽️',
    systemInstruction: 'You are a waiter at a nice French restaurant. Speak French. Take the user\'s order, suggest wine pairings, and handle the bill.',
    accentColor: 'bg-slate-700/50 text-slate-300 border border-slate-600/50'
  },
  {
    id: '6',
    title: 'Job Interview',
    description: 'Professional French job interview simulation.',
    category: Category.Practical,
    level: Level.Advanced,
    tags: ['B1/B2'],
    emoji: '💼',
    systemInstruction: 'You are a hiring manager for a tech company in Paris. Speak professional French (vous). Interview the user for a position.',
    accentColor: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
  },
  {
    id: '7',
    title: 'Ohana with Stitch',
    description: 'Chat with Stitch about family, adventures, and Elvis.',
    category: Category.Fun,
    level: Level.Beginner,
    tags: ['A1', 'Kids'],
    emoji: '🌺',
    systemInstruction: 'You are Stitch (Experiment 626). You speak broken but understandable French mixed with some alien noises. Talk about Ohana and family.',
    accentColor: 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
  },
  {
    id: '8',
    title: 'K-Pop Dance Hunters',
    description: 'Join a fan club planning a dance cover in Paris.',
    category: Category.Fun,
    level: Level.Intermediate,
    tags: ['A2', 'Teens'],
    emoji: '💜',
    systemInstruction: 'You are a K-Pop fan living in Paris. Speak French with some English/Korean slang. You are organizing a flash mob.',
    accentColor: 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
  },
  {
    id: '9',
    title: 'Video Editing Studio',
    description: 'Collaborate on a YouTube video project.',
    category: Category.Fun,
    level: Level.Advanced,
    tags: ['B2', 'Creative'],
    emoji: '🎬',
    systemInstruction: 'You are a French video editor. Speak French. Discuss editing cuts, transitions, and color grading for a new project.',
    accentColor: 'bg-zinc-700/50 text-zinc-300 border border-zinc-600/50'
  },
   {
    id: '10',
    title: 'Football with Ronaldo',
    description: 'Meet Cristiano at a training camp in Paris.',
    category: Category.Fun,
    level: Level.Intermediate,
    tags: ['A2/B1', 'Sports'],
    emoji: '⚽',
    systemInstruction: 'You are Cristiano Ronaldo. You speak French with a Portuguese accent. You are encouraging a young player at training.',
    accentColor: 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
  }
];

export const CATEGORIES = [Category.All, Category.Practical, Category.Fun];
export const LEVELS = [Level.All, Level.Beginner, Level.Intermediate, Level.Advanced];