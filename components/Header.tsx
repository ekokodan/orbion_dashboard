import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orbeon-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20">
            O
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">Orbeon</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Library</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">My Progress</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Settings</a>
        </nav>

        <div className="flex items-center gap-4">
           {/* Placeholder for user profile */}
           <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden border border-slate-700 shadow-sm">
             <img src="https://picsum.photos/100/100" alt="User" className="w-full h-full object-cover opacity-80" />
           </div>
        </div>
      </div>
    </header>
  );
};