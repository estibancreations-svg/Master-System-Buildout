export const manuscriptIntakeAutomation = {
  stageId: 'HGFD-STAGE-1',
  workflowName: 'manuscript-intake',
  supportedFormats: ['.md', '.txt', '.pdf'],
  responsibilities: [
    'accept manuscript uploads from VisionWeaver',
    'fingerprint and persist source files',
    'extract PDF text into canonical working text',
    'parse scenes, characters, and locations',
    'collect user-supplied reference images',
    'trigger Higgsfield reference generation for missing assets'
  ],
  pipeline: [
    'uploadManuscript',
    'extractCanonicalText',
    'captureMetadata',
    'extractScenes',
    'identifyCharactersAndLocations',
    'collectReferenceAssets',
    'queueMissingReferenceGeneration',
    'publishIntakeApprovalPackage'
  ],
  records: {
    manuscript: ['manuscript_id', 'project_id', 'source_checksum', 'metadata_json', 'approval_state'],
    scene: ['scene_id', 'manuscript_id', 'order_index', 'summary', 'emotional_beats'],
    character: ['character_id', 'manuscript_id', 'canonical_name', 'traits', 'reference_asset_status'],
    location: ['location_id', 'manuscript_id', 'canonical_name', 'mood_notes', 'reference_asset_status']
  },
  recovery: {
    onPdfFailure: 'preserve upload, log extraction error, request alternate file or manual text confirmation',
    onPartialParsing: 'mark ambiguous sections for user review instead of inventing structure',
    onMissingAssets: 'branch into guided generation workflow without blocking the manuscript record'
  }
};

export function getManuscriptIntakeChecklist() {
  return [
    'manuscript stored with checksum',
    'canonical text extracted',
    'metadata captured',
    'scene roster generated',
    'character roster generated',
    'location roster generated',
    'reference asset intake completed',
    'stage approval recorded'
  ];
}
