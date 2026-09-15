const pptxgen = require('pptxgenjs');
const { imageSizingCrop, imageSizingContain, warnIfSlideHasOverlaps, warnIfSlideElementsOutOfBounds } = require('/home/oai/skills/slides/pptxgenjs_helpers');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Estiban Creations / ChatGPT';
pptx.company = 'Estiban Creations';
pptx.subject = 'The Arc Commercial Production Package';
pptx.title = 'The Arc — Commercial Pitch Deck v1';
pptx.lang = 'en-US';
pptx.theme = { headFontFace: 'Aptos Display', bodyFontFace: 'Aptos', lang: 'en-US' };
pptx.defineLayout({ name: 'LAYOUT_WIDE', width: 13.333, height: 7.5 });

const C = {
  navy: '07111F', ink: '111827', white: 'FFFFFF', cyan: '49D5FF', blue: '1E5BFF',
  gray: '64748B', soft: 'EAF6FF', green: '4DAA57', slate: 'E2E8F0', gold: 'F4C542'
};
const masterImg = '/mnt/data/IMG_0783.png';

function addTitle(slide, title, kicker) {
  if (kicker) slide.addText(kicker.toUpperCase(), {x:0.55,y:0.35,w:11.5,h:0.25,fontSize:8,color:C.cyan,bold:true,charSpace:1.2});
  slide.addText(title, {x:0.55,y:0.62,w:8.6,h:0.45,fontSize:24,bold:true,color:C.white,margin:0});
  slide.addShape(pptx.ShapeType.line,{x:0.55,y:1.17,w:2.2,h:0,line:{color:C.cyan,width:1.5}});
}
function addFooter(slide,n){
  slide.addText(`THE ARC · COMMERCIAL PACKAGE v1 · ${String(n).padStart(2,'0')}`, {x:0.55,y:7.08,w:4.5,h:0.2,fontSize:7,color:'94A3B8',margin:0});
}
function addDark(slide){ slide.background = { color: C.navy }; }
function bullet(slide, items, x, y, w, h, opts={}){
  const runs = items.map(t => ({ text: t, options: { bullet: {type:'bullet'}, breakLine: true }}));
  slide.addText(runs, {x,y,w,h,fontSize:opts.fontSize||15,color:opts.color||C.white,fit:'shrink',breakLine:false,margin:0.05,paraSpaceAfterPt:6});
}
function card(slide, title, body, x, y, w, h, accent=C.cyan){
  slide.addShape(pptx.ShapeType.rect,{x,y,w,h,fill:{color:'0B1A2D',transparency:0},line:{color:accent,transparency:40,width:1},radius:0.1});
  slide.addText(title,{x:x+0.15,y:y+0.12,w:w-0.3,h:0.25,fontSize:12,color:accent,bold:true,margin:0});
  slide.addText(body,{x:x+0.15,y:y+0.48,w:w-0.3,h:h-0.6,fontSize:11.5,color:C.white,fit:'shrink',margin:0.02,breakLine:false});
}

let s = pptx.addSlide(); addDark(s);
s.addImage({path:masterImg,...imageSizingContain(masterImg,6.25,0.7,6.55,5.6)});
s.addShape(pptx.ShapeType.line,{x:6.0,y:0.65,w:0,h:5.75,line:{color:C.cyan,width:1.2,transparency:25}});
s.addText('THE ARC',{x:0.75,y:2.2,w:5.0,h:0.8,fontSize:44,bold:true,color:C.white,margin:0});
s.addText('Commercial Production Package v1.0',{x:0.78,y:3.05,w:5.0,h:0.35,fontSize:18,color:C.cyan,margin:0});
s.addText('A civilization-scale artificial-world franchise built from a controlled Digital Twin.',{x:0.8,y:3.6,w:4.9,h:1.0,fontSize:18,color:C.white,margin:0,fit:'shrink'}); addFooter(s,1);

s = pptx.addSlide(); addDark(s); addTitle(s,'The commercial thesis','Positioning');
s.addText('The Arc is not just a spaceship. It is a repeatable world platform: story, production design, VFX continuity, and engineering logic all point to the same source of truth.',{x:0.7,y:1.5,w:7.1,h:1.5,fontSize:24,color:C.white,bold:true,fit:'shrink'});
card(s,'Audience promise','Learn the ship like a real city: branches, rings, water, parks, districts, class lines, and emergency systems all matter.',0.75,3.6,3.6,1.65);
card(s,'Buyer promise','A premium sci-fi world with clear franchise expansion: series, films, publishing, games, VR, collectibles, and production-tech tooling.',4.85,3.6,3.8,1.65,C.gold);
card(s,'Production promise','The Digital Twin keeps the world repeatable instead of letting every shot redesign the property.',9.15,3.6,3.4,1.65,C.green); addFooter(s,2);

s=pptx.addSlide(); addDark(s); addTitle(s,'The franchise hook','Story engine');
s.addImage({path:masterImg,...imageSizingContain(masterImg,7.25,1.35,5.2,3.4)});
s.addText('A civilization survives inside a colossal artificial world — until the systems keeping everyone alive begin executing an old protocol no living authority remembers.',{x:0.7,y:1.55,w:6.1,h:1.5,fontSize:25,bold:true,color:C.white,fit:'shrink'});
bullet(s,['Artificial gravity, water and atmosphere become politics.','Five branches create social geography and class conflict.','The ship itself becomes a character: a machine, a city, a memory, and a warning.'],0.9,3.45,5.65,2.3,{fontSize:16}); addFooter(s,3);

s=pptx.addSlide(); addDark(s); addTitle(s,'Five ship classes, one expandable universe','World platform');
const fams=[['ARC-01','Passover-Class','Canonical production base'],['ARC-02','Pentarch-Class','Radial five-branch class'],['ARC-03','Spireheart-Class','Core/ring command class'],['ARC-04','Verdant-Gate','Ecological shield class'],['ARC-05','Pelagic-Class','Aquatic reclamation class']];
fams.forEach((f,i)=>{card(s,f[0]+' · '+f[1],f[2],0.75+(i%3)*4.05,1.55+Math.floor(i/3)*2.05,3.5,1.35,[C.cyan,C.gold,C.green,C.blue,C.cyan][i]);});
s.addText('Rule: ARC-01 stays the screen-production authority until another class is explicitly selected.',{x:0.8,y:6.25,w:11.7,h:0.35,fontSize:17,color:C.white,bold:true,margin:0}); addFooter(s,4);

s=pptx.addSlide(); addDark(s); addTitle(s,'Season 1: The Passover','Television path');
s.addText('Pilot engine',{x:0.75,y:1.45,w:3,h:0.35,fontSize:18,color:C.cyan,bold:true,margin:0});
s.addText('An unscheduled shield movement exposes a hidden water-circulation protocol and forces engineering, civic power, and family survival into collision.',{x:0.75,y:1.9,w:5.6,h:1.25,fontSize:20,color:C.white,bold:true,fit:'shrink'});
bullet(s,['Episode 1: The Passover','Episode 2: The Fifth Branch','Episode 3: Dry Sectors','Episode 4: The Green Lock','Episode 5: Under-Panel Ocean'],0.9,3.55,4.6,2.5,{fontSize:15});
bullet(s,['Episode 6: The Archive Problem','Episode 7: The Ringwrights','Episode 8: Branch Pressure','Episode 9: The Custodian','Episode 10: Stable Living Arc'],6.8,3.55,5.4,2.5,{fontSize:15}); addFooter(s,5);

s=pptx.addSlide(); addDark(s); addTitle(s,'Characters are tied to systems','Ensemble');
const chars=[['Mara Vale','Water / ecology'],['Elias Ro','Rings / maintenance'],['Liora Vale','Law / civic truth'],['Talen Voss','Transit / geography'],['Nia Ro','Future / witness'],['Soren Kael','Authority / survival control']];
chars.forEach((c,i)=>card(s,c[0],c[1],0.75+(i%3)*4.05,1.55+Math.floor(i/3)*2.0,3.55,1.25,[C.cyan,C.gold,C.green,C.blue,C.cyan,C.gold][i]));
s.addText('The cast makes the world legible. Every lead opens a different production zone and conflict layer.',{x:0.8,y:6.05,w:11.6,h:0.5,fontSize:18,color:C.white,bold:true}); addFooter(s,6);

s=pptx.addSlide(); addDark(s); addTitle(s,'Proof-of-concept trailer','90-second sales asset');
const beats=[['0:00','Sound before image'],['0:08','Passover reveal'],['0:20','People live here'],['0:30','First anomaly'],['0:42','Systems activate'],['0:55','Political pressure'],['1:05','Under-panel ocean'],['1:17','Escalation'],['1:25','Title']];
beats.forEach((b,i)=>{const x=0.7+(i%3)*4.15; const y=1.45+Math.floor(i/3)*1.65; card(s,b[0],b[1],x,y,3.6,1.0,[C.cyan,C.gold,C.green][i%3]);});
s.addText('Goal: stop showing tests and produce one finished trailer that sells awe, people, danger, and a repeatable world.',{x:0.8,y:6.58,w:11.5,h:0.3,fontSize:15,color:C.white,bold:true}); addFooter(s,7);

s=pptx.addSlide(); addDark(s); addTitle(s,'Digital Twin advantage','Production moat');
card(s,'Zones','134 mapped ARC-01 zones: branches, core, rings, shields, water, exterior, service layers.',0.75,1.45,3.7,1.35,C.cyan);
card(s,'Entities','491 seed entities: structure, plants, animals, minerals, water, vehicles, microbes, safety.',4.85,1.45,3.7,1.35,C.green);
card(s,'Assets','Images, videos, boards and prompts linked back to states and zones.',8.95,1.45,3.7,1.35,C.gold);
card(s,'QA','Generation cannot drift: wrong branch count, ring drift, random oceans, rounded ends, and missing quadrants fail.',0.75,3.6,3.7,1.35,C.blue);
card(s,'Engineering','The same catalog can later calculate mass, water, atmosphere, power, heat, food and maintenance.',4.85,3.6,3.7,1.35,C.cyan);
card(s,'VisionWeaver','The runtime can pull facts from the world model instead of improvising every shot.',8.95,3.6,3.7,1.35,C.green); addFooter(s,8);

s=pptx.addSlide(); addDark(s); addTitle(s,'Budget path','Commercial discipline');
s.addText('Do not fund a full pilot first. Build the proof, lock the rights, write the script, then package with producers.',{x:0.75,y:1.4,w:8.0,h:0.9,fontSize:24,bold:true,color:C.white,fit:'shrink'});
card(s,'Low-cost proof','AI-assisted trailer + script + deck + rights log. Goal: professional package before heavy spend.',0.75,3.0,3.7,1.5,C.green);
card(s,'Mid-cost proof','3–5 minute polished short / scene with characters, sound, score, and final-style VFX.',4.85,3.0,3.7,1.5,C.gold);
card(s,'High-cost path','Producer-attached pilot presentation or financed pilot after buyer/partner traction.',8.95,3.0,3.7,1.5,C.cyan);
addFooter(s,9);

s=pptx.addSlide(); addDark(s); addTitle(s,'Revenue architecture','Beyond one show');
bullet(s,['Primary: option/license/sale, pilot, series, production participation.','Secondary: books, graphic novel, art book, worldbuilding media.','Long-term: games, VR, collectibles, educational speculative engineering, Digital Twin/VisionWeaver tooling.'],0.85,1.65,5.8,2.5,{fontSize:18});
s.addImage({path:masterImg,...imageSizingContain(masterImg,7.2,1.35,5.4,3.3)});
s.addText('The Arc is strongest as a screen story first, with the Digital Twin as the production engine behind it.',{x:0.9,y:5.8,w:11.2,h:0.55,fontSize:21,bold:true,color:C.white,fit:'shrink'}); addFooter(s,10);

s=pptx.addSlide(); addDark(s); addTitle(s,'What must be completed next','Execution');
const next=[['1','Pilot screenplay v1'],['2','90-second trailer edit'],['3','Final 10 visual lookbook'],['4','Rights/provenance ledger'],['5','Real budget quotes'],['6','Producer outreach tracker']];
next.forEach((n,i)=>card(s,n[0],n[1],0.75+(i%3)*4.05,1.5+Math.floor(i/3)*2.0,3.55,1.25,[C.cyan,C.green,C.gold,C.blue,C.cyan,C.green][i]));
s.addText('These are the bottlenecks between “developed concept” and “commercially pitchable property.”',{x:0.85,y:6.2,w:10.7,h:0.35,fontSize:18,color:C.white,bold:true}); addFooter(s,11);

s=pptx.addSlide(); addDark(s); addTitle(s,'Quality gate','Architect review');
bullet(s,['Does it work?','Are all the connections correct?','If this is 100%, how do we make it 130% better?','Is this what was asked for?','Would The Architect consider it done?'],0.95,1.55,5.8,3.4,{fontSize:21});
s.addText('Status: commercial foundation complete. Not yet market-submission complete until script, trailer, legal ledger and outreach tracker are finished.',{x:7.1,y:1.75,w:5.1,h:2.0,fontSize:24,bold:true,color:C.white,fit:'shrink'});
s.addText('Next command: produce the pilot screenplay and trailer asset list from this package.',{x:7.1,y:4.6,w:5.1,h:0.9,fontSize:20,color:C.cyan,bold:true,fit:'shrink'}); addFooter(s,12);

for (const slide of pptx._slides) {
  warnIfSlideHasOverlaps(slide, pptx, {muteContainment:true});
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

pptx.writeFile({ fileName: '/mnt/data/the_arc_commercial_package_v1/THE_ARC_COMMERCIAL_PITCH_DECK_v1.pptx' });
