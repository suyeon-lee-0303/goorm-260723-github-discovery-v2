import { neon } from '@neondatabase/serverless'
import type { CachedAnalysis } from './cache'
import type { GitHubUserRaw, MappedProfile } from './github'
import type { AnalysisPayload } from './openai'

let schemaReady = false

function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

export async function ensureSchema() {
  const sql = getSql()
  if (!sql || schemaReady) return
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id BIGSERIAL PRIMARY KEY,
      github_id BIGINT UNIQUE NOT NULL,
      username TEXT NOT NULL,
      name TEXT,
      avatar_url TEXT,
      bio TEXT,
      company TEXT,
      location TEXT,
      followers INT DEFAULT 0,
      following INT DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS ai_analyses (
      id BIGSERIAL PRIMARY KEY,
      user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      github_id BIGINT NOT NULL,
      developer_dna JSONB NOT NULL,
      learning_radar JSONB NOT NULL,
      summary TEXT,
      recommendation JSONB,
      analysis_payload JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  await sql`
    CREATE INDEX IF NOT EXISTS ai_analyses_github_id_created_at_idx
      ON ai_analyses (github_id, created_at DESC)
  `
  schemaReady = true
}

export async function upsertUser(user: GitHubUserRaw, profile: MappedProfile) {
  const sql = getSql()
  if (!sql) return null
  await ensureSchema()
  const rows = await sql`
    INSERT INTO users (
      github_id, username, name, avatar_url, bio, company, location, followers, following, updated_at
    ) VALUES (
      ${user.id}, ${user.login}, ${profile.name}, ${profile.avatarUrl}, ${profile.bio},
      ${profile.company}, ${profile.location}, ${profile.followers}, ${profile.following}, NOW()
    )
    ON CONFLICT (github_id) DO UPDATE SET
      username = EXCLUDED.username,
      name = EXCLUDED.name,
      avatar_url = EXCLUDED.avatar_url,
      bio = EXCLUDED.bio,
      company = EXCLUDED.company,
      location = EXCLUDED.location,
      followers = EXCLUDED.followers,
      following = EXCLUDED.following,
      updated_at = NOW()
    RETURNING id
  `
  return Number(rows[0].id)
}

export async function saveAnalysis(
  userId: number,
  githubId: number,
  analysis: AnalysisPayload,
) {
  const sql = getSql()
  if (!sql) return
  await ensureSchema()
  await sql`
    INSERT INTO ai_analyses (
      user_id, github_id, developer_dna, learning_radar, summary, recommendation, analysis_payload
    ) VALUES (
      ${userId},
      ${githubId},
      ${JSON.stringify(analysis.dna)},
      ${JSON.stringify(analysis.learningSkills)},
      ${analysis.coaching},
      ${JSON.stringify(analysis.recommendations)},
      ${JSON.stringify(analysis)}
    )
  `
}

const TTL_MS = 1000 * 60 * 30

export async function getLatestCachedAnalysis(
  githubId: number,
): Promise<CachedAnalysis | null> {
  const sql = getSql()
  if (!sql) return null
  await ensureSchema()
  const rows = await sql`
    SELECT u.username, u.name, u.avatar_url, u.bio, u.company, u.location,
           u.followers, u.following, a.analysis_payload, a.created_at
    FROM ai_analyses a
    JOIN users u ON u.id = a.user_id
    WHERE a.github_id = ${githubId}
    ORDER BY a.created_at DESC
    LIMIT 1
  `
  if (!rows.length) return null
  const row = rows[0]
  const createdAt = new Date(row.created_at as string).getTime()
  if (Date.now() - createdAt > TTL_MS) return null

  const analysis = row.analysis_payload as AnalysisPayload
  const profile: MappedProfile = {
    name: (row.name as string) || (row.username as string),
    username: `@${row.username as string}`,
    bio: (row.bio as string) || '',
    avatarUrl: row.avatar_url as string,
    company: (row.company as string) || '',
    location: (row.location as string) || '',
    followers: Number(row.followers || 0),
    following: Number(row.following || 0),
    badge: 'LIVE',
  }

  return {
    at: createdAt,
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
}
