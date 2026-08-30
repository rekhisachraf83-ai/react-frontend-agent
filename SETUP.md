# React Frontend Agent

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test

# Check code quality
npm run lint
npm run type-check
```

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable components
│   ├── features/     # Feature-specific components
│   └── layouts/      # Layout components
├── hooks/            # Custom React hooks
├── services/         # API and external services
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── App.tsx
```

## Code Quality Standards

- **TypeScript**: Strict mode enabled
- **Linting**: ESLint with React recommended rules
- **Formatting**: Prettier for consistent code style
- **Testing**: Jest + React Testing Library (70%+ coverage)
- **Styling**: Tailwind CSS

## Using the Frontend Agent

See [AGENT_GUIDE.md](./AGENT_GUIDE.md) for detailed instructions on using the Copilot agent.

Quick start:
1. Create an issue or open Copilot Chat
2. Describe your task
3. Mention `@copilot`
4. Let the agent handle the rest!

## Configuration Files

- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting
- `tsconfig.json` - TypeScript settings
- `jest.config.cjs` - Jest testing configuration
- `vite.config.ts` - Vite build configuration
