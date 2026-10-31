// Replace the sample entries (isPlaceholder: true) with your real projects.
// Add `live`, `repo` and `image` only when you have them; empty links are hidden.
// image example: '/projects/film-academy.webp' (put the file in /public/projects)

export const featuredProject = {
  title: 'Film Academy Website & Admin Panel',
  kind: 'Professional project',
  summary:
    'A full-stack website for a film academy with course pages, events, workshops, student placements, book sales and admission workflows.',
  built: [
    'Built an admin panel with JWT authentication for managing courses, events, workshops, placements, enquiries and student admissions.',
    'Integrated Razorpay for workshop registration, book purchases and seat confirmation, with backend payment verification.',
    'Developed REST APIs with Node.js and Express.js on MongoDB, using Multer for event image uploads.',
    'Deployed the application to a live environment.',
  ],
  tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Multer', 'Razorpay'],
  live: 'https://www.cinemafactoryacademy.com/', 
  repo: '', // [PROJECT REPOSITORY URL]
  image: '/assets/projects/home.png', // [SCREENSHOT]
}

export const sampleProjects = [
  {
    title: 'Film Academy Website',
    kind: 'Professional project',
    // problem: '[Describe the problem this project solves.]',
    // solution: '[Describe how you solved it.]',
    contribution: 'A full-stack website for a film academy with course pages, events, workshops, student placements, book sales and admission workflows. Along with a Admin Panel.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
   live: 'https://www.cinemafactoryacademy.com/', 
  repo: '', // [PROJECT REPOSITORY URL]
  image: '/assets/projects/home.png', // [SCREENSHOT]
    isPlaceholder: true,
  }
]
