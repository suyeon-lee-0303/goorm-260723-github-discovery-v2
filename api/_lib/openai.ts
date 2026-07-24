import OpenAI from 'openai'

export interface AnalysisPayload {
  dna: Array<{
    subject: string
    current: number
    market: number
    fullMark: number
  }>
  coaching: string
  coachingTags: string[]
  learningSkills: Array<{
    name: string
    mastery: string
    progress: number
    status: 'growth' | 'target' | 'stable' | 'gap'
    statusLabel: string
    icon: string
  }>
  alignmentPercent: number
  alignmentNote: string
  rankings: Array<{
    name: string
    subtitle: string
    icon: string
    iconColor: string
    marketInterest: number
    proficiency: number
    trend: 'up' | 'flat' | 'down'
    trendLabel: string
  }>
  coachingCards: Array<{
    title: string
    body: string
    badge: string
    badgeTone: 'indigo' | 'cyan'
    icon: string
  }>
  activities: Array<{
    id: string
    type: 'repo' | 'skill' | 'star' | 'fork'
    time: string
    title: string
    highlight?: string
    description?: string
    quote?: string
    tags?: string[]
  }>
  recommendations: {
    intro: string
    repos: Array<{
      id: string
      name: string
      stars: string
      description: string
      topics: string[]
      reason: string
      reasonTone: 'indigo' | 'cyan'
      icon: string
      iconColor: string
    }>
    topics: Array<{ label: string; active?: boolean; missing?: boolean }>
  }
}

const SYSTEM_PROMPT = `You are GitHub Discovery, an AI Developer Coach.
Given a developer's GitHub profile summary (repos, starred, languages, topics),
return ONLY valid JSON matching this shape:
{
  "dna": [{"subject":"Frontend","current":0-100,"market":0-100,"fullMark":100}],
  "coaching": "one paragraph coaching quote",
  "coachingTags": ["#Tag"],
  "learningSkills": [{"name":"","mastery":"Mastery: ...","progress":0-100,"status":"growth|target|stable|gap","statusLabel":"","icon":"material symbol name"}],
  "alignmentPercent": 0-100,
  "alignmentNote": "",
  "rankings": [{"name":"","subtitle":"","icon":"","iconColor":"text-indigo-500","marketInterest":0-100,"proficiency":0-100,"trend":"up|flat|down","trendLabel":""}],
  "coachingCards": [{"title":"","body":"","badge":"","badgeTone":"indigo|cyan","icon":""}],
  "activities": [{"id":"1","type":"repo|skill|star|fork","time":"","title":"","highlight":"","description":"","quote":"","tags":[]}],
  "recommendations": {
    "intro": "",
    "repos": [{"id":"1","name":"owner/repo","stars":"12.4k","description":"","topics":[],"reason":"","reasonTone":"indigo|cyan","icon":"","iconColor":"text-indigo-500"}],
    "topics": [{"label":"","active":true},{"label":"","missing":true}]
  }
}
Use exactly 5 dna axes: Frontend, Backend, AI, Cloud, Data.
Provide 4 learningSkills, 4-6 rankings, 2 coachingCards, 4-6 activities, 4-6 recommended repos.
Prefer real public repos that match the user's interests.`

export async function analyzeWithOpenAI(input: {
  profile: { login: string; name: string | null; bio: string | null }
  ownedSummary: unknown
  starredSummary: unknown
}): Promise<AnalysisPayload> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured')
  }

  const client = new OpenAI({ apiKey })
  const completion = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    response_format: { type: 'json_object' },
    temperature: 0.4,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: JSON.stringify(input),
      },
    ],
  })

  const raw = completion.choices[0]?.message?.content
  if (!raw) {
    throw new Error('OpenAI returned empty response')
  }

  return JSON.parse(raw) as AnalysisPayload
}
