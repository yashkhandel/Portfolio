# Portfolio Website for Yash Khandelwal

## Overview

This is a professional portfolio website for Yash Khandelwal, a Full Stack Developer specializing in React.js, Golang, PostgreSQL, and modern web technologies. The application showcases professional experience, skills, education, projects, and provides contact information. The site features a clean, developer-focused design with dark/light theme support and responsive layouts optimized for all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application pattern)
- **React Query (TanStack Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theme management supporting light/dark modes
- Component structure follows atomic design principles with reusable UI components in `client/src/components/ui/`

**Styling Strategy**
- Custom Tailwind configuration with extended color palette using HSL values for theme flexibility
- Design system includes custom spacing, typography, and interaction states (hover-elevate, active-elevate patterns)
- Responsive design using Tailwind breakpoints (sm, md, lg)
- Inter font family loaded from Google Fonts for consistent typography

**State Management**
- Theme state managed through React Context (ThemeProvider) with localStorage persistence
- Form state handled by react-hook-form with Zod validation
- Toast notifications system using Radix UI Toast primitives

### Backend Architecture

**Server Framework**
- **Express.js** application serving both API endpoints and static assets
- Middleware stack includes JSON parsing with raw body preservation for webhook compatibility
- Custom logging middleware for API request/response tracking

**Development vs Production**
- Development: Vite middleware integration for HMR and instant feedback
- Production: Pre-built static assets served from `dist/public` directory
- Environment-aware configuration using NODE_ENV

**API Design**
- RESTful endpoint pattern (`/api/*`)
- Resume download endpoint serving PDF from `attached_assets` directory
- Extensible route registration system in `server/routes.ts`

### Data Storage Architecture

**Database Strategy**
- **Drizzle ORM** configured for PostgreSQL with type-safe schema definitions
- **Neon Database** serverless PostgreSQL adapter (@neondatabase/serverless)
- Schema definition in `shared/schema.ts` for shared type safety between client and server
- Migration system using drizzle-kit with migrations stored in `./migrations` directory

**Current Schema**
- User table with UUID primary keys, username, and password fields
- Zod schema integration for runtime validation using drizzle-zod

**Fallback Storage**
- In-memory storage implementation (`MemStorage` class) for development/testing
- Interface-based storage abstraction (`IStorage`) allowing easy database swapping

**Data Layer Pattern**
- Shared type definitions between frontend and backend (`@shared` imports)
- Type inference from database schema using Drizzle's `$inferSelect` and Zod integration

### External Dependencies

**UI Libraries**
- Radix UI component primitives for accessible, unstyled components (accordion, dialog, dropdown-menu, etc.)
- React Icons (react-icons) for icon sets including Lucide and Simple Icons
- embla-carousel-react for carousel/slider functionality
- date-fns for date formatting and manipulation
- cmdk for command palette patterns

**Development Tools**
- TypeScript with strict mode for type safety
- ESBuild for server bundling in production
- tsx for TypeScript execution in development
- Replit-specific plugins for development banner and error modal

**Styling & Design**
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for conditional class composition

**Database & ORM**
- Drizzle ORM with PostgreSQL dialect
- Neon serverless database driver
- drizzle-zod for schema-to-Zod validation generation
- connect-pg-simple for PostgreSQL session storage (currently unused but available)

**Asset Management**
- Static assets stored in `attached_assets` directory
- Generated images for hero, about, and project sections
- Resume PDF served through API endpoint for download tracking