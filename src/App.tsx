import { useState } from "react";
import { Navbar, Hero, Capabilities, Pricing, Footer } from "./components/LandingPage";
import { AuthPage } from "./components/Auth";

export default function App() {
  const [view, setView] = useState<"home" | "login" | "signup">("home");

  if (view === "login" || view === "signup") {
    return (
      <AuthPage 
        initialMode={view} 
        onBack={() => setView("home")} 
      />
    );
  }

  const navigateToAuth = (mode: "login" | "signup") => setView(mode);

  return (
    <div className="min-h-screen selection:bg-brand-primary/20">
      <Navbar onAuth={navigateToAuth} />
      <main>
        <Hero onAuth={navigateToAuth} />
        <Capabilities />
        <Pricing onAuth={navigateToAuth} />
        
        {/* Why section */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empower Your Support Team with <span className="text-brand-primary">OmniserviceAI.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                OmniserviceAI isn't just a layer on top of LLMs. It's a purpose-built orchestration engine that allows AI to navigate your internal tools safely and efficiently.
              </p>
              
              <div className="space-y-6">
                {[
                  "Reduce resolution time by up to 85%",
                  "Handle 10,000+ concurrent voice calls",
                  "Deep integration with Zendesk, Salesforce, & Slack",
                  "Custom fine-tuned models for your industry"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 brand-gradient blur-[100px] opacity-20 -z-10" />
               <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-[400px] flex flex-col">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                      <div className="w-3 h-3 rounded-full bg-green-400/20" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">nexus_orchestrator.ts</span>
                  </div>
                  <div className="font-mono text-sm text-brand-primary/80 space-y-2 overflow-hidden">
                    <div className="flex gap-4"><span className="text-slate-600">01</span><span>async function resolveTicket(user) &#123;</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">02</span><span className="pl-4">const agent = await Nexus.spawn("support");</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">03</span><span className="pl-4">const intent = await agent.analyze(user.input);</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">04</span><span className="pl-4"></span></div>
                    <div className="flex gap-4"><span className="text-slate-600">05</span><span className="pl-4">if (intent.type === 'REFUND') &#123;</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">06</span><span className="pl-8">await agent.performAction('stripe_refund');</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">07</span><span className="pl-8">return agent.reply('Done!');</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">08</span><span className="pl-4">&#125;</span></div>
                    <div className="flex gap-4"><span className="text-slate-600">09</span><span>&#125;</span></div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-deep to-transparent flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full glass-card border-brand-primary/30 text-xs font-semibold animate-pulse">
                      Processing Action...
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute inset-0 brand-gradient opacity-10 pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to Automate<br />Your Support?</h2>
            <p className="text-slate-400 text-lg mb-12">Join 500+ companies using OmniserviceAI to power the future of customer experience.</p>
            <button 
              onClick={() => navigateToAuth("signup")}
              className="px-10 py-5 rounded-2xl brand-gradient text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all"
            >
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
