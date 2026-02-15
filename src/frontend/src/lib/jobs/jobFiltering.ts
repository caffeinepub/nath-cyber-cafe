// Pure utility functions for government job filtering and category extraction

import type { GovernmentJob } from './govJobModel';

/**
 * Filter jobs by keyword (searches title and qualification)
 * Matches against job title OR qualification text
 */
export function filterJobsByKeyword(jobs: GovernmentJob[], keyword: string): GovernmentJob[] {
  if (!keyword.trim()) {
    return jobs;
  }

  const normalizedKeyword = keyword.toLowerCase().trim();

  return jobs.filter((job) => {
    const searchableText = [
      job.title,
      job.qualification || '',
      job.organization,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedKeyword);
  });
}

/**
 * Filter jobs by category
 * Supports fixed categories: SSC, Railway, Banking, UPSC, State PSC
 */
export function filterJobsByCategory(jobs: GovernmentJob[], category: string): GovernmentJob[] {
  if (!category || category === 'all') {
    return jobs;
  }

  return jobs.filter((job) => job.categories.includes(category));
}

/**
 * Extract unique categories from job list for dropdown options
 * Returns fixed government job categories
 */
export function extractCategories(jobs: GovernmentJob[]): string[] {
  // Fixed categories for government jobs
  return ['SSC', 'Railway', 'Banking', 'UPSC', 'State PSC'];
}

/**
 * Apply all filters to job list
 * Category filter is applied first (more restrictive), then keyword filter
 */
export function applyFilters(
  jobs: GovernmentJob[],
  keyword: string,
  category: string
): GovernmentJob[] {
  let filtered = jobs;

  // Apply category filter first (more restrictive)
  filtered = filterJobsByCategory(filtered, category);

  // Then apply keyword filter
  filtered = filterJobsByKeyword(filtered, keyword);

  return filtered;
}
