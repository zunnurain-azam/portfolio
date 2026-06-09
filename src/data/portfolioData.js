export const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Stack', 'Contact']

export const SOCIAL_LINKS = [
  { label: 'GitHub',   url: 'https://github.com/zunnurain-azam' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/zunnurain-azam' },
  { label: 'Email',    url: 'mailto:naniali405@gmail.com' },
  { label: 'Phone',    url: 'tel:+923243449544' },
]

export const STATS = [
  { num: 6,  suffix: '+', label: 'Months Experience' },
  { num: 6,  suffix: '+', label: 'Projects Shipped' },
  { num: 2,  suffix: '',  label: 'Companies Worked' },
]

export const ABOUT_CARDS = [
  { icon: '🚀', title: 'Backend Specialist', desc: 'Built RESTful APIs & web apps using Laravel, CodeIgniter, and PHP.' },
  { icon: '💻', title: 'Full Stack Dev',     desc: 'Laravel, CodeIgniter, React.js, PHP, MySQL, MERN (learning).' },
  { icon: '📱', title: 'Mobile Development', desc: 'Flutter & Dart — built emergency panic care app with AI integration.' },
  { icon: '🎯', title: 'Problem Solver',     desc: 'Passionate about clean code, algorithms, and continuous learning.' },
]

export const EXPERIENCE = [
  {
    period: 'Jan 2026 — Jun 2026',
    role: 'Backend Developer Intern',
    company: 'Ovex Technologies',
    location: 'Islamabad, Pakistan',
    badge: 'Completed',
    desc: 'Built and maintained web applications using Laravel and CodeIgniter frameworks. Developed RESTful APIs and integrated backend functionality with frontend components. Implemented server-side logic and managed MySQL databases for multiple projects.',
    tags: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    period: '2025',
    role: 'Frontend Intern',
    company: 'Developers Hub Corporation',
    location: 'Remote',
    badge: null,
    desc: 'Developed a responsive e-commerce website using HTML5 and CSS3. Implemented product listing pages, shopping cart, and checkout UI.',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'E-commerce'],
  },
]

export const PROJECTS = [
  {
    title: 'Journey - Travel Booking Platform',
    type: 'Laravel Web Application · Internship Project',
    desc: 'Full-featured travel and trip booking web application using Laravel and Blade templates. Implemented blog management, booking modules, and responsive UI including Login, Registration, Trip Listings, and Booking pages.',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Bootstrap'],
    links: [
      { label: 'Source', url: 'https://github.com/zunnurain-azam/journey-travel-booking' },
    ],
    featured: true,
  },
  {
    title: 'Excel Data Extractor',
    type: 'Laravel Web Application · Internship Project',
    desc: 'Built a Laravel web app that allows users to upload Excel files and automatically extract and display data in structured, dynamic HTML tables. Implemented file upload, Excel parsing (PHP Spreadsheet), validation, and error handling.',
    tags: ['Laravel', 'PHP', 'PHP Spreadsheet', 'Excel', 'Blade'],
    links: [{ label: 'Source', url: 'https://github.com/zunnurain-azam/excel-data-extractor' }],
    featured: false,
  },
  {
    title: 'Panic Care Application',
    type: 'Flutter Mobile App · Final Year Project',
    desc: 'Built an emergency panic care app with SOS alerts, real-time location sharing, and emergency contact notifications. Integrated AI for intelligent query handling with MySQL backend. Designed modern UI with smooth navigation.',
    tags: ['Flutter', 'Dart', 'AI', 'MySQL', 'REST APIs'],
    links: [{ label: 'Source', url: 'https://github.com/zunnurain-azam/panic-care' }],
    featured: false,
  },
  {
    title: 'Spotify Clone',
    type: 'HTML/CSS/JavaScript · Self Project',
    desc: 'Built a music player UI with play/pause controls, dynamic song list, progress bar, and interactive playlist. Focused on modern UI design and smooth user experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    links: [{ label: 'Source', url: 'https://github.com/zunnurain-azam/spotify-clone' }],
    featured: false,
  },
]

export const STACK = [
  { group: 'Frontend',   items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'] },
  { group: 'Backend',    items: ['Laravel', 'CodeIgniter', 'PHP', 'Node.js (Learning)', 'REST APIs'] },
  { group: 'Mobile',     items: ['Flutter', 'Dart'] },
  { group: 'Databases',  items: ['MySQL', 'MongoDB (Learning)'] },
  { group: 'Languages',  items: ['PHP', 'JavaScript', 'Python', 'SQL', 'Dart'] },
  { group: 'Tools',      items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]

export const CERTIFICATIONS = [
  { year: '2025', title: 'Backend Development Internship', org: 'Ovex Technologies', note: 'Completed' },
  { year: '2025', title: 'Frontend Development', org: 'Developers Hub Corporation', note: 'Online Internship' },
  { year: '2024', title: 'Bachelor of Computer Science', org: 'International Islamic University Islamabad', note: '2021-2025' },
]