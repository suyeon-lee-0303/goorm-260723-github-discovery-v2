import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSession } from '../_lib/session'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const session = await getSession(req, res)
  if (!session.user) {
    res.status(200).json({ authenticated: false, user: null })
    return
  }

  res.status(200).json({
    authenticated: true,
    user: session.user,
  })
}
