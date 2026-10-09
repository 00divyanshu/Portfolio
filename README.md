# Divyansh Sharma — Enterprise AI & Full-Stack Systems Portfolio

A high-converting, modern developer portfolio crafted for **Divyansh Sharma**, an AI & Full-Stack Systems Engineer specializing in Enterprise LLM & RAG Architectures.

---

## ⚡ Core Engineering Highlights

- **Flagship Project:** Multi-Tenant Enterprise RAG Platform
  - **Dual-Engine Vector Store:** Primary Pinecone Serverless with local ChromaDB fallback.
  - **Ultra-Fast Inference:** Groq LPU (~300 tok/sec, Llama 3.3 70B) & Google Gemini 1.5 Flash.
  - **Automated Cyber Defense:** 32-test exploit suite (magic-byte file verification, brute-force IP rate limiting, path traversal shields, parameterized SQL, and XSS sanitization).
  - **Zero Cross-Tenant Leakage:** Cryptographic user namespace segregation (`user_{username}`).
  - **Evaluations:** Automated LLM-as-a-judge fidelity scoring across the RAG triad (Context Relevance 0.97, Groundedness 0.99, Answer Relevance 0.98).

---

## 🛠️ Tech Stack

- **Frontend & UX:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React
- **Interactive Demos:** Freeform interactive pseudo-shell terminal (`TerminalSimulator.tsx`) and animated SVG dataflow visualizer (`ArchitectureFlow.tsx`)
- **Backend & Conversion:** Serverless API route (`/api/contact`) with validation, in-page accessible Calendly discovery call modal
- **AI & Retrieval:** Pinecone, ChromaDB, Groq LPU, Google Gemini, LangChain, PyTest

---

## 🚀 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Turnkey Vercel Deployment

1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js 14 App Router and builds the application without extra configuration.

---

## 📁 Architecture Directory Structure

```text
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Serverless Contact API route
│   ├── globals.css              # Dark theme styling & custom scrollbars
│   ├── layout.tsx               # Root layout & OpenGraph/SEO metadata
│   └── page.tsx                 # Full portfolio layout & navigation
├── components/
│   ├── Hero.tsx                 # High-impact headline & live telemetry badge
│   ├── FlagshipProject.tsx      # Case study deep dive with interactive tabs
│   ├── TerminalSimulator.tsx    # Freeform interactive CLI simulator
│   ├── ArchitectureFlow.tsx     # Animated SVG dataflow visualizer
│   ├── Services.tsx             # Commercial client solution packages
│   ├── ClientServices.tsx       # Services wrapper component
│   ├── SkillsMatrix.tsx         # Categorized skills matrix with monospace chips
│   ├── TrustVault.tsx           # Security-first engineering trust pillars
│   ├── CalendlyModal.tsx        # In-page scheduling modal
│   ├── ContactFooter.tsx        # Direct inquiry form & conversion footer
│   └── index.ts                 # Barrel exports
├── .gsd/                        # GSD methodology specifications & roadmap
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript App Router configuration
├── tailwind.config.js           # Dark theme design system
└── vercel.json                  # Deployment configuration
```

---

## 📄 License & Attribution

Designed & Engineered for **Divyansh Sharma**.  
Zero Toys • Enterprise Scale • Production Rigor.
