import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, Sparkles, HelpCircle } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const FAQ_CHIPS = [
  "Umrah Packages",
  "Hajj Payment Plans",
  "Cancellation Policy",
  "Domestic Tours",
  "Visa Requirements"
];

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Salaam! I am your Al-Safar Travel Assistant. How can I help you plan your journey today?',
      timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getTravelAdvice(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all hover:scale-105 flex items-center gap-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="font-semibold hidden sm:inline">Chat Support</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-slate-200 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-emerald-600 p-4 rounded-t-2xl flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-white/20 p-1.5 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Al-Safar Support</h3>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-emerald-100 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-emerald-200">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* FAQ Chips - Only show if it's the start of conversation */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-4">
                {FAQ_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="text-xs bg-white border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors shadow-sm"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl p-3 rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                  <span className="text-xs text-slate-500">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-slate-100 bg-white rounded-b-2xl">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Type your question..."
                className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={isLoading || !input.trim()}
                className="bg-emerald-600 text-white p-2.5 rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};