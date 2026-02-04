# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio website (jasocox.io) - a minimalistic blog templating system where blog content is stored externally and selectively published.

## Commands

- `npm run dev` - Start Vite development server
- `npm run build` - TypeScript compile then Vite build
- `npm run lint` - ESLint on all TypeScript/TSX files
- `npm run preview` - Preview production build

## Tech Stack

- **Framework:** React 19 with React Router 7
- **Build:** Vite 7 with TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 with ShadCN UI (New York style)
- **Icons:** Lucide React

## Architecture

```
src/
├── main.tsx          # Entry point - React Router BrowserRouter setup
├── App.tsx           # Root layout with Outlet for child routes
├── Home.tsx          # Home page route (/)
├── Resume.tsx        # Resume page route (/resume)
├── components/ui/    # ShadCN UI components (add via: npx shadcn-ui@latest add [component])
└── lib/utils.ts      # cn() utility for Tailwind class merging
```

**Path Alias:** Use `@/` to import from `src/` (e.g., `import { cn } from "@/lib/utils"`)

## Adding ShadCN Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

Components are installed to `src/components/ui/` and use the configured New York style with Slate base color.
