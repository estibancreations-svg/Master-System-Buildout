# Agency Agents Upstream Integration

**Source:** `msitarzewski/agency-agents`  
**License:** MIT  
**First reviewed:** 2026-08-11  
**Local policy:** `00-GOVERNANCE/Agent-Governance/EXTERNAL-CAPABILITY-IMPORT-POLICY.md`

## Purpose

This integration does not vendor or blindly copy the upstream repository. It defines how Estiban Creations learns from and tracks the upstream source while maintaining independent internal contracts, governance, and implementations.

## Intake Flow

```text
UPSTREAM REPOSITORY
      ↓
Discovery / change detection
      ↓
Provenance capture
      ↓
Capability extraction
      ↓
ADOPT / ADAPT / REFERENCE / DUPLICATE / REJECT / FUTURE
      ↓
Canonical Estiban contract
      ↓
Sandbox / eval / security review
      ↓
QC gate
      ↓
Governed local implementation
```

## Upstream Areas Currently Selected

- `strategy/nexus-strategy.md`
- `strategy/runbooks.json`
- `strategy/coordination/handoff-templates.md`
- `specialized/agents-orchestrator.md`
- `engineering/engineering-multi-agent-systems-architect.md`
- `testing/testing-reality-checker.md`
- testing/evidence/workflow optimization roles
- security roles
- `engineering/engineering-autonomous-optimization-architect.md`
- `engineering/engineering-ai-data-remediation-engineer.md`
- `marketing/marketing-book-co-author.md`
- `academic/academic-narratologist.md`
- `game-development/narrative-designer.md`
- `design/design-visual-storyteller.md`
- `marketing/marketing-video-optimization-specialist.md`
- `marketing/marketing-short-video-editing-coach.md`
- `marketing/marketing-podcast-strategist.md`
- `marketing/marketing-multi-platform-publisher.md`

## Required Record for Each Adaptation

Every local adaptation should link back to:

- source repository
- upstream path
- commit/tag/blob when material
- license
- review date
- what was useful
- what was unsafe/incompatible
- what Estiban changed
- local capability ID
- local file(s)

## Important Safety Deviation Already Recorded

The upstream AI Data Remediation example demonstrates a useful architecture but includes model-generated Python execution using `eval` after filtering. Estiban Creations must not copy that implementation pattern directly. Use declarative transformation rules or hardened sandbox/AST allowlisting.

## Update Handling

Future upstream changes are advisory.

The Ecosystem Discovery & Learning Engine may detect a change and create an advisement packet, but no update may overwrite production automatically.

Comparison model:

```text
UPSTREAM ORIGINAL
      ↓
INITIAL ESTIBAN ADAPTATION
      ↓
CURRENT ESTIBAN VERSION
```

This chain must remain auditable.
