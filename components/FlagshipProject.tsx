import React, { useState } from "react";
import { 
  ShieldCheck, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  Server, 
  Database, 
  Lock, 
  Zap, 
  Layers, 
  FileCode2, 
  Activity,
  Code2,
  Copy,
  Check
} from "lucide-react";

export interface FlagshipProjectProps {
  githubUrl?: string;
  demoUrl?: string;
}

export const FlagshipProject: React.FC<FlagshipProjectProps> = ({
  githubUrl = "https://github.com/divyansh/enterprise-rag-platform",
  demoUrl = "https://rag-demo.example.com",
}) => {
  const [activeTab, setActiveTab] = useState<"architecture" | "security" | "cli">("architecture");
  const [cliCopied, setCliCopied] = useState(false);

  const cliSnippet = `# 1. Clone & initialize security-isolated environment
git clone https://github.com/divyansh/enterprise-rag-platform.git
cd enterprise-rag-platform && python -m venv .venv && source .venv/bin/activate

# 2. Run automated 32-test cyber defense verification suite
pytest tests/test_security_suite.py -v
# Output:
# [PASS] test_magic_byte_binary_inspection (PDF, DOCX, CSV, TXT, MD)
# [PASS] test_tenant_namespace_isolation_leakage (user_alice vs user_bob)
# [PASS] test_ip_bruteforce_rate_throttling (10 req/min limit)
# [PASS] test_path_traversal_shields (../../etc/passwd rejected)
# [PASS] test_xss_and_parameterized_sql_sanitization (payload neutral)
# ======================== 32 passed in 1.42s ========================

# 3. Launch with Dual-Engine Vector Tier (Pinecone + Chroma Fallback)
python -m rag_engine.cli --tenant user_enterprise_01 --query "Q4 cloud risk audit"`;

  const copyCli = () => {
    navigator.clipboard.writeText(cliSnippet);
    setCliCopied(true);
    setTimeout(() => setCliCopied(false), 2000);
  };

  return (
    <section id="flagship-architecture" className="bg-zinc-950 text-zinc-100 py-24 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>FLAGSHIP ARCHITECTURAL CASE STUDY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Multi-Tenant Enterprise RAG Platform
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-3xl">
              High-throughput knowledge retrieval engineered for regulated enterprises. Featuring zero-leak tenant isolation, 
              dual-engine resilience, and an automated 32-test defensive cyber shield.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-emerald-400 hover:bg-emerald-300 text-zinc-950 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Deployment
            </a>
          </div>
        </div>

        {/* Executive Benchmark Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 relative overflow-hidden">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Vector Query Latency</div>
            <div className="mt-2 text-3xl font-extrabold text-cyan-400 font-mono">&lt; 50ms</div>
            <div className="mt-1 text-xs text-zinc-400">Pinecone Serverless + local ChromaDB fallback</div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 relative overflow-hidden">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Inference Speed</div>
            <div className="mt-2 text-3xl font-extrabold text-emerald-400 font-mono">~300 tok/s</div>
            <div className="mt-1 text-xs text-zinc-400">Groq LPU (Llama 3.3 70B) &amp; Gemini 1.5 Flash</div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 relative overflow-hidden">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Automated Cyber Shield</div>
            <div className="mt-2 text-3xl font-extrabold text-indigo-400 font-mono">32 / 32 Passed</div>
            <div className="mt-1 text-xs text-zinc-400">Magic-byte, rate-limiting, injection defenses</div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 relative overflow-hidden">
            <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Tenant Segregation</div>
            <div className="mt-2 text-3xl font-extrabold text-amber-400 font-mono">100% Zero-Leak</div>
            <div className="mt-1 text-xs text-zinc-400">Strict metadata namespace isolation</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 mt-12 mb-8">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`pb-4 px-4 text-sm font-mono flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "architecture"
                ? "border-cyan-400 text-cyan-400 font-bold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Server className="w-4 h-4" />
            1. System Architecture Pipeline
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`pb-4 px-4 text-sm font-mono flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "security"
                ? "border-emerald-400 text-emerald-400 font-bold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            2. 32-Test Cyber Defense Suite
          </button>

          <button
            onClick={() => setActiveTab("cli")}
            className={`pb-4 px-4 text-sm font-mono flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "cli"
                ? "border-indigo-400 text-indigo-400 font-bold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Terminal className="w-4 h-4" />
            3. CLI &amp; Verification Terminal
          </button>
        </div>

        {/* Tab 1: Architecture Pipeline */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Layer 1: Ingestion */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase mb-3">
                  <FileCode2 className="w-4 h-4" />
                  Stage 01: Ingestion
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Multi-Format Pipeline</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Ingests PDF, DOCX, CSV, TXT, and Markdown. Validates binary headers prior to disk touching.
                </p>
                <ul className="text-xs font-mono text-zinc-400 space-y-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Magic-byte verification
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Semantic chunking (512 tokens)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> text-embedding-004
                  </li>
                </ul>
              </div>

              {/* Layer 2: Defense Gateway */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase mb-3">
                  <Lock className="w-4 h-4" />
                  Stage 02: Gateway
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Defense Shield</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Blocks malicious payloads, adversarial prompts, and unauthorized cross-tenant queries.
                </p>
                <ul className="text-xs font-mono text-zinc-400 space-y-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> IP rate throttling (sliding window)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Strict path traversal filters
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SQL/XSS input sanitization
                  </li>
                </ul>
              </div>

              {/* Layer 3: Dual Vector & Inference */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase mb-3">
                  <Zap className="w-4 h-4" />
                  Stage 03: Dual Engine
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Vector &amp; Inference</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Dual-tier high-availability architecture prevents vendor lock-in and outages.
                </p>
                <ul className="text-xs font-mono text-zinc-400 space-y-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Pinecone Serverless (Primary)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> ChromaDB (Local fallback)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Groq LPU (~300 tok/s Llama 3.3)
                  </li>
                </ul>
              </div>

              {/* Layer 4: Audit & Relational */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase mb-3">
                  <Database className="w-4 h-4" />
                  Stage 04: Storage &amp; Eval
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Relational &amp; Judge</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Transactional metadata storage paired with automated LLM-as-a-judge fidelity scoring.
                </p>
                <ul className="text-xs font-mono text-zinc-400 space-y-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Neon PostgreSQL (Serverless)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> SQLite zero-dependency fallback
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> LLM-as-a-Judge Eval (RAG Triad)
                  </li>
                </ul>
              </div>

            </div>

            {/* Problem & Solution Callout Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-sm">
              <div>
                <h4 className="text-zinc-200 font-mono font-semibold text-xs tracking-wider uppercase text-red-400 mb-2">
                  The Problem in Enterprise RAG
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Most AI prototypes store all documents in a single shared vector index with zero tenant boundaries. 
                  A prompt injection or faulty metadata filter exposes sensitive financial or employee data to unauthorized users. 
                  Furthermore, relying solely on cloud vector APIs introduces single-point-of-failure vulnerabilities when APIs rate limit.
                </p>
              </div>
              <div>
                <h4 className="text-zinc-200 font-mono font-semibold text-xs tracking-wider uppercase text-emerald-400 mb-2">
                  The Architectural Solution
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  This system enforces cryptographic tenant boundaries (<code className="text-zinc-300 font-mono">user_{"{username}"}</code>) 
                  at both the vector index and SQL tiers. If Pinecone or Neon degrades, the system automatically falls back to local ChromaDB and SQLite 
                  with zero downtime. Every generation is benchmarked using an automated LLM evaluation judge.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 32-Test Cyber Defense Suite */}
        {activeTab === "security" && (
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Zero-Trust Automated Cyber Defense Suite
                </h4>
                <p className="text-sm text-zinc-400 mt-1">
                  Built to defend against prompt injection, unvetted payload execution, and cross-tenant leakage.
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 self-start">
                32 / 32 AUDIT PASSED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="font-mono text-xs text-cyan-400 font-semibold mb-1">DEFENSE 01: MAGIC-BYTE VERIFICATION</div>
                <p className="text-xs text-zinc-300">
                  Inspects actual binary headers of incoming files. Rejects disguised executable payloads even if renamed to <code className="text-zinc-400">.pdf</code> or <code className="text-zinc-400">.txt</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="font-mono text-xs text-emerald-400 font-semibold mb-1">DEFENSE 02: TENANT NAMESPACE ISOLATION</div>
                <p className="text-xs text-zinc-300">
                  Enforces strict partition keys at query dispatch. User A cannot access User B vectors even if crafting malicious query embeddings or prompt injections.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="font-mono text-xs text-indigo-400 font-semibold mb-1">DEFENSE 03: SLIDING WINDOW RATE THROTTLING</div>
                <p className="text-xs text-zinc-300">
                  In-memory and Redis-compatible sliding window limiter mitigates denial-of-wallet attacks and LLM API exhaustion.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="font-mono text-xs text-amber-400 font-semibold mb-1">DEFENSE 04: SANITIZED PARAMETERIZED QUERIES</div>
                <p className="text-xs text-zinc-300">
                  Complete isolation from raw SQL strings. All relational operations use parameterized transactions with cryptographic hashing for audit verification.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CLI & Verification Terminal */}
        {activeTab === "cli" && (
          <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>terminal_verification.sh</span>
              </div>
              <button
                onClick={copyCli}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
              >
                {cliCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{cliCopied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre className="p-5 text-zinc-300 overflow-x-auto leading-relaxed bg-zinc-950/90">
              <code>{cliSnippet}</code>
            </pre>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-zinc-500 uppercase mr-2">Core Tech:</span>
          {[
            "Python 3.10+",
            "Pinecone Serverless",
            "ChromaDB",
            "Neon PostgreSQL",
            "Groq LPU",
            "Llama 3.3 70B",
            "Gemini 1.5 Flash",
            "text-embedding-004",
            "LangChain",
            "PyTest 32-Suite",
            "Streamlit UI"
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FlagshipProject;
