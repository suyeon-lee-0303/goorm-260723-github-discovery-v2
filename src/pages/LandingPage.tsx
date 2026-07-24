import { Link } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body text-body-md antialiased">
      <TopNav variant="landing" />

      <main className="relative mx-auto max-w-container-max px-lg pb-xl pt-32">
        <section className="relative mb-32 flex flex-col items-center justify-between gap-2xl lg:flex-row">
          <div className="z-10 lg:w-1/2">
            <div className="animate-float mb-lg inline-flex items-center gap-sm rounded-full border border-indigo-500/30 bg-slate-800 px-md py-xs text-indigo-500">
              <span className="material-symbols-outlined text-[18px]">
                psychology
              </span>
              <span className="font-code text-code-label tracking-wider">
                AI ANALYSIS ENGINE ACTIVE
              </span>
            </div>
            <h1 className="mb-md font-display text-display-lg leading-tight text-on-surface max-md:text-[32px] max-md:leading-10">
              Discover Your{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Developer DNA
              </span>
              .
            </h1>
            <p className="mb-xl max-w-lg font-body text-body-lg text-on-surface-variant">
              AI-powered GitHub analysis for developers. Uncover hidden skills,
              track technical growth, and map your path to engineering mastery.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link
                to="/dashboard"
                className="ai-glow group flex items-center gap-sm rounded-lg bg-indigo-500 px-xl py-md font-button text-button text-white transition-all hover:bg-indigo-600"
              >
                Start with GitHub
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/dashboard"
                className="rounded-lg border border-slate-700 bg-slate-800 px-xl py-md font-button text-button text-on-surface transition-all hover:bg-slate-700"
              >
                View Demo DNA
              </Link>
            </div>
          </div>

          <div className="relative flex aspect-square w-full items-center justify-center lg:w-1/2">
            <div className="absolute inset-0 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="glass-card ai-glow relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
              <div className="relative flex h-4/5 w-4/5 items-center justify-center rounded-full border border-slate-700/50">
                <div className="absolute inset-0 scale-[0.2] rounded-full border border-slate-700/30" />
                <div className="absolute inset-0 scale-[0.4] rounded-full border border-slate-700/30" />
                <div className="absolute inset-0 scale-[0.6] rounded-full border border-slate-700/30" />
                <div className="absolute inset-0 scale-[0.8] rounded-full border border-slate-700/30" />
                <svg
                  className="absolute inset-0 h-full w-full -rotate-12 drop-shadow-lg"
                  viewBox="0 0 100 100"
                >
                  <polygon
                    fill="rgba(99, 102, 241, 0.3)"
                    points="50,10 85,30 90,75 50,90 10,75 15,30"
                    stroke="#6366f1"
                    strokeWidth="1"
                  />
                  <circle cx="50" cy="10" fill="#6366f1" r="1.5" />
                  <circle cx="85" cy="30" fill="#6366f1" r="1.5" />
                  <circle cx="90" cy="75" fill="#6366f1" r="1.5" />
                  <circle cx="50" cy="90" fill="#6366f1" r="1.5" />
                  <circle cx="10" cy="75" fill="#6366f1" r="1.5" />
                  <circle cx="15" cy="30" fill="#6366f1" r="1.5" />
                </svg>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded border border-indigo-500/30 bg-slate-900 px-sm font-code text-xs text-indigo-500">
                  BACKEND
                </div>
                <div className="absolute top-1/4 -right-6 rounded border border-cyan-500/30 bg-slate-900 px-sm font-code text-xs text-cyan-500 sm:-right-10">
                  FRONTEND
                </div>
                <div className="absolute bottom-1/4 -right-6 rounded border border-emerald-500/30 bg-slate-900 px-sm font-code text-xs text-emerald-500 sm:-right-10">
                  DEVOPS
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded border border-rose-500/30 bg-slate-900 px-sm font-code text-xs text-rose-500">
                  SECURITY
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mb-32">
          <div className="mb-xl flex items-center justify-between">
            <div>
              <h2 className="font-headline text-headline-lg text-on-surface">
                Precision Insights
              </h2>
              <p className="font-body text-body-md text-on-surface-variant">
                Your repositories hold the truth about your expertise. We decrypt
                it.
              </p>
            </div>
            <div className="mx-xl hidden h-px flex-grow bg-gradient-to-r from-slate-800 to-transparent md:block" />
          </div>

          <div className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="glass-card group rounded-2xl p-xl transition-all hover:bg-slate-800/80 md:col-span-8">
              <div className="mb-lg flex items-start justify-between">
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-md text-indigo-500">
                  <span className="material-symbols-outlined text-[32px]">
                    genetics
                  </span>
                </div>
                <span className="flex items-center gap-xs font-code text-code-label text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  AI Verified
                </span>
              </div>
              <h3 className="mb-sm font-headline text-headline-md text-on-surface">
                Developer DNA
              </h3>
              <p className="mb-xl max-w-md font-body text-body-md text-on-surface-variant">
                A multidimensional map of your technical contribution history. We
                analyze commit velocity, complexity, and code quality patterns to
                build your unique profile.
              </p>
              <div className="grid grid-cols-3 gap-md">
                {[
                  { value: '84%', label: 'Structural Quality', color: 'text-indigo-500' },
                  { value: '92%', label: 'Complexity Handling', color: 'text-cyan-500' },
                  { value: '78%', label: 'Doc Efficiency', color: 'text-emerald-500' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-md"
                  >
                    <div className={`mb-xs font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="font-code text-[11px] uppercase tracking-tighter text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card group flex flex-col justify-between rounded-2xl p-xl transition-all hover:bg-slate-800/80 md:col-span-4">
              <div>
                <div className="mb-lg w-fit rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-md text-cyan-500">
                  <span className="material-symbols-outlined text-[32px]">
                    leaderboard
                  </span>
                </div>
                <h3 className="mb-sm font-headline text-headline-md text-on-surface">
                  Tech Ranking
                </h3>
                <p className="mb-md font-body text-body-sm text-on-surface-variant">
                  See how your expertise in specific languages and frameworks
                  compares to the global talent pool.
                </p>
              </div>
              <div className="space-y-sm">
                {[
                  { name: 'TypeScript', rank: 'Top 2%' },
                  { name: 'React', rank: 'Top 5%' },
                  { name: 'Rust', rank: 'Top 12%', muted: true },
                ].map((row) => (
                  <div
                    key={row.name}
                    className={[
                      'flex items-center justify-between rounded border border-slate-800 bg-slate-900/40 p-sm',
                      row.muted ? 'opacity-60' : '',
                    ].join(' ')}
                  >
                    <span className="font-code text-xs">{row.name}</span>
                    <span
                      className={[
                        'text-xs font-bold',
                        row.muted ? 'text-on-surface-variant' : 'text-cyan-500',
                      ].join(' ')}
                    >
                      {row.rank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card group flex flex-col justify-between rounded-2xl p-xl transition-all hover:bg-slate-800/80 md:col-span-5">
              <div>
                <div className="mb-lg w-fit rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-md text-emerald-500">
                  <span className="material-symbols-outlined text-[32px]">
                    track_changes
                  </span>
                </div>
                <h3 className="mb-sm font-headline text-headline-md text-on-surface">
                  Learning Radar
                </h3>
                <p className="mb-md font-body text-body-sm text-on-surface-variant">
                  AI-detected trajectory based on your latest merges and
                  experimental forks.
                </p>
              </div>
              <div className="flex h-32 items-end gap-2 px-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/20 to-emerald-500/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="glass-card ai-glow group rounded-2xl p-xl transition-all hover:bg-slate-800/80 md:col-span-7">
              <div className="mb-lg flex items-start justify-between">
                <div className="w-fit rounded-xl border border-primary/20 bg-primary/10 p-md text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    auto_awesome
                  </span>
                </div>
                <div className="flex -space-x-2">
                  {['JS', 'PY', 'RS'].map((lang, i) => (
                    <div
                      key={lang}
                      className={[
                        'flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-[10px] font-bold',
                        i === 0
                          ? 'text-indigo-400'
                          : i === 1
                            ? 'text-cyan-400'
                            : 'text-rose-400',
                      ].join(' ')}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="mb-sm font-headline text-headline-md text-on-surface">
                Smart Recommendations
              </h3>
              <p className="mb-lg font-body text-body-md text-on-surface-variant">
                Personalized career pivots and skill-up paths. We identify the
                exact gap between your current DNA and the requirements of Tier-1
                tech teams.
              </p>
              <div className="flex flex-wrap gap-sm">
                <span className="rounded border border-slate-700 bg-slate-800 px-md py-xs font-code text-xs text-emerald-500">
                  Suggested: Distributed Systems
                </span>
                <span className="rounded border border-slate-700 bg-slate-800 px-md py-xs font-code text-xs text-indigo-500">
                  Missing: K8s Orchestration
                </span>
                <span className="rounded border border-slate-700 bg-slate-800 px-md py-xs font-code text-xs text-cyan-500">
                  Pivot: AI Infrastructure
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32 text-center">
          <div className="glass-card relative overflow-hidden rounded-3xl px-xl py-2xl">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-md font-headline text-headline-lg text-on-surface">
                Ready to Decode Your Future?
              </h2>
              <p className="mb-xl font-body text-body-lg text-on-surface-variant">
                Discover Better Repositories with AI — quantify your technical
                mastery and find your next learning path.
              </p>
              <Link
                to="/dashboard"
                className="inline-block rounded-full bg-primary px-2xl py-md font-button text-button text-on-primary shadow-lg shadow-indigo-500/20 transition-all hover:bg-primary-container active:scale-95"
              >
                Analyze My Repositories
              </Link>
              <div className="mt-xl flex items-center justify-center gap-md font-body text-body-sm text-on-surface-variant/60">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>
                  Private Analysis
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-700" />
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    visibility_off
                  </span>
                  Mock Demo Mode
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-900 px-lg py-xl">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-lg md:flex-row">
          <div className="flex flex-col items-center gap-xs md:items-start">
            <span className="font-headline text-sm font-bold text-primary">
              GitHub Discovery
            </span>
            <span className="font-body text-body-sm text-on-surface-variant/50">
              © 2026 — Discover Better Repositories with AI
            </span>
          </div>
          <div className="flex gap-xl">
            <span className="font-body text-body-sm text-on-surface-variant">
              Documentation
            </span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Privacy
            </span>
            <span className="font-body text-body-sm text-on-surface-variant">
              Terms
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
