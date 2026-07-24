import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/auth/AuthProvider'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading, loginUrl } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center font-body text-body-md text-on-surface-variant">
        Checking GitHub session…
      </div>
    )
  }

  if (!user) {
    const next = encodeURIComponent(location.pathname)
    return <Navigate to={`/?auth=required&next=${next}`} replace />
  }

  // loginUrl kept for future deep-link; silence unused if tree-shaken
  void loginUrl

  return children
}
