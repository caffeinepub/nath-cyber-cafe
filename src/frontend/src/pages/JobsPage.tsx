import { useState, useMemo } from 'react';
import { Search, AlertCircle, RefreshCw, Phone, Shield } from 'lucide-react';
import Container from '../components/site/Container';
import Seo from '../seo/Seo';
import { useJobs } from '../hooks/useJobs';
import JobCard from '../components/jobs/JobCard';
import JobCardSkeleton from '../components/jobs/JobCardSkeleton';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { applyFilters, extractCategories } from '../lib/jobs/jobFiltering';

const INITIAL_DISPLAY_COUNT = 15;
const LOAD_MORE_COUNT = 10;

export default function JobsPage() {
  const { jobs, lastUpdated, isLoading, isError, refetch } = useJobs();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  // Fixed categories for government jobs
  const categories = useMemo(() => extractCategories(jobs), [jobs]);

  // Apply filters to jobs
  const filteredJobs = useMemo(
    () => applyFilters(jobs, searchKeyword, selectedCategory),
    [jobs, searchKeyword, selectedCategory]
  );

  // Slice jobs for pagination
  const displayedJobs = filteredJobs.slice(0, displayCount);
  const hasMoreJobs = displayCount < filteredJobs.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + LOAD_MORE_COUNT);
  };

  const handleClearFilters = () => {
    setSearchKeyword('');
    setSelectedCategory('all');
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Format last updated date
  const formattedLastUpdated = lastUpdated
    ? new Date(lastUpdated).toLocaleString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <>
      <Seo
        title="Latest Government Jobs - Nath Cyber Cafe"
        description="Stay updated with latest Indian government job vacancies. Browse Central Government, State Government, Railway, SSC, Banking, Defence, and Teaching jobs with official apply links."
        path="/jobs"
      />

      <main className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          {/* Government Header Section with Emblem */}
          <section className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img
                src="/assets/generated/gov-emblem.dim_256x256.png"
                alt="Government Jobs Emblem"
                className="h-24 w-24 md:h-32 md:w-32"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Latest Government Jobs – Apply Online Now
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              Stay updated with latest Indian government job vacancies from official sources.
            </p>
            <p className="text-sm text-primary font-semibold">
              Nath Cyber Cafe - Your Trusted Partner for Government Job Information
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-8 bg-card rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by job title or qualification..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="pl-10"
                  aria-label="Search jobs by title or qualification"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64" aria-label="Filter by category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(searchKeyword || selectedCategory !== 'all') && (
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  className="w-full md:w-auto"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Results count and Last Updated */}
            {!isLoading && !isError && (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-muted-foreground">
                <p>
                  Showing {displayedJobs.length} of {filteredJobs.length} jobs
                  {filteredJobs.length !== jobs.length && ' (filtered)'}
                </p>
                {formattedLastUpdated && (
                  <p className="text-xs">
                    Last Updated: <span className="font-medium">{formattedLastUpdated}</span>
                  </p>
                )}
              </div>
            )}
          </section>

          {/* Loading State */}
          {isLoading && (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                  <JobCardSkeleton key={index} />
                ))}
              </div>
            </section>
          )}

          {/* Error State */}
          {isError && (
            <section>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Unable to Load Government Jobs</AlertTitle>
                <AlertDescription className="mt-2">
                  We're having trouble fetching job listings right now. Please check your internet
                  connection and try again.
                </AlertDescription>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetch()}
                  className="mt-4"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </Alert>
            </section>
          )}

          {/* Jobs Grid */}
          {!isLoading && !isError && (
            <>
              {filteredJobs.length === 0 ? (
                <section>
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>No Jobs Found</AlertTitle>
                    <AlertDescription>
                      {searchKeyword || selectedCategory !== 'all'
                        ? 'Try adjusting your search or filter criteria.'
                        : 'No job listings are currently available. Please check back later.'}
                    </AlertDescription>
                    {(searchKeyword || selectedCategory !== 'all') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleClearFilters}
                        className="mt-4"
                      >
                        Clear Filters
                      </Button>
                    )}
                  </Alert>
                </section>
              ) : (
                <>
                  <section className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </section>

                  {/* Load More Button */}
                  {hasMoreJobs && (
                    <section className="text-center">
                      <Button
                        onClick={handleLoadMore}
                        size="lg"
                        variant="outline"
                        className="min-w-48"
                      >
                        Load More Jobs
                      </Button>
                    </section>
                  )}
                </>
              )}
            </>
          )}

          {/* Disclaimer Section */}
          <section className="mt-16 pt-12 border-t">
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    This website only provides information and official links. We are not a government
                    organization. All job applications must be submitted through official government
                    websites only. Please verify all information on the official notification before
                    applying.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-card rounded-lg p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Need Help with Job Applications?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact Nath Cyber Cafe for assistance with your government job applications, form
                filling, document preparation, or any questions about the listings.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium">9435212145</span>
                </div>
                <WhatsAppButton />
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
