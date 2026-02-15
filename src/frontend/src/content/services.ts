export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: 'Government & Online Services',
    icon: '🏛️',
    items: [
      { name: 'New Government Schemes Apply' },
      { name: 'Job Vacancy Form Filling' },
      { name: 'Scholarship Apply' },
      { name: 'Caste Certificate' },
      { name: 'Income Certificate' },
      { name: 'Voter ID Card' },
      { name: 'PAN Card' },
      { name: 'E-Shram Card' },
      { name: 'All Online Form Filling Services' },
    ],
  },
  {
    title: 'Graphic Design Services',
    icon: '🎨',
    items: [
      { name: 'Logo Design' },
      { name: 'Resume / CV Design' },
      { name: 'Visiting Card Design' },
      { name: 'Banner & Poster Design' },
      { name: 'Invitation Card Design' },
      { name: 'Social Media Post Design' },
      { name: 'Passport Size Photo Editing' },
    ],
  },
  {
    title: 'School & College Support',
    icon: '📚',
    items: [
      { name: 'School Project Files' },
      { name: 'College Assignments' },
      { name: 'Practical Files' },
      { name: 'PPT Presentation' },
      { name: 'Cover Page Design' },
      { name: 'Typing & Formatting Work' },
    ],
  },
];
