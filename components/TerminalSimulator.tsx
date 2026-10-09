import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, CornerDownLeft, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

interface CommandLog {
  id: string;
  command: string;
  response: React.ReactNode;
  timestamp: string;
}

export const TerminalSimulator: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "init",
      command: "status",
      response: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-emerald-400 font-semibold">● RAG Pipeline: ACTIVE &amp; HEALTHY</p>
          <p>• Primary Vector Engine: <span className="text-cyan-400">Pinecone Serverless</span> (Latency: 38ms)</p>
          <p>• Redundant Fallback: <span className="text-amber-400">ChromaDB Local</span> (Sync Status: Ready)</p>
          <p>• LPU Inference: <span className="text-emerald-400">Groq LPU Llama 3.3 70B</span> (~304 tokens/sec)</p>
          <p>• Security Layer: <span className="text-indigo-400">32-Test Cyber Shield Active</span> (Zero Leaks)</p>
          <p className="text-zinc-500 pt-1">Type <code className="text-cyan-300">help</code> for list of executable commands.</p>
        </div>
      ),
      timestamp: "10:14:02"
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isProcessing]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const parts = trimmed.split(" ");
    const primaryCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (primaryCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setIsProcessing(true);
    setInput("");

    setTimeout(() => {
      let responseOutput: React.ReactNode;

      switch (primaryCmd) {
        case "help":
          responseOutput = (
            <div className="space-y-1.5 text-zinc-300 text-xs">
              <p className="text-cyan-400 font-bold mb-1">AVAILABLE COMMANDS:</p>
              <p><code className="text-emerald-400 font-bold">status</code> - Inspect real-time engine telemetry and dual vector health</p>
              <p><code className="text-emerald-400 font-bold">query [text]</code> - Dispatch semantic vector retrieval through cyber gateway</p>
              <p><code className="text-emerald-400 font-bold">eval</code> - Run automated LLM-as-a-judge faithfulness benchmark</p>
              <p><code className="text-emerald-400 font-bold">test</code> - Execute automated 32-test cyber defense exploit suite</p>
              <p><code className="text-emerald-400 font-bold">clear</code> - Flush terminal output buffer</p>
            </div>
          );
          break;

        case "status":
          responseOutput = (
            <div className="space-y-1 text-zinc-300 text-xs">
              <p className="text-emerald-400 font-semibold">● SYSTEM TELEMETRY AUDIT</p>
              <p>• Active Tenant: <code className="text-zinc-200">user_enterprise_prod</code></p>
              <p>• Vector Latency: <span className="text-cyan-400 font-bold">42ms</span> (Pinecone) / <span className="text-zinc-400">12ms (Chroma)</span></p>
              <p>• Generation Rate: <span className="text-emerald-400 font-bold">308.4 tokens/sec</span></p>
              <p>• Ingestion Filter: <span className="text-indigo-400 font-bold">Strict Magic-Byte Enabled</span></p>
            </div>
          );
          break;

        case "test":
          responseOutput = (
            <div className="space-y-1.5 text-xs text-zinc-300">
              <p className="text-indigo-400 font-bold">Running 32-test automated cyber defense suite...</p>
              <div className="space-y-1 text-zinc-400 font-mono text-[11px] bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                <p className="text-emerald-400">✓ [PASS] test_magic_byte_header_verification (PDF, DOCX, CSV, TXT, MD)</p>
                <p className="text-emerald-400">✓ [PASS] test_tenant_namespace_isolation (zero cross-tenant leakage)</p>
                <p className="text-emerald-400">✓ [PASS] test_sliding_window_rate_limiter (10 req/min threshold enforced)</p>
                <p className="text-emerald-400">✓ [PASS] test_path_traversal_shields (../../etc/shadow rejected)</p>
                <p className="text-emerald-400">✓ [PASS] test_sql_injection_and_xss_sanitization (payloads neutralized)</p>
              </div>
              <p className="text-emerald-400 font-bold pt-1">
                ======================== 32 passed in 1.38s ========================
              </p>
            </div>
          );
          break;

        case "eval":
          responseOutput = (
            <div className="space-y-1 text-xs text-zinc-300">
              <p className="text-cyan-400 font-bold">LLM-as-a-Judge Evaluation Benchmark (RAG Triad):</p>
              <div className="grid grid-cols-3 gap-2 my-1 text-center font-mono">
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block">Context Relevance</span>
                  <span className="text-emerald-400 font-bold text-sm">0.97</span>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block">Groundedness</span>
                  <span className="text-emerald-400 font-bold text-sm">0.99</span>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block">Answer Relevance</span>
                  <span className="text-emerald-400 font-bold text-sm">0.98</span>
                </div>
              </div>
              <p className="text-zinc-400">Zero hallucinations detected across 500 gold-standard queries.</p>
            </div>
          );
          break;

        case "query":
          const queryParam = args || "Q4 Cloud Infrastructure Compliance Audit";
          responseOutput = (
            <div className="space-y-1.5 text-xs text-zinc-300">
              <p className="text-cyan-400 font-medium">
                Dispatched Query: <span className="text-white">"{queryParam}"</span>
              </p>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1 text-[11px] font-mono">
                <p className="text-zinc-500">[1] Ingestion Gateway: Sanitized input (0 payload violations)</p>
                <p className="text-zinc-500">[2] Embedding Generator: text-embedding-004 (768 dimensions in 18ms)</p>
                <p className="text-zinc-500">[3] Vector Filter: namespace="user_enterprise_prod", similarity_threshold=0.82</p>
                <p className="text-emerald-400 font-semibold">[4] Retrieved 3 top-K chunks from Pinecone (latency: 41ms)</p>
                <p className="text-cyan-300 pt-1 leading-relaxed font-sans text-xs">
                  "Compliance confirmation: Data encryption at rest (AES-256) and in-transit (TLS 1.3) audited. 
                  Zero cross-tenant leakage observed under SOC2 Type II automated controls."
                </p>
              </div>
            </div>
          );
          break;

        default:
          responseOutput = (
            <p className="text-red-400 text-xs">
              Command not recognized: "{primaryCmd}". Type <code className="text-cyan-300 font-bold">help</code> for list of valid commands.
            </p>
          );
          break;
      }

      setHistory(prev => [
        ...prev,
        {
          id: `${Date.now()}`,
          command: trimmed,
          response: responseOutput,
          timestamp: now
        }
      ]);
      setIsProcessing(false);
    }, 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isProcessing) {
      handleCommand(input);
    }
  };

  const executePreset = (cmd: string) => {
    if (!isProcessing) {
      setInput(cmd);
      handleCommand(cmd);
    }
  };

  return (
    <div className="rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[480px]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-zinc-400 font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            rag_enterprise_shell v2.4 (sandbox)
          </span>
        </div>
        <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
          LIVE INTERACTIVE
        </span>
      </div>

      {/* Preset Command Chips for Quick Testing */}
      <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/60 flex items-center gap-2 overflow-x-auto text-[11px]">
        <span className="text-zinc-500 shrink-0">Try:</span>
        <button
          onClick={() => executePreset("status")}
          className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-cyan-300 transition-colors shrink-0"
        >
          status
        </button>
        <button
          onClick={() => executePreset("test")}
          className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-indigo-300 transition-colors shrink-0"
        >
          test (32 suite)
        </button>
        <button
          onClick={() => executePreset("query Q4 cloud audit")}
          className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-emerald-300 transition-colors shrink-0"
        >
          query [...]
        </button>
        <button
          onClick={() => executePreset("eval")}
          className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-amber-300 transition-colors shrink-0"
        >
          eval
        </button>
        <button
          onClick={() => executePreset("help")}
          className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 transition-colors shrink-0"
        >
          help
        </button>
      </div>

      {/* Scrollable output area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 leading-relaxed">
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-cyan-400 font-bold">divyansh@enterprise-rag:~$</span>
              <span className="text-zinc-100 font-semibold">{item.command}</span>
              <span className="text-zinc-600 text-[10px] ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l border-zinc-800/80">
              {item.response}
            </div>
          </div>
        ))}

        {isProcessing && (
          <div className="flex items-center gap-2 text-zinc-400 pl-4">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs text-cyan-300 font-mono">Processing engine instruction...</span>
          </div>
        )}

        <div ref={terminalEndRef} />
      </div>

      {/* Input row */}
      <div className="p-3 bg-zinc-900/80 border-t border-zinc-800 flex items-center gap-2">
        <span className="text-cyan-400 font-bold pl-1">divyansh@enterprise-rag:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'status', 'test', 'query', or 'eval'..."
          disabled={isProcessing}
          className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none font-mono text-xs"
        />
        <button
          onClick={() => handleCommand(input)}
          disabled={isProcessing || !input.trim()}
          className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-cyan-400 transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default TerminalSimulator;
