import React, { useState } from "react";
import { 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  Calendar, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Cpu, 
  Lock, 
  Zap, 
  Layers 
} from "lucide-react";

export interface HeroProps {
  calendlyUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  contactEmail?: string;
  onExploreArchitecture?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  calendlyUrl = "https://calendly.com",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  contactEmail = "divyansh.sharma@example.com",
  onExploreArchitecture,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-zinc-100 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-zinc-800/80">
      {/* Background Radial Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/15 to-transparent blur-[140px] opacity-70"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Telemetry Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-8 shadow-inner shadow-zinc-900">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-400">STATUS:</span>
          <span className="text-emerald-400 font-medium">AVAILABLE FOR Q4 FREELANCE & SELECT AI CONTRACTS</span>
        </div>

        {/* Primary Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm tracking-wide uppercase">
                <span className="text-cyan-400 font-semibold">Divyansh Sharma</span>
                <span>/</span>
                <span>AI & Full-Stack Systems Engineer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Enterprise LLM Platforms</span> With Military-Grade Cyber Defense.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              I build production-grade RAG systems, intelligent agents, and resilient full-stack applications. 
              Zero toy demos. Strict tenant namespace isolation, sub-50ms vector queries, and automated 32-test exploit defense.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                Book Discovery Call
                <ArrowRight className="w-4 h-4 text-zinc-950 ml-0.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onExploreArchitecture) onExploreArchitecture();
                  else scrollToSection("flagship-architecture");
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 transition-colors duration-200 font-mono focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                Explore Flagship Architecture
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-3.5 rounded-xl text-xs font-mono text-zinc-400 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-all"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Proof & Quick Links */}
            <div className="flex items-center gap-6 pt-3 text-zinc-400 text-sm">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <span className="text-zinc-700">|</span>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>32-Test Cyber Shield</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Architecture Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 shadow-2xl relative backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">rag_telemetry.log</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                  LIVE BENCHMARK
                </span>
              </div>

              {/* Real-time Engineering Metrics */}
              <div className="mt-5 space-y-4">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      INFERENCE ENGINE
                    </span>
                    <span className="text-emerald-400 font-semibold">~300 tok/s</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Groq LPU (Llama 3.3 70B) + Gemini 1.5 Flash
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      VECTOR RETRIEVAL
                    </span>
                    <span className="text-emerald-400 font-semibold">&lt;50ms</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Pinecone Serverless + ChromaDB Fallback
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      MULTI-TENANCY
                    </span>
                    <span className="text-cyan-400 font-semibold">Zero-Leak Isolated</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Strict <code className="text-zinc-300">user_{"{username}"}</code> Namespacing
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      CYBER DEFENSE SUITE
                    </span>
                    <span className="text-emerald-400 font-semibold">32/32 Passing</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Magic-Byte, Rate Limits, XSS/SQLi Shields
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>EVAL: LLM-as-a-Judge</span>
                <span className="text-emerald-400">Faithfulness: 0.98</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
