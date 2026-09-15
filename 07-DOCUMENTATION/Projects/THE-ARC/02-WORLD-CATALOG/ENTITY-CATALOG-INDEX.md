# THE ARC — 491-Entity Catalog Index

**Status:** SEEDED / STAGE-1 MAPPED  
**Total seeded entities:** `491`  
**Entity classes:** `14`

The complete entity checklist and engineering field definitions were generated on 2026-09-15. The project repository preserves the full first-pass entity-to-zone assignments under `03-DIGITAL-TWIN/ENTITY-ZONE-ASSIGNMENTS-*.csv` and the reality-calculation framework under this directory. The longer checklist source remains in the project source archive listed in `00-PROJECT-CONTROL/SOURCE-MANIFEST.md`.

## Entity classes

| Class | Count | Scope |
|---|---:|---|
| Structural Architecture | 40 | shell, ribs, rings, branch frames, quadrants, shielding, docking structure |
| Mechanical Systems | 30 | shields, drives, pumps, airlocks, transit mechanics, maintenance robots |
| Power & Electrical | 25 | generation, storage, grid, distribution, telemetry, emergency power |
| Atmosphere & Climate | 25 | breathable atmosphere, scrubbers, circulation, humidity, weather control |
| Water / Aquatic / Reclamation | 35 | potable, hygiene, agriculture, thermal, weather, aquatic, reserve, reclamation |
| Habitat / Civic / Built Environment | 40 | housing, schools, hospitals, markets, transit, parks, industry, utilities |
| Digital / AI / Control | 25 | operations, navigation, life-support control, Digital Twin, cyber, AI |
| Minerals / Elements / Materials | 50 | structural metals, ceramics, composites, polymers, salts, soil, treatment media |
| Plants / Vegetable / Landscape | 53 | staple crops, vegetables, fruit, herbs, trees, aquatic plants, ecology |
| Terrestrial Animals / Invertebrates | 35 | humans, companion animals, food animals, pollinators, decomposers, research species |
| Aquatic Animals | 43 | food fish, forage fish, dolphins, sharks, cephalopods, shellfish, corals, plankton |
| Microbes / Fungi / Primary Producers | 35 | nitrifiers, digesters, fermentation microbes, fungi, algae, archives |
| Vehicles / Craft / Robotics | 25 | passenger/freight transport, EVA craft, drones, submersibles, rescue vehicles |
| Safety / Emergency / Recovery | 30 | fire, pressure, flood, radiation, quarantine, reserves, recovery protocols |

## Canonical entity record fields

Every production or engineering entity is expected to carry:

- Entity ID
- canonical name and aliases
- entity class / subtype
- vessel-class applicability
- branch/core/ring/shield/under-panel location
- coordinate/map reference
- gravity vector
- dimensions / quantity / unit mass / total mass / volume
- power / waste heat / water / atmosphere / consumables / outputs
- dependencies and downstream dependents
- failure modes / redundancy / inspection / maintenance / replacement stock
- expected service life and emergency behavior
- visual reference / color / material / texture / motion / sound
- production asset IDs and VFX continuity notes
- story uses
- real-world source / engineering citation
- approval status and change history

## Biological extension fields

Living records additionally require taxonomy, habitat, environmental range, diet/nutrients, trophic level, reproduction, viable population/genetic backup, disease/pest risk, quarantine, welfare, invasiveness, ecosystem interactions, population-control protocol, and recovery protocol.

## Material extension fields

Material/mineral records additionally require density, mechanical properties, fatigue, temperature/corrosion/radiation behavior, extraction/refining/manufacturing route, installed mass, annual replacement, recycling, strategic reserve, substitute materials, and visual finish.

## Production lock

An entity is not canonical merely because it appears in one generated image. It becomes production-locked only after identity, location, function, visual reference, dependencies, reality-accounting record, behavior/failure rules, and approval status are established.
