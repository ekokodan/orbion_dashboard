import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ExperienceCard } from './components/ExperienceCard';
import { ChatInterface } from './components/ChatInterface';
import { EXPERIENCES } from './constants';
import { Experience, Category, Level } from './types';
import { initializeGemini } from './services/geminiService';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.All);
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.All);
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    // Initialize Gemini with env key
    if (process.env.API_KEY) {
      initializeGemini(process.env.API_KEY);
    } else {
      console.error("API_KEY is missing from environment");
      setApiKeyMissing(true);
    }
  }, []);

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    const matchesCategory = selectedCategory === Category.All || exp.category === selectedCategory;
    const matchesLevel = selectedLevel === Level.All || exp.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {apiKeyMissing && (
           <div className="mb-8 p-4 bg-red-900/20 text-red-400 rounded-xl border border-red-900/50 text-sm font-medium">
             ⚠️ API Key is missing. Please add REACT_APP_GEMINI_API_KEY to your environment variables.
           </div>
        )}

        {/* Hero Section */}
        <section className="mb-12 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Where do you want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbeon-500 to-indigo-500">go today?</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Immerse yourself in real-world scenarios designed to improve your fluency. 
            Choose a situation, and Orbeon will guide you through the conversation naturally.
          </p>
        </section>

        {/* Filters */}
        <FilterBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="h-full">
              <ExperienceCard 
                experience={exp} 
                onStart={setActiveExperience} 
              />
            </div>
          ))}
          
          {filteredExperiences.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-500">
              <p>No experiences found for these filters.</p>
              <button 
                onClick={() => {setSelectedCategory(Category.All); setSelectedLevel(Level.All)}}
                className="text-orbeon-400 font-medium mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-600 text-sm">
          <p>&copy; 2024 Orbeon. Built for language learners.</p>
        </div>
      </footer>

      {activeExperience && (
        <ChatInterface 
          experience={activeExperience} 
          onClose={() => setActiveExperience(null)} 
        />
      )}
    </div>
  );
};

export default App;