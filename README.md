# Divyansh Sharma — AI & Data Engineering Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-Editorial%20UI-0F3D3E?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Swiss%20Minimalism-3D5A5B?style=for-the-badge&logo=tailwindcss&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-3.10%2B-0F3D3E?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

> Engineering reliable **multi-tenant RAG architectures**, **vector search systems**, and **operational intelligence engines** with production-grade security and real-world constraints.

---

## Overview & Design Philosophy

This portfolio is crafted with a high-contrast **Swiss editorial aesthetic** inspired by modern design studios—prioritizing readability, generous breathing room, and tactile micro-interactions without visual clutter.

- **Warm Ivory (`#FAF7F0`) & Ivory-Sand (`#F2ECE1`):** Soft, paper-inspired surfaces that keep long-form technical reading comfortable.
- **Deep Teal Green (`#0F3D3E`) & Teal-Slate (`#3D5A5B`):** Grounded structural typography and crisp hairline borders (`#E2DBD0`).
- **Coral Orange (`#E85D3F`):** Intentional focal accents for primary calls-to-action, active status indicators, and interactive highlights.
- **Tactile Motion:** Smooth scroll-triggered reveals (`cubic-bezier(0.22, 1, 0.36, 1)`), subtle preview frame hover zooms, and magnetic link transitions.

---

## Featured Work

### 1. Enterprise AI Assistant & Multi-Tenant Document Intelligence Platform
- **Live App:** [Launch on Streamlit Cloud ↗](https://00divyanshu-rag-pipeline--app-dmgh2v.streamlit.app/)
- **Source Code:** [github.com/00divyanshu/RAG-Pipeline-](https://github.com/00divyanshu/RAG-Pipeline-)
- **Architecture Summary:**
  - **Dual-Engine Vector Retrieval & Inference:** Combines **Pinecone Serverless** with local **ChromaDB** fallback, powered by ultra-low latency **Groq LPU** (`Llama 3.3 70B` at ~300 tok/sec) and **Google Gemini** (`gemini-1.5-flash` & `text-embedding-004`).
  - **Enterprise Persistence:** Multi-format ingestion (`PDF`, `DOCX`, `CSV`, `TXT`, `MD`) backed by **Neon Serverless PostgreSQL** and SQLite fallbacks with strict `user_{username}` namespace isolation.
  - **Cyber Defense Guardrails:** Sliding-window IP rate limiting, binary magic-byte file inspection, path traversal shields, XSS/SQLi sanitization, and **32 automated security/unit tests**.

### 2. OpsCapacity — Operational Load & Flow Intelligence Engine
- **Live App:** [Launch on Streamlit Cloud ↗](https://00divyanshu-system-capacity-care-load-a-appstreamlit-app-5fmusb.streamlit.app/)
- **Source Code:** [github.com/00divyanshu/opspulse-capacity-intelligence](https://github.com/00divyanshu/opspulse-capacity-intelligence)
- **Architecture Summary:**
  - **Real-Time Stress & KPI Engine:** Computes Net Intake Pressure, Discharge Offset Ratios, and Care Load Volatility Index to classify facility states (`Normal`, `Watch`, `Strained`, `Relief`).
  - **Multi-Model Forecasting:** Benchmarks and visualizes 30-day demand trajectories using **XGBoost**, **Prophet**, **Random Forest**, and **Ridge Regression**.
  - **Executive Analytics Console:** Dynamic daily/weekly/monthly granularity toggles, customizable rolling averages (7–30 days), and one-click filtered CSV exports.

---

## Quickstart & Local Setup

Run the portfolio locally with Streamlit in 3 steps:

```bash
# 1. Clone the repository
git clone https://github.com/00divyanshu/Portfolio.git
cd Portfolio

# 2. Install dependencies
pip install -r requirements.txt

# 3. Launch the Streamlit app
streamlit run app.py
```

---

## Connect

- **GitHub:** [@00divyanshu](https://github.com/00divyanshu)
- **LinkedIn:** [in/divyanshh-sharma](https://www.linkedin.com/in/divyanshh-sharma)
- **Instagram:** [@divyan.shhh__](https://www.instagram.com/divyan.shhh__)
- **Email:** [divyanshu09n@gmail.com](mailto:divyanshu09n@gmail.com)
