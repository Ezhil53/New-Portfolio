// Single source of truth for personal details. Taken from the resume.
export const profile = {
  name: 'Ezhilarasu',
  role: 'Full Stack Developer',
  location: 'Chennai, Tamil Nadu',
  email: 'mahiezhil53@gmail.com',
  github: 'https://github.com/Ezhil53',
  linkedin: 'https://www.linkedin.com/in/ezhilarasuk',
  resume: '/Ezhilarasu_Resume.pdf',
  photo: '', // e.g. '/photo.webp' (put the file in /public). Empty shows a placeholder.
  intro:
    'I build responsive web applications and REST APIs with React, Node.js, Express and MongoDB, from e-commerce platforms to educational products. Currently a Full Stack Developer at Bigbay Cinema Factory in Chennai.',
  availability: 'Open to full-time roles and freelance work',
}

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const mailto = (subject) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`
