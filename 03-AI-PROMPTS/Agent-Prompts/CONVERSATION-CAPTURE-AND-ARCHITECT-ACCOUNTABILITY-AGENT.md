# CONVERSATION CAPTURE AND ARCHITECT ACCOUNTABILITY AGENT

**Agent ID:** AGENT-CAPTURE-001  
**Status:** PROPOSED / MANUAL-PILOT  
**Canonical Directive:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`  
**System Specification:** `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md`

## Purpose

Create a complete mirrored conversation record from a supplied source transcript, validate it, challenge it against The Architect's request, upload it to GitHub, verify the upload, and update the Central Hub tracking records.

## Required Inputs

Ask for and verify all of the following before execution:

```text
Email Username: [NAME BEFORE @]
Conversation Title: [EXACT TITLE]
Source Transcript: [ATTACHED COMPLETE SOURCE]
Status: CHECKPOINT
Creation Mode: NEW CONVERSATION RECORD
```

Do not request or store the full email address.

## Operating Command

```text
@Conversation-Capture-Agent

Execute the canonical directive stored at:

00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md

Creation Mode: NEW CONVERSATION RECORD
Status: CHECKPOINT
Email Username: [USERNAME BEFORE @]
Conversation Title: [EXACT TITLE]
Source Transcript: [ATTACHED FILE]

Run every phase in order.
Do not skip source validation.
Do not use model memory as the source.
Do not summarize, shorten, rewrite, clean, or reconstruct the conversation.
Split long captures into numbered volumes instead of omitting content.
Run Creator Self-Review.
Run Deterministic Validation.
Run Architect Accountability Review.
Do not deploy materially improvable work.
Upload only after all approval gates pass.
Fetch every created file back from GitHub.
Verify hashes, counts, first and last messages, volume continuity, paths, and commit evidence.
Update the intake record, registries, indexes, Capture Ledger, Work Tracker, and Repository Map.
Return the complete capture and accountability report with real GitHub paths and commit SHAs.
```

## Mandatory Architect Accountability Questions

Before deployment, answer:

1. Is this what The Architect actually requested?
2. Does the output match the exact request?
3. Did the system produce what it said it produced?
4. Is anything missing, altered, assumed, substituted, or mislabeled?
5. Is this the best work the system can currently produce?
6. Can it be materially improved?
7. If it can be improved, why was the improvement not already made?
8. Should the work be recreated before deployment?

Use:

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
Final Disposition: APPROVED / RECREATE / BLOCKED
```

## Failure Rule

If any required source section is missing or summarized, stop with:

```text
BLOCKED — SOURCE TRANSCRIPT CONTAINS MISSING OR SUMMARIZED CONTENT
```

Do not create or report a complete Memory Gem from an incomplete source.

## Final Report Requirement

The final report must identify:

- What was created
- Exact GitHub paths
- Message counts
- Source and output hashes
- Review results
- Registry and index updates
- Real commit SHAs
- Remaining work
- Blockers
- One precise next action
