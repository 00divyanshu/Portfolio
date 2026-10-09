import React from "react";
import { ShieldCheck, Lock, Activity, RefreshCw } from "lucide-react";

export const TrustVault: React.FC = () => {
  const pillars = [
    {
      title: "Zero Data-Leakage Multi-Tenancy",
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      description: "Enterprise data never crosses boundaries. Vector queries enforce strict user namespace segregation, and database transactions enforce cryptographically verified tenant partitioning."
    },
    {
      title: "Binary & Ingestion Verification",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      description: "Preventing file-based exploits and prompt injection vectors through deep magic-byte inspection. Executables disguised as PDFs or CSVs are rejected prior to touching memory or disk."
    },
    {
      title: "Dual-Engine High-Availability Fallback",
      icon: <RefreshCw className="w-5 h-5 text-indigo-400" />,
      description: "No single point of failure. If cloud vector tiers (Pinecone) or relational layers (Neon) degrade, local ChromaDB and SQLite fallbacks ensure uninterrupted query continuity."
    },
    {
      title: "Empirical & Quantitative Verification",
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      description: "Every retrieval pipeline is tested against automated benchmark suites and LLM-as-a-judge evaluation frameworks to guarantee sub-50ms latency, high faithfulness, and zero hallucinations."
    }
  ];

  return (
    <section id="trust" className="bg-zinc-950 text-zinc-100 py-24 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>TRUST &amp; DEFENSE VAULT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security-First Engineering: Why Work With Me?
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            In an industry flooded with fragile wrapper prototypes, I build AI systems designed to withstand real-world attacks, 
            protect proprietary client IP, and maintain continuous operational uptime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all space-y-4"
            >
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 w-fit">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustVault;
