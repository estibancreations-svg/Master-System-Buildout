export const productionPlanningAutomation = {
  stageId: 'HGFD-STAGE-3',
  workflowName: 'production-planning',
  responsibilities: [
    'convert approved storyboard scenes into production units',
    'estimate duration and complexity per scene',
    'group scenes into episodes or sequence bundles',
    'calculate Higgsfield credit budgets',
    'publish readiness checklist for approval'
  ],
  estimationInputs: ['scene count', 'complexity rating', 'model profile', 'planned takes', 'effects level'],
  outputs: ['production units', 'episode map', 'schedule ranges', 'budget summary', 'readiness checklist'],
  gatingRule: 'block movie creation until budget and readiness approval are present'
};

export function estimateBudgetRows(scenePlans) {
  return scenePlans.map((scenePlan) => ({
    sceneId: scenePlan.sceneId,
    model: scenePlan.model,
    plannedTakes: scenePlan.plannedTakes,
    estimatedCredits: scenePlan.estimatedCredits,
    effectsLevel: scenePlan.effectsLevel
  }));
}
