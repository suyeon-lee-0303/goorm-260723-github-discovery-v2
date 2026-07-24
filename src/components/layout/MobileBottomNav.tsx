import { NavLink } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Insights', icon: 'dashboard' },
  { to: '/analysis', label: 'DNA', icon: 'genetics' },
  { to: '/recommendations', label: 'Repos', icon: 'account_tree' },
] as const

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-slate-800 bg-slate-900 md:hidden">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              'flex flex-col items-center gap-1',
              isActive ? 'text-primary' : 'text-on-surface-variant',
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={[
                  'material-symbols-outlined',
                  isActive ? 'material-filled' : '',
                ].join(' ')}
              >
                {item.icon}
              </span>
              <span
                className={['text-[10px]', isActive ? 'font-bold' : ''].join(
                  ' ',
                )}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
