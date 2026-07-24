import { Outlet } from 'react-router-dom'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'
import { MobileBottomNav } from './MobileBottomNav'

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <TopNav showSearch />
      <SideNav />
      <main className="min-h-screen px-lg pb-24 pt-16 md:ml-[280px] md:pb-xl">
        <div className="mx-auto max-w-container-max pt-lg">
          <Outlet />
        </div>
      </main>
      <MobileBottomNav />
    </div>
  )
}
