import { ExternalLink, MapPin, Briefcase, Building2, Calendar, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { GovernmentJob } from '../../lib/jobs/govJobModel';
import { isOfficialDomain } from '../../lib/jobs/officialDomains';

interface JobCardProps {
  job: GovernmentJob;
}

export default function JobCard({ job }: JobCardProps) {
  const isOfficialLink = isOfficialDomain(job.applyUrl);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-2 line-clamp-2 text-primary">{job.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 flex-shrink-0" />
              <span className="truncate font-medium">{job.organization}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        {/* Category and Tags */}
        <div className="flex flex-wrap gap-2">
          {job.categories.map((category) => (
            <Badge key={category} variant="default" className="bg-primary">
              {category}
            </Badge>
          ))}
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Job Details */}
        <div className="space-y-2 text-sm">
          {job.vacancies && (
            <div className="flex items-center gap-2 text-foreground">
              <Users className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="font-medium">Vacancies:</span>
              <span>{job.vacancies.toLocaleString()}</span>
            </div>
          )}

          {job.qualification && (
            <div className="flex items-center gap-2 text-foreground">
              <GraduationCap className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="font-medium">Qualification:</span>
              <span className="truncate">{job.qualification}</span>
            </div>
          )}

          {job.lastDate && (
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0 text-destructive" />
              <span className="font-medium">Last Date:</span>
              <span className="text-destructive font-semibold">
                {new Date(job.lastDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
          )}

          {job.location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{job.location}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        {isOfficialLink ? (
          <Button
            asChild
            className="w-full font-bold"
            size="lg"
          >
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Apply Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button
            disabled
            className="w-full"
            size="lg"
            variant="outline"
          >
            Official Link Unavailable
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
