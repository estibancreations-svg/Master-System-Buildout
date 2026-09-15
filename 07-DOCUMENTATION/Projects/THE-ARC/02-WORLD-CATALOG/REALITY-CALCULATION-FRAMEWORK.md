# THE ARC
## Reality Calculation Framework
### Turning the Production Catalog into an Engineering Bill of Systems

This annex does not pretend the current concept drawings are construction drawings. Its purpose is to define the **variables, equations, inventories and dependency models** required to turn a locked fictional design into a quantifiable engineering study.

The original Master Arc prompt established an illustrative **5 km diameter** habitat. If that diameter remains canonical, the outer-radius baseline is **2.5 km**. At that radius, approximately **1 g** of centrifugal acceleration at the outer habitat surface requires about **0.598 rpm**, a rotation period of about **100.3 seconds**. That is a starting physics constraint, not a completed ship design.

---

# 1. MASTER GEOMETRY INPUTS

Define before any mass or life-support calculation:
- `D` overall rotating habitat diameter
- `R` inhabited-surface radius
- `L` axial length
- `N_branch = 5`
- branch width
- branch length
- branch usable land fraction
- inter-branch gap angle
- shield-panel area
- ring diameters
- ring widths/depths
- central spine length and diameter
- under-panel ocean depth by zone
- structural thickness by component
- non-rotating versus rotating mass
- docking/vehicle clearances

## Artificial gravity
For target acceleration `a` at radius `r`:
`omega = sqrt(a / r)`

Rotation rate:
`rpm = omega * 60 / (2*pi)`

Tangential velocity:
`v = omega * r`

Every branch, lake, road, building and water body must use the same local rotation model.

---

# 2. HABITABLE AREA

For each branch:
`A_branch = usable_length * usable_width * occupancy_factor`

Total surface:
`A_hab = sum(A_branch) + usable_shield_area + other approved surfaces`

Do not count:
- inter-branch voids;
- dry transparent ring sectors;
- structural-only areas;
- inaccessible maintenance volume;
- aquatic surface as residential land unless it has separate platforms.

Track land by use:
- residential
- civic
- commercial
- industrial
- agriculture
- park/ecology
- water
- utilities
- transport
- emergency reserve

---

# 3. POPULATION MODEL

Inputs:
- permanent population
- crew
- visitors
- population growth
- age structure
- housing occupancy
- employment structure
- emergency shelter capacity

Required outputs:
- housing floor area
- hospital beds
- school seats
- transit trips/day
- food energy/day
- potable water/day
- oxygen demand
- CO2 production
- solid waste
- wastewater
- emergency reserve duration

Run at least:
- nominal population
- 110% overload
- 125% emergency migration
- branch-isolation scenario
- core-isolation scenario

---

# 4. ATMOSPHERE MASS BALANCE

For each pressure zone calculate:
- volume
- pressure
- temperature
- gas composition
- total moles/mass
- leakage rate
- oxygen consumption
- CO2 production
- plant/algal exchange
- scrubber capacity
- emergency reserve

Use ideal-gas calculations only as a first-order estimate. Detailed design requires humidity, contaminant chemistry, pressure-zone behavior and fire safety.

---

# 5. WATER INVENTORY

Maintain separate ledgers for:
1. potable
2. hygiene
3. sanitation
4. agriculture
5. industry
6. firefighting
7. thermal exchange
8. weather/climate
9. freshwater habitat
10. marine habitat
11. reserve/ballast
12. wastewater in process

For each ledger:
`M_water = rho * Volume`

For flow systems:
`Pump hydraulic power = rho * g * Q * head / efficiency`

The Pelagic/Arc circulation concept must additionally track:
- surface deployment rate;
- near-to-far flow velocity;
- top ring-lane flow;
- bottom ring-lane flow;
- far-base collection;
- under-panel ocean turnover;
- aquatic oxygenation;
- salinity;
- temperature;
- biological load.

Left/right ring sectors remain a zero-open-water condition unless a later design revision explicitly changes that rule.

---

# 6. FOOD AND AGRICULTURE

For each crop:
- planted area
- crop cycle
- yield per area
- edible fraction
- calories/protein/fat
- water
- nutrients
- lighting energy
- climate load
- pollination
- seed stock
- disease reserve

For animal foods:
- feed conversion
- habitat space
- water
- veterinary load
- manure/waste processing
- breeding stock
- humane handling

Large animals and charismatic marine species should be justified primarily by ecology, culture or story; they are far less resource-efficient than plants, insects, microbial protein and many fish species.

---

# 7. AQUATIC BIOME MODEL

Never model "the ocean" as one generic tank.

Each biome requires:
- salinity
- temperature
- water volume
- depth
- circulation rate
- dissolved oxygen
- pH/alkalinity
- nitrogen cycle
- phosphorus cycle
- primary producers
- plankton
- forage species
- predators
- detritivores/filter feeders
- pathogen controls
- veterinary access
- genetic reserve

Predator/prey populations are solved as a managed trophic system, not decorative additions.

---

# 8. PLANT / GREEN BIOME MODEL

For every planted surface:
- soil/substrate depth
- substrate mass
- drainage
- irrigation
- root-zone oxygen
- light level
- photoperiod
- humidity
- nutrient delivery
- CO2
- pollination
- pruning/harvest
- biomass waste
- pest control
- fire load

Shield-panel vegetation must include the mass of:
- soil/substrate;
- retained water;
- mature plant biomass;
- irrigation pipes;
- drainage;
- maintenance access;
- root barriers;
- safety rails/structures.

That mass is part of the shield mechanism and must be included in drive/brake calculations.

---

# 9. POWER BUDGET

Build a ledger for:
- life support
- agriculture lighting
- civic lighting
- industrial loads
- transit
- pumps
- HVAC
- water treatment
- desalination if used
- computation
- communications
- docking
- medical
- fabrication
- emergency reserve

`P_total = sum(P_loads) / distribution_efficiency`

Peak and average loads must both be modeled.

---

# 10. HEAT REJECTION

Almost every watt used inside eventually becomes heat.

First-order radiator relation:
`P = epsilon * sigma * A * (T_radiator^4 - T_space^4)`

Solve for radiator area `A` using realistic temperature, emissivity and redundancy. Aquatic/thermal water loops can transport heat internally, but they do not eliminate the requirement to reject heat to space.

---

# 11. STRUCTURAL MASS

For every structural entity:
`M = density * volume`

Then add:
- joints
- fasteners
- bearings
- pressure layers
- shielding
- utilities
- floors
- soil
- water
- buildings
- vehicles
- stored goods
- people
- safety factor
- maintenance reserve

Rotating structures require stress and fatigue analysis under centrifugal loading. A thin-ring approximation can be used for early screening, but the final vessel needs finite-element analysis of the complete frame.

---

# 12. SHIELD-DOOR MECHANICS

For each shield:
- dry structural mass
- ecology/substrate mass
- water retained in soil
- mechanism mass
- travel arc
- maximum speed
- acceleration
- braking distance
- motor torque
- bearing loads
- emergency stop energy
- seal force
- pressure differential
- lock count
- redundant drive paths

The cinematic movement should remain slow because the real kinetic energy of a habitat-scale moving panel would be enormous.

---

# 13. RADIATION / IMPACT PROTECTION

Define by occupied zone:
- target mission environment
- expected particle/debris environment
- allowable crew dose
- material areal density
- water/polymer/structural contribution
- storm shelter requirements
- vulnerable transparent surfaces
- external repair access

Calculate shielding mass separately from pressure-shell mass.

---

# 14. MATERIAL SUPPLY CHAIN

For every material:
- installed tonnes
- annual loss
- recycling fraction
- reserve stock
- manufacturing scrap
- repair demand
- source body/location
- refining energy
- transport energy
- substitute materials

The reality model should eventually output a full **bill of materials by element**, not just by finished alloy.

---

# 15. MAINTENANCE / RELIABILITY

Every critical component needs:
- MTBF / reliability model
- inspection interval
- preventive maintenance task
- repair time
- spare quantity
- manufacturing capability
- redundant path
- common-mode failure analysis

A generational vessel must assume it will eventually need to reproduce many of its own replacement parts.

---

# 16. PROPULSION / ATTITUDE / SPIN

The current visual designs establish habitat geometry more strongly than propulsion. Before making a "real" moving starship, define:
- total vessel mass
- intended acceleration
- mission delta-v
- travel duration
- propulsion type
- propellant/reaction mass
- energy source
- thrust axis
- structural thrust path
- spin-up/spin-down method
- gyroscopic effects
- attitude-control method
- docking while rotating / non-rotating interface

Do not visually add giant engines until this architecture is intentionally chosen.

---

# 17. CALCULATION OUTPUTS REQUIRED FOR EACH VESSEL CLASS

The final engineering model should output:
- total dry mass
- total wet mass
- water mass by ledger
- atmosphere mass
- soil/substrate mass
- biomass mass
- structural mass
- building mass
- vehicle mass
- stored-goods mass
- population capacity
- habitable area
- agricultural area
- aquatic volume
- power average/peak
- waste heat
- radiator area
- oxygen inventory
- emergency survival duration
- food autonomy
- spare-parts autonomy
- ecological reserve
- propulsion requirement
- construction material totals
- build/assembly sequence
- estimated crew to operate/maintain

---

# 18. REALITY READINESS GATES

## Gate 0 — Concept locked
Geometry and entity IDs fixed.

## Gate 1 — Dimensional model
Every major system has dimensions and volumes.

## Gate 2 — Mass model
Every entity has installed mass or population.

## Gate 3 — Utility model
Power, water, air and heat are balanced.

## Gate 4 — Ecology model
Food, waste and managed ecosystems close adequately.

## Gate 5 — Reliability model
Redundancy and maintenance are quantified.

## Gate 6 — Construction model
Materials, fabrication and assembly are defined.

## Gate 7 — Mission model
Propulsion, navigation, radiation and external environment are defined.

## Gate 8 — Integrated simulation
The whole vessel is simulated under nominal and failure scenarios.

---

# 19. NEXT NUMBERS TO LOCK

To move from cinematic design into calculation, the highest-value dimensions are:

1. Canonical overall diameter for each class
2. Axial length
3. Branch width and branch length
4. Ring diameters
5. Shield-panel areas
6. Under-panel ocean depths
7. Design population
8. Target artificial gravity
9. Atmosphere pressure/composition
10. Power-generation concept
11. Mission duration
12. Radiation environment
13. External construction/resource source
14. Propulsion concept
15. Emergency reserve duration

Once those are fixed, the catalog can become a quantitative bill of systems instead of a purely descriptive bible.
