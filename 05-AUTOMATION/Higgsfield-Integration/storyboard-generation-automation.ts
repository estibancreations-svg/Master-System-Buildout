export const storyboardGenerationAutomation = {
  stageId: 'HGFD-STAGE-2',
  workflowName: 'storyboard-generation',
  responsibilities: [
    'perform semantic scene analysis',
    'generate storyboard prompts',
    'call Higgsfield image generation in batches when safe',
    'bind character Soul IDs for consistency',
    'store storyboard versions and review decisions'
  ],
  inputs: ['approved manuscript package', 'reference assets', 'visual style brief'],
  outputs: ['storyboard frames', 'who-what-where-when cards', 'production metadata draft'],
  controls: {
    characterConsistency: 'lock approved character identities to Soul IDs and approved references',
    locationConsistency: 'reuse approved environment references and lighting presets',
    versioning: 'store scene-level version history for every revision request'
  },
  reviewLoop: [
    'generateCandidates',
    'presentSceneCards',
    'captureModificationRequests',
    'regenerateAffectedScenesOnly',
    'lockApprovedStoryboardBaseline'
  ]
};

export function createStoryboardPromptSeed(sceneCard) {
  return {
    sceneId: sceneCard.sceneId,
    who: sceneCard.who,
    what: sceneCard.what,
    where: sceneCard.where,
    when: sceneCard.when,
    continuityNotes: sceneCard.continuityNotes || []
  };
}
