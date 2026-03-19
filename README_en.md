<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Journal Study

A learning project built with a modern full-stack tech stack, designed to explore and practice the development patterns of Next.js 16 + Hono + Drizzle ORM + PostgreSQL.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwind-css)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square)

---

## About

This is a technology learning and practice project, not a complete application product. The core purpose is to gain hands-on understanding of how the following technologies work together by building a full-stack application skeleton:

- Organizing frontend pages and routing with Next.js App Router
- Building lightweight API services with Hono
- Implementing type-safe database operations with Drizzle ORM
- Building reusable component systems with shadcn/ui
- Styling with Tailwind CSS 4

The project is currently in its initial stage, containing the basic project structure, database connection, API endpoint examples, and UI component examples.

---

## Project Structure

```text
journal-study/
├── app/                            # Root layout and home page
│   ├── layout.tsx                  # Root layout (Geist fonts)
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles (OKLch theme)
├── src/
│   ├── app/
│   │   └── api/[[...route]]/
│   │       └── route.ts            # Hono API routes
│   └── db/
│       ├── index.ts                # Drizzle ORM database connection
│       └── schema.ts               # Table definitions
├── components/
│   └── ui/
│       └── button.tsx              # Button component (shadcn/ui)
├── lib/
│   └── utils.ts                    # Utility functions
├── drizzle.config.ts               # Drizzle ORM configuration
├── next.config.ts                  # Next.js configuration
├── components.json                 # shadcn/ui configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
└── package.json                    # Dependencies and scripts
```

---

## Tech Stack

### Frontend

| Technology | Version | Description |
|------------|---------|-------------|
| Next.js | 16.0.5 | React full-stack framework with App Router |
| React | 19.2.0 | UI library with concurrent features |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Atomic CSS framework |
| shadcn/ui | - | Component library built on Radix UI (New York style) |
| Lucide React | 0.555.0 | Icon library |

### Backend

| Technology | Version | Description |
|------------|---------|-------------|
| Hono | 4.10.7 | Lightweight web framework |
| Drizzle ORM | 0.44.7 | Type-safe ORM |
| PostgreSQL | 16+ | Relational database |
| postgres | 3.4.7 | PostgreSQL driver |

### Development Tools

| Tool | Description |
|------|-------------|
| ESLint 9 | Code linting |
| Drizzle Kit | Database migration management |
| tsx | TypeScript execution tool |
| dotenv | Environment variable management |

---

## Quick Start

### Prerequisites

- Node.js >= 20
- PostgreSQL >= 16

### Setup

1. Clone the repository

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

4. Run database migrations

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

5. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the project.

---

## API Endpoints

The project uses the Hono framework, mounted via Next.js catch-all route handlers:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/hello` | Test endpoint, returns a greeting message |
| GET | `/api/users` | Fetch all users |
| POST | `/api/users` | Create a user (params: name, email) |

---

## Database

### Data Model

Currently defines a `users` table:

| Field | Type | Constraints |
|-------|------|-------------|
| id | serial | Primary key |
| name | text | Required |
| email | text | Required, unique |
| createdAt | timestamp | Defaults to now |

### Database Management

```bash
npx drizzle-kit generate   # Generate migrations from schema changes
npx drizzle-kit migrate    # Apply migrations to database
npx drizzle-kit studio     # Launch visual management interface
```

Schema definitions are located in the `src/db/` directory, written using Drizzle ORM's TypeScript DSL to ensure type consistency between database structure and application code.

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run linting
```

---

## Project Highlights

As a full-stack technology practice project, it covers the following engineering aspects:

- Isomorphic Architecture -- Next.js App Router unifies frontend and backend code organization
- End-to-End Types -- TypeScript types flow from database schema through API responses to frontend rendering
- Modern CSS -- Tailwind CSS 4's new compilation engine delivers faster build times
- Lightweight API -- Hono framework replaces traditional Express with smaller bundle size and better performance
- New ORM Paradigm -- Drizzle offers a more SQL-native query experience compared to Prisma while maintaining type safety

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Hono Documentation](https://hono.dev)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

## License

[MIT](LICENSE)
