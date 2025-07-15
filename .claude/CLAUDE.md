# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TimeZyme is a document visualization application that transforms complex documents (research papers, reports, articles) into interactive visual stories. It consists of a Nuxt 3 frontend and a Python backend with Neo4j graph database.

## Development Commands

### Frontend (in project root)

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate

# Code quality
pnpm lint          # Run ESLint
pnpm lint:fix      # Run ESLint with auto-fix
pnpm format        # Format code with Prettier
```

### Backend

```bash
# Activate Python virtual environment
cd backend
source venv/bin/activate  # On macOS/Linux
```

### AI Agents (Mastra)

```bash
# Create new Mastra agent project
npx create-mastra@latest

# Or add to existing project
pnpm add @mastra/core
```

## Architecture Overview

### Frontend Architecture (Nuxt 3)

- **Framework**: Nuxt 3.17.4 with Vue 3.5.14, TypeScript support
- **UI**: DaisyUI 5.0.37 components + Tailwind CSS 4.1.7
- **State Management**: Pinia stores in `/stores/`
- **Routing**: File-based routing in `/pages/`
  - `(admin)/`: Admin dashboard pages
  - `auth/`: Authentication pages (login, register, password reset)
  - `landing/`: Public landing page
- **Layouts**: Shared layouts in `/layouts/` (admin, auth)
- **Components**: Reusable components in `/components/`
- **Server**: Server-side code in `/server/`
- **Styling**: CSS in `/assets/styles/`, supports dark/light themes and RTL

### Backend Architecture (Python)

- **Database**: Neo4j graph database for relationship data
- **Core Library**: graphiti_core for graph operations
- **Environment**: Python 3.13 with virtual environment
- **Entry Point**: `backend/src/quickstart.py`

### AI Agent Architecture (Mastra.ai)

- **Framework**: Mastra.ai - TypeScript-based agent framework for building AI applications
- **Documentation**:
  - Full API reference: https://mastra.ai/llms-full.txt
  - Web docs: https://mastra.ai/en/docs
- **Key Features**:
  - Type-safe agents with configurable models and tools
  - Memory persistence and context management
  - Dynamic agent configuration at runtime
  - Integrated with Vercel AI SDK for unified LLM interface
  - Support for tool calling and Model Context Protocol (MCP)
- **Agent Capabilities**:
  - Autonomous multi-step task execution
  - Memory retrieval based on recency, semantic similarity, and conversation threads
  - Streaming responses and structured output
- **Development**: Local playground for testing agents with state/memory visualization

### Key Features Structure

1. **Admin Dashboard** (`/pages/(admin)/`)
   - Multiple dashboard views (CRM, ecommerce, gen-ai)
   - Apps: chat, ecommerce, file-manager, gen-ai
   - UI component showcase

2. **Authentication** (`/pages/auth/`)
   - Login, register, password reset flows
   - Protected routes via middleware

3. **State Management** (`/stores/`)
   - Pinia stores for global state
   - Theme preferences (dark/light/system)

## Development Patterns

### Code style

- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')

### Workflow

- Be sure to typecheck when you’re done making a series of code changes
- Always run `pnpm run lint` after implementing features/fixes and fix any errors before considering the task complete
- Prefer running single tests, and not the whole test suite, for performance

### Component Structure

- Components use Vue 3 Composition API with `<script setup>`
- TypeScript is used throughout the frontend
- Components are organized by feature/domain

### Styling Approach

- Tailwind CSS for utility classes
- DaisyUI for pre-built components
- Custom CSS in `/assets/styles/`
- Theme switching support (dark/light)

### Code Quality

- ESLint with @antfu/eslint-config
- Prettier for formatting
- Husky + lint-staged for pre-commit hooks
- Environment validation with Zod

**IMPORTANT**: After implementing any feature, fix, or issue:

1. Always run `pnpm run lint` to check for linting errors
2. If errors are found, run `pnpm run lint:fix` to auto-fix what's possible
3. Manually fix any remaining errors that can't be auto-fixed
4. Common manual fixes needed:
   - Add `// eslint-disable-next-line node/no-process-env` before `process.env` usage
   - Rename files to follow kebab-case or PascalCase conventions
   - Update imports after renaming files

### Testing

No test framework is currently configured. When adding tests, check with the team for the preferred testing approach.

## Important Notes

- The project uses pnpm as the package manager
- Environment variables are validated with Zod schemas
- The frontend runs on port 3000 by default
- PostgreSQL database is used for all application data (users, articles, zymes, subscriptions, etc.) per the schema in `/docs/timezyme_db_schema_latest.sql`
- Neo4j database is used exclusively for knowledge graph retrieval - providing fine-grained summaries, key points, highlights, keywords, and tags when LLMs need detailed article insights
- Mastra.ai framework is used for building AI agents that process and analyze documents
- The core TimeZyme document visualization features appear to be in early development

## Audio alert when tasks are complete

run afplay /System/Library/Sounds/Glass.aiff (or any other system sound) at the end of tasks, or when my input is needed to proceed with a task.
