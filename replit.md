# Xenra Nazorghulp - Grief Support Website

## Overview

This is a grief support website for Xenra Nazorghulp, a Dutch bereavement counseling service. It's a full-stack application built with React frontend and Express backend, designed to provide information about their services and allow potential clients to get in touch.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL-based sessions (connect-pg-simple)

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
- **Schema Definition**: Uses Drizzle ORM with Zod validation schemas
- **Type Safety**: Shared types between frontend and backend via TypeScript

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