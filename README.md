# New Project

A modern React application built with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
new-project/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
└── components.json      # shadcn/ui configuration
```

## Available shadcn/ui Components

The following components are pre-installed:

- Button
- Card
- Input
- Label

### Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with the following features:

- Native CSS layers for better specificity control
- CSS variables for theming
- Dark mode support (toggle with `.dark` class)
- Custom utilities via `@utility` directive

## Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)