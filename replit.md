# Xenra Nazorghulp - Grief Support Website

## Overview
This project is a full-stack grief support website for Xenra Nazorghulp, a Dutch bereavement counseling service. It provides information about their services and facilitates client contact. The business vision is to offer accessible and comprehensive grief support, leveraging a modern online presence to reach a wider audience and streamline client engagement.

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
- **Live Deployment**: Successfully deployed to nazorg.nl with all features functional.

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