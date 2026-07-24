import { Link } from 'react-router-dom'
import { DeveloperDnaChart } from '@/components/charts/DeveloperDnaChart'
import { mockDashboard } from '@/data/mock'

const statusStyles = {
  growth: {
    iconWrap: 'bg-indigo-500/20',
    icon: 'text-indigo-500',
    label: 'text-emerald-500',
    bar: 'bg-indigo-500',
  },
  target: {
    iconWrap: 'bg-cyan-500/20',
    icon: 'text-cyan-500',
    label: 'text-secondary-container',
    bar: 'bg-cyan-500',
  },
  stable: {
    iconWrap: 'bg-tertiary-container/20',
    icon: 'text-tertiary',
    label: 'text-on-surface-variant',
    bar: 'bg-emerald-500',
  },
  gap: {
    iconWrap: 'bg-rose-500/20',
    icon: 'text-rose-500',
    label: 'text-rose-500',
    bar: 'bg-rose-500',
  },
} as const

export function DashboardPage() {
  const { profile, dna, coaching, coachingTags, learningSkills, alignmentPercent, alignmentNote } =
    mockDashboard

  return (
    <div className="grid grid-cols-1 gap-lg lg:grid-cols-12">
      <section className="flex flex-col gap-lg lg:col-span-4">
        <div className="glass-card ai-glow flex flex-col items-center rounded-xl p-xl text-center">
          <div className="relative mb-md">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-indigo-500 p-1">
              <img
                className="h-full w-full rounded-full object-cover"
                src={profile.avatarUrl}
                alt={profile.name}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 font-code text-code-label font-bold text-slate-900 shadow-lg">
              <span className="material-symbols-outlined material-filled text-[12px]">
                verified
              </span>
              {profile.badge}
            </div>
          </div>
          <h1 className="font-headline text-headline-lg text-on-surface">
            {profile.name}
          </h1>
          <p className="mb-md px-md font-body text-body-sm text-on-surface-variant">
            {profile.bio}
          </p>
          <div className="mt-sm flex w-full justify-center gap-xl border-t border-slate-700/50 pt-md">
            <div>
              <div className="font-headline text-headline-sm text-primary">
                {(profile.followers / 1000).toFixed(1)}k
              </div>
              <div className="font-code text-code-label text-on-surface-variant">
                Followers
              </div>
            </div>
            <div>
              <div className="font-headline text-headline-sm text-primary">
                {profile.following}
              </div>
              <div className="font-code text-code-label text-on-surface-variant">
                Following
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-xl p-lg">
          <div className="relative z-10">
            <div className="mb-md flex items-center gap-sm text-cyan-500">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-headline text-headline-sm">AI Coaching</span>
            </div>
            <p className="border-l-4 border-indigo-500 pl-md font-body text-body-md leading-relaxed text-on-surface italic">
              &ldquo;{coaching}&rdquo;
            </p>
            <div className="mt-md flex flex-wrap gap-sm">
              {coachingTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-slate-700 bg-slate-800 px-sm py-xs font-code text-code-label text-cyan-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:col-span-8">
        <div className="glass-card ai-glow flex h-full flex-col rounded-xl p-xl">
          <div className="mb-xl flex flex-col justify-between gap-md sm:flex-row sm:items-center">
            <div>
              <h2 className="font-headline text-headline-lg text-on-surface">
                Developer DNA
              </h2>
              <p className="font-body text-body-sm text-on-surface-variant">
                Multidimensional Skill Distribution Analysis
              </p>
            </div>
            <div className="flex items-center gap-md">
              <div className="flex items-center gap-xs font-code text-code-label text-indigo-500">
                <span className="h-3 w-3 rounded-full bg-indigo-500" /> Current
              </div>
              <div className="flex items-center gap-xs font-code text-code-label text-cyan-500">
                <span className="h-3 w-3 rounded-full border border-dashed border-cyan-500 bg-transparent" />{' '}
                Market Average
              </div>
            </div>
          </div>
          <DeveloperDnaChart data={dna} />
        </div>
      </section>

      <section className="lg:col-span-12">
        <div className="glass-card rounded-xl p-xl">
          <div className="mb-xl flex flex-col items-start justify-between gap-md md:flex-row md:items-center">
            <div>
              <h2 className="font-headline text-headline-lg text-on-surface">
                Learning Compass
              </h2>
              <p className="font-body text-body-sm text-on-surface-variant">
                Strategic alignment of current stack vs. predicted industry
                requirements.
              </p>
            </div>
            <Link
              to="/analysis"
              className="flex items-center gap-sm rounded-lg border border-slate-700 bg-surface-variant px-md py-sm font-button text-button text-on-surface transition-all hover:bg-slate-700"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Export Learning Roadmap
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
            {learningSkills.map((skill) => {
              const style = statusStyles[skill.status]
              return (
                <div
                  key={skill.name}
                  className="rounded-lg border border-slate-700 bg-surface-container-low p-md"
                >
                  <div className="mb-md flex items-start justify-between">
                    <div className={`rounded-lg p-sm ${style.iconWrap}`}>
                      <span
                        className={`material-symbols-outlined ${style.icon}`}
                      >
                        {skill.icon}
                      </span>
                    </div>
                    <span
                      className={`font-code text-code-label ${style.label}`}
                    >
                      {skill.statusLabel}
                    </span>
                  </div>
                  <h4 className="mb-xs font-headline text-headline-sm text-on-surface">
                    {skill.name}
                  </h4>
                  <p className="mb-md font-body text-body-sm text-on-surface-variant">
                    {skill.mastery}
                  </p>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full ${style.bar}`}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-xl flex flex-col items-start justify-between gap-md rounded-xl border border-slate-700 bg-slate-800/40 p-lg sm:flex-row sm:items-center">
            <div className="flex items-center gap-xl">
              <div className="relative h-16 w-16">
                <svg
                  className="h-full w-full rotate-[-90deg]"
                  viewBox="0 0 36 36"
                >
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#2d3449"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#6366f1"
                    strokeDasharray={`${alignmentPercent}, 100`}
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-code text-code-label font-bold text-primary">
                  {alignmentPercent}%
                </div>
              </div>
              <div>
                <h3 className="font-headline text-headline-sm text-on-surface">
                  Overall Alignment
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  {alignmentNote}
                </p>
              </div>
            </div>
            <Link
              to="/recommendations"
              className="rounded-lg bg-indigo-500 px-md py-sm font-button text-button text-white transition-all hover:bg-primary-container"
            >
              Start Optimization Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
