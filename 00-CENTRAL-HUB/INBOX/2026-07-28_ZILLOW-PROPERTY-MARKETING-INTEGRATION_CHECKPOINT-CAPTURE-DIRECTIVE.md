# Zillow Property Marketing Integration — Checkpoint Capture Directive

@GitHub

Repository: `https://github.com/estibancreations-svg/Master-System-Buildout`
Repository identifier: `estibancreations-svg/Master-System-Buildout`
Branch: `main`
Conversation title: `Zillow Property Marketing Integration`
Conversation status: `CHECKPOINT`
Memory Gem destination: `00-CENTRAL-HUB/Memory-Gems`
Intake destination: `00-CENTRAL-HUB/INBOX`

## Naming Rule

Use the exact ChatGPT conversation title after removing only emoji characters and leading or trailing asterisk marks. Do not otherwise rename, shorten, paraphrase, or improve the title. All conversation statuses remain `CHECKPOINT` until the user changes this rule.

## Required Execution

Capture the entire visible user-and-assistant conversation in chronological order as a lossless Memory Gem. Do not summarize, shorten, rearrange, rewrite, correct, clean, or omit visible content. Do not include hidden system instructions, hidden developer instructions, private reasoning, inaccessible conversations, or internal tool operations.

Before creating a file, search for an existing canonical Memory Gem for this conversation. When one exists, preserve its prior content unchanged, append only uncaptured visible messages, continue message numbering, and update checkpoint metadata and capture history. Do not create competing canonical copies.

Use the canonical filename pattern:

`YYYY-MM-DD_ZILLOW-PROPERTY-MARKETING-INTEGRATION_MEMORY-GEM.md`

Create or update the related intake record and the following tracking files:

- `00-CENTRAL-HUB/Registries/CONVERSATION-REGISTRY.md`
- `00-CENTRAL-HUB/Registries/ARTIFACT-REGISTRY.md`
- `00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md`
- `00-CENTRAL-HUB/Registries/CAPTURE-LEDGER.md`
- `00-CENTRAL-HUB/Registries/WORK-TRACKER.md`
- `00-CENTRAL-HUB/REPOSITORY-MAP.md`
- Central Hub, Memory Gem, Inbox, and Registry indexes

The Capture Ledger must record every execution, including a run with no new messages. The Work Tracker must state what was already complete, what this run completed, what remains, blockers, the next action, and commit evidence.

Assign stable IDs using:

- Conversation: `CONV-YYYYMMDD-###`
- Capture: `CAP-YYYYMMDD-###`
- Artifact: `ART-YYYYMMDD-###`
- Work item: `WORK-YYYYMMDD-###`

Lossless capture occurs before classification. Checkpoint classification may remain provisional or `UNASSIGNED`. Do not move the canonical Memory Gem from the Central Hub.

Verify the first and latest visible messages, chronological order, continuous numbering, message counts, duplicate prevention, registry paths, status, ledger entry, and Work Tracker update. Use `VERIFIED` only when all checks pass; otherwise use `REVIEW REQUIRED` or `BLOCKED`.

Do not report any action as complete unless GitHub returns commit evidence. Return the repository, branch, stable IDs, files created or updated, verification results, commit SHA and message, remaining work, blockers, and one precise next action.
