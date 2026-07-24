import type { VercelRequest, VercelResponse } from '@vercel/node'
import { fetchGitHubUser, mapProfile } from './_lib/github'
import { requireSession } from './_lib/session'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const session = await requireSession(req, res)
  if (!session) return

  try {
    const user = await fetchGitHubUser(session.accessToken!)
    res.status(200).json(mapProfile(user))
  } catch (error) {
    console.error(error)
    res.status(502).json({ error: 'Failed to fetch GitHub profile' })
  }
}
