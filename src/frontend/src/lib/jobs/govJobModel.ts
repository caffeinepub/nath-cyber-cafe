// App-level Government Job model used by the UI
// Normalized structure for displaying Indian government job vacancies

export interface GovernmentJob {
  id: string;
  title: string;
  organization: string;
  vacancies?: number;
  qualification?: string;
  lastDate?: string;
  location?: string;
  applyUrl: string;
  categories: string[]; // e.g., ['SSC', 'Central']
  tags: string[]; // Broader groupings: Central/State/Railway/SSC/Banking/Defence/Teaching
  publishedDate?: string;
  source: string; // Source feed/API name
}
