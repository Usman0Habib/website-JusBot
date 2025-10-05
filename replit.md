# JusBot - AI Legal Assistant

## Overview

JusBot is a web application that provides AI-powered legal guidance accessible to everyone. Built as a modern full-stack application, it features a responsive landing page designed to replicate the Spillmate.ai website structure but themed for legal assistance. The platform aims to democratize legal information by offering 24/7 access to legal guidance through an intelligent chatbot interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theming support (light/dark mode capability)
- Custom design system with defined color palette (primary blue, secondary amber)
- Responsive design with mobile-first approach (breakpoint at 768px)

**Styling Strategy**
- Gradient backgrounds and animations for visual polish
- Custom CSS animations (fade-in-up, float-animation, card-hover effects)
- Inter font family for consistent typography
- Component-based styling with cn() utility for className merging

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- **Node.js** runtime with ES modules (type: "module")
- Custom middleware for request logging and JSON response capture

**Development vs Production**
- Development: Vite middleware integration for HMR
- Production: Static file serving from dist/public
- Environment-specific build processes (tsx for dev, esbuild for production)

**API Design Pattern**
- RESTful API structure with `/api` prefix for all endpoints
- Placeholder route registration system in `server/routes.ts`
- HTTP server creation separate from Express app for extensibility

### Data Storage Solutions

**Database**
- **PostgreSQL** as the primary database (via Neon serverless)
- **Drizzle ORM** for type-safe database operations
- Schema-first approach with migrations stored in `/migrations` directory

**Current Schema**
- Users table with UUID primary keys (auto-generated)
- Username/password authentication fields
- Extensible schema design using Drizzle Zod for validation

**Storage Abstraction**
- `IStorage` interface for CRUD operations
- `MemStorage` in-memory implementation for development/testing
- Designed for easy swap to database-backed storage

**Session Management**
- Session storage configured via `connect-pg-simple` for PostgreSQL-backed sessions
- Prepared for user authentication and state persistence

### External Dependencies

**UI & Styling**
- `@radix-ui/*` - Accessible UI primitives (dialogs, menus, tooltips, etc.)
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Variant-based component styling
- `lucide-react` - Icon library
- `embla-carousel-react` - Carousel functionality

**Form Management**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Form validation integration
- `zod` - Schema validation
- `drizzle-zod` - Database schema to Zod schema conversion

**Database & ORM**
- `@neondatabase/serverless` - Neon PostgreSQL serverless driver
- `drizzle-orm` - TypeScript ORM
- `drizzle-kit` - Database migration toolkit

**Development Tools**
- `@replit/vite-plugin-*` - Replit-specific development enhancements
- `vite` - Build tool and dev server
- `tsx` - TypeScript execution for development
- `esbuild` - Production bundling

**Utilities**
- `date-fns` - Date manipulation
- `nanoid` - Unique ID generation
- `clsx` & `tailwind-merge` - Conditional className utilities

### Architectural Decisions

**Monorepo Structure**
- `/client` - Frontend React application
- `/server` - Backend Express server
- `/shared` - Shared TypeScript types and schemas
- Path aliases configured (`@/*`, `@shared/*`) for clean imports

**Type Safety**
- Full TypeScript coverage across frontend and backend
- Shared types between client and server via `/shared` directory
- Drizzle ORM provides end-to-end type safety from database to UI

**API Communication**
- Custom `apiRequest` helper for consistent fetch API usage
- Error handling with response status checking
- Cookie-based authentication ready (credentials: "include")

**Build & Deployment**
- Separate client and server builds
- Client builds to `dist/public` for static serving
- Server bundles to `dist/index.js` with external packages
- Production mode serves pre-built static assets

**Scalability Considerations**
- Storage interface allows easy migration from in-memory to database
- Route registration system supports modular API growth
- Component library enables consistent UI scaling
- Session management infrastructure ready for multi-user scenarios