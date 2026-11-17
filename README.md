# Ezhilarasu K, portfolio

React + Vite + Tailwind CSS v4 + Framer Motion + React Three Fiber.

## Run
    npm install
    npm run dev        # local development
    npm run build      # production build in /dist
    npm run preview    # preview the build

## Edit your content (no component changes needed)
- `src/data/profile.js`     name, email, links, intro, photo
- `src/data/projects.js`    projects. Replace entries marked `isPlaceholder`; add `live`, `repo`, `image`
- `src/data/experience.js`  experience and education
- `src/data/skills.js`      skills
- `public/Ezhilarasu_Resume.pdf`  replace to update the resume (keep the file name)
- Accent colour: `--color-accent` in `src/styles/index.css`

## Before going live
1. Add a photo to `/public` and set `photo` in `profile.js`.
2. Add project screenshots to `/public/projects` (16:9, WebP, around 1200px wide).
3. After deploying, add `og:url` and `og:image` (1200x630 PNG in `/public`) to `index.html`.
4. Run Lighthouse in Chrome on the deployed site.

## Deploy (Vercel or Netlify)
Import the GitHub repo. Build command `npm run build`, output directory `dist`. No environment variables are needed.
