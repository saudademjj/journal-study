<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Journal-Study -- Full-Stack Learning Journal & Notes System

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwind-css)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square)

A full-stack learning journal system built with Next.js 16 and Hono for tracking study progress, organizing notes, and managing learning materials. The project leverages the latest React 19 concurrent features and App Router architecture, paired with Drizzle ORM for type-safe database operations. It serves as both a practical tool and a modern full-stack technology showcase.

## Core Features

### Learning Journal Management
- Create, edit, and delete journal entries
- Organize notes by date and topic
- Rich text content recording
- Timeline browsing and review

### Note Organization
- Structured note categorization system
- Tag system for quick retrieval
- Learning material linking and referencing

### Data Persistence
- PostgreSQL relational storage for data safety
- Drizzle ORM with full migration management
- Seed data for quick demo environment initialization

## Technical Architecture

### Frontend

- Next.js 16 (App Router): Latest server-side rendering and routing framework
- React 19.2: Concurrent rendering, Server Components, latest Hooks API
- TypeScript 5: End-to-end static type checking
- Tailwind CSS 4: Next-generation atomic CSS engine
- shadcn/ui: Component library built on Radix UI (class-variance-authority + tailwind-merge)
- Lucide React: Lightweight, consistent icon library

### Backend API

- Hono 4.10: Ultra-lightweight web framework mounted on Next.js Route Handlers
- Drizzle ORM 0.44: Type-safe SQL query builder and migration tool
- PostgreSQL: Direct connection via `postgres` driver

### Development Toolchain

- ESLint: Code quality checking
- Drizzle Kit: Database migration generation and management
- tsx: Direct TypeScript script execution
- dotenv: Environment variable management

## Directory Structure

```text
journal-study/
├── src/
│   ├── app/                # Next.js App Router entry
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── db/                 # Database connection and schema definitions
│   └── favicon.ico         # Site icon
├── app/                    # Extended app directory
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui base components
├── lib/                    # Utility functions and helper modules
├── public/                 # Static assets
├── drizzle.config.ts       # Drizzle ORM configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Quick Start

### Prerequisites

- Node.js >= 20
- PostgreSQL >= 16

### 1. Clone and Install

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
npm install
```

### 2. Environment Configuration

Create a `.env.local` file and configure the database connection:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/journal
```

### 3. Database Initialization

```bash
# Generate migration files (if schema has changed)
npx drizzle-kit generate

# Execute migrations
npx drizzle-kit migrate
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to use the application.

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Linting
```

## Database Management

The project uses Drizzle Kit to manage database schema and migrations:

```bash
# Generate SQL migrations from schema changes
npx drizzle-kit generate

# Apply migrations to database
npx drizzle-kit migrate

# Launch visual database management interface
npx drizzle-kit studio
```

Schema definitions are located in the `src/db/` directory, written using Drizzle ORM's TypeScript DSL to ensure type consistency between database structure and application code.

## Project Highlights

As a full-stack technology practice project, it covers the following engineering aspects:

- Isomorphic Architecture: Next.js App Router unifies frontend and backend code organization
- End-to-End Types: TypeScript types flow from database schema through API responses to frontend rendering
- Modern CSS: Tailwind CSS 4's new compilation engine delivers faster build times
- Lightweight API: Hono framework replaces traditional Express with smaller bundle size and better performance
- New ORM Paradigm: Drizzle offers a more SQL-native query experience compared to Prisma while maintaining type safety

## License

MIT License
