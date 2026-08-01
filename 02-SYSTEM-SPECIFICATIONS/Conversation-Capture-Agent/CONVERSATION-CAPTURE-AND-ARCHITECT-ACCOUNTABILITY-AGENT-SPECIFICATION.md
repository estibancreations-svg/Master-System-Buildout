# CONVERSATION CAPTURE AND ARCHITECT ACCOUNTABILITY AGENT SPECIFICATION

**Agent ID:** AGENT-CAPTURE-001  
**Status:** PROPOSED / MANUAL-PILOT  
**Governing Directive:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`

## Mission

Execute complete, lossless conversation capture; deterministic verification; Architect accountability review; GitHub deployment; post-upload audit; and Central Hub registration without shortening, reconstructing, or falsely reporting completion.

## Operating Principle

The agent does not decide what The Architect wanted. It extracts the request, tests its output against that request, challenges its own work, and blocks deployment when the result is incomplete or materially improvable.

## Components

### Intake Controller
Collects email username, exact conversation title, complete source, capture boundary, status, repository, and branch.

### Capture Processor
Creates the raw transcript, Memory Gem, manifest, and numbered volumes.

### Deterministic Validator
Calculates hashes and counts; checks speaker order, continuous numbering, duplicates, placeholders, omissions, and volume continuity.

### Architect Accountability Reviewer
Runs the mandatory questions:
- Is this what The Architect wanted?
- Did the output match the request?
- Was anything omitted, altered, assumed, or substituted?
- Is this the best work available?
- Can it be improved?
- If improvement is possible, why was it not already applied?
- Must the work be recreated before delivery?

### GitHub Deployment Controller
Uses safe GitHub writes, preserves existing repository state, records commit evidence, and refuses unsupported completion claims.

### Post-Deployment Auditor
Fetches files back, compares hashes and counts, checks registry links, and issues the final disposition.

## Required States

```text
INTAKE
SOURCE_VALIDATION
MIRROR_CREATION
CREATOR_REVIEW
DETERMINISTIC_VALIDATION
ARCHITECT_REVIEW
READY_TO_DEPLOY
DEPLOYING
POST_UPLOAD_AUDIT
CENTRAL_HUB_INTEGRATION
APPROVED
RECREATE
BLOCKED
```

## Gate Rules

No transition to `READY_TO_DEPLOY` unless:

- Source Gate = PASS
- Creator Review = PASS
- Deterministic Validation = PASS
- Architect Accountability Disposition = APPROVED

No transition to `APPROVED` unless:

- GitHub writes succeeded
- Files were fetched back
- Hashes and counts were verified
- Central Hub tracking was updated
- Final accountability audit passed

## Manual Pilot

Run the master directive manually against several conversations before automation.

Pilot goals:

1. Validate source parsing.
2. Validate long-volume handling.
3. Validate GitHub write limits.
4. Validate deterministic checks.
5. Validate accountability rework loops.
6. Validate registry and index updates.
7. Record failure patterns.

## Automation Build

After the pilot:

1. Freeze the directive as Version 1.0.
2. Implement deterministic validation as code.
3. Create the agent state machine.
4. Connect GitHub operations.
5. Add retry and rollback rules.
6. Add Quality Control logging.
7. Add usage, credit, workload, time, cost, and failure monitoring.
8. Add test fixtures for complete, incomplete, duplicate, oversized, corrupted, and DOCX-derived transcripts.
9. Require human approval before the first production deployments.
10. Promote only after Quality Control certification.

## Repository Placement

This specification belongs in:

```text
02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/
```

The executable agent prompt belongs in:

```text
03-AI-PROMPTS/Agent-Prompts/
```

Future implementation code belongs in:

```text
05-AUTOMATION/Conversation-Capture-Agent/
```

Deployment files belong in:

```text
06-DEPLOYMENT/Conversation-Capture-Agent/
```

Operator documentation belongs in:

```text
07-DOCUMENTATION/Conversation-Capture-Agent/
```

## Invocation

```text
@Conversation-Capture-Agent

Execute the canonical master directive.

Email Username: [USERNAME BEFORE @]
Conversation Title: [EXACT TITLE]
Source Transcript: [ATTACHED SOURCE]
Status: CHECKPOINT
Creation Mode: NEW CONVERSATION RECORD
```

## Final Output

The agent must return:

- Source validation result
- Message counts
- File paths
- Hashes
- Creator review
- Deterministic validation
- Architect Accountability Review
- GitHub commit SHAs
- Post-upload verification
- Registry and index status
- Remaining work
- Blockers
- One next action
