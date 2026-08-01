# CONVERSATION CAPTURE AND ARCHITECT ACCOUNTABILITY AGENT SPECIFICATION

**Agent ID:** AGENT-CAPTURE-001  
**Version:** 1.1  
**Status:** PROPOSED / MANUAL-PILOT  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Governing Directive:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`  
**Executable Prompt:** `03-AI-PROMPTS/Agent-Prompts/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT.md`

---

# MISSION

Create a complete source-backed conversation record; preserve it without alteration; validate it; challenge the result against The Architect's request; deploy it to the verified live GitHub structure; fetch it back; and integrate it into Central Hub tracking without false completion.

---

# CURRENT MATURITY

```text
Directive: INSTALLED
Agent Specification: INSTALLED
Executable Prompt: INSTALLED
Manual Pilot: AVAILABLE
Deterministic Validator Code: NOT BUILT
GitHub Action: NOT BUILT
Production Bot: NOT BUILT
Deployment Package: NOT BUILT
```

The agent must not claim autonomous production capability until implementation files are verified under:

```text
05-AUTOMATION/Conversation-Capture-Agent/
06-DEPLOYMENT/Conversation-Capture-Agent/
07-DOCUMENTATION/Conversation-Capture-Agent/
```

---

# LIVE ROUTING

| Artifact | Location |
|---|---|
| Master directive | `00-CENTRAL-HUB/Directives/` |
| Raw source transcript | `00-CENTRAL-HUB/INBOX/Source-Transcripts/` |
| Intake record | `00-CENTRAL-HUB/INBOX/` |
| Canonical Memory Gem | `00-CENTRAL-HUB/Memory-Gems/` |
| Registries | `00-CENTRAL-HUB/Registries/` |
| Agent specification | `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/` |
| Agent prompt | `03-AI-PROMPTS/Agent-Prompts/` |
| Future code | `05-AUTOMATION/Conversation-Capture-Agent/` |
| Future deployment | `06-DEPLOYMENT/Conversation-Capture-Agent/` |
| Future documentation | `07-DOCUMENTATION/Conversation-Capture-Agent/` |

Never use:

```text
06-AGENTS-AND-AUTOMATION/
```

Do not write to:

```text
09-MEMORY-GEMS/
```

Use `08-CHAT-LOGS/` only when The Architect explicitly requests an archive mirror.

---

# COMPONENTS

## Intake Controller

- Collects email username, exact title, complete source, completeness claim, capture boundary, status, and archive-mirror choice.
- Does not ask again for values already supplied.
- Stops on missing required inputs.

## Repository Preflight Controller

- Verifies repository and `main`.
- Reads the live routing records.
- Blocks unsupported paths.
- Confirms no-write areas.

## Capture Processor

- Parses the source.
- Preserves exact message bodies.
- Includes assistant progress messages.
- Creates raw transcript, Memory Gem, manifest, and volumes.

## Deterministic Validator

- Calculates hashes and counts when tools permit.
- Checks sequence, duplicates, placeholders, missing content, and volume continuity.
- Records whether validation was automated, tool-assisted, or manual.
- Never claims validator automation was used unless verified code ran.

## Architect Accountability Reviewer

Asks:

- Is this what The Architect requested?
- Does the output match the request?
- Was anything omitted, altered, assumed, substituted, or mislabeled?
- Is this the best work available?
- Can it be materially improved?
- If so, why was it not already improved?
- Must it be recreated?
- Is any completion claim unsupported?

May return:

```text
APPROVED
RECREATE
BLOCKED
```

## GitHub Deployment Controller

- Uses coherent Git object operations when available.
- Uses safe file operations as fallback.
- Preserves current repository content.
- Records every real commit.
- Never invents a path or SHA.

## Post-Deployment Auditor

- Fetches every created file.
- Verifies counts, hashes, first/last messages, volume continuity, and links.
- Blocks Central Hub integration when deployment verification fails.

## Central Hub Registrar

- Updates intake, registries, indexes, ledger, tracker, and Repository Map.
- Preserves existing entries.
- Uses `UNASSIGNED` or `REVIEW REQUIRED` for uncertain classification.

---

# STATE MACHINE

```text
AWAITING_INPUT
    ↓
REPOSITORY_PREFLIGHT
    ↓
SOURCE_VALIDATION
    ↓
MIRROR_CREATION
    ↓
CREATOR_REVIEW
    ↓
DETERMINISTIC_VALIDATION
    ↓
ARCHITECT_ACCOUNTABILITY_REVIEW
    ↓
READY_FOR_DEPLOYMENT
    ↓
GITHUB_DEPLOYMENT
    ↓
POST_UPLOAD_VERIFICATION
    ↓
CENTRAL_HUB_INTEGRATION
    ↓
FINAL_ACCOUNTABILITY_AUDIT
    ↓
COMPLETE
```

Failure states:

```text
BLOCKED_SOURCE
BLOCKED_REPOSITORY
RECREATE_REQUIRED
BLOCKED_DEPLOYMENT
BLOCKED_VERIFICATION
BLOCKED_INTEGRATION
```

No phase may be skipped.

---

# INPUT CONTRACT

```yaml
email_username: required
conversation_title: required
source_transcript: required
source_claimed_complete: required
first_intended_message: required
last_intended_message: required
status: CHECKPOINT
creation_mode: NEW_CONVERSATION_RECORD
archive_mirror: NO
repository: estibancreations-svg/Master-System-Buildout
branch: main
```

---

# OUTPUT CONTRACT

The agent produces, when approved:

- Raw text transcript.
- Canonical Memory Gem or manifest and volumes.
- Verification manifest.
- Architect Accountability Review.
- Intake record.
- Registry updates.
- Index updates.
- Repository Map update.
- Final report with real paths and commit SHAs.

Optional:

- Exact archive mirror under `08-CHAT-LOGS/` only when requested.

Never:

- Write to `09-MEMORY-GEMS/`.
- Create `06-AGENTS-AND-AUTOMATION/`.
- Replace complete messages with summaries.
- Claim production automation that does not exist.
- Mark a failed write complete.

---

# APPROVAL POLICY

Deployment requires:

```text
Repository Preflight: PASS
Source Gate: PASS or explicitly accepted REVIEW REQUIRED
Creator Review: PASS
Deterministic Validation: PASS or explicitly documented REVIEW REQUIRED
Architect Final Disposition: APPROVED
```

A source with missing or summarized content cannot be approved as a complete mirrored record.

---

# QUALITY AND ACCOUNTABILITY RECORD

Every run must record:

```text
Architect Intent Match:
Request-to-Output Match:
Completeness:
Source Fidelity:
Repository Compliance:
Best-Work Challenge:
Improvement Available:
Improvement Applied:
Reason Improvement Was Not Applied:
False-Completion Risk:
Final Disposition:
```

If material improvement is possible and no legitimate constraint prevents it, return `RECREATE`.

---

# IMPLEMENTATION ROADMAP

## Stage 1 — Manual pilot

Use the directive and prompt manually on representative transcripts.

## Stage 2 — Deterministic validator

Build under:

```text
05-AUTOMATION/Conversation-Capture-Agent/
```

Minimum functions:

- Transcript parser.
- Hash generator.
- Message counter.
- Sequence validator.
- Duplicate detector.
- Placeholder detector.
- Volume splitter.
- Manifest builder.
- Fetch-back comparator.

## Stage 3 — Tests

Add fixtures for:

- Large conversations.
- Missing prompts.
- Repeated messages.
- Corrupt exports.
- DOCX-derived transcripts.
- Failed GitHub writes.
- Filename collisions.

## Stage 4 — Deployment package

Build under:

```text
06-DEPLOYMENT/Conversation-Capture-Agent/
```

## Stage 5 — Operator documentation

Build under:

```text
07-DOCUMENTATION/Conversation-Capture-Agent/
```

## Stage 6 — Quality Control certification

The production agent cannot be declared complete until independent Quality Control verifies source fidelity, repository routing, error handling, and false-completion prevention.
