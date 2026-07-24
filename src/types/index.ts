export interface UserProfile {
  name: string
  username: string
  bio: string
  avatarUrl: string
  company: string
  location: string
  followers: number
  following: number
  badge: string
}

export interface DnaAxis {
  subject: string
  current: number
  market: number
  fullMark: number
}

export interface TechInterest {
  name: string
  score: number
  stars: number
}

export interface LearningSkill {
  name: string
  mastery: string
  progress: number
  status: 'growth' | 'target' | 'stable' | 'gap'
  statusLabel: string
  icon: string
}

export interface SkillRanking {
  name: string
  subtitle: string
  icon: string
  iconColor: string
  marketInterest: number
  proficiency: number
  trend: 'up' | 'flat' | 'down'
  trendLabel: string
}

export interface ActivityItem {
  id: string
  type: 'repo' | 'skill' | 'star' | 'fork'
  time: string
  title: string
  highlight?: string
  description?: string
  quote?: string
  tags?: string[]
}

export interface CoachingCard {
  title: string
  body: string
  badge: string
  badgeTone: 'indigo' | 'cyan'
  icon: string
}

export interface RecommendedRepo {
  id: string
  name: string
  stars: string
  description: string
  topics: string[]
  reason: string
  reasonTone: 'indigo' | 'cyan'
  icon: string
  iconColor: string
}

export interface DashboardData {
  profile: UserProfile
  dna: DnaAxis[]
  coaching: string
  coachingTags: string[]
  learningSkills: LearningSkill[]
  alignmentPercent: number
  alignmentNote: string
}

export interface AnalysisData {
  rankings: SkillRanking[]
  coaching: CoachingCard[]
  activities: ActivityItem[]
}

export interface RecommendationsData {
  intro: string
  repos: RecommendedRepo[]
  topics: { label: string; active?: boolean; missing?: boolean }[]
}
