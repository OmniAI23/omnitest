import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Lock, User, Github, Chrome } from "lucide-react";
import logo from "../assets/images/omniservice_clean_logo_1779803976909.png";

export const AuthPage = ({ initialMode = "login", onBack }: { initialMode?: "login" | "signup", onBack: () => void }) => {
  const [mode, setMode] = useState<"login" | "signup" | "forgot-password">(initialMode);

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[120px] rounded-full" />

      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to home</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <div 
            className="w-32 h-32 mb-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={onBack}
          >
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {mode === "login" && "Welcome back"}
            {mode === "signup" && "Create an account"}
            {mode === "forgot-password" && "Reset Password"}
          </h1>
          <p className="text-slate-400 mt-2">
            {mode === "login" && "Enter your credentials to access your dashboard"}
            {mode === "signup" && "Join OmniserviceAI and start deploying agents today"}
            {mode === "forgot-password" && "Enter your email to receive recovery instructions"}
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-white/5 shadow-2xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-50 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-brand-primary outline-none transition-all"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-50 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            {mode !== "forgot-password" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs font-semibold text-slate-50 uppercase tracking-wider">Password</label>
                  {mode === "login" && (
                    <button 
                      onClick={() => setMode("forgot-password")}
                      className="text-xs text-brand-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:border-brand-primary outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <button className="w-full brand-gradient py-4 rounded-xl text-white font-bold mt-4 shadow-lg shadow-brand-primary/20 hover:opacity-90 transition-opacity">
              {mode === "login" && "Sign In"}
              {mode === "signup" && "Create Account"}
              {mode === "forgot-password" && "Send Reset Link"}
            </button>
          </form>

          {mode !== "forgot-password" && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-bg-deep px-2 text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                  <Chrome className="w-4 h-4" />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
              </div>
            </>
          )}

          {mode === "forgot-password" && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setMode("login")}
                className="text-slate-400 hover:text-white flex items-center justify-center gap-2 text-sm transition-colors mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </button>
            </div>
          )}
        </div>

        <p className="text-center mt-8 text-slate-400">
          {mode === "login" && (
            <>
              Don't have an account?{" "}
              <button onClick={() => setMode("signup")} className="text-brand-primary font-semibold hover:underline">Sign up</button>
            </>
          )}
          {mode === "signup" && (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} className="text-brand-primary font-semibold hover:underline">Log in</button>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
};
