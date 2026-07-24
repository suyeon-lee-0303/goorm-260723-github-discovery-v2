import { useQuery } from '@tanstack/react-query'
import {
  fetchAnalysis,
  fetchDashboard,
  fetchProfile,
  fetchRecommendations,
} from '@/services/api'

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  })
}

export function useDashboard() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  })
}

export function useAnalysis() {
  return useQuery({
    queryKey: ['analysis'],
    queryFn: fetchAnalysis,
  })
}

export function useRecommendations() {
  return useQuery({
    queryKey: ['recommendations'],
    queryFn: fetchRecommendations,
  })
}
