export const movieCreationAutomation = {
  stageId: 'HGFD-STAGE-4',
  workflowName: 'movie-creation',
  responsibilities: [
    'generate scene clips through Higgsfield',
    'manage multiple takes per scene',
    'parse modification requests into regeneration parameters',
    'track clip versions and continuity checks',
    'publish assembly previews and acceptance decisions'
  ],
  modificationTypes: [
    'extend_scene',
    'change_angle',
    'adjust_mood',
    'add_effects',
    'modify_motion',
    'change_pacing'
  ],
  controls: {
    characterConsistency: 'validate output against approved Soul ID locks',
    locationConsistency: 'validate environment anchors against storyboard baseline',
    rollback: 'allow selection of any approved prior clip version as current'
  }
};

export function normalizeModificationRequest(requestText) {
  const lowered = String(requestText || '').toLowerCase();
  return {
    extendScene: lowered.includes('extend'),
    changeAngle: lowered.includes('angle'),
    adjustMood: lowered.includes('mood'),
    addEffects: lowered.includes('effect'),
    modifyMotion: lowered.includes('motion'),
    changePacing: lowered.includes('pace') || lowered.includes('timing')
  };
}
