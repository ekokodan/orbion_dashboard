import React, { useState, useEffect, useRef } from 'react';
import { Experience, ChatMessage } from '../types';
import { sendMessage, startChat } from '../services/geminiService';

interface ChatInterfaceProps {
  experience: Experience;
  onClose: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ experience, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const initSession = async () => {
      try {
        await startChat(experience.systemInstruction);
        const greeting = await sendMessage("Hello! Please start the roleplay.");
        setMessages([{
          id: 'init',
          role: 'model',
          text: greeting,
          timestamp: new Date()
        }]);
      } catch (e) {
        console.error("Failed to init chat", e);
      } finally {
        setIsInitializing(false);
      }
    };
    initSession();
  }, [experience]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessage(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-950 w-full max-w-2xl h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-slide-up border border-slate-800">
        
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${experience.accentColor}`}>
              {experience.emoji}
            </div>
            <div>
              <h3 className="font-bold text-slate-100">{experience.title}</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Live Session • Orbeon AI</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950">
          {isInitializing ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-3">
              <div className="w-6 h-6 border-2 border-orbeon-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium">Connecting to Orbeon...</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-orbeon-600 text-white rounded-tr-sm' 
                      : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-slate-900 px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-800 shadow-sm flex items-center gap-1">
                 <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                 <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                 <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your response in French..."
              className="w-full pl-6 pr-14 py-4 bg-slate-950 border-transparent focus:bg-slate-950 focus:border-orbeon-900 focus:ring-4 focus:ring-orbeon-900/20 rounded-2xl transition-all outline-none text-slate-100 placeholder:text-slate-600"
              autoFocus
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-orbeon-600 text-white rounded-xl hover:bg-orbeon-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-black/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-600 mt-2 font-medium">Orbeon can make mistakes. Practice serves as a simulation.</p>
        </div>
      </div>
    </div>
  );
};