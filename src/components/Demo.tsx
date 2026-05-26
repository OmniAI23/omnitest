import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Bot, User, Send, Sparkles } from "lucide-react";
import logo from "../assets/images/omniservice_clean_logo_1779803976909.png";

interface Message {
  role: "user" | "agent";
  content: string;
  time: string;
}

export const DemoPage = ({ onBack }: { onBack: () => void }) => {
  const allMessages: Message[] = [
    { role: "agent", content: "Hello! Welcome to OmniserviceAI support. How can I assist you with your business automation today?", time: "2:00 PM" },
    { role: "user", content: "Hi! I run an e-commerce store. Can your AI handle complex questions about my return policy and shipping times?", time: "2:01 PM" },
    { role: "agent", content: "Absolutely. I can ingest your entire knowledge base, including PDFs and help articles. I'll provide instant, accurate answers about returns and shipping 24/7.", time: "2:01 PM" },
    { role: "user", content: "That sounds great. We have many customers in Spain. Do I need to translate my content first?", time: "2:02 PM" },
    { role: "agent", content: "¡No es necesario! Detecto automáticamente el idioma del usuario y respondo con fluidez en su lengua materna, utilizando su documentación original como referencia.", time: "2:02 PM" },
    { role: "user", content: "Wow, the Spanish response was perfect. How do I get started?", time: "2:03 PM" },
    { role: "agent", content: "You're just one click away. You can launch your first agent in under 5 minutes with our zero-code setup wizard.", time: "2:03 PM" },
  ];

  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentIndex < allMessages.length) {
      timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, allMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, visibleMessages.length === 0 ? 500 : 2000);
    } else {
      // Wise pause at the end before restarting
      timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, visibleMessages.length]);

  // Auto-scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages]);

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[120px] rounded-full" />

      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl flex flex-col h-[700px] glass-card rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden relative"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center p-2 shadow-lg shadow-brand-primary/20 cursor-pointer hover:scale-105 transition-transform"
              onClick={onBack}
            >
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div 
              className="cursor-pointer group"
              onClick={onBack}
            >
              <h2 className="font-bold text-white tracking-tight group-hover:text-brand-primary transition-colors">OmniserviceAI</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Example Interaction</span>
              </div>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">
            CASE #4829
          </div>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth custom-scrollbar bg-slate-950/20"
        >
          <AnimatePresence initial={false}>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg ${msg.role === "user" ? "bg-brand-secondary" : "bg-brand-primary"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl relative shadow-sm ${
                    msg.role === "user" 
                      ? "brand-gradient text-white rounded-tr-none" 
                      : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-none"
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <span className={`text-[10px] mt-2 block opacity-50 ${msg.role === "user" ? "text-white" : "text-slate-400"}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Overlay */}
        <div className="p-8 bg-white/[0.02] border-t border-white/5 text-center">
          <p className="text-slate-400 text-sm mb-4">Experience human-grade multilingual support for your business.</p>
          <button 
            onClick={onBack}
            className="px-8 py-3 rounded-xl brand-gradient text-white font-bold text-sm shadow-xl shadow-brand-primary/20 hover:opacity-90 transition-all"
          >
            Launch Your Agent Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};
