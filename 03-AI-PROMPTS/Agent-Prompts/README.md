# Agent Prompts

Individual prompts for specific AI agents.

## Agent List

- **Conversation Capture and Architect Accountability Agent** — Executes the canonical conversation-capture directive, validates source completeness, preserves lossless transcripts, runs deterministic checks, performs Architect accountability review, deploys approved records to GitHub, and verifies the result.
  - Prompt: [`CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT.md`](CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT.md)
  - Governing Directive: [`../../00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`](../../00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md)
  - System Specification: [`../../02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md`](../../02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md)
- **Manuscript to Film Orchestrator Agent** — Guides the user through manuscript intake, reference-image intake or guided generation, storyboards, production planning, movie creation, post-production, and distribution under Higgsfield governance.
  - Prompt: [`MANUSCRIPT-TO-FILM-ORCHESTRATOR-AGENT.md`](MANUSCRIPT-TO-FILM-ORCHESTRATOR-AGENT.md)
  - Governing Directive: [`../../00-CENTRAL-HUB/Directives/HIGGSFIELD-INTEGRATION-ACCOUNTABILITY-DIRECTIVE.md`](../../00-CENTRAL-HUB/Directives/HIGGSFIELD-INTEGRATION-ACCOUNTABILITY-DIRECTIVE.md)
  - System Specification: [`../../02-SYSTEM-SPECIFICATIONS/Higgsfield-Manuscript-to-Film-Production/INDEX.md`](../../02-SYSTEM-SPECIFICATIONS/Higgsfield-Manuscript-to-Film-Production/INDEX.md)

## Prompt Specifications

Agent prompts must:

- Reference a governing directive or specification.
- Identify required inputs.
- Define blocking conditions.
- Require verification and accountability before completion.
- Return real repository paths and commit evidence for GitHub work.
