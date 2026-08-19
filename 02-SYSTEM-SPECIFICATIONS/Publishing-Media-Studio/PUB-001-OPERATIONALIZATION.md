# Publishing & Media Studio — Operationalization Specification (PUB-001)

**System ID:** `PUB-001`  
**Record ID:** `PUB-001-OPS-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001  
**Canonical Path:** `02-SYSTEM-SPECIFICATIONS/Publishing-Media-Studio/PUB-001-OPERATIONALIZATION.md`

---

## 1. Purpose

This document operationalizes the Publishing & Media Studio (PUB-001). It defines the multi-book catalog structure, Series Bible, Canon Registry, republication and transmedia workflow procedures, book version release automation, chapter update automation, and editorial review and approval gates.

---

## 2. Multi-Book Catalog Structure

### 2.1 Catalog Organization

```
Publishing-Media-Studio/
  Catalog/
    {SERIES-ID}/
      SERIES-BIBLE.md
      Canon-Registry/
        CANON-REGISTRY.md
        Characters/
        Worlds/
        Rules/
        Continuity-Events/
      Books/
        {BOOK-ID}/
          BOOK-METADATA.md
          Chapters/
            {CHAPTER-ID}.md
          Versions/
            {VERSION-TAG}/
          Release-Notes/
      Transmedia/
        TRANSMEDIA-MAP.md
```

### 2.2 Required Catalog Metadata Per Book

```yaml
book_id: BOOK-{series}-{seq}
title: {title}
series_id: {series_id}
series_position: {number or standalone}
status: DRAFT | IN_REVIEW | APPROVED | PUBLISHED | REPUBLISHED | ARCHIVED
version: {semver}
author: {name or alias}
canon_level: PRIMARY | EXPANDED | NON_CANON
genre: {genre}
word_count_target: {number}
chapters: [{chapter_id}]
canon_refs: [{canon_registry_entry_id}]
created_at: {date}
last_updated: {date}
published_at: {date or null}
transmedia_links: [{transmedia_id}]
```

---

## 3. Series Bible

### 3.1 Required Series Bible Sections

Each series requires a Series Bible at `Catalog/{SERIES-ID}/SERIES-BIBLE.md` covering:

1. **Series Overview** — premise, tone, genre, target audience, core themes
2. **World / Setting** — geography, history, rules of physics/magic/technology (as applicable), visual style
3. **Canon Timeline** — chronological events; anchored to story-time not publication-time
4. **Character Bible** — each recurring character: physical description, psychological profile, relationships, arc, speech patterns, prohibited actions
5. **Continuity Rules** — what is immutable (character death, major world events, relationships); what may vary (minor details, flashback framing)
6. **Tone and Voice Guide** — style guide, prohibited words/tropes, register per character
7. **Series Arc** — overall story arc; per-book arc summary; planned ending
8. **Canon Levels** — PRIMARY (direct author), EXPANDED (approved adjacent), NON_CANON (fan/experiment — labeled explicitly)
9. **Cross-Media Rules** — what may be adapted; what requires author gate; what is locked
10. **Revision Policy** — how the Series Bible may be updated; who may authorize changes

---

## 4. Canon Registry

### 4.1 Purpose

The Canon Registry is the authoritative source of truth for all cross-book continuity facts. Before publishing any chapter, the Canon Registry must be checked for conflicts.

### 4.2 Canon Registry Schema

```yaml
# canon_entry_id: CANON-{series}-{seq}
entry_id: CANON-{series}-{seq}
type: CHARACTER | WORLD_FACT | EVENT | RELATIONSHIP | RULE | ARTIFACT | LOCATION
name: {name}
series_id: {series_id}
first_appeared: {book_id and chapter_id}
canon_level: PRIMARY | EXPANDED | NON_CANON
status: ACTIVE | DEPRECATED | CONTRADICTED
description: {canonical description}
constraints: {what may not contradict this entry}
references: [{book_id/chapter_id}]
last_verified: {date}
authorized_by: {authority}
```

### 4.3 Registry Files

- `Catalog/{SERIES-ID}/Canon-Registry/CANON-REGISTRY.md` — human-readable summary table
- `Catalog/{SERIES-ID}/Canon-Registry/canon-entries.json` — machine-readable registry

### 4.4 Continuity Conflict Resolution

If a proposed chapter contradicts a PRIMARY canon entry:
1. Author is notified with specific conflict description
2. Options: revise chapter, request canon amendment (requires Architect sign-off), or classify as NON_CANON
3. No chapter may be published with an unresolved PRIMARY canon conflict

---

## 5. Republication & Transmedia Workflow

### 5.1 Republication Workflow

```
Original publication
  ↓
Republication request (channel: ebook | print | audiobook | serialization)
  ↓
Rights and licensing verification
  ↓
Format conversion (per channel spec)
  ↓
Canon consistency check (Canon Registry)
  ↓
Editorial review gate
  ↓
Architect / author approval
  ↓
Publishing event recorded
  ↓
Distribute to channel
  ↓
Update catalog metadata (status: REPUBLISHED; version incremented)
```

### 5.2 Transmedia Workflow

```
Transmedia proposal (book → audio drama | graphic novel | game | video)
  ↓
Transmedia Map entry created
  ↓
Canon Level assignment (PRIMARY adaptation | EXPANDED | NON_CANON)
  ↓
Series Bible cross-media rules reviewed
  ↓
Architect sign-off on canon treatment
  ↓
Production brief (character descriptions, key scenes, prohibited adaptations)
  ↓
Adaptation production
  ↓
Canon Registry updated with transmedia entry
  ↓
Released with canon level label
```

---

## 6. Book Version Release Automation

### 6.1 Version Scheme

```
{MAJOR}.{MINOR}.{PATCH}
- MAJOR: Published edition (1.x = first published edition)
- MINOR: Chapter additions or significant revisions
- PATCH: Copyedits, typo fixes, formatting
```

### 6.2 Release Automation (n8n workflow: PUB-RELEASE-BOOK)

```yaml
trigger: manual | approved_pr
steps:
  - validate_canon_registry_check_complete
  - validate_editorial_review_gate_passed
  - validate_architect_approval_present
  - increment_version_per_change_type
  - generate_release_notes
  - create_version_snapshot: { path: "Versions/{VERSION-TAG}/" }
  - update_book_metadata: { status: PUBLISHED, version: {new}, published_at: {now} }
  - post_catalog_update_event: { destination: CEO_Dashboard_notification_queue }
  - archive_previous_version
```

### 6.3 Chapter Update Automation (n8n workflow: PUB-UPDATE-CHAPTER)

```yaml
trigger: chapter_file_changed
steps:
  - detect_canon_refs_in_chapter
  - check_each_ref_against_canon_registry
  - if_conflict: create_conflict_report; block_publish; notify_author
  - if_no_conflict: update_chapter_metadata; increment_book_patch_version
  - log_update_event
```

---

## 7. Editorial Review & Approval Gates

| Gate | Who Reviews | Approval Required | Output |
|---|---|---|---|
| Draft Review | Author / Editor | Editor approval | Revision notes or APPROVED |
| Canon Consistency | Canon Registry Check (automated + manual) | No unresolved PRIMARY conflicts | Canon check certificate |
| Quality Control | QC Agency (T.H.E.L.M.A. route) | QC PASS | QC certification record |
| Architect Sign-off | The Architect | Required for first publication and canon amendments | Architect approval record |
| Republication Approval | The Architect (+ rights holder if applicable) | Required | Republication authorization |

**No chapter or book version may be published without all applicable gates PASSED.**

---

## 8. Integration Points

| System | Integration | Notes |
|---|---|---|
| CEO Dashboard (SYS-CEO-001) | Catalog status, release events, approval queue | Publishing metrics in CEO view |
| T.H.E.L.M.A. (SYS-THELMA-001) | Mission routing for complex publishing missions | QC gate routing |
| VisionWeaver (SYS-VISION-001) | Cover art generation, promotional asset creation | Creative brief → asset pipeline |
| Master Advertising Platform (SYS-ADS-001) | Book launch campaigns, promotional content | Release-triggered campaign brief |
| GitHub Actions | Chapter update triggers, version release automation | CI/CD for content pipeline |

---

## 9. Implementation Roadmap

| Phase | Deliverable | Priority | Status |
|---|---|---|---|
| P1 | Catalog directory structure initialized | HIGH | OPEN |
| P2 | First Series Bible template and Canon Registry template created | HIGH | OPEN |
| P3 | Canon Registry schema and machine-readable format implemented | HIGH | OPEN |
| P4 | Chapter update automation (n8n workflow PUB-UPDATE-CHAPTER) | MEDIUM | OPEN |
| P5 | Book version release automation (n8n workflow PUB-RELEASE-BOOK) | MEDIUM | OPEN |
| P6 | Editorial review gate tracking in CEO Dashboard | MEDIUM | BLOCKED on CEO Dashboard backend integration |
| P7 | Transmedia Map and workflow documentation for first adaptation | LOW | DEFERRED |

---

## 10. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial operationalization specification; catalog structure; Series Bible; Canon Registry; workflows; automation; editorial gates |
