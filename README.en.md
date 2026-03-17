# Journal Study

[中文说明](./README.md)

`Journal Study` is a lightweight full-stack playground for validating a `Next.js + Hono + Drizzle + PostgreSQL` setup inside a single repository. It works well as a minimal starter, a learning project, or a base for future feature experiments.

## What Is Included

- A simple homepage
- A `Hono` API entry mounted inside the app
- `GET /api/hello`
- User APIs:
  - `GET /api/users`
  - `POST /api/users`

## Tech Stack

- Frontend: `Next.js 16`, `React 19`, `TypeScript`
- API: `Hono`
- Database: `PostgreSQL`
- ORM: `Drizzle ORM` and `Drizzle Kit`

## Requirements

- Node.js `>= 20`
- npm `>= 10`
- PostgreSQL `>= 14`

## Quick Start

```bash
git clone https://github.com/saudademjj/journal-study.git
cd journal-study
npm install
```

Create `.env`:

```env
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
```

Initialize the database and start development:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
npm run dev
```

Default URL: `http://localhost:3000`

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
