import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Divyansh Sharma | Enterprise AI & LLM Systems Engineer",
  description:
    "Architecting production-grade RAG platforms, multi-tenant vector systems, and resilient full-stack applications with military-grade cyber defense.",
  keywords: [
    "Divyansh Sharma",
    "AI Engineer",
    "Full-Stack Developer",
    "Enterprise RAG",
    "Pinecone",
    "ChromaDB",
    "Groq LPU",
    "LLM Architecture",
    "Next.js",
    "FastAPI",
    "Neon PostgreSQL",
    "Cyber Defense AI"
  ],
  authors: [{ name: "Divyansh Sharma" }],
  creator: "Divyansh Sharma",
  openGraph: {
    title: "Divyansh Sharma | Enterprise AI & LLM Systems Engineer",
    description:
      "Production-grade RAG platforms with dual-engine vector stores, sub-50ms queries, ~300 tokens/sec LPU streaming, and automated 32-test cyber defense shields.",
    url: "https://divyansh.dev",
    siteName: "Divyansh Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Sharma | Enterprise AI & LLM Systems Engineer",
    description:
      "Architecting enterprise multi-tenant RAG systems, dual vector engines, and military-grade cyber defense.",
    creator: "@divyansh_ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans selection:bg-cyan-500 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
