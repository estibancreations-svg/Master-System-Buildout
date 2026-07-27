# CHAT ARCHIVAL & MEMORY GEM STANDARD

**Control Type:** Project continuity and process traceability  
**Applies To:** ChatGPT, Claude, Codex, GitHub Copilot, and other AI-assisted project sessions

---

# PURPOSE

Preserve the complete development history of the Master Systems Buildout so the enterprise can track not only final specifications, but also the decisions, corrections, sequencing, disagreements, and instructions that produced them.

---

# TWO DISTINCT RECORD TYPES

## 1. Memory Gem

A complete, unchanged, chronological mirror of a conversation.

## 2. Structured Project Record

A separate organized specification, decision record, system document, build package, roadmap, or index derived from project work.

A structured project record does not replace the original conversation archive.

---

# EXACTNESS REQUIREMENT

A file may be labeled `MEMORY_GEM` only when the complete source conversation is available.

A valid Memory Gem must preserve:

- Conversation inception
- Every user message
- Every assistant response
- Original wording
- Original order
- Repeated content
- Corrections and disputes
- Build outputs
- Final available exchange

The following are prohibited inside an exact Memory Gem:

- Summarization
- Trimming
- Condensation
- Reorganization
- Grammar correction
- Silent omission
- Topic sorting
- Replacement with extracted decisions
- Placeholder text for missing sections

---

# PARTIAL-THREAD RULE

When only part of a conversation is available:

1. Do not label it as a complete Memory Gem.
2. Label it `PARTIAL_THREAD_ARCHIVE`.
3. State the exact known coverage boundary.
4. State what is missing.
5. Preserve the available portion without rewriting.
6. Replace it with a complete Memory Gem when the complete source becomes available.

---

# REPOSITORY LOCATION

```text
09_CHAT_ARCHIVES/
├── MEMORY_GEMS/
├── PARTIAL_THREADS/
├── CHAT_INDEX.md
├── RECOVERY_QUEUE.md
└── ARCHIVAL_EVIDENCE/
```

---

# FILE NAMING

Complete conversation:

```text
YYYY-MM-DD_CONVERSATION_TITLE_MEMORY_GEM.md
```

Partial available conversation:

```text
YYYY-MM-DD_CONVERSATION_TITLE_PARTIAL_THREAD_ARCHIVE.md
```

Conversation recovery record:

```text
YYYY-MM-DD_CONVERSATION_TITLE_RECOVERY_RECORD.md
```

---

# REQUIRED ARCHIVE METADATA

Each archive file must identify:

- Archive type
- Conversation title
- Project
- Source platform
- Coverage start
- Coverage end
- Completeness status
- Verification status
- Related build packages
- Related systems
- Repository path
- Recovery status

---

# CHAT INDEX REQUIREMENTS

The chat index must track:

- Conversation title
- Archive file
- Complete or partial status
- Relevant systems
- Relevant build packages
- Date archived
- Missing content
- Recovery priority

---

# SESSION CLOSEOUT PROCEDURE

Before leaving a major build conversation:

1. Save every completed build specification.
2. Update the current build position.
3. Update the recovery manifest.
4. Export the complete conversation when technically available.
5. Store it under `09_CHAT_ARCHIVES/MEMORY_GEMS/`.
6. If complete export is unavailable, create a partial-thread record without pretending it is complete.
7. Record the exact handoff point for the next conversation.

---

# PROCESS MONITORING VALUE

Conversation archives are retained to support:

- Decision lineage
- Quality control
- Architecture forensics
- Instruction tracking
- Build-sequence verification
- Error and drift detection
- Agent behavior review
- Governance review
- Recovery after context loss
- Reproduction of system-development reasoning

---

# GOVERNING RULE

The repository preserves both the final architecture and the full path used to build it.
