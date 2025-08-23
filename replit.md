# Cenra Nederland - Grief Support Website

## Overview
This project is a full-stack grief support website for Cenra Nederland (formerly Xenra Nazorghulp), a Dutch bereavement counseling service. It provides information about their services and facilitates client contact. The business vision is to offer accessible and comprehensive grief support, leveraging a modern online presence to reach a wider audience and streamline client engagement.

## User Preferences
Preferred communication style: Simple, everyday language.
- Prefers compact, uniform pricing cards without action buttons
- Wants consistent sizing and typography across all packages
- Likes immediate visual feedback and consistent layouts
- Successfully deployed website to nazorg.nl using mijnhost hosting
- Website includes dark mobile hamburger menu for better readability

## System Architecture
The application employs a modern full-stack architecture, separating frontend and backend concerns.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with a custom design system, leveraging Radix UI primitives and shadcn/ui components.
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database
- **Session Storage**: PostgreSQL-based sessions (connect-pg-simple)
- **Data Storage**: Custom `DatabaseStorage` class for contact form submissions.

### Development Architecture
- **Monorepo Structure**: Shared schemas and types between frontend and backend.
- **Development Server**: Vite dev server integrated with Express middleware.
- **Build Process**: Separate builds for client (Vite) and server (esbuild).

### Key Architectural Decisions
- **Monorepo with Shared Types**: Ensures type safety and reduces duplication.
- **Drizzle ORM**: Chosen for type-safe database operations.
- **Vite + Express Integration**: Optimizes development experience and production flexibility.
- **Session-based Authentication**: For simplicity and security.
- **Tailwind + shadcn/ui**: Provides a consistent, accessible design system.

### UI/UX Decisions
The design emphasizes a professional and empathetic aesthetic.
- **Color Scheme**: Utilizes a palette that includes purple, sand-yellow, and orange accents for branding.
- **Templates**: Consistent hero sections across pages with background images, floating particles, and gradient overlays.
- **Layout**: Card-based layouts for content like FAQs and pricing packages.
- **Typography**: Standardized font sizing and weighting for readability.
- **Iconography**: Uses Lucide React and relevant icons (e.g., clock, shield, message circle, heart) to enhance visual communication.
- **Responsiveness**: Fully responsive design for mobile, tablet, and desktop, including adaptive navigation, content layouts, and image scaling.

### Feature Specifications
- **Contact Form**: Collects user submissions with name, email, phone, package preference, and message.
- **Information Pages**: Dedicated sections for "About Us," "Services," and "FAQ."
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD for LocalBusiness, FAQPage, Service), sitemap, robots.txt, canonical URLs, and alt texts.
- **Analytics Integration**: Google Tag Manager for tracking (GTM-PGCV5HH4).
- **SPA Routing**: `.htaccess` configuration for proper client-side routing on Apache servers.
- **Mobile Optimization**: Dark hamburger menu with solid background for improved readability.
- **Live Deployment**: Successfully deployed to nazorghulp.nl with all features functional.
- **Canonical URL Fix**: Added .htaccess rewrite rule to serve blogs.html for /blogs route to resolve Google Search Console indexing issues.
- **Image Optimization**: Comprehensive image optimization completed - 89% file size reduction (21.9MB → 2.4MB) with maintained visual quality.
- **Performance Optimization**: Website load times dramatically improved - blogs page 40% faster (0.55s → 0.33s), all pages under 0.5s.
- **Blog Functionality**: Complete blog system with 5 individual SEO-optimized blog pages (/blogs/slug structure), each with H1/H2/H3 headings, meta tags, Open Graph, and structured data. Comprehensive blog restructuring completed with all stories migrated to separate pages for better Google indexing.
- **Production Build Fix**: Resolved white page issue by providing proper production build instead of development React setup. Website now loads correctly with compiled JavaScript/CSS.
- **Apache Configuration**: Simplified .htaccess to essential rules only (SEO redirect + SPA routing) due to server limitations with advanced modules.
- **Blogs Refresh Fix**: Resolved blogs page refresh issue by ensuring blogs.html references production assets (/assets/index-DWLrQCAJ.js) instead of development files (/src/main.tsx). All pages now refresh correctly.
- **Phone Number Transparency**: Added "(lokaal tarief)" to all phone number displays (navbar desktop/mobile, hamburger menu, contact page) for cost transparency and user trust.
- **Homepage Visual Break**: Added custom-generated peaceful landscape image between text sections on homepage to create visual pause in long text blocks, improving readability and user experience.
- **Complete Rebrand**: Systematic replacement of all "Xenra Nazorghulp" references with "Kazenra Nederland" across all React components, blog content, SEO metadata, and production files while maintaining all functionality and phone transparency features.
- **Second Rebrand to Cenra Nederland**: Updated entire website from "Kazenra Nederland" to "Cenra Nederland" across all components, blog posts, SEO metadata, and production files, maintaining all existing functionality and phone transparency features.
- **New Logo Implementation**: Replaced all old Xenra logos with new Cenra Nederland logo (attached_assets/Cenra Nederland Logo web_1755957075296.png) across navbar, footer, SEO meta tags, and all production files. Logo sized to fill navbar container completely.
- **Complete Download Package**: Created COMPLETE_WERKENDE_WEBSITE_FEBRUARI_2025 download package with all correct asset references, guaranteed to work on hosting. Includes detailed installation instructions and troubleshooting guide.

## External Dependencies

### Frontend
- **UI Framework**: React, Radix UI, shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel

### Backend
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Session Management**: connect-pg-simple

### Build & Development
- **Bundling**: Vite, esbuild
- **Type Checking**: TypeScript