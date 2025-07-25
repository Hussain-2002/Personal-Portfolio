# Personal Portfolio Website

## Overview

This is a modern, interactive personal portfolio website built with React, Express, and PostgreSQL. The application features a full-stack architecture with a React frontend using Vite, an Express backend server, and Drizzle ORM for database management. The site showcases a developer's work, skills, and experience through an elegant, animated interface with smooth scrolling and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## Personal Information Updates (January 25, 2025)
- Portfolio owner: Hussain Ali Mesharwala
- Logo/Brand: HAM
- Email: Hussainmesharwala@gmail.com  
- Phone: 7024951915
- Location: Ujjain, India
- Social Media:
  - Instagram: https://www.instagram.com/hussain_maheshwar_wala/
  - GitHub: https://github.com/Hussain-2002
  - LinkedIn: https://www.linkedin.com/in/hussain-ali-mesharwala-865315205
  - Twitter: Removed from social links

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Theme Support**: Custom theme provider with dark/light mode switching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **Development**: Hot reload with Vite integration in development mode
- **Production**: Built and bundled with esbuild

### Database & ORM
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: Neon Database serverless driver
- **Development Storage**: In-memory storage fallback for development

## Key Components

### User Interface Components
- **Navigation**: Sticky header with smooth scrolling and active section highlighting
- **Hero Section**: Animated landing area with typing effects and particle animations
- **About Section**: Personal information with animated statistics and tech stack showcase
- **Skills Section**: Interactive skill cards with proficiency indicators
- **Portfolio Section**: Project showcase with filtering and modal details
- **Experience Section**: Timeline-based work history with technology tags
- **Contact Section**: Form submission with validation and success feedback
- **Footer**: Site navigation and social media links

### Backend Services
- **Contact Form Handler**: Processes contact form submissions with validation
- **User Management**: Basic user schema and CRUD operations (foundation for future features)
- **Static File Serving**: Serves built React application in production

### Shared Utilities
- **Schema Definitions**: Centralized database schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Form validation using react-hook-form with Zod resolvers

## Data Flow

### Frontend Data Flow
1. **Component Rendering**: React components use hooks for state management and side effects
2. **API Communication**: React Query handles server state with automatic caching and revalidation
3. **Form Handling**: Contact forms use react-hook-form for validation and submission
4. **Theme Management**: Context-based theme switching with localStorage persistence
5. **Animation Triggers**: Intersection Observer API triggers animations on scroll

### Backend Data Flow
1. **Request Processing**: Express middleware handles JSON parsing and request logging
2. **Route Handling**: RESTful endpoints process API requests
3. **Data Validation**: Input validation using Zod schemas
4. **Response Formation**: Structured JSON responses with appropriate HTTP status codes

### Development vs Production Flow
- **Development**: Vite dev server with HMR, proxy API requests to Express
- **Production**: Express serves static built files and handles API routes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library for smooth transitions
- **@radix-ui/***: Headless UI components for accessibility

### Development Tools
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool with HMR support
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing for Tailwind

### UI Enhancement
- **class-variance-authority**: Variant-based component styling
- **clsx & tailwind-merge**: Conditional class name utilities
- **lucide-react**: Consistent icon library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations prepare PostgreSQL schema

### Environment Configuration
- **Development**: Uses environment variables for database connection
- **Production**: Requires `DATABASE_URL` for PostgreSQL connection
- **Build Optimization**: Separate optimization for client and server bundles

### Deployment Requirements
- Node.js environment with ES module support
- PostgreSQL database (configured for Neon Database)
- Environment variables for database connection
- Static file serving capability for frontend assets