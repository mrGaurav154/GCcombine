# Globe Creater — Premium Redesign (React + Vite + Tailwind)

A complete redesign of globecreater.com as a modern, conversion-focused EdTech + Software
Studio website, built with React 18, Vite, Tailwind CSS v4, Framer Motion, React Router,
Swiper and Lucide icons.

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/     Navbar, Hero, Stats, Courses, Roadmap, Placements, Companies,
                   Services, Testimonials, FAQ, CTA, Contact, Footer, shared/ (Reveal, SectionHeading)
  pages/          Home, About, AllCourses, CourseDetail, PlacementsPage, ContactPage, NotFound
  layouts/        MainLayout (Navbar + Outlet + Footer + WhatsApp button)
  data/           siteData.js — all real content sourced from globecreater.com (courses,
                   contact info, testimonials, hiring partners, FAQs)
  hooks/          ScrollToTop
```

## What's included

- Sticky/blurring navbar with animated mega-menu for courses & mobile drawer
- Hero with the original site's video background + a signature animated "career path" graphic
- Animated stat counters, scroll reveals, staggered grids (Framer Motion + IntersectionObserver)
- Full course catalog with search, and a detailed course page (curriculum, tools, faculty,
  reviews, sticky enroll sidebar) for every course
- Infinite-scrolling hiring-partner marquee, placements page with stats + student highlights
- Testimonials carousel (Swiper), animated FAQ accordion, working (client-side) contact form
  with Google Maps embed and WhatsApp button
- Dark mode toggle, fully responsive from mobile to large desktop

## Notes

- Content (courses, address, phone numbers, testimonials, founders) is adapted from
  https://www.globecreater.com/ and reworded/reorganized for a more premium presentation.
- Curriculum modules, faculty cards and salary/package figures on course pages are
  illustrative placeholders — swap in your real syllabus PDFs, trainer bios and verified
  placement numbers before going live.
- The contact form currently only simulates submission client-side; wire it to your backend,
  Formspree, or an email API (e.g. SendGrid) to actually receive leads.
- Swap the Google Maps `src` query in `Contact.jsx` for your exact business listing if needed.
