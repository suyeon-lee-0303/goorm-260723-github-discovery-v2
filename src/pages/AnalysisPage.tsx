import { mockAnalysis } from '@/data/mock'

const activityIcon = {
  repo: { icon: 'add', border: 'border-indigo-500', color: 'text-indigo-500', glow: 'shadow-[0_0_10px_rgba(99,102,241,0.4)]' },
  skill: { icon: 'verified', border: 'border-cyan-500', color: 'text-cyan-500', glow: 'shadow-[0_0_10px_rgba(6,182,212,0.4)]' },
  star: { icon: 'star', border: 'border-slate-700', color: 'text-slate-400', glow: '' },
  fork: { icon: 'fork_right', border: 'border-slate-700', color: 'text-slate-400', glow: '' },
} as const

export function AnalysisPage() {
  const { rankings, coaching, activities } = mockAnalysis

  return (
    <div>
      <div className="mb-xl flex flex-col justify-between gap-md md:flex-row md:items-end">
        <div>
          <h2 className="mb-xs font-headline text-headline-lg text-on-surface">
            AI Tech Analysis
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Quantifying your technical footprint across the global ecosystem.
          </p>
        </div>
        <div className="glass-card flex items-center gap-sm rounded-xl border border-indigo-500/20 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="font-code text-code-label text-emerald-500">
            REAL-TIME DATA SYNC
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="flex flex-col gap-gutter lg:col-span-8">
          <section className="glass-card ai-glow overflow-hidden rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 p-lg">
              <h3 className="font-headline text-headline-md">Skill Ranking</h3>
              <span className="flex items-center gap-xs font-button text-button text-indigo-500">
                View Full Stack
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800/50">
                  <tr>
                    {['Technology', 'Market Interest', 'Proficiency', 'Trend'].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-lg py-4 font-code text-code-label uppercase tracking-wider text-slate-400"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {rankings.map((row) => (
                    <tr
                      key={row.name}
                      className="transition-colors hover:bg-slate-800/30"
                    >
                      <td className="px-lg py-5">
                        <div className="flex items-center gap-md">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-800">
                            <span
                              className={`material-symbols-outlined ${row.iconColor}`}
                            >
                              {row.icon}
                            </span>
                          </div>
                          <div>
                            <p className="font-headline text-headline-sm">
                              {row.name}
                            </p>
                            <p className="text-[12px] text-slate-400">
                              {row.subtitle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-5">
                        <div className="flex items-center gap-sm">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                              style={{ width: `${row.marketInterest}%` }}
                            />
                          </div>
                          <span className="font-code text-code-label text-primary">
                            {row.marketInterest}
                          </span>
                        </div>
                      </td>
                      <td className="px-lg py-5">
                        <div className="flex items-center gap-sm">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                            <div
                              className="h-full bg-emerald-500"
                              style={{ width: `${row.proficiency}%` }}
                            />
                          </div>
                          <span className="font-code text-code-label text-emerald-500">
                            {row.proficiency}
                          </span>
                        </div>
                      </td>
                      <td className="px-lg py-5">
                        <span
                          className={[
                            'flex items-center gap-xs font-code text-code-label',
                            row.trend === 'up'
                              ? 'text-emerald-500'
                              : 'text-slate-400',
                          ].join(' ')}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {row.trend === 'up' ? 'trending_up' : 'trending_flat'}
                          </span>
                          {row.trendLabel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {coaching.map((card) => (
              <div
                key={card.title}
                className={[
                  'glass-card rounded-2xl border-l-4 p-lg',
                  card.badgeTone === 'indigo'
                    ? 'border-l-indigo-500'
                    : 'border-l-cyan-500',
                ].join(' ')}
              >
                <div className="mb-md flex items-start justify-between">
                  <div
                    className={[
                      'rounded-lg p-2',
                      card.badgeTone === 'indigo'
                        ? 'bg-indigo-500/10 text-indigo-500'
                        : 'bg-cyan-500/10 text-cyan-500',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'material-symbols-outlined',
                        card.badgeTone === 'indigo' ? 'material-filled' : '',
                      ].join(' ')}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <span
                    className={[
                      'rounded px-2 py-0.5 font-code text-code-label',
                      card.badgeTone === 'indigo'
                        ? 'bg-indigo-500/10 text-indigo-500'
                        : 'bg-cyan-500/10 text-cyan-500',
                    ].join(' ')}
                  >
                    {card.badge}
                  </span>
                </div>
                <h4 className="mb-sm font-headline text-headline-md">
                  {card.title}
                </h4>
                <p className="mb-lg text-body-sm text-on-surface-variant">
                  {card.body}
                </p>
                {card.badgeTone === 'cyan' ? (
                  <button
                    type="button"
                    className="flex items-center gap-xs font-button text-button text-cyan-500 hover:underline"
                  >
                    View Learning Path
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                ) : (
                  <div className="flex items-center gap-sm">
                    <div className="flex -space-x-2">
                      {['PT', 'LC'].map((label) => (
                        <div
                          key={label}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-[10px] font-bold"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                    <span className="font-code text-code-label text-slate-400">
                      Recommended Courses
                    </span>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="glass-card sticky top-24 rounded-2xl border border-slate-800 p-lg">
            <div className="mb-xl flex items-center justify-between">
              <h3 className="font-headline text-headline-md">Activity Stream</h3>
              <span className="material-symbols-outlined cursor-pointer text-slate-400 transition-colors hover:text-white">
                filter_list
              </span>
            </div>
            <div className="relative space-y-xl">
              <div className="absolute top-2 bottom-0 left-[11px] w-px bg-slate-800" />
              {activities.map((item) => {
                const meta = activityIcon[item.type]
                return (
                  <div key={item.id} className="relative pl-10">
                    <div
                      className={[
                        'absolute top-1 left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-slate-900',
                        meta.border,
                        meta.glow,
                      ].join(' ')}
                    >
                      <span
                        className={`material-symbols-outlined text-[14px] ${meta.color} ${item.type === 'repo' || item.type === 'skill' ? 'material-filled' : ''}`}
                      >
                        {meta.icon}
                      </span>
                    </div>
                    <p className="mb-1 font-code text-code-label text-slate-400">
                      {item.time}
                    </p>
                    <h5 className="mb-xs font-headline text-headline-sm">
                      {item.title}{' '}
                      {item.highlight && (
                        <span
                          className={
                            item.type === 'skill'
                              ? 'text-cyan-500'
                              : item.type === 'repo'
                                ? 'text-primary'
                                : 'text-on-surface'
                          }
                        >
                          {item.highlight}
                        </span>
                      )}
                    </h5>
                    {item.description && (
                      <p className="text-body-sm text-on-surface-variant">
                        {item.description}
                      </p>
                    )}
                    {item.quote && (
                      <div className="mt-sm rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="text-[12px] text-slate-400 italic">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    )}
                    {item.tags && (
                      <div className="mt-sm flex gap-xs">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-slate-800 px-2 py-0.5 font-code text-[10px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <button
              type="button"
              className="mt-xl w-full rounded-xl border border-slate-800 py-3 font-button text-button text-slate-400 transition-all hover:bg-slate-800 hover:text-white"
            >
              Load More Activity
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
