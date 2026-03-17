<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Journal-Study (Full-stack Learning Journal System)

![Next.js](https://img.shields.io/badge/Next.js-16.0-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)
![Hono](https://img.shields.io/badge/Hono-4.10-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.44-C5F74F?style=flat-square&logo=drizzle)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css)

This project is a full-stack learning journal application specifically designed for knowledge accumulation and technical reflection. Utilizing the modern Next.js 16 architecture, it focuses on structured note governance, multi-dimensional tag retrieval, and a minimalist interaction experience, aiming to assist developers in building a private digital thought repository.

## Technical Deep Dive

### 1. Modern Rendering Strategy
Fully leverages the Server Components (RSC) features of **React 19** and **Next.js 16**. By offloading non-interactive logic to the server, the system significantly reduces the client-side JavaScript bundle size and enhances content rendering speeds.

### 2. Edge-Computing Oriented API Architecture
Backend routing is built on the **Hono** framework, supporting deployment on Edge Runtimes. Compared to traditional Node.js runtimes, edge deployment ensures extremely low API response latency globally.

### 3. Strongly-Typed Data Governance
- **Drizzle ORM**: Achieves end-to-end type inference from DB schema to frontend TypeScript types, eliminating the risk of type mismatches during data flow.
- **Structured Metadata**: Each journal entry supports association with infinite levels of tags, with millisecond-level data indexing and retrieval optimized via PostgreSQL relational queries.

## Project Structure

```text
journal-study/
├── src/
│   ├── app/            # Next.js 16 App Router pages, global layouts, and endpoints
│   ├── components/     # UI primitives, Markdown editor modules, and dashboards
│   ├── db/             # Drizzle schema definitions, indexing, and connection config
│   ├── lib/            # Markdown rendering engine, shared utilities, and validation
│   └── hooks/          # Custom hooks for data fetching and business logic
├── public/             # Static visual assets and global configurations
├── drizzle.config.ts   # Database migration management configuration
└── package.json        # Project metadata and dependency manifest
```

## License
This project is licensed under the MIT License.
