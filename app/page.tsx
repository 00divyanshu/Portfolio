import React from "react";
import { 
  Hero, 
  FlagshipProject, 
  Services, 
  SkillsMatrix, 
  TrustVault, 
  ContactFooter 
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-zinc-950 font-sans antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-sm font-bold tracking-tight text-white">
              DIVYANSH<span className="text-zinc-500">.SHARMA</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#flagship-architecture" className="hover:text-white transition-colors">
              01. ARCHITECTURE
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              02. SERVICES
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              03. SKILLS
            </a>
            <a href="#trust" className="hover:text-white transition-colors">
              04. TRUST &amp; DEFENSE
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              05. CONTACT
            </a>
          </nav>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs font-mono font-medium text-zinc-200 transition-colors"
          >
            LET'S TALK
          </a>
        </div>
      </header>

      {/* Page Sections */}
      <Hero />
      <FlagshipProject />
      <Services />
      <SkillsMatrix />
      <TrustVault />
      <ContactFooter />
    </main>
  );
}
