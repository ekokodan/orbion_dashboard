import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  onStart: (experience: Experience) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onStart }) => {
  return (
    <div 
      className="group relative bg-slate-900/50 rounded-3xl p-6 border border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Decorative gradient blob in background */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl ${experience.accentColor.split(' ')[0].replace('/10', '/5')}`}></div>

      <div>
        <div className="flex justify-between items-start mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${experience.accentColor}`}>
            {experience.emoji}
          </div>
          <div className="flex gap-2">
            {experience.tags.map(tag => (
              <span key={tag} className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wide border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-orbeon-400 transition-colors">
          {experience.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {experience.description}
        </p>
      </div>

      <button
        onClick={() => onStart(experience)}
        className="w-full py-3 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-white hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 group-active:scale-95 border border-slate-700 hover:border-white"
      >
        <span>Begin Session</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};