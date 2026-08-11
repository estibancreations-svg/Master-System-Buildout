# Publishing & Media Studio

**Status:** Initial system specification  
**Owner:** T.H.E.L.M.A. operationally; creative/IP authority remains with the CEO/author  
**Distribution Partner:** CMGIO  
**Updated:** 2026-08-11

## 1. Purpose

The Publishing & Media Studio manages Estiban Creations intellectual property from manuscript/source material through revision, publication, adaptation, derivative media, and controlled distribution.

It exists because books, series, scripts, audio, video, and derivative works are **source IP production**, not merely marketing assets. CMGIO receives approved content for launch, distribution, promotion, analytics, and optimization; CMGIO does not own canonical story/manuscript truth.

## 2. Provenance of the Design

This system incorporates and adapts useful concepts discovered in `msitarzewski/agency-agents`, including:

- `marketing/marketing-book-co-author.md` — author voice protection, chapter architecture, versioned drafts, explicit editorial gaps, revision loops
- `academic/academic-narratologist.md` — narrative structure, character arcs, narrative promises/debts, pacing, thematic consistency
- `game-development/narrative-designer.md` — character voice pillars, world bible, lore architecture, timelines, forbidden retcons, narrative-debt tracking
- `design/design-visual-storyteller.md` — storyboards, visual narrative, multimedia adaptation
- `marketing/marketing-video-optimization-specialist.md` — video packaging, retention, chaptering, discovery, cross-platform syndication
- `marketing/marketing-short-video-editing-coach.md` — short-form post-production patterns
- `marketing/marketing-podcast-strategist.md` — show/episode planning, audio production, distribution, analytics, repurposing
- `marketing/marketing-multi-platform-publisher.md` — platform-native adaptation and draft-first distribution safety

The resulting studio is broader than the upstream roles and is specifically designed for multi-book series, republication, canon control, rights/provenance, audiovisual adaptation, and transmedia reuse.

## 3. Master Object: Intellectual Property

The primary object is the IP property/series, not an individual file.

```text
IP / SERIES
├── Series Bible
├── Canon
├── Timeline
├── Character Registry
├── Character Voice Library
├── Locations / Organizations / Rules
├── Themes / Symbols / Motifs
├── Narrative Debts / Unresolved Threads
├── Book 01
│   ├── Original Edition
│   ├── Revised Edition(s)
│   ├── Chapters
│   ├── Scenes
│   └── Production Assets
├── Book 02 ... Book N
├── Audio
├── Video
├── Shorts
├── Podcast
├── Marketing Assets
└── Rights / Provenance / Licensing Records
```

## 4. Canonical vs Derivative Content

Canonical source material is immutable except through an approved revision workflow.

Derivative works reference their canonical source:

```yaml
asset_id: VID-S01-E03
asset_type: video_episode
derived_from:
  work_id: BOOK-02
  edition: CANON-v4
  chapters: [6]
  scenes: [3,4,5,6,7]
```

Video, audio, marketing, and social adaptations must not silently alter canon.

## 5. Core Capability Teams

### 5.1 Series & Canon

- Series Architect
- Canon Keeper
- Continuity Editor
- Narratologist
- Timeline/World Bible Steward
- Character Voice Steward

### 5.2 Manuscript Editorial

- Book Co-Author / Author Support
- Developmental Editor
- Line Editor
- Copy Editor
- Proofreader
- Research/Fact Checker where applicable

### 5.3 Publishing Production

- Edition Manager
- Publishing Production Manager
- Metadata Manager
- Cover / Visual Director
- Rights & Provenance Steward
- Accessibility / Format Validator

### 5.4 Adaptation

- Screen Adaptation Writer
- Visual Storyteller
- Storyboard Director
- Audiobook Producer
- Podcast/Audio Producer
- Trailer/Promo Producer
- Short-Form Production Specialist
- Content Atomization Specialist

### 5.5 Distribution Interface

CMGIO-controlled specialists may receive approved release candidates for:

- launch strategy
- video optimization
- AEO/SEO/AI-search visibility
- social adaptations
- paid media
- email
- platform-specific packaging
- analytics and optimization

## 6. Series Bible

Required fields should include:

- canon facts
- chronology/timeline
- character identities
- ages and biographical facts
- relationships and family trees
- character wants/needs/wounds/arcs where applicable
- voice pillars and approved reference lines
- locations and geography
- organizations/factions
- world rules
- established events
- themes and motifs
- foreshadowing
- unresolved threads
- resolved threads
- banned/forbidden retcons
- source references showing where canon was established

## 7. Republication Workflow

For an older work being republished:

1. ingest all known editions/source files
2. fingerprint/version originals; never overwrite them
3. extract canon and series entities
4. compare against later books/series canon
5. identify contradictions, dated material, weak continuity, or revision opportunities
6. developmental review
7. author decision gate
8. revision
9. independent continuity review
10. line/copy edit
11. proofread
12. production formatting/cover/metadata
13. final release gate
14. publish
15. launch with CMGIO
16. create derivative-media mission(s)

## 8. Book-to-Media Adaptation

```text
CANON-APPROVED BOOK
        ↓
Adaptation Brief
        ↓
Narrative/Scene Breakdown
        ↓
Screen/Audio Adaptation
        ↓
Storyboard / Shot / Audio Plan
        ↓
Production
        ↓
QC + Canon Check
        ↓
Video / Audio Master
        ↓
Content Atomization
        ↓
CMGIO Distribution
```

Possible derivatives:

- audiobook
- serialized audio
- audio drama
- author commentary
- behind-the-book podcast
- long-form video
- episodic video
- trailers
- character teasers
- scene shorts
- YouTube Shorts
- Reels
- TikTok
- Pinterest assets
- quote cards
- email excerpts
- web extras
- interactive/lore experiences

## 9. Version Control

Every manuscript/artifact must have:

- stable work ID
- edition/version
- canonical status
- author approval state
- editorial status
- source/provenance references
- checksum or immutable source reference where possible
- derivative relationships

Old editions are archived, not destroyed.

## 10. Rights and Provenance

Track:

- author/creator
- collaborator contributions
- outside source/reference material
- licenses
- commissioned assets
- stock/AI-generated asset provenance
- music/audio licenses
- model/tool used where policy requires it
- publishing/distribution agreements
- derivative rights
- permissions/releases where needed

## 11. Quality Gates

Minimum gates:

- source integrity
- canon extraction completeness
- developmental review
- author approval
- continuity validation
- copy/line edit as required
- proofread
- production-format validation
- rights/provenance validation
- final release approval
- derivative canon check
- platform QA

## 12. Initial Portfolio Requirement

The studio must support a multi-book catalog rather than assume a one-book project. Current planning must therefore support at least:

- multiple series/work IDs
- 7+ books immediately
- expansion to 13+ works without redesign
- original editions and revised/republication editions
- shared canon across books
- multiple derivative-media tracks per work

## 13. Future Integrations

Candidate integration classes include:

- manuscript/document storage
- Google Drive/Docs ingestion
- GitHub archival/version metadata
- ebook/print formatting
- audiobook production
- AI voice where rights/consent permit
- Adobe media production
- YouTube/social platforms
- podcast RSS/hosting
- ecommerce/storefronts
- ISBN/metadata workflows where applicable
- analytics

All specific vendors/platform APIs are validated at implementation time; this specification defines the system responsibilities, not a permanent vendor lock-in.
