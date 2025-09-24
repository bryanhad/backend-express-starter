# Backend Express Starter

🚀 A lightweight backend starter kit using Express, Drizzle ORM, and SQLite.
Perfect for prototyping APIs or building small backend services with TypeScript and modern tooling.

## Features

- **Express** – backend routing
- **Drizzle ORM + SQLite** – simple, type-safe database stack
- **Zod** - schema validation
- **TypeScript, ESLint, Prettier, and hot-reload dev setup**

## Getting Started

```sh
# Install dependencies
pnpm install

# Generate SQL migrations
pnpm db:generate

# Run database migrations
pnpm db:migrate

# Start development server
pnpm dev
```

Visit http://localhost:*PORT_FROM_DOT_ENV*
after starting the server.