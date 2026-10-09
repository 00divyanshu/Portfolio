# DECISIONS.md — Architecture Decision Records

> **Purpose**: Log significant technical decisions and their rationale.

## [DECISION-001] Dual Positioning for Commercial Freelance and Enterprise AI/ML

**Date**: 2026-10-09
**Status**: Accepted

### Context
Divyansh Sharma needs to win high-ticket client projects today while simultaneously signaling elite architectural depth to enterprise recruiters and AI tech leads.

### Decision
Frame every section around measurable business ROI (latency, throughput, data protection) backed by hardcore engineering metrics (sub-50ms vector search, 300 tok/sec, 32 automated security tests, multi-tenancy).

### Rationale
Startups want rapid, secure execution; enterprise engineering teams want production rigor and defensive engineering. Both respect low latency, verifiable security, and scalable multi-tenant architecture.

---

## [DECISION-002] Next.js 14+ with Tailwind CSS & Lucide Icons

**Date**: 2026-10-09
**Status**: Accepted

### Context
Need a modern, fast, SEO-friendly, and maintainable frontend component architecture.

### Decision
Use Next.js 14 App Router, TypeScript, Tailwind CSS, and Lucide Icons.

### Rationale
Industry standard, fast SSR/static optimization, minimal bundle overhead, seamless deployment on Vercel or modern edge hosts.

---

## [DECISION-003] Phase 3 Interactive Elements — Freeform Terminal & Animated Dataflow

**Date**: 2026-10-09
**Status**: Accepted

### Context
Phase 3 requires an interactive terminal and architectural visualizer to prove technical rigor and create an engaging demo for prospective clients and technical recruiters.

### Decision
1. **Interactive Terminal Widget:** Implement a freeform pseudo-shell (Option B) supporting commands like `help`, `query`, `eval`, `status`, `test`, and `clear` with stateful command history and realistic simulated streaming responses.
2. **Architecture Visualizer:** Implement an animated dataflow visualization (Option B) featuring packet transit animations across the 4 stages (Client Ingestion -> Cyber Gateway -> Dual Vector Engine -> Relational Audit) with live telemetry pulse indicators.

### Rationale
A responsive freeform terminal delivers maximum interactivity and technical impression, letting visitors test the simulated CLI engine hands-on. The animated SVG/CSS dataflow immediately communicates real-time throughput (~300 tok/s) and cyber defense filtering visually.

### Consequences
Requires maintaining client-side command parsing and clean mobile fallbacks for the interactive terminal and animated SVGs.
