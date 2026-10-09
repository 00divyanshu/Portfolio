import React, { useEffect } from "react";
import { X, Calendar, ExternalLink } from "lucide-react";

export interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[650px] max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                Schedule Technical Discovery Call
              </h3>
              <p className="text-[11px] text-zinc-400">
                20-minute discussion regarding architecture, RAG systems, or MVP scope
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
              title="Close Modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Calendly iframe */}
        <div className="flex-1 bg-zinc-950 w-full relative">
          <iframe
            src={calendlyUrl}
            title="Calendly Scheduling Appointment"
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Status Bar */}
        <div className="px-6 py-2.5 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>TIMEZONE: DETECTED LOCALLY</span>
          <span className="text-emerald-400">DIRECT CALENDAR ACCESS</span>
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
