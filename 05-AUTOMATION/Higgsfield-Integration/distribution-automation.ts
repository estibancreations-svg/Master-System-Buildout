export const distributionAutomation = {
  stageId: 'HGFD-STAGE-6',
  workflowName: 'distribution',
  responsibilities: [
    'generate social clip derivatives',
    'optimize exports for target platforms',
    'prepare carousel images and copy packages',
    'orchestrate posting and retries',
    'track analytics, commerce, and publication outputs'
  ],
  platforms: ['TikTok', 'Instagram', 'YouTube', 'LinkedIn', 'Twitter/X'],
  publicationOutputs: ['kindle_package', 'publisher_package', 'storyboard_pdf', 'production_notes_export'],
  analytics: ['views', 'watch_time', 'clicks', 'saves', 'shares', 'revenue_attribution']
};

export function buildPlatformVariant(platform, baseAssetId) {
  return {
    platform,
    baseAssetId,
    status: 'planned',
    requiredTransforms: []
  };
}
