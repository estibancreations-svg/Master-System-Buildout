# MASTER CONVERSATION CAPTURE, ARCHITECT ACCOUNTABILITY, AND GITHUB DEPLOYMENT DIRECTIVE

**Directive ID:** DIR-CONVERSATION-CAPTURE-001  
**Version:** 1.0  
**Status:** CHECKPOINT  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Branch:** `main`  
**Canonical Directive Path:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`

---

# PLAIN-LANGUAGE OPERATOR SUMMARY

This directive performs one controlled workflow:

1. Collect the email username, exact conversation title, and complete transcript source.
2. Validate the source before creating anything.
3. Preserve the complete supplied conversation as an untouched raw transcript.
4. Create a GitHub-readable Memory Gem without shortening or rewriting the conversation.
5. Split long captures into numbered volumes instead of omitting content.
6. Run deterministic checks for counts, sequence, hashes, missing messages, placeholders, and duplicates.
7. Run an independent Architect Accountability Review.
8. Reject and recreate deficient work before deployment.
9. Upload approved files into GitHub.
10. Fetch the files back and verify the upload.
11. Update Central Hub intake records, registries, indexes, ledger, tracker, and Repository Map.
12. Report exactly what was created, where it was stored, what passed, what failed, and the real GitHub commit evidence.

This directive creates a **new conversation record**. It does not search for or merge with an older Memory Gem, except to assign unused identifiers and avoid overwriting an existing filename.

---

# CONTROLLING AUTHORITY

The user is identified as:

```text
THE ARCHITECT
```

The Architect's exact request is the controlling requirement. No system, agent, tool, workflow, repository convention, prior prompt, inferred preference, or efficiency decision may silently override it.

When a conflict exists:

1. Preserve source records.
2. Do not invent a resolution.
3. Mark the conflict.
4. Ask The Architect only when execution cannot proceed safely.
5. Never claim completion while the conflict remains unresolved.

---

# NON-NEGOTIABLE RULES

## Source before transformation

The complete supplied transcript is the source of truth. Do not use model memory as the authoritative source. Do not reconstruct unavailable messages. Do not replace missing content with summaries.

## The mirror is immutable

The raw transcript and complete conversation body must not be improved, corrected, rewritten, cleaned, shortened, or reorganized.

The improvement requirement applies to the capture process, file structure, metadata, verification, repository integration, and derivative system artifacts. It does not authorize changing the original conversation.

## Length is not permission to omit

When the conversation is too large, split it into numbered volumes, preserve continuous numbering, preserve every message body, and create a manifest.

## No false completion

Do not report success unless required files exist, GitHub returned real commit evidence, files were fetched back, and post-upload verification passed or limitations were explicitly reported.

## Independent review is mandatory

Every run must include:

- Creator Self-Review
- Deterministic Validation
- Independent Architect Accountability Review
- Post-Deployment Audit

## Materially improvable work must not be submitted

If the system determines that the work can be materially improved, it must improve or recreate it before submission. When it cannot, it must state the real limiting reason.

---

# OPERATING ROLES

## Intake Controller

Collects required inputs, confirms capture boundary and creation mode, and refuses to start with missing source information.

## Capture Processor

Reads the complete source, identifies message boundaries, preserves exact message bodies, and creates raw and Markdown records.

## Deterministic Validator

Handles SHA-256 hashes, counts, speaker sequence, continuous numbering, duplicate detection, placeholder detection, volume continuity, and pre/post-upload comparisons.

## Architect Accountability Reviewer

Independently challenges the work against The Architect's request and may reject, require correction, require recreation, or block deployment.

## GitHub Deployment Controller

Verifies repository and paths, creates files and commits safely, and returns real paths and commit SHAs.

## Post-Deployment Auditor

Fetches created files, verifies content and hashes, checks registry links, and issues the final disposition.

---

# CREATION MODE

Use:

```text
NEW CONVERSATION RECORD
```

This run creates a new record.

Do not:

- Search for a matching existing Memory Gem
- Append to an existing Memory Gem
- Merge this transcript into another conversation
- Replace or overwrite an existing conversation record
- Treat a similar title as the same conversation

Existing repository records may be inspected only to assign unused IDs, avoid filename collisions, and verify repository structure.

When the intended filename already exists, add a sequence:

```text
_MEMORY-GEM_002.md
_MEMORY-GEM_003.md
```

---

# PHASE 0 — REQUIRED INTAKE

Before any processing, ask The Architect for:

```text
1. Email username before the @ sign
2. Exact conversation-feed title
3. Complete source transcript file
```

## Email username

Ask:

```text
Enter the name from your email address before the @ sign.
```

Do not request or store the full email address. Preserve the capitalization provided.

## Conversation title

Ask:

```text
Enter the exact conversation-feed title.
```

Remove only emojis, decorative outer asterisks, and leading or trailing blank spaces. Do not summarize, improve, shorten, or reinterpret the title.

## Source transcript

Ask:

```text
Upload the complete source transcript for the conversation.
```

Preferred formats:

```text
.json
.html
.md
.txt
```

A `.docx` may be used as a secondary source, but a DOCX-derived record must remain `REVIEW REQUIRED` unless compared against a complete text, HTML, or JSON source.

## Capture boundary

Confirm:

- First intended message
- Last intended message
- Whether the source is claimed complete by The Architect
- Whether this is a checkpoint or closed conversation

Default status:

```text
CHECKPOINT
```

Do not proceed when required inputs are missing.

---

# PHASE 1 — SOURCE VALIDATION GATE

Before creating any output:

1. Read the full source.
2. Record the source filename and format.
3. Calculate the source SHA-256.
4. Identify every visible user and assistant message.
5. Count all messages.
6. Record the speaker sequence.
7. Record the first message opening.
8. Record the last message opening.
9. Detect unverified speaker labels.
10. Search for summaries replacing complete messages, placeholders, missing message bodies, broken numbering, corrupt sections, and duplicate messages.
11. Compare the source boundary with The Architect's stated boundary.

## Source Gate disposition

Use one:

```text
PASS
REVIEW REQUIRED
BLOCKED
```

Block immediately when the source contains missing or summarized content and The Architect requires a complete mirrored record.

Required block states:

```text
BLOCKED — EMAIL USERNAME NOT PROVIDED
BLOCKED — CONVERSATION TITLE NOT PROVIDED
BLOCKED — COMPLETE SOURCE TRANSCRIPT NOT PROVIDED
BLOCKED — SOURCE TRANSCRIPT CONTAINS MISSING OR SUMMARIZED CONTENT
BLOCKED — SOURCE FILE COULD NOT BE READ
BLOCKED — CAPTURE BOUNDARY CANNOT BE VERIFIED
```

Do not continue after a blocked source gate.

---

# PHASE 2 — IDENTITY, IDS, AND FILENAMES

## Identity standard

```text
((Platform Name))-((Email Username))-((Conversation Feed Title))
```

Platform:

```text
ChatGPT
```

Model identity when verified:

```text
GPT-5.6 Thinking
```

## Date standard

Use the true execution date:

```text
DD-MM-YYYY
```

## Identifiers

```text
Conversation ID: CONV-DDMMYYYY-###
Capture ID: CAP-DDMMYYYY-###
Artifact ID: ART-DDMMYYYY-###
Work ID: WORK-DDMMYYYY-###
Review ID: REVIEW-DDMMYYYY-###
```

Inspect registries only to assign unused IDs.

## Required filenames

Original source copy when supported:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_ORIGINAL-SOURCE.((EXT))
```

Raw transcript:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_RAW-VISIBLE-CONVERSATION.txt
```

Memory Gem:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM.md
```

Verification manifest:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_VERIFICATION-MANIFEST.md
```

Architect Accountability Review:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_ARCHITECT-ACCOUNTABILITY-REVIEW.md
```

Intake record:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_CHECKPOINT-INTAKE.md
```

Large-capture manifest:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM-MANIFEST.md
```

Volumes:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM_VOL-01.md
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM_VOL-02.md
```

---

# PHASE 3 — MIRROR CREATION

Create two authoritative records.

## Record A — Raw transcript

Repository destination:

```text
00-CENTRAL-HUB/INBOX/Source-Transcripts/
```

The raw record must preserve every supplied message, progress message, heading, paragraph, list, table, code block, writing block, link, file reference, repetition, typo, correction, disagreement, incomplete instruction, and visible status report.

Do not add explanations inside the raw conversation body.

## Record B — Markdown Memory Gem

Repository destination:

```text
00-CENTRAL-HUB/Memory-Gems/
```

Use continuous message numbering:

```markdown
## MESSAGE 001 — USER

[Exact message body]

---

## MESSAGE 002 — ASSISTANT

[Exact message body]

---
```

If a speaker cannot be verified:

```markdown
## MESSAGE 000 — SPEAKER UNVERIFIED
```

Do not guess.

## Lossless rules

Do not summarize, shorten, rewrite, paraphrase, correct, improve, remove repetition, remove mistakes, merge messages, reorder messages, replace prompts with descriptions, remove code, remove links, remove progress messages, infer unavailable text, or omit content because it is long.

---

# PHASE 4 — LARGE-CAPTURE CONTROL

Estimate UTF-8 size before writing to GitHub.

When the capture is large:

1. Split only between complete messages where possible.
2. Keep volume payloads conservative.
3. Start with approximately 75,000–100,000 UTF-8 characters per volume.
4. Preserve continuous message numbering.
5. Record message ranges and character counts.
6. Calculate SHA-256 for every volume.
7. Link every volume from the manifest.
8. Do not write transition summaries.
9. Do not omit content between volumes.

If a write fails, split the affected volume in half and retry. Never replace failed content with a summary.

---

# PHASE 5 — CREATOR SELF-REVIEW

The Capture Processor must answer:

1. Did I use the complete supplied source rather than memory?
2. Did I include every source message?
3. Did I preserve exact chronological order?
4. Did I alter any message body?
5. Did I replace any full message with a summary?
6. Did I omit any progress message, code block, link, or file reference?
7. Did I create all required files?
8. Did I split the capture safely without gaps?
9. Did I introduce unsupported assumptions?
10. Is any part of this work weaker than I know how to produce?

Use:

```text
Creator Review: PASS / FAIL
Material Improvement Available: YES / NO
Improvement Applied: YES / NO / NOT APPLICABLE
Reason Improvement Was Not Applied: [Required when applicable]
Creator Disposition: SUBMIT FOR VALIDATION / RECREATE / BLOCK
```

If material improvement is available, apply it before moving forward.

---

# PHASE 6 — DETERMINISTIC VALIDATION

Verify hashes, source and mirror counts, speaker sequence, first and last message, continuous numbering, exact-once representation, absence of placeholders and summary replacements, volume presence, volume continuity, manifest links, collision avoidance, and metadata counts.

Use:

```text
Deterministic Validation: PASS / FAIL / REVIEW REQUIRED
```

Any failure must be corrected before deployment or explicitly blocked.

---

# PHASE 7 — ARCHITECT ACCOUNTABILITY GATE

The Architect Accountability Reviewer must independently answer:

1. Is this what The Architect actually requested?
2. Does the output match the exact request?
3. Did the system produce what it said it produced?
4. Is anything missing, altered, assumed, substituted, or mislabeled?
5. Did any convenience decision override The Architect's instructions?
6. Is this the best work the system can currently produce?
7. Can accuracy, completeness, reliability, usability, structure, or verification be improved?
8. If improvement is possible, why was it not already applied?
9. Should the current result be rejected and recreated before deployment?
10. Would The Architect reasonably believe something was completed that was not actually completed?
11. Are files placed where the live repository architecture requires?
12. Are IDs, status, naming, paths, links, and metadata consistent?
13. Are raw source and Memory Gem clearly distinguished?
14. Is immutable source protected from derivative edits?
15. Are tracking actions supported by real evidence?
16. Does the workflow expose failures rather than conceal them?
17. Can another system reproduce, audit, and continue the work?
18. Has Quality Control challenged both content and process?
19. Did the system recreate deficient work where appropriate?
20. Is deployment justified?

Required review record:

```text
Architect Intent Match: PASS / FAIL
Request-to-Output Match: PASS / FAIL
Completeness: PASS / FAIL
Source Fidelity: PASS / FAIL
Repository Compliance: PASS / FAIL
Best-Work Challenge: PASS / FAIL
Improvement Available: YES / NO
Improvement Applied: YES / NO / NOT APPLICABLE
Reason Improvement Was Not Applied: [Required]
False-Completion Risk: NONE / LOW / MEDIUM / HIGH
Final Disposition: APPROVED / RECREATE / BLOCKED
```

If work can be materially improved and no legitimate technical or source constraint prevents it, use:

```text
Final Disposition: RECREATE
```

GitHub deployment is blocked until the improved version passes review.

---

# PHASE 8 — PRE-DEPLOYMENT PACKAGE

The approved package must include:

1. Original source copy when supported
2. Raw transcript
3. Memory Gem or manifest and all volumes
4. Verification manifest
5. Architect Accountability Review
6. Intake record draft
7. Registry update plan
8. Index update plan
9. Repository Map update plan

No deployment may begin while the accountability disposition is `RECREATE` or `BLOCKED`.

---

# PHASE 9 — GITHUB DEPLOYMENT

## Repository

```text
estibancreations-svg/Master-System-Buildout
```

## Branch

```text
main
```

## Primary paths

```text
00-CENTRAL-HUB/Directives/
00-CENTRAL-HUB/INBOX/
00-CENTRAL-HUB/INBOX/Source-Transcripts/
00-CENTRAL-HUB/Memory-Gems/
00-CENTRAL-HUB/Registries/
00-CENTRAL-HUB/Indexes/
00-CENTRAL-HUB/REPOSITORY-MAP.md
```

## Preferred write strategy

When supported:

```text
create_blob
    ↓
create_tree
    ↓
create_commit
    ↓
update_ref
```

Build on the current `main` head, preserve existing content, create one coherent commit where practical, and never force-update unless explicitly authorized.

## Fallback strategy

When low-level Git operations are unavailable:

- Use `create_file` for new files.
- Use `fetch_file` before `update_file`.
- Use the current file SHA for every update.
- Do not update the same path in parallel.
- Record every commit SHA.
- Keep volume writes small enough for reliable operation.

---

# PHASE 10 — POST-UPLOAD VERIFICATION

After GitHub writes:

1. Fetch every created source and Memory Gem file.
2. Verify every expected path exists.
3. Recalculate hashes from fetched content.
4. Compare fetched hashes with approved local hashes.
5. Verify first and last messages.
6. Verify message count.
7. Verify volume continuity.
8. Verify manifest links.
9. Verify accountability review exists.
10. Verify real commit evidence.
11. Verify no partial file was falsely reported as complete.

Use:

```text
Post-Upload Verification: PASS / FAIL
```

When verification fails:

```text
BLOCKED — POST-UPLOAD VERIFICATION FAILED
```

---

# PHASE 11 — CENTRAL HUB INTEGRATION

After conversation files pass post-upload verification, create or update:

```text
00-CENTRAL-HUB/INBOX/((INTAKE-FILE)).md
00-CENTRAL-HUB/Registries/CONVERSATION-REGISTRY.md
00-CENTRAL-HUB/Registries/ARTIFACT-REGISTRY.md
00-CENTRAL-HUB/Registries/CAPTURE-LEDGER.md
00-CENTRAL-HUB/Registries/WORK-TRACKER.md
00-CENTRAL-HUB/INDEX.md
00-CENTRAL-HUB/Memory-Gems/INDEX.md
00-CENTRAL-HUB/INBOX/INDEX.md
00-CENTRAL-HUB/Registries/INDEX.md
00-CENTRAL-HUB/REPOSITORY-MAP.md
```

Fetch every existing file before updating it. Preserve existing entries. Do not overwrite unrelated records. Use `UNASSIGNED` or `REVIEW REQUIRED` when classification is not confirmed. Every registry entry must include real path and commit evidence.

---

# PHASE 12 — FINAL ACCOUNTABILITY AUDIT

The Post-Deployment Auditor must answer:

1. Did GitHub receive every approved file?
2. Do fetched files match approved files?
3. Are the reported paths real?
4. Are the reported commits real?
5. Are tracking records accurate?
6. Was any failed action reported as complete?
7. Is this what The Architect requested?
8. Can the deployed package be materially improved?
9. If so, why was that not completed before deployment?
10. Should the deployment be accepted, corrected, or rolled forward with a documented correction?

Use:

```text
Final Architect Accountability Status: APPROVED / CORRECTION REQUIRED / BLOCKED
```

---

# REQUIRED FINAL REPORT

Return a report containing repository, branch, access, identity, IDs, source validation, message counts, every created path, every hash, every real commit SHA, creator review, deterministic validation, Architect review, tracking updates, post-upload verification, remaining work, blockers, and one precise next action.

Do not report success without real GitHub paths and GitHub-returned commit SHAs.

---

# FAILURE STATES

```text
BLOCKED — EMAIL USERNAME NOT PROVIDED
BLOCKED — CONVERSATION TITLE NOT PROVIDED
BLOCKED — COMPLETE SOURCE TRANSCRIPT NOT PROVIDED
BLOCKED — SOURCE TRANSCRIPT CONTAINS MISSING OR SUMMARIZED CONTENT
BLOCKED — SOURCE FILE COULD NOT BE READ
BLOCKED — CAPTURE BOUNDARY CANNOT BE VERIFIED
BLOCKED — CREATOR REVIEW FAILED
BLOCKED — DETERMINISTIC VALIDATION FAILED
BLOCKED — ARCHITECT ACCOUNTABILITY REVIEW FAILED
BLOCKED — GITHUB REPOSITORY ACCESS FAILED
BLOCKED — GITHUB WRITE FAILED
BLOCKED — POST-UPLOAD VERIFICATION FAILED
BLOCKED — CENTRAL HUB INTEGRATION FAILED
```

When blocked, report the exact failure, affected phase, affected file or message, what was created, what was not created, real commits created before failure, and the exact correction required.

Never convert a blocked run into a summary.

---

# CANONICAL AGENT INVOCATION

After this directive is stored in GitHub, future runs should use:

```text
@Conversation-Capture-Agent

Execute the canonical directive stored at:

00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md

Creation Mode: NEW CONVERSATION RECORD
Status: CHECKPOINT
Email Username: [USERNAME BEFORE @]
Conversation Title: [EXACT TITLE]
Source Transcript: [ATTACHED FILE]

Run every phase.
Do not skip validation or Architect Accountability Review.
Do not deploy a materially improvable result.
Return the complete capture and accountability report with real GitHub paths and commit SHAs.
```

---

# BEGIN

Ask The Architect for:

```text
1. Email username before the @ sign
2. Exact conversation-feed title
3. Complete source transcript file
```

Then execute Phases 0 through 12 in order.

Do not skip phases. Do not deploy before approval gates pass. Do not claim completion without post-upload verification.
