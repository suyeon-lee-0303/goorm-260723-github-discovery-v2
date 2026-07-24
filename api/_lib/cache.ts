import type { AnalysisPayload } from './openai'
import type { MappedProfile } from './github'

export interface CachedAnalysis {
  at: number
  profile: MappedProfile
  analysis: AnalysisPayload
  dashboard: {
    profile: MappedProfile
    dna: AnalysisPayload['dna']
    coaching: string
    coachingTags: string[]
    learningSkills: AnalysisPayload['learningSkills']
    alignmentPercent: number
    alignmentNote: string
  }
  analysisView: {
    rankings: AnalysisPayload['rankings']
    coaching: AnalysisPayload['coachingCards']
    activities: AnalysisPayload['activities']
  }
  recommendations: AnalysisPayload['recommendations']
}

const memory = new Map<string, CachedAnalysis>()
const TTL_MS = 1000 * 60 * 30

export function getMemoryCache(githubId: number) {
  const hit = memory.get(String(githubId))
  if (!hit) return null
  if (Date.now() - hit.at > TTL_MS) {
    memory.delete(String(githubId))
    return null
  }
  return hit
}

export function setMemoryCache(githubId: number, data: CachedAnalysis) {
  memory.set(String(githubId), data)
}

export function clearMemoryCache(githubId: number) {
  memory.delete(String(githubId))
}
