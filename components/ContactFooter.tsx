import React, { useState } from "react";
import { Mail, Calendar, Github, Linkedin, ArrowRight, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import CalendlyModal from "./CalendlyModal";

export interface ContactFooterProps {
  calendlyUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  calendlyUrl = "https://calendly.com",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Secure RAG & Knowledge Vault",
    timeline: "Immediate (1-2 Weeks)",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Custom Secure RAG & Knowledge Vault",
        timeline: "Immediate (1-2 Weeks)",
        message: ""
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err: any) {
      console.error("[FORM_SUBMIT_ERROR]", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred while transmitting your inquiry.");
    }
  };

  return (
    <>
      <footer id="contact" className="bg-zinc-950 text-zinc-100 pt-24 pb-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
            
            {/* Left Column: Direct Booking & Value Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-300">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRY &amp; CALENDAR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something Resilient.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you need to architect a production-grade multi-tenant AI system, audit an existing RAG pipeline, 
                or bring a high-value MVP from zero to launch, let's discuss your timeline and technical scope.
              </p>

              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prefer a 20-Minute Technical Call?</h4>
                    <p className="text-xs text-zinc-400">Schedule directly in an interactive modal.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-md shadow-cyan-500/10 cursor-pointer"
                >
                  Schedule via Calendly Modal
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-700">•</span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NDA &amp; IP Protected</span>
                </span>
              </div>
            </div>

            {/* Right Column: Direct Commercial Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-6 font-mono flex items-center justify-between">
                  <span>INQUIRY_TRANSMISSION.spec</span>
                  <span className="text-[11px] text-zinc-500 font-normal">SLA: &lt; 24h Response</span>
                </h3>

                {status === "success" ? (
                  <div className="p-8 text-center space-y-3 bg-zinc-950/80 rounded-xl border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Inquiry Transmitted Successfully</h4>
                    <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                      Thank you. Your project brief has been logged via the API route. I will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-800/80 text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">NAME / COMPANY</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Vance / Acme Corp"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@acmecorp.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">ENGAGEMENT SCOPE</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        >
                          <option>Custom Secure RAG &amp; Knowledge Vault</option>
                          <option>Autonomous Agent Tooling &amp; Automation</option>
                          <option>Full-Stack AI MVP Production Architecture</option>
                          <option>Enterprise AI Architecture Advisory / Audit</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">TARGET TIMELINE</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        >
                          <option>Immediate (1-2 Weeks)</option>
                          <option>Within 1 Month</option>
                          <option>Flexible / Exploratory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">PROJECT OBJECTIVES &amp; CONSTRAINTS</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you are looking to build, any specific data constraints, and your desired success metrics..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-white disabled:opacity-50 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                          <span>Transmitting to API...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Project Specification</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
            <p>© {new Date().getFullYear()} Divyansh Sharma. Engineered for resilience and security.</p>
            <div className="flex items-center gap-4">
              <span className="text-zinc-600">ZERO TOYS</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-600">ENTERPRISE SCALE</span>
              <span className="text-zinc-600">•</span>
              <span className="text-emerald-500 font-semibold">PRODUCTION RIGOR</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Calendly In-Page Accessible Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={calendlyUrl}
      />
    </>
  );
};

export default ContactFooter;
