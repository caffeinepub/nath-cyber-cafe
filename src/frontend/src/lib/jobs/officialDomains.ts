// Allowlist of official government domains for job applications
// Only URLs from these domains will be presented as valid "Apply Now" links

const OFFICIAL_DOMAINS = [
  // Central Government
  'upsc.gov.in',
  'ssc.nic.in',
  'ssc.gov.in',
  'upsc.nic.in',
  
  // Railway
  'indianrailways.gov.in',
  'rrbcdg.gov.in',
  'rrbahmedabad.gov.in',
  'rrbbhopal.gov.in',
  'rrbkolkata.gov.in',
  'rrbmumbai.gov.in',
  
  // Banking
  'ibps.in',
  'sbi.co.in',
  'onlinesbi.sbi',
  'rbi.org.in',
  'nabard.org',
  
  // Defence
  'joinindianarmy.nic.in',
  'indiannavy.nic.in',
  'indianairforce.nic.in',
  'mod.gov.in',
  
  // State PSC
  'uppsc.up.nic.in',
  'mppsc.mp.gov.in',
  'bpsc.bih.nic.in',
  'rpsc.rajasthan.gov.in',
  'psc.gov.in',
  
  // Teaching & Education
  'ugc.ac.in',
  'ncert.nic.in',
  'education.gov.in',
  'kvs.gov.in',
  'nvshq.org',
];

/**
 * Validate if a URL belongs to an official government domain
 * @param url The apply URL to validate
 * @returns true if the URL is from an official domain, false otherwise
 */
export function isOfficialDomain(url: string): boolean {
  if (!url) return false;
  
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    // Check if hostname matches or is a subdomain of any official domain
    return OFFICIAL_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    // Invalid URL
    return false;
  }
}

/**
 * Get the list of official domains (for documentation/display purposes)
 */
export function getOfficialDomains(): string[] {
  return [...OFFICIAL_DOMAINS];
}
