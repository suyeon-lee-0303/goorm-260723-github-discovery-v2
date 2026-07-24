import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import type { DnaAxis } from '@/types'

interface DeveloperDnaChartProps {
  data: DnaAxis[]
}

export function DeveloperDnaChart({ data }: DeveloperDnaChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#2d3449" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#dae2fd', fontSize: 12, fontFamily: 'JetBrains Mono' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Current"
            dataKey="current"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Radar
            name="Market"
            dataKey="market"
            stroke="#06b6d4"
            fill="#06b6d4"
            fillOpacity={0.15}
            strokeWidth={2}
            strokeDasharray="4 4"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
