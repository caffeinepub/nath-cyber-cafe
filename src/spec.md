# Specification

## Summary
**Goal:** Convert the existing `/jobs` route into a “Latest Government Jobs” page for Nath Cyber Cafe that lists Indian government job vacancies with official apply links, filtering, and a royal-blue government-style design.

**Planned changes:**
- Update `/jobs` page copy and hero/SEO metadata to “Latest Government Jobs” + “Nath Cyber Cafe”, removing all Remotive/remote-jobs wording.
- Replace the Remotive jobs integration with a government-jobs data source (RSS feeds and/or public APIs), normalize results into a single job model, and add caching/refresh behavior.
- Render job cards showing: Job Title, Organization Name, Total Vacancies, Qualification, Last Date, Location, and a prominent “Apply Now” button (new tab + `rel="noopener noreferrer"`), with missing fields displayed as “—”.
- Add government-job search (matches title or qualification), category filter dropdown (All, SSC, Railway, Banking, UPSC, State PSC), and visible labels/tags to support browsing: Central, State, Railway, SSC, Banking, Defence, Teaching.
- Keep “Load More” pagination, display a “Last Updated” timestamp, and add user-friendly error messaging with a retry action.
- Validate/whitelist official apply-link domains (e.g., UPSC/SSC/RRB/IBPS/SBI); disable or label non-official links as unavailable.
- Restyle the page with a responsive royal blue + white theme, including a government-style emblem/icon in the header area.
- Add footer content on/visible from the Jobs page: Nath Cyber Cafe contact details (Phone: 9435212145), a WhatsApp chat button/link, and the disclaimer text exactly: “This website only provides information and official links. We are not a government organization.”

**User-visible outcome:** Visiting `/jobs` shows a fast, responsive “Latest Government Jobs” experience for Nath Cyber Cafe where users can search/filter Indian government vacancies, see key job details, and click verified official “Apply Now” links, with clear last-updated info and helpful error handling.
