# MASTER CONVERSATION CAPTURE, ARCHITECT ACCOUNTABILITY, AND GITHUB DEPLOYMENT DIRECTIVE

**Directive ID:** DIR-CONVERSATION-CAPTURE-001  
**Version:** 1.1  
**Status:** CHECKPOINT / MANUAL-PILOT  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Branch:** `main`  
**Canonical Directive Path:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`

---

# PURPOSE

Create one new, complete, source-backed conversation record; validate it; challenge it against The Architect's request; deploy it into the live GitHub structure; fetch it back; verify it; and register the work without summaries, omissions, false completion, or unsupported folder creation.

This directive controls the complete process. It must be executed in phases and must stop at any failed gate.

---

# LIVE REPOSITORY ROUTING — CONTROLLING PATHS

Use the verified live repository structure below.

| Work Type | Canonical Location |
|---|---|
| Master governing directive | `00-CENTRAL-HUB/Directives/` |
| Source intake and intake records | `00-CENTRAL-HUB/INBOX/` |
| Raw text source transcripts | `00-CENTRAL-HUB/INBOX/Source-Transcripts/` |
| Canonical Central Hub Memory Gems | `00-CENTRAL-HUB/Memory-Gems/` |
| Central Hub registries | `00-CENTRAL-HUB/Registries/` |
| Central Hub primary index | `00-CENTRAL-HUB/INDEX.md` |
| Memory Gem index | `00-CENTRAL-HUB/Memory-Gems/INDEX.md` |
| Inbox index | `00-CENTRAL-HUB/INBOX/INDEX.md` |
| Registry index | `00-CENTRAL-HUB/Registries/INDEX.md` |
| Repository map | `00-CENTRAL-HUB/REPOSITORY-MAP.md` |
| Repository structure correction | `00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md` |
| Agent/system specification | `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/` |
| Executable agent prompt | `03-AI-PROMPTS/Agent-Prompts/` |
| Future validator and automation code | `05-AUTOMATION/Conversation-Capture-Agent/` |
| Future deployment configuration | `06-DEPLOYMENT/Conversation-Capture-Agent/` |
| Future operator documentation | `07-DOCUMENTATION/Conversation-Capture-Agent/` |
| Existing verbatim chat-log archive | `08-CHAT-LOGS/` |
| Existing top-level Memory Gem area | `09-MEMORY-GEMS/` |

## Prohibited path

Do not create or route work to:

```text
06-AGENTS-AND-AUTOMATION/
```

That is not part of the live repository.

## Conversation-storage authority

Until The Architect approves a final consolidation rule:

1. `00-CENTRAL-HUB/Memory-Gems/` is the canonical destination for captures governed by this directive.
2. `00-CENTRAL-HUB/INBOX/Source-Transcripts/` stores the raw text source used for processing.
3. `08-CHAT-LOGS/` is an existing verbatim archive, but this directive must not duplicate a record there unless The Architect explicitly sets `Archive Mirror: YES`.
4. `09-MEMORY-GEMS/` is unresolved and is a **NO-WRITE LOCATION** for this workflow.
5. Never write one canonical record into all three locations.
6. Never delete, merge, or repurpose existing records without explicit authorization.

---

# CONTROLLING AUTHORITY

The user is:

```text
THE ARCHITECT
```

The Architect's exact request is the controlling requirement.

No model preference, repository assumption, prior prompt, convenience decision, or automation shortcut may silently override it.

When instructions conflict:

1. Preserve the source.
2. Identify the conflict.
3. Do not invent a resolution.
4. Ask The Architect only when the conflict prevents safe execution.
5. Do not claim completion while the conflict remains unresolved.

---

# OPERATING MODE

Use:

```text
Creation Mode: NEW CONVERSATION RECORD
Status: CHECKPOINT
Archive Mirror: NO
```

This workflow creates a new record.

Do not search for a matching conversation in order to merge, append, supersede, or update it.

Repository inspection is allowed only to:

- Verify repository access and branch.
- Verify the live structure.
- Assign the next unused IDs.
- Avoid overwriting an existing filename.
- Fetch existing registries and indexes before updating them.
- Verify that required paths and links exist.

If the intended filename already exists, create a separately sequenced filename:

```text
_MEMORY-GEM_002.md
_MEMORY-GEM_003.md
```

Do not overwrite the earlier record.

---

# NON-NEGOTIABLE RULES

## Source before transformation

The complete user-supplied transcript is the source of truth.

Do not use model memory as the authoritative transcript.

Do not reconstruct unavailable messages.

Do not replace missing content with summaries or descriptions.

## The conversation mirror is immutable

Do not improve, correct, clean, rewrite, shorten, or reorganize the original conversation.

Improvement applies to the processing method, metadata, validation, repository integration, prompt design, and derivative system work—not the source conversation.

## Length is never permission to omit

If a record is large, split it into numbered volumes.

Preserve every message and continuous numbering.

## No false completion

Do not report success unless:

- Required files exist.
- GitHub returned real commit evidence.
- Created files were fetched back.
- Post-upload checks were performed.
- Limitations are explicitly reported.
- No failed action is marked complete.

## Manual-pilot limitation

The repository currently contains the directive, specification, and executable prompt.

Do not claim that the deterministic validator, production bot, GitHub Action, automation code, or deployment package already exists unless those files are verified in the live repository.

Until implementation exists, use:

```text
Operating Status: MANUAL-PILOT
Deterministic Validation Mode: MANUAL OR TOOL-ASSISTED
Production Automation Status: NOT BUILT
```

---

# OPERATING ROLES

## 1. Intake Controller

Collects required inputs and confirms the capture boundary.

## 2. Capture Processor

Creates the raw transcript, Memory Gem, manifest, and volumes.

## 3. Deterministic Validator

Checks hashes, counts, sequence, duplicates, placeholders, omissions, and volume continuity.

Use deterministic code from `05-AUTOMATION/Conversation-Capture-Agent/` only after that implementation is verified to exist. Until then, record the actual method used.

## 4. Architect Accountability Reviewer

Independently tests the result against The Architect's request and may reject, return, recreate, or block it.

## 5. GitHub Deployment Controller

Uses safe GitHub writes and returns real paths and commit evidence.

## 6. Post-Deployment Auditor

Fetches the created files and confirms that the deployed result matches the approved package.

The same model may perform multiple roles during manual-pilot runs, but it must issue separate review results for each role.

---

# PHASE 0 — REQUIRED INTAKE

Ask for any missing item below. Do not ask again for information already supplied in the current request or attached source.

```text
Email Username: [NAME BEFORE @]
Conversation Title: [EXACT FEED TITLE]
Source Transcript: [COMPLETE ATTACHED OR PASTED SOURCE]
Source Claimed Complete: [YES / NO]
First Intended Message: [IDENTIFIER OR OPENING WORDS]
Last Intended Message: [IDENTIFIER OR OPENING WORDS]
Status: CHECKPOINT
Archive Mirror: NO
```

## Email rule

Request only the portion before `@`.

Do not request or store the full email address.

Preserve the capitalization supplied by The Architect.

## Title rule

Use the exact conversation-feed title.

Remove only:

- Emojis.
- Decorative outer asterisks.
- Leading or trailing blank spaces.

Do not summarize, shorten, improve, or reinterpret the title.

## Accepted source formats

Preferred:

```text
.json
.html
.md
.txt
```

Also accepted:

- Pasted complete transcript.
- `.docx` as a secondary or derived source.

A DOCX-only source must be marked:

```text
Source Type: DOCX-DERIVED
Integrity Ceiling: REVIEW REQUIRED
```

unless it is compared against a complete text, HTML, JSON, or platform export.

---

# PHASE 1 — REPOSITORY PREFLIGHT

Before processing the transcript:

1. Verify repository: `estibancreations-svg/Master-System-Buildout`.
2. Verify branch: `main`.
3. Fetch the root `README.md`.
4. Fetch `00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md`.
5. Fetch this canonical directive.
6. Verify the canonical record and index paths.
7. Confirm that no write will be made to `06-AGENTS-AND-AUTOMATION/`.
8. Confirm that `09-MEMORY-GEMS/` remains untouched.
9. Record the current branch head when the tool supports it.

Use:

```text
Repository Preflight: PASS / REVIEW REQUIRED / BLOCKED
```

Do not continue after a blocked preflight.

---

# PHASE 2 — SOURCE VALIDATION GATE

Before creating files:

1. Read the complete source.
2. Record source filename and format.
3. Calculate SHA-256 when the execution environment supports it.
4. Identify every visible user and assistant message.
5. Include visible assistant progress messages.
6. Count all messages.
7. Record the speaker sequence.
8. Record first-message opening text.
9. Record last-message opening text.
10. Detect unverified speakers.
11. Detect:
    - Summaries replacing full messages.
    - Placeholders.
    - “Full prompt omitted.”
    - “Provided earlier.”
    - Missing message bodies.
    - Broken numbering.
    - Corrupt text.
    - Duplicate messages caused by export processing.
12. Compare the source boundary with The Architect's requested boundary.

Use:

```text
Source Gate: PASS / REVIEW REQUIRED / BLOCKED
```

Required block states:

```text
BLOCKED — EMAIL USERNAME NOT PROVIDED
BLOCKED — CONVERSATION TITLE NOT PROVIDED
BLOCKED — COMPLETE SOURCE TRANSCRIPT NOT PROVIDED
BLOCKED — SOURCE TRANSCRIPT CONTAINS MISSING OR SUMMARIZED CONTENT
BLOCKED — SOURCE FILE COULD NOT BE READ
BLOCKED — CAPTURE BOUNDARY CANNOT BE VERIFIED
```

Do not create a “complete” record from a blocked source.

---

# PHASE 3 — IDENTITY, IDS, AND FILENAMES

## Display identity

```text
ChatGPT-((Email Username))-((Conversation Feed Title))
```

Platform:

```text
ChatGPT
```

Model identity, when verified for the active system:

```text
GPT-5.6 Thinking
```

## Date format

```text
DD-MM-YYYY
```

## IDs

```text
Conversation ID: CONV-DDMMYYYY-###
Capture ID: CAP-DDMMYYYY-###
Artifact ID: ART-DDMMYYYY-###
Work ID: WORK-DDMMYYYY-###
Review ID: REVIEW-DDMMYYYY-###
```

Inspect the applicable registry only to assign the next unused sequence.

## Filenames

Raw source transcript:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_RAW-VISIBLE-CONVERSATION.txt
```

Memory Gem:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM.md
```

Large-record manifest:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM-MANIFEST.md
```

Volumes:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM_VOL-01.md
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_MEMORY-GEM_VOL-02.md
```

Verification manifest:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_VERIFICATION-MANIFEST.md
```

Architect review:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_ARCHITECT-ACCOUNTABILITY-REVIEW.md
```

Intake record:

```text
DD-MM-YYYY_CHATGPT-((EMAIL-USERNAME))-((CONVERSATION-TITLE))_CHECKPOINT-INTAKE.md
```

Filename normalization:

- Remove emojis.
- Remove decorative outer asterisks.
- Replace unsupported filename characters with hyphens.
- Replace spaces with hyphens.
- Collapse repeated hyphens.
- Preserve meaningful numbers.
- Do not abbreviate unless a verified technical limit requires it.

---

# PHASE 4 — RAW TRANSCRIPT CREATION

Create the raw textual mirror at:

```text
00-CENTRAL-HUB/INBOX/Source-Transcripts/
```

Preserve every supplied:

- User message.
- Assistant message.
- Assistant progress message.
- Heading.
- Paragraph.
- List.
- Table.
- Code block.
- Writing block.
- Link.
- File reference.
- Repeated message.
- Typo.
- Correction.
- Disagreement.
- Approval.
- Incomplete instruction.
- Status report.

Do not add interpretations inside the raw conversation body.

When the original source is binary and the active GitHub operation cannot safely preserve the original binary bytes, do not claim that the original file was committed. Commit the verified raw text extraction and record the binary-source limitation in the verification manifest.

---

# PHASE 5 — MEMORY GEM CREATION

Create the canonical Memory Gem at:

```text
00-CENTRAL-HUB/Memory-Gems/
```

Use:

```markdown
## MESSAGE 001 — USER

[Exact message body]

---

## MESSAGE 002 — ASSISTANT

[Exact message body]

---
```

Continue through the complete source.

If a speaker cannot be verified:

```markdown
## MESSAGE 000 — SPEAKER UNVERIFIED
```

Do not guess.

## Prohibited transformations

Do not:

- Summarize.
- Shorten.
- Rewrite.
- Paraphrase.
- Correct spelling.
- Correct grammar.
- Correct punctuation.
- Improve wording.
- Remove repetition.
- Remove emotional wording.
- Remove mistakes.
- Merge messages.
- Reorder messages.
- Replace full prompts with descriptions.
- Remove code, links, or progress messages.
- Infer missing text.
- Omit content because it is long.

---

# PHASE 6 — LARGE-CAPTURE CONTROL

Estimate UTF-8 size before GitHub writes.

When large:

1. Split between complete messages whenever possible.
2. Start with approximately 75,000–100,000 UTF-8 characters per volume.
3. Preserve continuous message numbering.
4. Record message range for every volume.
5. Record character count for every volume.
6. Calculate volume hashes when supported.
7. Link every volume from the manifest.
8. Do not insert transition summaries.
9. Do not omit content.

If a write fails:

1. Split the affected volume in half.
2. Retry with smaller volumes.
3. Continue until accepted or a confirmed tool limitation is reached.
4. Never replace failed content with a summary.
5. Report partial commits accurately.

---

# PHASE 7 — CREATOR SELF-REVIEW

Answer:

1. Did I use the complete supplied source rather than model memory?
2. Did I include every source message?
3. Did I include visible progress messages?
4. Did I preserve chronological order?
5. Did I alter any message body?
6. Did I replace any full message with a summary?
7. Did I omit code, links, files, or repeated messages?
8. Did I create every required file?
9. Did I split the capture without gaps?
10. Did I use only verified live repository paths?
11. Did I avoid `06-AGENTS-AND-AUTOMATION/`?
12. Did I avoid writing to `09-MEMORY-GEMS/`?
13. Is any part weaker than I know how to produce?
14. Can it be materially improved before review?

Record:

```text
Creator Review: PASS / FAIL
Material Improvement Available: YES / NO
Improvement Applied: YES / NO / NOT APPLICABLE
Reason Improvement Was Not Applied: [REQUIRED WHEN APPLICABLE]
Creator Disposition: SUBMIT FOR VALIDATION / RECREATE / BLOCK
```

If material improvement is available without a legitimate constraint, recreate before continuing.

---

# PHASE 8 — DETERMINISTIC VALIDATION

Verify:

- Source hash when supported.
- Raw transcript hash when supported.
- Memory Gem or volume hashes when supported.
- Source message count equals mirror message count.
- User count matches.
- Assistant count matches.
- Speaker sequence matches.
- First message matches.
- Last message matches.
- Numbering is continuous.
- Every source message appears exactly once.
- No placeholder message bodies exist.
- No summary replacements exist.
- All volumes are present.
- Volume ranges are continuous.
- Manifest links all volumes.
- Metadata counts match the body.
- No filename collision caused an overwrite.

Record the actual method:

```text
Validation Method: AUTOMATED / TOOL-ASSISTED / MANUAL
Deterministic Validation: PASS / FAIL / REVIEW REQUIRED
```

Do not label validation “AUTOMATED” unless verified validator code was actually executed.

---

# PHASE 9 — ARCHITECT ACCOUNTABILITY GATE

The reviewer must independently answer:

1. Is this what The Architect actually requested?
2. Does the output match the request exactly?
3. Did the system produce what it claimed?
4. Is anything missing, altered, assumed, substituted, or mislabeled?
5. Did convenience override instructions?
6. Is this the best work currently available?
7. Can accuracy, completeness, reliability, usability, structure, or verification be improved?
8. If improvement is possible, why was it not already applied?
9. Should the work be rejected and recreated before deployment?
10. Could The Architect reasonably believe an incomplete action was complete?
11. Are all files routed through the verified live structure?
12. Are source and derivative records clearly separated?
13. Are IDs, names, dates, paths, links, and status consistent?
14. Are registry actions backed by commit evidence?
15. Can another system reproduce and audit the work?
16. Did Quality Control challenge both content and process?
17. Is GitHub deployment justified?

Record:

```text
Architect Intent Match: PASS / FAIL
Request-to-Output Match: PASS / FAIL
Completeness: PASS / FAIL
Source Fidelity: PASS / FAIL
Repository Compliance: PASS / FAIL
Best-Work Challenge: PASS / FAIL
Improvement Available: YES / NO
Improvement Applied: YES / NO / NOT APPLICABLE
Reason Improvement Was Not Applied: [REQUIRED]
False-Completion Risk: NONE / LOW / MEDIUM / HIGH
Final Disposition: APPROVED / RECREATE / BLOCKED
```

If material improvement is available and no legitimate source or technical constraint prevents it:

```text
Final Disposition: RECREATE
```

Do not deploy until the gate is approved.

---

# PHASE 10 — PRE-DEPLOYMENT PACKAGE

The approved package must include:

1. Raw transcript.
2. Memory Gem or manifest and all volumes.
3. Verification manifest.
4. Architect Accountability Review.
5. Intake record draft.
6. Registry update plan.
7. Index update plan.
8. Repository Map update plan.
9. Original source copy only when it can be preserved accurately.

Do not deploy while any gate is `RECREATE` or `BLOCKED`.

---

# PHASE 11 — GITHUB DEPLOYMENT

Repository:

```text
estibancreations-svg/Master-System-Buildout
```

Branch:

```text
main
```

## Preferred coherent write

When the available GitHub connector supports it:

```text
create_blob
    ↓
create_tree
    ↓
create_commit
    ↓
update_ref
```

Requirements:

- Build on the current `main` head.
- Preserve the existing tree.
- Create a single coherent commit when practical.
- Do not force-update the branch.
- Do not create a branch unless The Architect requests one.

## Fallback contents workflow

When low-level Git operations are unavailable:

- Use `create_file` for new text files.
- Fetch existing files before `update_file`.
- Use the current content SHA.
- Do not update the same path in parallel.
- Record every commit SHA.
- Keep large transcript writes conservatively sized.

## Commit messages

```text
capture(source): add verified raw conversation transcript
capture(memory-gem): add verified mirrored conversation record
docs(verification): add capture and accountability records
chore(registry): register conversation capture
docs(index): update central hub indexes and repository map
```

Do not report a commit that GitHub did not return.

---

# PHASE 12 — POST-UPLOAD VERIFICATION

After writes:

1. Fetch every created transcript, Memory Gem, manifest, volume, verification record, and accountability record.
2. Confirm each expected path exists.
3. Recalculate hashes when supported.
4. Compare fetched content with the approved package.
5. Verify first and last messages.
6. Verify total message count.
7. Verify continuous numbering.
8. Verify volume continuity.
9. Verify manifest links.
10. Verify no partial file is labeled complete.
11. Record every real commit SHA.

Use:

```text
Post-Upload Verification: PASS / FAIL
```

If it fails:

```text
BLOCKED — POST-UPLOAD VERIFICATION FAILED
```

Do not continue to tracking integration until corrected.

---

# PHASE 13 — CENTRAL HUB INTEGRATION

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

Fetch every existing file before updating it.

Preserve all existing records.

Do not overwrite unrelated entries.

Register:

- Raw transcript.
- Memory Gem.
- Manifest.
- Volumes.
- Verification manifest.
- Architect Accountability Review.
- Intake record.

Use `UNASSIGNED` or `REVIEW REQUIRED` when system or division classification is not confirmed.

## Optional archive mirror

Only when:

```text
Archive Mirror: YES
```

may the exact raw transcript be additionally stored in the established `08-CHAT-LOGS/` hierarchy.

The optional mirror must link back to the canonical Central Hub record and must not be presented as a second canonical Memory Gem.

Do not write to `09-MEMORY-GEMS/`.

---

# PHASE 14 — FINAL ACCOUNTABILITY AUDIT

Answer:

1. Did GitHub receive every approved file?
2. Do fetched files match the approved package?
3. Are all reported paths real?
4. Are all reported commits real?
5. Are tracking records accurate?
6. Was any failed action reported as complete?
7. Is this what The Architect requested?
8. Can the deployed package still be materially improved?
9. If so, why was that improvement not completed before deployment?
10. Should the deployment be accepted, corrected, or blocked?

Use:

```text
Final Architect Accountability Status: APPROVED / CORRECTION REQUIRED / BLOCKED
```

---

# REQUIRED FINAL REPORT

```markdown
# COMPLETE CONVERSATION CAPTURE AND ACCOUNTABILITY REPORT

## Repository
- Repository:
- Branch:
- Access Verified:
- Repository Preflight:
- Main Head Before Deployment:
- Final Commit or Commits:

## Conversation Identity
- Display Name:
- Email Username:
- Conversation Title:
- Conversation ID:
- Capture ID:
- Review ID:
- Status:
- Capture Date:
- Creation Mode:
- Archive Mirror:

## Source Validation
- Source Filename:
- Source Type:
- Source Claimed Complete:
- Source SHA-256:
- Source Gate:
- First Source Message:
- Last Source Message:
- Missing or Summarized Sections:
- Source Limitations:

## Message Verification
- Total Messages:
- User Messages:
- Assistant Messages:
- Unverified Messages:
- Continuous Numbering:
- Speaker Sequence Verified:
- First Message Verified:
- Last Message Verified:
- Every Message Represented Once:
- Summary Replacements Found:
- Validation Method:

## Files Created
- Raw Transcript:
  - Path:
  - Hash:
  - Commit:
- Memory Gem or Manifest:
  - Path:
  - Hash:
  - Commit:
- Volumes:
  - Path:
  - Message Range:
  - Hash:
  - Commit:
- Verification Manifest:
  - Path:
  - Commit:
- Architect Accountability Review:
  - Path:
  - Commit:
- Intake Record:
  - Path:
  - Commit:
- Optional Chat-Log Mirror:
  - Path or NOT REQUESTED:
  - Commit or NOT APPLICABLE:

## Review and Accountability
- Creator Review:
- Deterministic Validation:
- Architect Intent Match:
- Request-to-Output Match:
- Completeness:
- Source Fidelity:
- Repository Compliance:
- Best-Work Challenge:
- Improvement Available:
- Improvement Applied:
- Reason Improvement Was Not Applied:
- False-Completion Risk:
- Pre-Deployment Disposition:
- Final Accountability Status:

## Tracking Updated
- Conversation Registry:
- Artifact Registry:
- Capture Ledger:
- Work Tracker:
- Central Hub Index:
- Memory Gem Index:
- Inbox Index:
- Registry Index:
- Repository Map:

## Post-Upload Verification
- Files Fetched Back:
- Hashes Verified:
- Missing Files:
- Missing Messages:
- Broken Links:
- Post-Upload Result:

## Unresolved Repository Areas
- 08-CHAT-LOGS Action:
- 09-MEMORY-GEMS Action: NO WRITE
- Other Structural Conflict:

## Remaining Work
- [NONE OR EXACT REMAINING WORK]

## Blockers
- [NONE OR EXACT BLOCKER]

## Next Action
- [ONE PRECISE NEXT ACTION]
```

Do not report success without real paths, real commit evidence, and fetch-back verification.

---

# FAILURE STATES

```text
BLOCKED — EMAIL USERNAME NOT PROVIDED
BLOCKED — CONVERSATION TITLE NOT PROVIDED
BLOCKED — COMPLETE SOURCE TRANSCRIPT NOT PROVIDED
BLOCKED — SOURCE TRANSCRIPT CONTAINS MISSING OR SUMMARIZED CONTENT
BLOCKED — SOURCE FILE COULD NOT BE READ
BLOCKED — CAPTURE BOUNDARY CANNOT BE VERIFIED
BLOCKED — REPOSITORY PREFLIGHT FAILED
BLOCKED — CREATOR REVIEW FAILED
BLOCKED — DETERMINISTIC VALIDATION FAILED
BLOCKED — ARCHITECT ACCOUNTABILITY REVIEW FAILED
BLOCKED — GITHUB REPOSITORY ACCESS FAILED
BLOCKED — GITHUB WRITE FAILED
BLOCKED — POST-UPLOAD VERIFICATION FAILED
BLOCKED — CENTRAL HUB INTEGRATION FAILED
```

When blocked, report:

- Exact phase.
- Exact failure.
- Affected file or message.
- What was created.
- What was not created.
- Real commits created before failure.
- Exact correction required.

Never convert a blocked run into a summary.

---

# BEGIN

Collect any missing intake values and execute Phases 0 through 14 in order.

Do not skip gates.

Do not use unsupported repository paths.

Do not deploy a materially improvable result.

Do not claim production automation exists until its implementation is verified.
