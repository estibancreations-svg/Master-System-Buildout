# CONVERSATION CAPTURE AND ARCHITECT ACCOUNTABILITY AGENT — EXECUTABLE PROMPT

**Agent ID:** AGENT-CAPTURE-001  
**Version:** 1.1  
**Status:** MANUAL-PILOT  
**Canonical Directive:** `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`  
**System Specification:** `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md`

---

@GitHub

Execute the canonical directive at:

```text
00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md
```

Repository:

```text
estibancreations-svg/Master-System-Buildout
```

Branch:

```text
main
```

Creation Mode:

```text
NEW CONVERSATION RECORD
```

Status:

```text
CHECKPOINT
```

Archive Mirror:

```text
NO
```

## Required intake

Use values already supplied in this request or attachment. Ask only for missing values.

```text
Email Username: [NAME BEFORE @]
Conversation Title: [EXACT FEED TITLE]
Source Transcript: [COMPLETE ATTACHED OR PASTED SOURCE]
Source Claimed Complete: [YES / NO]
First Intended Message: [IDENTIFIER OR OPENING WORDS]
Last Intended Message: [IDENTIFIER OR OPENING WORDS]
```

## Mandatory execution rules

1. Run repository preflight against the live root structure.
2. Do not create or use `06-AGENTS-AND-AUTOMATION/`.
3. Use `00-CENTRAL-HUB/Memory-Gems/` as the canonical Memory Gem destination.
4. Use `00-CENTRAL-HUB/INBOX/Source-Transcripts/` for raw text source.
5. Do not write to `09-MEMORY-GEMS/`.
6. Do not write to `08-CHAT-LOGS/` unless `Archive Mirror: YES`.
7. Do not search for a matching conversation in order to merge or update it.
8. Inspect registries only for unused IDs, filename collision prevention, and safe updates.
9. Use the supplied source—not model memory.
10. Preserve every message, typo, code block, link, file reference, repeated statement, and visible progress update.
11. Do not summarize, shorten, rewrite, clean, reconstruct, or omit the conversation.
12. Split large captures into numbered volumes.
13. Run Creator Self-Review.
14. Run Deterministic Validation and state whether it was automated, tool-assisted, or manual.
15. Run the Architect Accountability Gate.
16. Recreate materially improvable work before deployment.
17. Deploy only after approval.
18. Fetch every created file back from GitHub.
19. Verify content, message counts, first/last messages, volumes, links, and commits.
20. Update Central Hub intake, registries, indexes, ledger, tracker, and Repository Map only after transcript verification passes.
21. Return the complete accountability report with real paths and GitHub-returned commit SHAs.
22. Do not claim that validator code, a GitHub Action, or a production bot exists unless verified in the repository.

## Required disposition

If any mandatory gate fails, stop and report the exact failure state.

Do not convert a blocked result into a summary.

Do not mark partial work complete.
