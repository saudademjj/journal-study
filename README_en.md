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

A full-stack journal application designed for knowledge modeling and technical reflection. Utilizing the **Next.js 16 (App Router)** and **Hono** edge API architecture, the system provides a minimalist interface and structured metadata management to help developers build a highly searchable personal knowledge base.

## 🏛️ Technical Architecture Deep Dive

### 1. RSC & Concurrent Rendering (Modern Frontend)
- **React Server Components (RSC)**: Fully leverages Next.js 16 RSC features. Markdown parsing and initial rendering are performed on the server, sending only lightweight HTML to the client and significantly reducing browser CPU tasks.
- **Concurrent Mode Interaction**: Combined with React 19 concurrent features, the interface remains responsive even when navigating through large-scale journal lists.

### 2. Edge-First API Governance
- **Hono @ Edge**: Backend logic is hosted in edge runtime environments. Minimalist controllers implemented via the Hono framework ensure millisecond-level API response latency globally.
- **Type-Safe Inference**: Schemas built with Drizzle ORM enable end-to-end type sharing from SQL queries to frontend View Models, eliminating runtime field naming errors.

### 3. Structured Knowledge Modeling
- **Multi-dimensional Tag System**: Every journal entry supports association with custom categories and flat tags.
- **Persistence Optimization**: Metadata is stored using PostgreSQL relational tables or JSONB fields, with GIN indexing (provisioned) to support future full-text search expansions.

## 📂 Engineering Standards

```text
journal-study/
├── src/
│   ├── app/            # Next.js 16 core routes, global layouts, and API handlers
│   ├── components/
│   │   ├── editor/     # High-performance Markdown editor with real-time preview
│   │   ├── dashboard/  # Analytics: activity heatmaps and category overviews
│   │   └── ui/         # Atomic design-based component library
│   ├── db/             # Drizzle schema definitions, pool config, and migrations
│   ├── lib/            # Markdown engines, shared utilities, and validation
│   └── hooks/          # Custom hooks for data fetching and UI state
├── public/             # Static assets and documentation
├── drizzle.config.ts   # Database migration management config
└── package.json        # Dependencies, scripts, and metadata
```

## 🚀 Quick Start for Developers

### 1. Requirements
- Node.js >= 20
- PostgreSQL >= 16

### 2. Deployment
```bash
# Install all dependencies
npm install

# Configure Database Connection
# Set DATABASE_URL=postgresql://... in .env

# Schema Push & Sync
npx drizzle-kit push

# Launch Development Server
npm run dev
```

## License
MIT License
