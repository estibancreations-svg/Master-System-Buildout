# CENTRAL HUB INBOX

This folder is the controlled intake point for all future Master Systems Buildout conversation exports, source files, notes, drafts, and unsorted artifacts.

## Intake Rule

Every new conversation or file enters the repository here first unless its destination is already certain.

## Accepted Intake Packages

Preferred formats:

- `.md` — best for direct GitHub use
- `.txt` — acceptable for raw conversation exports
- `.zip` — best for bulk batches of many files
- `.docx` or `.pdf` — accepted as source material, but should be converted or accompanied by Markdown when practical

## Conversation Status Labels

Use one of these status values in the file header or filename:

- `ACTIVE` — conversation is still developing
- `CHECKPOINT` — partial export captured at a meaningful stage
- `COMPLETE` — conversation is finished and ready for classification
- `SUPERSEDED` — replaced by a later version
- `ARCHIVE` — preserved for record only

## Required Front Matter

```yaml
---
artifact_type: conversation | specification | reference | draft | decision | memory_gem
project: Master Systems Buildout
conversation_title: ""
source_status: ACTIVE | CHECKPOINT | COMPLETE | SUPERSEDED | ARCHIVE
captured_at: YYYY-MM-DD
source_platform: ChatGPT
mirror_mode: exact | structured | summarized
classification_status: unclassified | classified
repository_destination: ""
---
```

## Recommended Filename

```text
YYYY-MM-DD_STATUS_CONVERSATION-TITLE_MEMORY-GEM.md
```

Example:

```text
2026-07-28_CHECKPOINT_GITHUB-CENTRAL-HUB_MEMORY-GEM.md
```

## Processing Flow

```text
ChatGPT conversation or uploaded file
        ↓
00-CENTRAL-HUB/INBOX
        ↓
Integrity check
        ↓
Memory Gem or source record created
        ↓
Classification and destination assignment
        ↓
Permanent system/division folder
        ↓
INDEX and registry update
```

## Non-Negotiable Memory Gem Rule

When `mirror_mode: exact` is selected, the Memory Gem must preserve the complete visible conversation in order. It must not summarize, shorten, rearrange, rewrite, or omit user and assistant messages. Capture limitations must be stated explicitly.

## Current Operating Method

For each conversation from this point forward:

1. Open the conversation.
2. Ask GitHub to capture the visible feed as a Memory Gem.
3. State its status: `ACTIVE`, `CHECKPOINT`, or `COMPLETE`.
4. The file is committed to this inbox or directly to `Memory-Gems`.
5. Classification and indexes can be updated immediately or during a later repository sorting pass.

## Bulk Method

For many conversations, export or copy them into `.md` or `.txt` files, place them in one ZIP, and upload the ZIP into the active ChatGPT conversation. The files can then be unpacked, classified, renamed, indexed, and committed without repetitive GitHub clicking.
