---
phase: 4
plan: 2
wave: 2
depends_on: ["1"]
files_modified: ["app/layout.tsx"]
autonomous: true

must_haves:
  truths:
    - "Application root layout defines structural semantics and global styling"
    - "SEO and OpenGraph metadata targets Enterprise AI / LLM Systems Engineering"
  artifacts:
    - "app/layout.tsx"
---

# Plan 4.2: SEO, OpenGraph Metadata & Layout Assembly

<objective>
Configure the root application layout to provide semantic structure, global styles, and enterprise-grade SEO/OpenGraph metadata.
Purpose: To ensure the portfolio ranks correctly for AI Engineering keywords and provides rich previews when shared on platforms like LinkedIn or X.
Output: A properly configured Next.js `app/layout.tsx`.
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/DECISIONS.md
</context>

<tasks>

<task type="auto">
  <name>Create Application Layout & Global SEO</name>
  <files>app/layout.tsx</files>
  <action>
    Create the Next.js `RootLayout` component.
    Define `metadata` object conforming to Next.js 14 metadata API.
    Include a compelling title (e.g., "Divyansh Sharma | Enterprise AI & LLM Systems Engineer"), description, OpenGraph (og:title, og:description, og:image placeholder), and twitter card details.
    Wrap `{children}` in a `<body>` tag with Tailwind classes: `bg-zinc-950 text-zinc-100 antialiased font-sans`.
    Import CSS (e.g. `./globals.css`) if required by the structure.
    AVOID: Hardcoding an absolute URL for OpenGraph images without a fallback or using outdated `next/head` (use exported `metadata`).
  </action>
  <verify>Check `<head>` tags in the browser or via `curl` to confirm title and OpenGraph meta properties render correctly.</verify>
  <done>layout.tsx exports metadata and wraps children in standard HTML structure.</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] `app/layout.tsx` is present and functional.
- [ ] `metadata` exports correct title and OpenGraph fields.
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
</success_criteria>
