import type {
  AnalysisData,
  DashboardData,
  RecommendationsData,
  UserProfile,
} from '@/types'

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    credentials: 'include',
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(body || `Request failed: ${res.status}`)
  }

  return res.json() as Promise<T>
}

export function fetchProfile() {
  return apiFetch<UserProfile>('/api/profile')
}

export function fetchRepos() {
  return apiFetch<{ repos: unknown[]; summary: unknown }>('/api/repos')
}

export function fetchStarred() {
  return apiFetch<{ repos: unknown[]; summary: unknown }>('/api/starred')
}

export function fetchDashboard() {
  return apiFetch<DashboardData>('/api/dashboard')
}

export function fetchAnalysis() {
  return apiFetch<AnalysisData>('/api/analysis')
}

export function fetchRecommendations() {
  return apiFetch<RecommendationsData>('/api/recommendation')
}

export function postAnalyze() {
  return apiFetch<{ ok: boolean; dashboard: DashboardData; analysis: AnalysisData }>(
    '/api/analyze',
    { method: 'POST' },
  )
}
