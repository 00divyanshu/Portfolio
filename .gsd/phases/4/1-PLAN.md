---
phase: 4
plan: 1
wave: 1
depends_on: []
files_modified: ["app/api/contact/route.ts", "components/CalendlyModal.tsx", "components/ContactFooter.tsx"]
autonomous: true

must_haves:
  truths:
    - "Direct inquiry form transmits data successfully to the API endpoint"
    - "Calendly booking modal can be triggered and closed seamlessly"
  artifacts:
    - "app/api/contact/route.ts"
    - "components/CalendlyModal.tsx"
---

# Plan 4.1: Direct Inquiry API & Calendly Integration

<objective>
Implement the conversion layer mechanics by creating a robust API route for inquiries, a responsive Calendly modal, and wiring them into the ContactFooter component.
Purpose: To allow high-ticket prospects to securely submit inquiries or book a call directly from the portfolio.
Output: API endpoint, Calendly modal component, and an integrated ContactFooter.
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/DECISIONS.md
- components/ContactFooter.tsx
</context>

<tasks>

<task type="auto">
  <name>Create Contact API Route</name>
  <files>app/api/contact/route.ts</files>
  <action>
    Create a Next.js App Router POST endpoint at `/api/contact`.
    Accept JSON payload: { name, email, projectType, timeline, message }.
    Validate the payload ensuring all fields are present (return 400 if missing).
    Simulate processing (e.g., await 1000ms delay) and return a 200 OK with a success message.
    AVOID: Complex email integrations like SendGrid/Resend in this version; stick to a robust simulated success response as the MVP.
  </action>
  <verify>curl -X POST -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","projectType":"RAG","timeline":"Immediate","message":"Hi"}' http://localhost:3000/api/contact returns 200</verify>
  <done>Endpoint exists and handles valid/invalid JSON payloads correctly.</done>
</task>

<task type="auto">
  <name>Create Calendly Modal Component</name>
  <files>components/CalendlyModal.tsx</files>
  <action>
    Create a reusable modal component using React portal or simple conditional rendering.
    It should take `isOpen`, `onClose`, and `calendlyUrl` props.
    Implement a dark backdrop with blur (`bg-black/60 backdrop-blur-sm`).
    Include a responsive container for the Calendly iframe and an accessible X close button (using Lucide React `X` icon).
    AVOID: Unnecessary third-party modal libraries. Use vanilla React state and Tailwind.
  </action>
  <verify>Component can be mounted in a test page and toggles visibility via props.</verify>
  <done>CalendlyModal.tsx exists, supports close events, and renders the iframe.</done>
</task>

<task type="auto">
  <name>Integrate Conversion Mechanics in Footer</name>
  <files>components/ContactFooter.tsx</files>
  <action>
    Update `handleSubmit` to POST formData to `/api/contact` using fetch.
    Manage loading/submitting states gracefully. Show error toasts/messages if the fetch fails, and the success state if it succeeds.
    Import `CalendlyModal` and render it at the root of the component.
    Wire the "Schedule via Calendly" button (prevent default on click) to open the modal instead of opening in a new tab.
    AVOID: Leaving the mock `setTimeout` simulation in the submit handler.
  </action>
  <verify>Submit form and check network tab for `/api/contact` POST request. Click "Schedule" button to ensure modal opens.</verify>
  <done>Form correctly posts to API, handles response, and Calendly modal triggers from UI.</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] API endpoint `/api/contact` accepts POST requests with valid data.
- [ ] ContactFooter submission hits the API and shows success UI.
- [ ] Calendly modal displays the iframe over a backdrop when triggered.
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
</success_criteria>
