---
phase: 3
plan: 1
wave: 1
gap_closure: false
depends_on: []
---

# Plan 3.1: Interactive CLI Terminal Component

## Objective
Implement a freeform pseudo-shell terminal widget (`TerminalSimulator.tsx`) to showcase technical depth. It will support specific commands (`help`, `query`, `eval`, `status`, `test`, `clear`) and simulate streaming responses to prove capability to enterprise engineers.

## Context
Load these files for context:
- .gsd/SPEC.md
- .gsd/DECISIONS.md (DECISION-003)
- components/FlagshipProject.tsx

## Tasks

<task type="auto">
  <name>Implement TerminalSimulator component</name>
  <files>
    components/TerminalSimulator.tsx
  </files>
  <action>
    Create a new React client component (`TerminalSimulator.tsx`) that functions as a pseudo-shell.
    
    Steps:
    1. Define the UI container: strict dark mode (zinc-950), glowing borders (emerald/cyan), monospace text.
    2. Add state management for `history` (array of input/output pairs), `currentInput` (string), and `isProcessing` (boolean).
    3. Implement a command parser that handles `help`, `query [arg]`, `eval [arg]`, `status`, `test`, and `clear`.
    4. Provide mock simulated responses for each supported command. Add a simulated delay or typewriter effect for realism.
    
    AVOID: Complex actual parsing libraries because a simple switch/regex handles these few commands perfectly.
    USE: `useRef` for auto-scrolling to the bottom on new output because it keeps the latest command visible on mobile/desktop.
  </action>
  <verify>
    grep -q "switch" components/TerminalSimulator.tsx && npm run lint
  </verify>
  <done>
    Component exports without errors and implements the required 6 commands.
  </done>
</task>

<task type="auto">
  <name>Integrate Terminal into FlagshipProject</name>
  <files>
    components/FlagshipProject.tsx
  </files>
  <action>
    Mount the new `TerminalSimulator` component into the existing `FlagshipProject` section.
    
    Steps:
    1. Import `TerminalSimulator`.
    2. Replace any placeholder terminal section in `FlagshipProject` with the new component.
    3. Ensure layout constraints (max-height, grid placement) preserve the responsive design on both mobile and desktop.
    
    AVOID: Unbounded heights because it can break the page flow on mobile.
    USE: `overflow-y-auto` with a fixed or max-height for the terminal container.
  </action>
  <verify>
    npm run build
  </verify>
  <done>
    The Next.js build succeeds, meaning `FlagshipProject.tsx` successfully integrates the terminal component with zero type errors.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] Terminal supports `help`, `query`, `eval`, `status`, `test`, and `clear`.
- [ ] Component is successfully integrated into `FlagshipProject.tsx`.
- [ ] Terminal layout is robust and mobile-friendly.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
