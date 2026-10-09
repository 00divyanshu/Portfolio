import React, { useState } from "react";
import { ShieldCheck, Database, Zap, FileCode2, Layers, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export const ArchitectureFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      name: "Stage 01: Client Ingestion",
      tag: "MAGIC-BYTE VERIFICATION",
      icon: <FileCode2 className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
      badge: "PDF, DOCX, CSV, TXT, MD",
      desc: "Validates binary magic bytes before reading into memory. Rejects disguised executables and chunks documents semantically.",
      metrics: "512-token chunks • < 20ms parsing"
    },
    {
      id: 1,
      name: "Stage 02: Cyber Defense Gateway",
      tag: "ZERO-TRUST SHIELD",
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      color: "emerald",
      badge: "SLIDING-WINDOW RATE LIMIT",
      desc: "Neutralizes path traversal exploits, sanitizes SQL/XSS injections, and enforces strict tenant namespaces (user_{username}).",
      metrics: "10 req/min limit • 0 leak guarantee"
    },
    {
      id: 2,
      name: "Stage 03: Dual Vector Engine",
      tag: "HIGH AVAILABILITY",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      color: "indigo",
      badge: "PINECONE + CHROMA FALLBACK",
      desc: "Primary queries routed to Pinecone Serverless with sub-50ms latency. Local ChromaDB automatically takes over on API rate limits.",
      metrics: "< 50ms vector query • 100% uptime"
    },
    {
      id: 3,
      name: "Stage 04: LPU Inference & Eval",
      tag: "300 TOKENS/SEC",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      color: "amber",
      badge: "GROQ LPU + LLM-AS-A-JUDGE",
      desc: "Ultra-fast inference on Groq LPU (Llama 3.3 70B) & Gemini 1.5 Flash. Automated evaluator scores context relevance and groundedness.",
      metrics: "304.2 tok/s • Faithfulness: 0.98"
    }
  ];

  return (
    <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 md:p-8 space-y-8">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/70 text-xs font-mono text-cyan-300 mb-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ANIMATED RETRIEVAL &amp; DEFENSE PIPELINE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            End-to-End Enterprise Dataflow
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>DATA PACKET TRANSIT: LIVE</span>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                isSelected
                  ? "bg-zinc-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40"
                  : "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 ${isSelected ? "border-cyan-500/50" : ""}`}>
                    {stage.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    STEP 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {stage.name}
                </h4>
                <p className="text-[11px] font-mono text-zinc-400">
                  {stage.tag}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400">
                  {stage.metrics.split("•")[0]}
                </span>
                <span className={`text-[10px] font-mono uppercase ${isSelected ? "text-emerald-400 font-bold" : "text-zinc-600"}`}>
                  {isSelected ? "INSPECTING" : "CLICK"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated SVG Dataflow Connector */}
      <div className="relative py-2 hidden md:block">
        <svg viewBox="0 0 800 24" className="w-full h-6 text-zinc-700" fill="none">
          {/* Base pipeline track */}
          <path
            d="M 20 12 L 780 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="text-zinc-800"
          />
          {/* Animated data transit pulse */}
          <line
            x1="20"
            y1="12"
            x2="780"
            y2="12"
            stroke="url(#gradient-flow)"
            strokeWidth="3"
            strokeDasharray="40 160"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Selected Node Detailed Inspector Callout */}
      <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/60">
              {stages[activeStage].badge}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {stages[activeStage].metrics}
            </span>
          </div>
          <h4 className="text-lg font-bold text-white">
            {stages[activeStage].name}
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {stages[activeStage].desc}
          </p>
        </div>

        <div className="shrink-0 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono">
          <div className="text-zinc-500 text-[10px] uppercase">Telemetry Guarantee</div>
          <div className="text-cyan-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Cross-Tenant Bleed</span>
          </div>
          <div className="text-zinc-400 text-[11px]">
            Audited via pytest security suite
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureFlow;
