# AI Agent Architecture

**Status:** Active architecture  
**Owner:** T.H.E.L.M.A. / Enterprise Architecture  
**Updated:** 2026-08-11

## 1. Purpose

This document defines how intelligent capabilities are represented, governed, activated, observed, evaluated, and retired across the Estiban Creations enterprise system.

The system is **not** a loose collection of prompts or personas. It is a governed capability network operating through stable contracts, least-privilege authority, structured handoffs, dynamic mission teams, quality gates, cost controls, and full provenance.

## 2. Design Sources and Provenance

This architecture consolidates prior Estiban Creations requirements with external patterns reviewed from `msitarzewski/agency-agents` on 2026-08-11, including:

- NEXUS phased orchestration and quality gates
- machine-readable runbook rosters
- structured handoff templates
- Multi-Agent Systems Architect patterns for topology, context, fallbacks, traceability, evals, and least privilege
- Agents Orchestrator dev/QA loops
- Reality Checker evidence-first certification
- Autonomous Optimization Architect cost/provider guardrails
- selected security, remediation, publishing, and media specialist patterns

External ideas are governed by `00-GOVERNANCE/Agent-Governance/EXTERNAL-CAPABILITY-IMPORT-POLICY.md` and recorded in `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json`.

## 3. Intelligence Classes

### 3.1 Executive Intelligence

Permanent strategic/organizational intelligences such as T.H.E.L.M.A., CMGIO, CFO intelligence, CHXO, and future C-Suite roles.

Responsibilities:

- policy and strategic interpretation
- enterprise-level prioritization
- mission authorization and oversight
- executive synthesis and escalation

Executive intelligence is never replaced merely because an external specialist has overlapping expertise.

### 3.2 Orchestrators

Mission-scoped operational controllers assembled to run a defined workflow.

Examples:

- Software Build Orchestrator
- Grant Submission Orchestrator
- Publishing Orchestrator
- Marketing Campaign Orchestrator
- Incident Orchestrator
- Research Orchestrator

Orchestrators decompose, delegate, track, synthesize, enforce gates, and escalate. They should not become universal execution agents.

### 3.3 Specialists

Narrow experts activated only when a mission requires them.

Examples include engineering, finance, publishing, marketing, security, research, data, grants, design, and media roles.

### 3.4 Evaluators / Quality Control

Independent reviewers that do not grade their own work.

Examples:

- Reality Gate
- Evidence Collector
- API Tester
- Performance Benchmarker
- Accessibility Auditor
- Continuity Validator
- Compliance Validator

### 3.5 Sentinels / White Blood Cells

Always-on or event-driven monitoring capabilities.

Examples:

- threat detection
- credential leak detection
- cost anomaly detection
- data integrity monitoring
- workflow failure monitoring
- agent behavior anomaly detection
- deployment health monitoring

### 3.6 Utilities

Small deterministic or bounded capabilities such as transcription, metadata extraction, format conversion, citation checking, classification, resizing, or parsing. Utilities do not require personalities.

## 4. Canonical Agent Contract

Every production agent/capability must have a machine-readable contract with at least:

```yaml
agent_id: EC-<DIVISION>-<NUMBER>
name: Human readable name
class: executive|orchestrator|specialist|evaluator|sentinel|utility
owner: executive or system owner

mission:
  primary: ...
  not_responsible_for: []

activation:
  on_demand: true
  allowed_runbooks: []

authority:
  read: []
  write: []
  execute: []
  prohibited: []

tools:
  allow: []
  deny: []

memory:
  read_scope: []
  write_scope: []
  pii_policy: ...

runtime:
  timeout_seconds: ...
  max_retries: ...
  max_cost_usd: ...
  fallback: ...

quality:
  evaluator: ...
  evidence_required: true
  acceptance_schema: ...

observability:
  trace_required: true
  metrics: []

escalation:
  target: THELMA

provenance:
  source_ids: []
  adaptation_notes: ...
```

## 5. Communication Model

### 5.1 No Free-Form Agent Mesh by Default

The default topology is hierarchical/orchestrated. Peer-to-peer or mesh behavior requires explicit justification, a moderator, termination criteria, and traceability.

### 5.2 Enterprise Information Packets

Agents communicate through structured packets mediated by the Air Gap/policy layer.

Required packet concepts:

- packet ID
- mission ID
- trace ID
- sender
- receiver
- task/reference
- artifact references
- allowed context
- prohibited context
- constraints
- acceptance criteria
- evidence requirements
- cost authorization
- expiry/timeout

The receiver does not automatically receive the sender's full prompt, memory, transcript, credentials, or unrelated files.

### 5.3 Structured State

Mission state is maintained externally and passed by schema. Large intermediate artifacts are referenced, not repeatedly copied into every agent context.

## 6. Supported Topologies

### Sequential
Use when each stage depends on the previous stage.

### Parallel Fan-Out / Fan-In
Use for independent analyses followed by controlled synthesis.

### Hierarchical Orchestrator / Subagent
Default for complex enterprise missions.

### Evaluator / Optimizer Loop
Use for measurable iterative refinement with a hard iteration cap.

### Mesh / Peer Network
Exceptional use only due to complexity, context growth, and debugging risk.

## 7. Failure Engineering

Every material agent path must define:

- hard failure detection
- silent failure detection
- partial output validation
- contradiction handling
- retry cap
- timeout
- fallback
- degraded mode
- escalation
- checkpoint/rollback where appropriate
- circuit breaker for repeated failures or runaway cost

No unbounded retries.

## 8. Context and Memory

Principles:

- least-context required for the task
- explicit context ownership
- no silent truncation of required fields
- sensitive data excluded unless authorized
- long-form artifacts stored externally and retrieved selectively
- canonical facts preserved verbatim where summarization would create risk
- checkpoint summaries used for long-running missions

## 9. Evidence and Quality

No production-ready claim is accepted solely because the generating agent says the work is complete.

Evidence varies by work type:

- UI: screenshots + browser interaction tests
- API: request/response + contract tests
- database: schema + migration + reconciliation tests
- agent: eval suite + regression evidence
- security: findings + scan/test evidence
- deployment: health checks + logs
- finance: reconciliation
- grant: requirements/compliance crosswalk
- publishing: editorial/continuity/proof/production checks
- marketing: staged assets + publication/analytics evidence

The Quality Control Agency may return PASS, FAIL, NEEDS WORK, BLOCKED, or ESCALATE according to the governing runbook.

## 10. Cost and Provider Governance

Every expensive or external execution path should support:

- per-run cost ceiling
- provider/model telemetry
- latency and quality metrics
- bounded fallback
- circuit breakers
- optional shadow evaluation of alternatives
- provider portability where feasible

Optimization suggestions may be autonomous. Production promotion follows governance thresholds and approval rules defined by the relevant system.

## 11. Learning and Adaptation

The system learns at three levels:

1. **Mission learning** — outcomes, failures, retries, quality scores, costs.
2. **Capability learning** — which agents/tools/providers perform best for which task classes.
3. **Ecosystem learning** — external repositories, releases, standards, tools, research, and architectural changes discovered by the Ecosystem Discovery & Learning Engine.

External learning never auto-overwrites governed production capability.

## 12. Portability

Canonical internal definitions should be convertible into runtime-specific forms for ChatGPT/Codex, Claude, Gemini, OpenClaw, Replit, Base44, n8n, local models, and future providers without redefining the organizational role each time.

The canonical contract is the source of truth; runtime prompts are adapters.

## 13. Governing Outcome

The enterprise should be able to answer at any time:

- What capabilities exist?
- Who owns them?
- What can they access?
- Why were they activated?
- What did they receive?
- What did they produce?
- How much did they cost?
- What evidence proves the result?
- Where did the capability come from?
- What did we change from the source?
- What happens if it fails?
