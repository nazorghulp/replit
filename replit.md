# Xenra Nazorghulp - Grief Support Website

## Overview

This is a grief support website for Xenra Nazorghulp, a Dutch bereavement counseling service. It's a full-stack application built with React frontend and Express backend, designed to provide information about their services and allow potential clients to get in touch.

## User Preferences

Preferred communication style: Simple, everyday language.
- Prefers compact, uniform pricing cards without action buttons
- Wants consistent sizing and typography across all packages
- Likes immediate visual feedback and consistent layouts

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (implemented 2025-01-27)
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL-based sessions (connect-pg-simple)
- **Data Storage**: DatabaseStorage class with contact form submissions

### Development Architecture
- **Monorepo Structure**: Shared schemas and types between frontend and backend
- **Development Server**: Vite dev server with Express middleware integration
- **Build Process**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/        # Navigation and footer components
│   │   ├── sections/      # Page-specific sections
│   │   └── ui/           # Reusable UI components (shadcn/ui)
│   ├── pages/            # Route components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities and configurations
```

### Backend Structure
```
server/
├── index.ts              # Main server entry point
├── routes.ts             # API route definitions
├── storage.ts            # Data access layer
└── vite.ts              # Vite integration for development
```

### Shared Structure
```
shared/
└── schema.ts             # Database schema and type definitions
```

## Data Flow

### Database Schema
- **Users Table**: Basic user authentication schema with username/password
- **Contacts Table**: Stores contact form submissions with name, email, phone, package preference, and message
- **Schema Definition**: Uses Drizzle ORM with Zod validation schemas
- **Type Safety**: Shared types between frontend and backend via TypeScript
- **Storage**: DatabaseStorage implementation replaces MemStorage for persistent data

### API Architecture
- **RESTful Design**: All API routes prefixed with `/api`
- **Storage Interface**: Abstract storage layer supporting both memory and database implementations
- **Request Logging**: Comprehensive logging of API requests with timing and response data

### Frontend Data Management
- **TanStack Query**: Handles server state, caching, and synchronization
- **Custom Query Client**: Configured with authentication handling and error management
- **Form Validation**: Zod schemas for client-side validation matching backend expectations

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for interactive components

### Backend Dependencies
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Authentication**: Session-based with PostgreSQL storage
- **Development**: Replit-specific plugins for development environment

### Build & Development
- **Bundling**: Vite for frontend, esbuild for backend
- **TypeScript**: Full type safety across the stack
- **Development Tools**: Custom Vite plugins for Replit integration

## Deployment Strategy

### Production Build
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets in production

### Development Workflow
- **Hot Reload**: Vite HMR for frontend development
- **TypeScript Compilation**: Real-time type checking across the stack
- **Database Migrations**: Drizzle Kit for schema management

### Environment Configuration
- **Database Connection**: Uses `DATABASE_URL` environment variable
- **Development Mode**: Automatic Vite integration in development
- **Production Mode**: Optimized static asset serving

### Key Architectural Decisions

1. **Monorepo with Shared Types**: Chosen to maintain type safety between frontend and backend while avoiding code duplication

2. **Drizzle ORM**: Selected for type-safe database operations and excellent TypeScript integration

3. **Memory Storage Fallback**: Implements storage interface pattern allowing development without database setup

4. **Vite + Express Integration**: Provides optimal development experience while maintaining production flexibility

5. **Session-based Authentication**: Uses PostgreSQL sessions for simplicity and security

6. **Tailwind + shadcn/ui**: Provides consistent design system with high-quality, accessible components

The architecture prioritizes developer experience, type safety, and maintainability while keeping the codebase simple and focused on the core business needs of the grief counseling service.

## Recent Changes (2025-01-30)

### Professional F.A.Q. Page Redesign
- Created stunning hero section with professional background image and overlay effects
- Restructured FAQ content into 3 professional categories:
  - Praktische Zaken (Clock icon) - payments, contracts, booking
  - Privacy & Veiligheid (Shield icon) - confidentiality, anonymity, data protection  
  - Begeleiding & Werkwijze (MessageCircle icon) - children support, online services, methodology
- Enhanced answers with comprehensive, detailed explanations
- Modern card-based layout with gradient backgrounds and hover effects
- Added glassmorphism contact section with multiple communication options
- Professional iconography and visual hierarchy throughout

### Children Section Improvements
- Button text updated to "Neem contact met ons op voor meer informatie"
- Enhanced button visibility with dark purple background and border
- Replaced Baby icons with Users icons throughout website for better representation
- Maintained sand-yellow background with improved contrast

### New Hero Sections Added (2025-01-30)
- **Over Ons Page**: Added stunning hero section with "Ons verhaal van zorg" theme
  - Professional background image of counseling session
  - Floating particles animation and gradient overlay effects
  - Emotional header with Heart icon and descriptive subtitle
  - Large title "Wie Zijn Wij?" with orange accent
  - All existing content preserved and positioned below hero

- **Diensten Page**: Created spectacular hero section for services
  - Title "Passende Begeleiding Voor Elke Situatie" 
  - Three feature highlight cards: Flexibel & Veilig, Alle Leeftijden, Persoonlijk
  - Therapy/counseling background image with consistent styling
  - Same floating particles and gradient overlay as other pages
  - Complete preservation of existing pricing packages and children content

### Navigation and UX Improvements (2025-01-30)
- **Header Enhancement**: Added phone number "Bel 085 - 401 92 65" to purple header
  - Positioned centrally between logo and menu for optimal visibility
  - Increased font size and weight for better prominence
  - Added direct tel: link functionality for mobile users
  - Consistent styling across desktop and mobile views

### Homepage Refinements (2025-01-30)
- **Content Reorganization**: Moved main heading "Je hoeft het niet alleen te dragen" to better position
- **Visual Cleanup**: Removed "Begrip en medeleven" badge for cleaner design
- **Typography Standardization**: Unified text styling in main content block
  - Removed bold formatting except for opening paragraph
  - Eliminated icon decorations for minimalist approach
  - Maintained professional hierarchy and readability

### Over Ons Page Content Enhancement (2025-01-30)
- **Treatment Process Section**: Added comprehensive "behandeltraject" explanation
  - Detailed methodology covering two-phase approach
  - Professional imagery showcasing therapy sessions
  - Authentic photos from user assets successfully integrated
  - Clean layout with alternating content/image structure
- **Text Consistency**: Standardized formatting throughout page content
- **Visual Polish**: Removed gradient overlays that obscured images

### Terminology Updates
- "abonnementen" → "overeenkomsten" 
- "opzegbaar" → "verlengbaar" (consistently applied across all pages)
- Enhanced professional language consistency

## SEO Optimization Implementation (2025-01-30)

### Complete SEO Overhaul
- **SEO Components**: Created comprehensive HeadMeta component for dynamic meta tags
- **Structured Data**: Implemented JSON-LD schema markup for all pages (LocalBusiness, FAQPage, Service)
- **Meta Optimization**: All pages now have optimized titles, descriptions, and keywords
- **Open Graph**: Complete Facebook and Twitter meta tags for social sharing
- **Sitemap & Robots**: Created sitemap.xml and robots.txt for search engine crawling
- **Canonical URLs**: Proper canonical links for all pages
- **Alt Texts**: All images now have SEO-optimized alt attributes

### Page-Specific SEO Features
- **Homepage**: LocalBusiness schema with service catalog, main landing page optimization
- **Diensten**: Service schema with pricing data, structured offer catalog
- **FAQ**: FAQPage schema with question/answer markup for rich snippets
- **Contact**: ContactPage schema with business contact information
- **Over Ons**: AboutPage schema with organization details

### Technical SEO Improvements
- **Site Structure**: Clear H1/H2/H3 hierarchy across all pages
- **Internal Linking**: Strategic links between relevant pages (Services → Contact → FAQ)
- **Loading Speed**: Optimized meta loading and structured data implementation
- **Mobile SEO**: Responsive design with proper viewport configuration

### Target Keywords Implementation
- Primary: "nazorg nabestaanden", "rouwbegeleiding", "kinderen rouw verwerken"
- Long-tail: "rouwbegeleiding zonder wachtlijst", "nazorg begeleiding na overlijden ouder"
- Local: Integration ready for "rouwbegeleiding Nederland" terms
- Service-specific: Detailed keyword mapping per package type

## Google Tag Manager Implementation (2025-01-30)

### Analytics Integration Complete
- **Google Tag Manager**: Implemented GTM-PGCV5HH4 container ID
- **Head Section**: GTM script added at top of <head> for optimal loading
- **Body Section**: Noscript fallback added immediately after <body> opening
- **Tracking Ready**: Full visitor tracking, conversion tracking, and event monitoring enabled
- **Professional Setup**: Proper implementation following Google's best practices for e-commerce/service websites