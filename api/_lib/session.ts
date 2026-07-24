import { getIronSession, type SessionOptions } from 'iron-session'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export interface SessionUser {
  id: number
  login: string
  name: string | null
  avatarUrl: string
  bio: string | null
  company: string | null
  location: string | null
  followers: number
  following: number
}

export interface SessionData {
  accessToken?: string
  user?: SessionUser
}

export function getSessionOptions(): SessionOptions {
  const password = process.env.SESSION_SECRET
  if (!password || password.length < 32) {
    throw new Error('SESSION_SECRET must be at least 32 characters')
  }

  return {
    password,
    cookieName: 'gd_session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    },
  }
}

export async function getSession(req: VercelRequest, res: VercelResponse) {
  return getIronSession<SessionData>(req, res, getSessionOptions())
}

export async function requireSession(req: VercelRequest, res: VercelResponse) {
  const session = await getSession(req, res)
  if (!session.accessToken || !session.user) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }
  return session
}
