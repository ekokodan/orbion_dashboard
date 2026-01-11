export enum Level {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  All = 'All Levels'
}

export enum Category {
  Practical = 'Practical',
  Fun = 'Fun & Interests',
  All = 'All'
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: Category;
  level: Level;
  tags: string[]; // e.g., "A1", "B2", "Ages 11-14"
  emoji: string;
  systemInstruction: string;
  accentColor: string; // Tailwind class mostly
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}