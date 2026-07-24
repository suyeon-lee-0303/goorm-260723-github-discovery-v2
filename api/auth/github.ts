import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAppUrl } from '../_lib/env'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) {
    res.status(500).json({ error: 'GITHUB_CLIENT_ID is not configured' })
    return
  }

  const appUrl = getAppUrl()
  const redirectUri = `${appUrl}/api/auth/callback`
  const scope = ['read:user', 'user:email', 'public_repo'].join(' ')
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    allow_signup: 'true',
  })

  res.redirect(302, `https://github.com/login/oauth/authorize?${params.toString()}`)
}
