const GITHUB_API = 'https://api.github.com'
const API_VERSION = '2022-11-28'

export interface MappedProfile {
  name: string
  username: string
  bio: string
  avatarUrl: string
  company: string
  location: string
  followers: number
  following: number
  badge: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
  owner: { login: string; avatar_url: string }
}

export interface GitHubUserRaw {
  id: number
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  company: string | null
  location: string | null
  followers: number
  following: number
  public_repos: number
}

async function githubFetch<T>(
  path: string,
  accessToken: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${GITHUB_API}${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'GitHub-Discovery',
      'X-GitHub-Api-Version': API_VERSION,
      ...(init?.headers || {}),
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GitHub API ${path} failed (${res.status}): ${body}`)
  }

  return res.json() as Promise<T>
}

export function mapProfile(user: GitHubUserRaw): MappedProfile {
  return {
    name: user.name || user.login,
    username: `@${user.login}`,
    bio: user.bio || 'GitHub developer exploring new skills.',
    avatarUrl: user.avatar_url,
    company: user.company || '',
    location: user.location || '',
    followers: user.followers,
    following: user.following,
    badge: 'LIVE',
  }
}

export async function fetchGitHubUser(accessToken: string) {
  return githubFetch<GitHubUserRaw>('/user', accessToken)
}

export async function fetchUserRepos(accessToken: string, perPage = 100) {
  return githubFetch<GitHubRepo[]>(
    `/user/repos?per_page=${perPage}&sort=updated&affiliation=owner,collaborator`,
    accessToken,
  )
}

export async function fetchStarredRepos(accessToken: string, perPage = 100) {
  return githubFetch<GitHubRepo[]>(
    `/user/starred?per_page=${perPage}&sort=updated`,
    accessToken,
  )
}

export function summarizeRepos(repos: GitHubRepo[]) {
  const languages: Record<string, number> = {}
  const topics: Record<string, number> = {}

  for (const repo of repos) {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1
    }
    for (const topic of repo.topics || []) {
      topics[topic] = (topics[topic] || 0) + 1
    }
  }

  return {
    count: repos.length,
    languages,
    topics,
    topRepos: repos
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 20)
      .map((r) => ({
        name: r.full_name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        topics: r.topics,
        updatedAt: r.updated_at,
      })),
  }
}
