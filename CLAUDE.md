# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 14 portfolio website using the App Router architecture. The application is structured as a single-page application with smooth scrolling between sections.

### Key Architectural Patterns

**Single Page Layout with Sections**: The main page (`src/app/page.tsx`) imports and renders all sections dynamically using Next.js `dynamic()` imports:
- About component (`src/app/about.tsx`)
- Resume component (`src/app/resume.tsx`) 
- Portfolio component (`src/app/portfolio.tsx`)
- Contact component (`src/app/contact.tsx`)

**Navigation & Scrollspy**: The root layout (`src/app/layout.tsx`) implements:
- Scroll-based navigation with smooth scrolling
- Active section highlighting based on scroll position
- Sticky navigation bar with blur backdrop
- Responsive design (desktop/mobile menu states)

**Animation System**: Heavy use of Framer Motion for:
- Page entrance animations
- Scroll-triggered animations (`whileInView`)
- Parallax effects using `useScroll` and `useTransform`
- Hover animations and micro-interactions

**Component Structure**:
- All components are client-side (`'use client'`)
- Consistent use of `motion.div` wrappers for animations
- Shared skill/tech stack data across components
- Responsive grid layouts with Tailwind CSS

### Tech Stack Integration

The application showcases a modern tech stack with:
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: Framer Motion for complex animations
- **Icons**: React Icons (FA, SI icon sets)
- **Typography**: Typewriter effect for dynamic text
- **Images**: Next.js Image component with optimizations

### File Organization

```
src/app/
├── layout.tsx          # Root layout with navigation
├── page.tsx           # Main homepage with hero section
├── about.tsx          # About section with tech stack
├── resume.tsx         # Resume/experience section
├── portfolio.tsx      # Project showcase section
├── contact.tsx        # Contact form section
└── globals.css        # Global styles and CSS variables
```

### Styling Approach

- Tailwind CSS utility classes throughout
- Custom CSS variables for theming (background/foreground)
- Dark mode support via CSS classes
- Gradient backgrounds and blur effects
- Responsive design patterns (sm:, md:, lg: breakpoints)

### Performance Considerations

- Dynamic imports for code splitting
- Next.js Image optimization
- Scroll-based animations with proper cleanup
- Efficient re-renders with proper useEffect dependencies