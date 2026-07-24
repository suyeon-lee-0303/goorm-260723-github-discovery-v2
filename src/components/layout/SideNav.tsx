import { NavLink } from 'react-router-dom'

const sideLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { to: '/analysis', label: 'Code DNA', icon: 'genetics' },
  { to: '/recommendations', label: 'Skill Tree', icon: 'account_tree' },
] as const

export function SideNav() {
  return (
    <aside className="fixed left-0 top-0 z-40 mt-16 hidden h-[calc(100%-4rem)] w-[280px] flex-col border-r border-slate-800 bg-slate-900 py-lg md:flex">
      <div className="mb-xl flex items-center gap-sm px-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
          <span className="material-symbols-outlined material-filled text-white">
            genetics
          </span>
        </div>
        <div>
          <div className="font-headline text-sm font-bold leading-tight text-primary">
            Developer DNA
          </div>
          <div className="flex items-center gap-xs font-body text-body-sm text-emerald-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            AI Analysis Active
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-sm">
        {sideLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                'mx-2 flex items-center gap-md rounded-lg px-md py-sm duration-200 ease-in-out',
                isActive
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'text-on-surface-variant transition-all hover:bg-surface-container-low',
              ].join(' ')
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-body text-body-sm">{link.label}</span>
          </NavLink>
        ))}
        <div className="mx-2 flex cursor-not-allowed items-center gap-md rounded-lg px-md py-sm text-on-surface-variant/50">
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-body text-body-sm">AI Coach</span>
        </div>
      </nav>

      <div className="mt-auto space-y-sm px-md">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-sm rounded-lg bg-indigo-500 py-sm font-button text-button text-white transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        >
          <span className="material-symbols-outlined text-sm">add_circle</span>
          Analyze New Repo
        </button>
        <div className="space-y-xs border-t border-slate-800 pt-lg">
          <NavLink
            to="/"
            className="flex items-center gap-md px-md py-xs font-body text-body-sm text-on-surface-variant transition-colors hover:text-rose-500"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </NavLink>
        </div>
      </div>
    </aside>
  )
}
