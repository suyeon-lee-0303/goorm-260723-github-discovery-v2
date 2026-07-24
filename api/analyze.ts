import type { VercelRequest, VercelResponse } from '@vercel/node'
import { runFullAnalysisForSession } from './_lib/analyzeRunner'
import { clearMemoryCache } from './_lib/cache'
import { requireSession } from './_lib/session'

export const config = {
  maxDuration: 60,
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const session = await requireSession(req, res)
  if (!session?.user) return

  try {
    clearMemoryCache(session.user.id)
    const result = await runFullAnalysisForSession(
      session.accessToken!,
      session.user.id,
      true,
    )
    res.status(200).json({
      ok: true,
      dashboard: result.dashboard,
      analysis: result.analysisView,
      recommendations: result.recommendations,
    })
  } catch (error) {
    console.error(error)
    res.status(502).json({
      error: error instanceof Error ? error.message : 'Analysis failed',
    })
  }
}
