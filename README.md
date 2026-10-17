# PowerFit Gym Website

Responsive multi-page gym website built with React, TypeScript, Vite, and Tailwind CSS v4.

## Pages
- Home — designed as a complete single-page landing page with reusable sections
- About
- Membership
- Packages
- Contact

## Run locally
1. Install Node.js 20+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. For a production build, run `npm run build`.

## Structure
```text
src/
  components/   Reusable page sections and UI
  data/         Shared gym content
  pages/        Route-level page composition
  App.tsx
  index.css     Theme variables and shared button styles only
  main.tsx
```

Section styles are kept with each component using Tailwind utility classes. `index.css` intentionally contains only theme variables, minimal resets, and button styles.

## Before launch
- Replace demo address, phone, email, and membership prices with real business information.
- Images are remote Unsplash URLs; download and self-host licensed images if required.
- Contact form currently demonstrates client-side validation and success state only. Connect a form endpoint or backend to receive submissions.
