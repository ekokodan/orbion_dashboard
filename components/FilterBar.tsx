import React from 'react';
import { Category, Level } from '../types';
import { CATEGORIES, LEVELS } from '../constants';

interface FilterBarProps {
  selectedCategory: Category;
  setSelectedCategory: (c: Category) => void;
  selectedLevel: Level;
  setSelectedLevel: (l: Level) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
}) => {
  return (
    <div className="w-full py-8 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">Category</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border ${
              selectedCategory === cat
                ? 'bg-slate-100 text-slate-900 border-white shadow-md shadow-white/10 transform scale-105'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">Level</span>
        {LEVELS.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border ${
              selectedLevel === lvl
                ? 'bg-orbeon-600 text-white border-orbeon-500 shadow-md shadow-orbeon-900/20 transform scale-105'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>
    </div>
  );
};