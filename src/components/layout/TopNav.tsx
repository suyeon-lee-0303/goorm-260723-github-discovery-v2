import { NavLink } from 'react-router-dom'
import { useAuth } from '@/auth/AuthProvider'

const topLinks = [
  { to: '/dashboard', label: 'Insights' },
  { to: '/recommendations', label: 'Repositories' },
  { to: '/analysis', label: 'Career' },
] as const

interface TopNavProps {
  showSearch?: boolean
  variant?: 'landing' | 'app'
}

export function TopNav({ showSearch = false, variant = 'app' }: TopNavProps) {
  const { user, loading, loginUrl, logout } = useAuth()

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-surface-variant bg-slate-900/80 px-lg shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-md">
        <NavLink
          to="/"
          className="font-headline text-headline-md font-bold text-primary"
        >
          GitHub Discovery
        </NavLink>
        {showSearch && (
          <div className="ml-xl hidden items-center rounded-lg border border-slate-700 bg-slate-800 px-md py-xs md:flex">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">
              search
            </span>
            <input
              className="w-64 border-none bg-transparent text-body-sm text-on-surface outline-none placeholder:text-slate-400 focus:ring-0"
              placeholder="Search Repositories..."
              type="search"
              aria-label="Search repositories"
            />
          </div>
        )}
        {variant === 'landing' && (
          <nav className="ml-xl hidden gap-lg md:flex">
            <a
              href="#features"
              className="font-body text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Features
            </a>
            <a
              href={loginUrl}
              className="font-body text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Sign in
            </a>
          </nav>
        )}
      </div>

      {variant === 'app' && (
        <nav className="hidden h-full items-center gap-lg md:flex">
          {topLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'flex h-full items-center font-body text-body-md transition-colors',
                  isActive
                    ? 'border-b-2 border-primary font-bold text-primary'
                    : 'text-on-surface-variant hover:text-primary',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-md">
        {variant === 'landing' ? (
          loading ? null : user ? (
            <NavLink
              to="/dashboard"
              className="rounded-lg bg-indigo-500 px-md py-sm font-button text-button text-white transition-all hover:bg-indigo-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              Open Dashboard
            </NavLink>
          ) : (
            <a
              href={loginUrl}
              className="rounded-lg bg-indigo-500 px-md py-sm font-button text-button text-white transition-all hover:bg-indigo-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              Sign in with GitHub
            </a>
          )
        ) : (
          <>
            <button
              type="button"
              onClick={() => void logout()}
              className="hidden rounded-lg border border-slate-700 px-sm py-xs font-button text-xs text-on-surface-variant transition-colors hover:border-primary hover:text-primary sm:inline-flex"
            >
              Log out
            </button>
            <div className="h-8 w-8 overflow-hidden rounded-full border border-primary">
              {user?.avatarUrl ? (
                <img
                  className="h-full w-full object-cover"
                  src={user.avatarUrl}
                  alt={user.name || user.login}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-800 text-xs">
                  ?
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  )
}
