import { useMemo, useState } from 'react'
import { mockRecommendations } from '@/data/mock'

export function RecommendationsPage() {
  const { intro, repos, topics } = mockRecommendations
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return repos
    return repos.filter((repo) => {
      const haystack = [repo.name, repo.description, ...repo.topics, repo.reason]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, repos])

  return (
    <div>
      <section className="relative mb-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-md flex items-center gap-sm">
            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-code text-[12px] uppercase text-indigo-500">
              AI-Driven Curation
            </span>
          </div>
          <h1 className="mb-sm font-headline text-headline-lg text-white">
            Recommended Repositories
          </h1>
          <p className="mb-xl font-body text-body-lg text-on-surface-variant">
            {intro}
          </p>
          <div className="flex flex-col gap-md sm:flex-row">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-3 pr-4 pl-12 outline-none backdrop-blur-sm transition-all focus:border-indigo-500"
                placeholder="Filter by language or topic..."
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-sm">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-xl py-3 font-button text-button transition-colors hover:bg-slate-700"
              >
                <span className="material-symbols-outlined text-sm">
                  filter_list
                </span>
                Filter
              </button>
              <button
                type="button"
                className="rounded-xl bg-indigo-500 px-xl py-3 font-button text-button text-white transition-all hover:shadow-lg"
                onClick={() => setQuery('')}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((repo) => (
          <article
            key={repo.id}
            className="glass-card ai-glow group relative flex h-full flex-col overflow-hidden rounded-xl p-lg transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute top-4 right-4 text-on-surface-variant/20 transition-colors group-hover:text-indigo-500/40">
              <span className="material-symbols-outlined text-4xl">
                {repo.icon}
              </span>
            </div>
            <div className="mb-md flex items-start justify-between">
              <div className="flex items-center gap-md">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-slate-700 bg-surface-container-high">
                  <span
                    className={`material-symbols-outlined text-2xl ${repo.iconColor}`}
                  >
                    {repo.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-[20px] text-white">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined material-filled text-sm text-yellow-500">
                      star
                    </span>
                    <span className="font-code">{repo.stars}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-xl flex-1 font-body text-body-md text-on-surface-variant">
              {repo.description}
            </p>
            <div className="mb-lg flex flex-wrap gap-xs">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded bg-slate-700/50 px-2 py-0.5 font-code text-[11px] text-slate-400"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div
              className={[
                'flex items-center gap-sm rounded-lg border p-sm',
                repo.reasonTone === 'cyan'
                  ? 'border-cyan-500/10 bg-cyan-500/5'
                  : 'border-indigo-500/10 bg-indigo-500/5',
              ].join(' ')}
            >
              <span
                className={`material-symbols-outlined text-sm ${repo.reasonTone === 'cyan' ? 'text-cyan-500' : 'text-indigo-500'}`}
              >
                {repo.reasonTone === 'cyan' ? 'trending_up' : 'auto_awesome'}
              </span>
              <span
                className={`text-xs font-medium ${repo.reasonTone === 'cyan' ? 'text-cyan-400' : 'text-indigo-400'}`}
              >
                {repo.reason}
              </span>
            </div>
          </article>
        ))}

        <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500 p-lg text-center transition-all hover:bg-indigo-600">
          <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl text-white">
              explore
            </span>
          </div>
          <h3 className="mb-xs font-headline text-headline-md text-white">
            Explore All DNA Matches
          </h3>
          <p className="mb-lg max-w-[200px] font-body text-body-sm text-white/80">
            Unlock 50+ more repositories that match your technical growth
            profile.
          </p>
          <span className="flex items-center gap-2 font-button text-button text-white">
            Browse Full Library
            <span className="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="mt-lg text-center text-on-surface-variant">
          No repositories match &ldquo;{query}&rdquo;.
        </p>
      )}

      <section className="mt-2xl">
        <h3 className="mb-md flex items-center gap-2 font-headline text-headline-sm text-white">
          <span className="material-symbols-outlined text-indigo-500">
            category
          </span>
          Trending DNA Topics for You
        </h3>
        <div className="flex flex-wrap gap-sm">
          {topics.map((topic) => (
            <button
              key={topic.label}
              type="button"
              className={[
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                topic.active
                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-400'
                  : topic.missing
                    ? 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                    : 'border-slate-700 bg-slate-800 hover:border-indigo-500',
              ].join(' ')}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
