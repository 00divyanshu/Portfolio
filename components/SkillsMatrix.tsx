import React from "react";
import { Cpu, Server, Shield, Monitor } from "lucide-react";

export const SkillsMatrix: React.FC = () => {
  const categories = [
    {
      title: "LLMs, Vectors & Retrieval",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      skills: [
        "Multi-Tenant RAG",
        "Pinecone Serverless",
        "ChromaDB",
        "Groq LPU Inference (~300 tok/s)",
        "Google Gemini API (1.5 Flash)",
        "Llama 3.3 70B",
        "text-embedding-004",
        "LLM-as-a-Judge Evaluation",
        "LangChain & Custom Chains"
      ]
    },
    {
      title: "Backend & Data Infrastructure",
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      skills: [
        "Python (3.10+ / Pyright)",
        "Neon PostgreSQL (Serverless)",
        "SQLite Local Fallback",
        "FastAPI & REST APIs",
        "Asynchronous Event Loops",
        "Stateful Multi-Tenant Schemas",
        "Streaming Response Protocols",
        "Automated CI/CD Pipelines"
      ]
    },
    {
      title: "Cyber Defense & Application Security",
      icon: <Shield className="w-4 h-4 text-indigo-400" />,
      skills: [
        "32-Test Cyber Defense Suite",
        "Magic-Byte Binary Inspection",
        "Strict Namespace Segregation",
        "Sliding-Window IP Rate Limiting",
        "Path Traversal Shields",
        "XSS & SQL Injection Sanitization",
        "OWASP Top 10 for LLMs",
        "Cryptographic Hash Verification"
      ]
    },
    {
      title: "Frontend & Full-Stack Prototyping",
      icon: <Monitor className="w-4 h-4 text-amber-400" />,
      skills: [
        "Next.js 14+ (App Router)",
        "React & TypeScript",
        "Tailwind CSS",
        "Streamlit Telemetry Dashboards",
        "Dark/Light Dynamic Theming",
        "Real-Time WebSocket Streaming",
        "Responsive Mobile-First UX",
        "Accessible WCAG Standards"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-zinc-950 text-zinc-100 py-24 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-3">
              <span>SYSTEM ARCHITECTURE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills &amp; Stack Matrix
            </h2>
            <p className="mt-3 text-zinc-400 text-base max-w-2xl">
              Engineered with depth across retrieval pipelines, distributed storage, defensive cyber shields, and responsive web clients.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            AUDITED FOR PRODUCTION RIGOR
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-800/80">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                  {cat.icon}
                </div>
                <h3 className="font-mono text-sm font-bold text-zinc-200 uppercase tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsMatrix;
