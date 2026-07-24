import type {
  AnalysisData,
  DashboardData,
  RecommendationsData,
  TechInterest,
} from '@/types'

const AVATAR =
  'https://avatars.githubusercontent.com/u/9919?v=4'

export const mockDashboard: DashboardData = {
  profile: {
    name: 'Alex Rivera',
    username: 'alexrivera',
    bio: 'Full Stack Architect specializing in distributed systems and AI-driven infrastructure.',
    avatarUrl: AVATAR,
    company: 'Independent',
    location: 'Seoul',
    followers: 1200,
    following: 482,
    badge: 'ELITE',
  },
  dna: [
    { subject: 'Frontend', current: 92, market: 70, fullMark: 100 },
    { subject: 'Backend', current: 71, market: 75, fullMark: 100 },
    { subject: 'AI', current: 100, market: 55, fullMark: 100 },
    { subject: 'Cloud', current: 58, market: 65, fullMark: 100 },
    { subject: 'Data', current: 42, market: 50, fullMark: 100 },
  ],
  coaching:
    'Based on your 12 recent starred AI repos, we recommend learning Docker and FastAPI next.',
  coachingTags: ['#Docker', '#FastAPI', '#AI_Infra'],
  learningSkills: [
    {
      name: 'TypeScript',
      mastery: 'Mastery: Advanced',
      progress: 85,
      status: 'growth',
      statusLabel: '+12% Growth',
      icon: 'javascript',
    },
    {
      name: 'Go (Golang)',
      mastery: 'Mastery: Beginner',
      progress: 25,
      status: 'target',
      statusLabel: 'Target Skill',
      icon: 'terminal',
    },
    {
      name: 'PostgreSQL',
      mastery: 'Mastery: Intermediate',
      progress: 60,
      status: 'stable',
      statusLabel: 'Stable',
      icon: 'database',
    },
    {
      name: 'Kubernetes',
      mastery: 'Mastery: None',
      progress: 5,
      status: 'gap',
      statusLabel: 'Missing Gap',
      icon: 'cloud',
    },
  ],
  alignmentPercent: 72,
  alignmentNote:
    'Your current stack matches 72% of elite job roles in the AI sector.',
}

export const mockTechInterests: TechInterest[] = [
  { name: 'AI Agent', score: 100, stars: 5 },
  { name: 'React', score: 95, stars: 5 },
  { name: 'TypeScript', score: 90, stars: 5 },
  { name: 'MCP', score: 85, stars: 4 },
  { name: 'RAG', score: 80, stars: 4 },
  { name: 'Prompt Engineering', score: 78, stars: 4 },
  { name: 'Docker', score: 55, stars: 2 },
  { name: 'Kubernetes', score: 40, stars: 2 },
]

export const mockAnalysis: AnalysisData = {
  rankings: [
    {
      name: 'AI Agents',
      subtitle: 'LangChain, AutoGPT',
      icon: 'smart_toy',
      iconColor: 'text-indigo-500',
      marketInterest: 94,
      proficiency: 72,
      trend: 'up',
      trendLabel: '+12%',
    },
    {
      name: 'React',
      subtitle: 'Next.js, Server Components',
      icon: 'rebase_edit',
      iconColor: 'text-cyan-500',
      marketInterest: 88,
      proficiency: 91,
      trend: 'flat',
      trendLabel: 'Stable',
    },
    {
      name: 'TypeScript',
      subtitle: 'Zod, Utility Types',
      icon: 'javascript',
      iconColor: 'text-indigo-400',
      marketInterest: 96,
      proficiency: 85,
      trend: 'up',
      trendLabel: '+3%',
    },
    {
      name: 'Cloud',
      subtitle: 'AWS, Terraform',
      icon: 'cloud',
      iconColor: 'text-rose-500',
      marketInterest: 60,
      proficiency: 45,
      trend: 'up',
      trendLabel: '+8%',
    },
  ],
  coaching: [
    {
      title: 'Master AI Orchestration',
      body: 'Your React/TypeScript foundation is solid. To reach the top 1% of AI Engineers, prioritize learning Vector Databases (Pinecone/Milvus).',
      badge: 'NEXT LEVEL',
      badgeTone: 'indigo',
      icon: 'psychology',
    },
    {
      title: 'Cloud Infrastructure',
      body: 'Analysis of recent job market trends shows a high demand for Terraform expertise in AI-heavy roles. Consider certification.',
      badge: 'CAREER GAP',
      badgeTone: 'cyan',
      icon: 'auto_awesome',
    },
  ],
  activities: [
    {
      id: '1',
      type: 'repo',
      time: 'Today, 10:24 AM',
      title: 'Created repo',
      highlight: 'ai-nexus-engine',
      description:
        'Initialized with Next.js 14 and Vercel AI SDK. High complexity detected.',
      tags: ['TypeScript', 'AI'],
    },
    {
      id: '2',
      type: 'skill',
      time: 'Yesterday',
      title: 'Skill Level Up:',
      highlight: 'LLM Ops',
      description:
        "Based on 14 commits to 'production-llm-monitor', proficiency is now Senior Level.",
    },
    {
      id: '3',
      type: 'star',
      time: 'Oct 24, 2023',
      title: 'Starred',
      highlight: 'karpathy/llm.c',
      quote:
        'Essential reference for C-based LLM implementations. Studying memory management.',
    },
    {
      id: '4',
      type: 'fork',
      time: 'Oct 22, 2023',
      title: 'Forked',
      highlight: 'langchain-ai/langsmith-sdk',
    },
  ],
}

export const mockRecommendations: RecommendationsData = {
  intro:
    "Based on your recent contributions to LangChain and React Query, we've identified high-impact projects that align with your evolving DNA profile.",
  repos: [
    {
      id: 'openhands',
      name: 'OpenHands',
      stars: '28.4k',
      description:
        'A platform for AI-powered autonomous agents that can write code and solve complex engineering tasks directly in your IDE.',
      topics: ['Python', 'AI Agents'],
      reason: 'Matches your interest in LLM Frameworks',
      reasonTone: 'indigo',
      icon: 'terminal',
      iconColor: 'text-indigo-500',
    },
    {
      id: 'crewai',
      name: 'CrewAI',
      stars: '19.2k',
      description:
        'Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, it enables agents to work together.',
      topics: ['Python', 'Multi-Agent'],
      reason: "High relevance to your 'Collaboration' skill score",
      reasonTone: 'indigo',
      icon: 'rocket_launch',
      iconColor: 'text-indigo-500',
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      stars: '74.1k',
      description:
        'High performance, easy to learn, fast to code, ready for production. Perfect for building AI service layers.',
      topics: ['Python', 'Performance'],
      reason: 'Top recommendation for Backend Scaling',
      reasonTone: 'cyan',
      icon: 'api',
      iconColor: 'text-cyan-500',
    },
    {
      id: 'supabase',
      name: 'Supabase',
      stars: '68.9k',
      description:
        'The open source Firebase alternative. Build your next AI app backend in minutes with Postgres, Auth, and Edge Functions.',
      topics: ['TypeScript', 'Database'],
      reason: "Fits your 'Full Stack Developer' career path",
      reasonTone: 'indigo',
      icon: 'bolt',
      iconColor: 'text-emerald-500',
    },
    {
      id: 'tanstack',
      name: 'TanStack Query',
      stars: '39.5k',
      description:
        'Powerful asynchronous state management for TS/JS, React, Solid, Vue, and Svelte. Essential for modern web DNA.',
      topics: ['TypeScript', 'State Mgmt'],
      reason: 'Strong overlap with your React expertise',
      reasonTone: 'indigo',
      icon: 'query_stats',
      iconColor: 'text-rose-500',
    },
  ],
  topics: [
    { label: 'Vector Databases' },
    { label: 'Rust Web Frameworks' },
    { label: 'LLM Orchestration', active: true },
    { label: 'Edge Computing' },
    { label: 'Distributed Systems' },
    { label: 'Missing: Go Microservices', missing: true },
  ],
}
