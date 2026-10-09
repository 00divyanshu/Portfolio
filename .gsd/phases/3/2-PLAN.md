---
phase: 3
plan: 2
wave: 1
gap_closure: false
depends_on: []
---

# Plan 3.2: Architecture Flow Diagram & Telemetry Simulator

## Objective
Implement an animated SVG dataflow architecture visualizer (`ArchitectureFlow.tsx`) to illustrate the 4-stage processing pipeline (Client Ingestion -> Cyber Gateway -> Dual Vector Engine -> Relational Audit). This visually enforces the high-throughput, secure RAG capabilities.

## Context
Load these files for context:
- .gsd/SPEC.md
- .gsd/DECISIONS.md (DECISION-003)
- components/FlagshipProject.tsx

## Tasks

<task type="auto">
  <name>Implement ArchitectureFlow visualizer component</name>
  <files>
    components/ArchitectureFlow.tsx
  </files>
  <action>
    Create a new React client component (`ArchitectureFlow.tsx`) mapping the 4-stage architecture.
    
    Steps:
    1. Layout the 4 stages using Flexbox/Grid: Client Ingestion, Cyber Gateway, Dual Vector Engine, Relational Audit.
    2. Add embedded SVG paths to represent data flowing between the stages.
    3. Use Tailwind CSS animations (`animate-pulse`, or custom keyframes) to simulate "packets" moving along the paths.
    4. Include visual telemetry overlays (e.g., "~300 tok/s", "Latency: 45ms") near the nodes.
    
    AVOID: Heavy external charting/diagramming libraries (like D3 or ReactFlow) because custom SVGs with Tailwind are lighter and fit the bespoke aesthetic.
    USE: Tailwind's built-in animations and arbitrary values for quick, performant SVG animation.
  </action>
  <verify>
    grep -q "svg" components/ArchitectureFlow.tsx && npm run lint
  </verify>
  <done>
    Component exports without errors and contains animated SVG elements for data flow simulation.
  </done>
</task>

<task type="auto">
  <name>Integrate ArchitectureFlow into FlagshipProject</name>
  <files>
    components/FlagshipProject.tsx
  </files>
  <action>
    Mount the new `ArchitectureFlow` component into the `FlagshipProject` section.
    
    Steps:
    1. Import `ArchitectureFlow`.
    2. Position it adjacent to or below the `TerminalSimulator` (depending on grid layout) inside `FlagshipProject.tsx`.
    3. Ensure the diagram scales responsively down to mobile viewports (e.g., stacking vertically if needed).
    
    AVOID: Fixed pixel widths on the SVG because it breaks mobile responsiveness.
    USE: `w-full` or percentages for the SVG container, letting the viewbox handle internal scaling.
  </action>
  <verify>
    npm run build
  </verify>
  <done>
    The Next.js build succeeds, meaning `FlagshipProject.tsx` successfully integrates the architecture flow component with zero type errors.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] 4-stage processing pipeline is visually represented.
- [ ] Data flow animation and telemetry are functioning.
- [ ] Diagram scales responsively in `FlagshipProject.tsx`.

## Success Criteria
- [ ] All tasks verified passing
- [ ] Must-haves confirmed
- [ ] No regressions in tests
