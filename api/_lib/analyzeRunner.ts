import type { AnalysisPayload } from './openai'
import {
  fetchGitHubUser,
  fetchStarredRepos,
  fetchUserRepos,
  mapProfile,
  summarizeRepos,
} from './github'
import { getMemoryCache, setMemoryCache, type CachedAnalysis } from './cache'
import {
  getLatestCachedAnalysis,
  saveAnalysis,
  upsertUser,
} from './db'

async function buildFresh(accessToken: string): Promise<CachedAnalysis> {
  const [user, owned, starred] = await Promise.all([
    fetchGitHubUser(accessToken),
    fetchUserRepos(accessToken),
    fetchStarredRepos(accessToken),
  ])

  const { analyzeWithOpenAI } = await import('./openai')
  const analysis: AnalysisPayload = await analyzeWithOpenAI({
    profile: {
      login: user.login,
      name: user.name,
      bio: user.bio,
    },
    ownedSummary: summarizeRepos(owned),
    starredSummary: summarizeRepos(starred),
  })

  const profile = mapProfile(user)
  const cached: CachedAnalysis = {
    at: Date.now(),
    profile,
    analysis,
    dashboard: {
      profile,
      dna: analysis.dna,
      coaching: analysis.coaching,
      coachingTags: analysis.coachingTags,
      learningSkills: analysis.learningSkills,
      alignmentPercent: analysis.alignmentPercent,
      alignmentNote: analysis.alignmentNote,
    },
    analysisView: {
      rankings: analysis.rankings,
      coaching: analysis.coachingCards,
      activities: analysis.activities,
    },
    recommendations: analysis.recommendations,
  }

  setMemoryCache(user.id, cached)

  try {
    const userId = await upsertUser(user, profile)
    if (userId) {
      await saveAnalysis(userId, user.id, analysis)
    }
  } catch (error) {
    console.error('Neon persist failed (non-fatal)', error)
  }

  return cached
}

export async function runFullAnalysisForSession(
  accessToken: string,
  githubId: number,
  force = false,
) {
  if (!force) {
    const mem = getMemoryCache(githubId)
    if (mem) return mem

    try {
      const dbHit = await getLatestCachedAnalysis(githubId)
      if (dbHit) {
        setMemoryCache(githubId, dbHit)
        return dbHit
      }
    } catch (error) {
      console.error('Neon read failed (non-fatal)', error)
    }
  }

  return buildFresh(accessToken)
}
