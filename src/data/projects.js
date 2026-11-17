// Replace the sample entries (isPlaceholder: true) with your real projects.
// Add `live`, `repo` and `image` only when you have them; empty links are hidden.
// image example: '/projects/film-academy.webp' (put the file in /public/projects)

export const featuredProject = {
  title: "Film Academy Website & Admin Panel",
  kind: "Professional project",
  summary:
    "A full-stack website for a film academy with course pages, events, workshops, student placements, book sales and admission workflows.",
  built: [
    "Built an admin panel with JWT authentication for managing courses, events, workshops, placements, enquiries and student admissions.",
    "Integrated Razorpay for workshop registration, book purchases and seat confirmation, with backend payment verification.",
    "Developed REST APIs with Node.js and Express.js on MongoDB, using Multer for event image uploads.",

  ],
  tech: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT",
    "Multer",
    "Razorpay",
  ],
  live: "https://www.cinemafactoryacademy.com/",
  repo: "", // [PROJECT REPOSITORY URL]
  image: "/assets/projects/home.png", // [SCREENSHOT]
};

export const sampleProjects = [
  {
    title: "Film Academy Website",
    kind: "Professional project",
    // problem: '[Describe the problem this project solves.]',
    // solution: '[Describe how you solved it.]',
    contribution:
      "A full-stack website for a film academy with course pages, events, workshops, student placements, book sales and admission workflows. Along with a Admin Panel.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://www.cinemafactoryacademy.com/",
    repo: "", // [PROJECT REPOSITORY URL]
    image: "/assets/projects/home.png",
    isPlaceholder: true,
  },
  {
    title: "Ecommerce Website",
    kind: "Professional project",
    // problem: '[Describe the problem this project solves.]',
    // solution: '[Describe how you solved it.]',
    contribution:
      "A full-stack e-commerce platform for food products like spices, vinegar, and masala powders. Features product listings, cart, wishlist, user accounts, and an admin panel.",
    tech: ["React.js", "ContextAPI", "JWT", "MongoDB"],
    live: "https://mirakleproducts.com/",
    repo: "", // [PROJECT REPOSITORY URL]
    image: "/assets/projects/mirakle.png",
    isPlaceholder: true,
  },
    {
    title: "Business Website",
    kind: "Professional project",
    // problem: '[Describe the problem this project solves.]',
    // solution: '[Describe how you solved it.]',
    contribution:
      "A responsive business website showcasing company services, core values, and clients. Includes About, Services, and Contact pages.",
    tech: ["React.js", "TailwindCSS", "Shadcn", "Framer Motion "],
    live: "https://www.vishnuads.com/",
    repo: "", // [PROJECT REPOSITORY URL]
    image: "/assets/projects/va.png", 
    isPlaceholder: true,
  },
];
