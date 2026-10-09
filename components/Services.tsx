import React from "react";
import { Database, Bot, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  badge: string;
  icon: React.ReactNode;
  idealFor: string;
  deliverables: string[];
  timeline: string;
}

export const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Custom Secure RAG & Knowledge Vaults",
      badge: "ENTERPRISE RETRIEVAL",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      idealFor: "Startups, law firms, and fintech teams with confidential docs requiring sub-50ms retrieval without data leaks.",
      deliverables: [
        "Multi-tenant vector pipeline (Pinecone Serverless + local fallback)",
        "Zero-trust multi-format parser (PDF, DOCX, CSV with magic-byte check)",
        "Strict tenant namespace isolation & RBAC access controls",
        "Automated LLM-as-a-judge faithfulness & hallucination eval"
      ],
      timeline: "2 – 3 Weeks"
    },
    {
      title: "Autonomous Agent Tooling & Workflow Automation",
      badge: "AI AUTOMATION",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      idealFor: "Operations-heavy companies seeking to replace fragile repetitive manual work with deterministic AI agents.",
      deliverables: [
        "Stateful agent workflows with tool calling & error recovery",
        "Ultra-fast inference routing via Groq LPU (~300 tok/s)",
        "Deterministic JSON schema enforcement & output guardrails",
        "Execution trace telemetry and fallback safety nets"
      ],
      timeline: "1 – 3 Weeks"
    },
    {
      title: "Full-Stack AI MVP Production Architecture",
      badge: "RAPID LAUNCH",
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      idealFor: "Founders needing to launch a production-grade, investor-ready AI SaaS product within weeks, not months.",
      deliverables: [
        "End-to-end full-stack app (Next.js + Python/FastAPI + PostgreSQL)",
        "Auth, subscription billing, and multi-tenant database partitioning",
        "32-test automated cyber defense suite against OWASP LLM exploits",
        "CI/CD deployment to Vercel and serverless cloud infrastructure"
      ],
      timeline: "3 – 4 Weeks"
    }
  ];

  return (
    <section id="services" className="bg-zinc-950 text-zinc-100 py-24 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-300 mb-3">
            <span>COMMERCIAL CLIENT SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Engineering for Fast-Moving Teams
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            No fragile toy prototypes. I deliver hardened, secure, and production-tested systems tailored to your business metrics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <div className="mb-6">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Target Fit</span>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">Deliverables</span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Typical Delivery</span>
                  <span className="font-mono text-xs text-zinc-300 font-semibold">{service.timeline}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Inquire Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
