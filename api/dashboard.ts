import type { VercelRequest, VercelResponse } from '@vercel/node'
import { runFullAnalysisForSession } from './_lib/analyzeRunner'
import { requireSession } from './_lib/session'

export const config = { maxDuration: 60 }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const session = await requireSession(req, res)
  if (!session?.user) return

  try {
    const result = await runFullAnalysisForSession(
      session.accessToken!,
      session.user.id,
    )
    res.status(200).json(result.dashboard)
  } catch (error) {
    console.error(error)
    res.status(502).json({
      error: error instanceof Error ? error.message : 'Failed to load dashboard',
    })
  }
}
