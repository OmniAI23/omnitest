import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, MessageSquare, Mic, Globe, Zap, Shield, ArrowRight, Play, CheckCircle2, Menu, X } from "lucide-react";
import logo from "../assets/images/omniservice_clean_logo_1779803976909.png";

export const Navbar = ({ onAuth }: { onAuth: (mode: "login" | "signup") => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? 'glass-card shadow-lg bg-bg-deep/80' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt="OmniserviceAI Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">OmniserviceAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
          <a href="#capabilities" className="text-slate-400 hover:text-white transition-colors">Capabilities</a>
          <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => onAuth("login")}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => onAuth("signup")}
            className="brand-gradient px-5 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-card p-6 rounded-3xl shadow-2xl z-40 bg-bg-deep/95"
          >
            <div className="flex flex-col gap-6">
              <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Features</a>
              <a href="#capabilities" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Capabilities</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Pricing</a>
              <hr className="border-white/10" />
              <button 
                onClick={() => { setIsOpen(false); onAuth("login"); }}
                className="text-left py-2 text-lg font-medium text-slate-400"
              >
                Log in
              </button>
              <button 
                onClick={() => { setIsOpen(false); onAuth("signup"); }}
                className="brand-gradient w-full py-4 rounded-2xl text-white font-bold"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-8 rounded-3xl hover:border-brand-primary/30 transition-colors group"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-brand-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

export const Hero = ({ onAuth }: { onAuth: (mode: "login" | "signup") => void }) => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Decorative background gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
    
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
        Multimodal Support for Global Enterprise
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
      >
        <span className="text-gradient">Support Agents</span><br />
        <span className="text-brand-primary">That Actually Performs.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        AI agents that can see, hear, reason, speak, and act. Empower your business with autonomous agents that respond to your customers in any language.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button 
          onClick={() => onAuth("signup")}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl brand-gradient text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
        >
          Launch Your Agent <ArrowRight className="w-5 h-5" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
          <Play className="w-5 h-5 fill-current" /> View Demo
        </button>
      </motion.div>
    </div>
  </section>
);

export const Capabilities = () => (
  <section id="capabilities" className="py-24 px-6 max-w-7xl mx-auto">
    <div id="features" className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Support Without Boundaries.</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">Our agents handle the entire support lifecycle, from initial query to final resolution.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard 
        icon={Mic}
        title="Human-Grade Voice"
        description="Ultra-low latency voice interaction with natural emotion and context awareness in 80+ languages."
        delay={0.1}
      />
      <FeatureCard 
        icon={MessageSquare}
        title="Multimodal Chat"
        description="Agents that understand text, images, and documents to provide comprehensive technical support."
        delay={0.2}
      />
      <FeatureCard 
        icon={Zap}
        title="Action-Oriented"
        description="Not just a chatbot. Our agents integrate with your APIs to process refunds, book calls, and update records."
        delay={0.3}
      />
      <FeatureCard 
        icon={Globe}
        title="Truly Multilingual"
        description="Native-level fluency across 100+ global dialects, ensuring your support is truly global."
        delay={0.4}
      />
      <FeatureCard 
        icon={Bot}
        title="Agentic Reasoning"
        description="Complex problem solving that breaks down customer issues into actionable steps automatically."
        delay={0.5}
      />
      <FeatureCard 
        icon={Shield}
        title="Enterprise Secure"
        description="Pll masking, SOC2 compliance, and dedicated data sovereignty for peace of mind."
        delay={0.6}
      />
    </div>
  </section>
);

export const Pricing = ({ onAuth }: { onAuth: (mode: "login" | "signup") => void }) => (
  <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Scalable Pricing for Every Scale.</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">Choose the plan that fits your current needs and scale as you grow.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Starter", price: "Free", features: ["1 AI Agent", "Text only", "Standard Responses", "Email Support"] },
        { name: "Pro", price: "$59", features: ["10 AI Agents", "Multilingual agents", "Human-Grade Voice", "Priority Support", "API Access"], popular: true },
        { name: "Enterprise", price: "Custom", features: ["Unlimited Agents", "Custom Minutes", "Dedicated GPU", "24/7 Support", "SLA Guarantees"] }
      ].map((plan, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`glass-card p-8 rounded-3xl relative ${plan.popular ? 'border-brand-primary' : ''}`}
        >
          {plan.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 brand-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          )}
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold">{plan.price}</span>
            {plan.price !== "Custom" && plan.price !== "Free" && <span className="text-slate-500 text-sm">/mo</span>}
          </div>
          <ul className="space-y-4 mb-8">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" /> {f}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => onAuth("signup")}
            className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'brand-gradient text-white shadow-lg shadow-brand-primary/20' : 'bg-white/5 hover:bg-white/10 text-white'}`}
          >
            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
          <img 
            src={logo} 
            alt="OmniserviceAI Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-display font-bold text-xl">OmniserviceAI</span>
      </div>
      
      <div className="flex gap-8 text-sm text-slate-500">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Documentation</a>
        <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
      </div>
      
      <p className="text-xs text-slate-600">
        © 2026 OmniserviceAI Inc. All rights reserved.
      </p>
    </div>
  </footer>
);
