export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  icon: string;
}

export interface ServiceCategory {
  title: string;
  description?: string;
  icon: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: 'Graphic Design Services',
    icon: '🎨',
    items: [
      {
        name: 'Logo Design',
        description: 'Professional and unique logo designs for your brand',
        price: 'Starting from ₹500',
        icon: '🎯',
      },
      {
        name: 'Resume / CV Design',
        description: 'Eye-catching resume designs that stand out',
        price: 'Starting from ₹200',
        icon: '📄',
      },
      {
        name: 'Visiting Card Design',
        description: 'Professional business card designs',
        price: 'Starting from ₹150',
        icon: '💼',
      },
      {
        name: 'Banner & Poster Design',
        description: 'Attractive banners and posters for any occasion',
        price: 'Starting from ₹300',
        icon: '🖼️',
      },
      {
        name: 'Invitation Card Design',
        description: 'Beautiful invitation cards for weddings, parties & events',
        price: 'Starting from ₹250',
        icon: '💌',
      },
      {
        name: 'Social Media Post Design',
        description: 'Engaging social media graphics and posts',
        price: 'Starting from ₹100',
        icon: '📱',
      },
      {
        name: 'Passport Size Photo Editing',
        description: 'Professional photo editing and background removal',
        price: 'Starting from ₹50',
        icon: '📸',
      },
      {
        name: 'Flex & Print Design',
        description: 'Large format designs for flex printing',
        price: 'Starting from ₹500',
        icon: '🖨️',
      },
    ],
  },
  {
    title: 'School Project Services',
    description: 'Neat, well-structured and teacher-approved project files.',
    icon: '📚',
    items: [
      {
        name: 'All Class School Project Files',
        description: 'Complete project files for all classes and subjects',
        price: 'Starting from ₹300',
        icon: '📖',
      },
      {
        name: 'Subject-wise Project Work',
        description: 'Specialized projects for specific subjects',
        price: 'Starting from ₹250',
        icon: '📝',
      },
      {
        name: 'Practical File Preparation',
        description: 'Well-organized practical files with proper formatting',
        price: 'Starting from ₹200',
        icon: '🔬',
      },
      {
        name: 'Chart & Model Guidance',
        description: 'Expert guidance for charts and models',
        price: 'Starting from ₹150',
        icon: '📊',
      },
      {
        name: 'Decorative Cover Page Design',
        description: 'Creative and attractive cover page designs',
        price: 'Starting from ₹100',
        icon: '🎨',
      },
      {
        name: 'Printed & Handwritten Project Options',
        description: 'Choose between printed or handwritten projects',
        price: 'Starting from ₹200',
        icon: '✍️',
      },
    ],
  },
  {
    title: 'College Assignment Services',
    description: 'Proper formatting, plagiarism-free structured assignments.',
    icon: '🎓',
    items: [
      {
        name: 'College Assignments (All Streams)',
        description: 'Comprehensive assignments for all academic streams',
        price: 'Starting from ₹400',
        icon: '📚',
      },
      {
        name: 'Practical Files',
        description: 'Professional practical files with proper documentation',
        price: 'Starting from ₹350',
        icon: '🔬',
      },
      {
        name: 'PPT Presentation Design',
        description: 'Engaging PowerPoint presentations',
        price: 'Starting from ₹300',
        icon: '📊',
      },
      {
        name: 'Research Formatting',
        description: 'Professional formatting for research papers',
        price: 'Starting from ₹500',
        icon: '🔍',
      },
      {
        name: 'Typing & Formatting Work',
        description: 'Fast and accurate typing with proper formatting',
        price: 'Starting from ₹100',
        icon: '⌨️',
      },
      {
        name: 'Cover Page & Spiral Binding Support',
        description: 'Professional cover pages and binding services',
        price: 'Starting from ₹50',
        icon: '📑',
      },
    ],
  },
];
