import { useQuery } from '@tanstack/react-query';
import { fetchGovernmentJobs } from '../lib/jobs/govJobsClient';

/**
 * React Query hook for fetching government jobs
 * Provides caching, loading states, retry mechanism, and lastUpdated timestamp
 */
export function useJobs() {
  const query = useQuery({
    queryKey: ['jobs', 'government'],
    queryFn: async () => {
      const response = await fetchGovernmentJobs();
      return response;
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2, // Retry failed requests twice
  });

  return {
    jobs: query.data?.jobs || [],
    lastUpdated: query.data?.lastUpdated,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
