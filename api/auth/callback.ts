import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAppUrl } from '../_lib/env'
import { getSession } from '../_lib/session'

interface GitHubTokenResponse {
  access_token?: string
  error?: string
  error_description?: string
}

interface GitHubUser {
  id: number
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  company: string | null
  location: string | null
  followers: number
  following: number
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const appUrl = getAppUrl()
  const code = typeof req.query.code === 'string' ? req.query.code : null
  if (!code) {
    res.redirect(302, `${appUrl}/?auth=error`)
    return
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    res.status(500).json({ error: 'GitHub OAuth is not configured' })
    return
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${appUrl}/api/auth/callback`,
      }),
    })

    const tokenData = (await tokenRes.json()) as GitHubTokenResponse
    if (!tokenData.access_token) {
      console.error('GitHub token error', tokenData)
      res.redirect(302, `${appUrl}/?auth=error`)
      return
    }

    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${tokenData.access_token}`,
        'User-Agent': 'GitHub-Discovery',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    if (!userRes.ok) {
      res.redirect(302, `${appUrl}/?auth=error`)
      return
    }

    const ghUser = (await userRes.json()) as GitHubUser
    const session = await getSession(req, res)
    session.accessToken = tokenData.access_token
    session.user = {
      id: ghUser.id,
      login: ghUser.login,
      name: ghUser.name,
      avatarUrl: ghUser.avatar_url,
      bio: ghUser.bio,
      company: ghUser.company,
      location: ghUser.location,
      followers: ghUser.followers,
      following: ghUser.following,
    }
    await session.save()

    res.redirect(302, `${appUrl}/dashboard`)
  } catch (error) {
    console.error('OAuth callback failed', error)
    res.redirect(302, `${appUrl}/?auth=error`)
  }
}
