# AGENTS.md

This file provides AI coding assistants with essential context about the **lscs-core-web** project to help generate accurate, contextually appropriate code and follow established patterns.

---

## Project Overview

**lscs-core-web** is a Next.js web application built with TypeScript, following a feature-driven architecture. The project was bootstrapped with `create-lscs-next-app` and serves as the core web platform for LSCS (La Salle Computer Society).

### Tech Stack

- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript 5
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Build Tool**: Turbopack
- **Testing**: Vitest (unit) + Cypress (e2e)
- **Code Quality**: ESLint + Prettier
- **Package Manager**: pnpm

### Recommended Future Libraries

The project is designed to integrate with these libraries as features are added:

- **Data Fetching**: TanStack Query
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Authentication**: Better Auth
- **Animations**: Framer Motion
- **Icons**: React Icons
- **ORM**: Drizzle ORM
- **UI Components**: shadcn/ui

---

## Architecture Patterns

### Feature-Driven Architecture

The project follows a **domain-driven, feature-based architecture** where code is organized by business features rather than technical layers. Each feature is self-contained with all necessary components, hooks, services, and types.

### Directory Structure

```
src/
├── app/                   # Next.js App Router (routes and layouts)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── components/            # Global shared UI components
│
├── features/              # Feature modules (domain logic)
│   ├── example-feature/   # Template for new features
│   │   ├── components/    # Feature-specific UI components
│   │   ├── containers/    # Container components (data + logic)
│   │   ├── hooks/         # Feature-specific custom hooks
│   │   ├── services/      # Business logic and API calls
│   │   ├── queries/       # TanStack Query hooks
│   │   ├── types/         # Feature-specific TypeScript types
│   │   ├── data/          # Static data and constants
│   │   └── README.md      # Feature documentation
│   └── shared/            # Shared feature utilities
│
├── lib/                   # Global utilities and helpers
├── queries/               # Global TanStack Query configuration
├── store/                 # Zustand global state stores
├── providers/             # React context providers
├── config/                # Environment variables and constants
├── styles/                # Global CSS and theme files
│   └── globals.css        # Global styles
├── types/                 # Global TypeScript types
├── hooks/                 # Global custom hooks
├── services/              # Global API services
├── context/               # Global React contexts
└── __tests__/             # Test files
    ├── unit/              # Unit tests
    └── e2e/               # End-to-end tests
```

### Container/Presentational Pattern

Features follow the **Container/Presentational pattern**:

- **Containers** (`containers/`): Handle data fetching, state management, and business logic
- **Presentational Components** (`components/`): Receive data via props and focus on UI rendering

---

## Code Generation Guidelines

### File Naming Conventions

- **React Components**: PascalCase (e.g., `UserProfile.tsx`, `AuthButton.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
- **Types**: PascalCase (e.g., `User.ts`, `ApiResponse.ts`)
- **Directories**: kebab-case (e.g., `user-profile/`, `auth-service/`)

### Component Structure

When generating React components, follow this structure:

```typescript
// 1. Import external dependencies
import { useState } from 'react';

// 2. Import internal dependencies (using @ alias)
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

// 3. Import types
import type { User } from '@/types/User';

// 4. Define types/interfaces (if not in separate file)
interface ComponentProps {
  user: User;
  onSubmit?: () => void;
}

// 5. Component definition
export function ComponentName({ user, onSubmit }: ComponentProps) {
  // Hooks
  const [state, setState] = useState();

  // Handlers
  const handleClick = () => {
    // logic
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### TypeScript Guidelines

- **Always use TypeScript** for all files
- Use `type` for simple types, `interface` for object shapes that may be extended
- Prefer explicit return types for functions
- Use `as const` for literal objects that shouldn't be mutated
- Avoid `any`; use `unknown` when type is truly unknown

```typescript
// Good
type Status = 'pending' | 'success' | 'error';

interface User {
  id: string;
  name: string;
  email: string;
}

function fetchUser(id: string): Promise<User> {
  // implementation
}

// Avoid
function fetchUser(id: any): any {
  // implementation
}
```

### Import Path Resolution

Use the `@/` alias for all internal imports:

```typescript
// Good
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/features/auth/hooks/useAuth';
import type { User } from '@/types/User';

// Avoid
import { Button } from '../../../components/ui/Button';
```

### Styling Approach

- Use **Tailwind CSS** utility classes for styling
- Follow mobile-first responsive design
- Use semantic class names when composing utilities
- Keep styles inline with JSX unless reusability demands extraction

```typescript
// Preferred approach with Tailwind
<button className="rounded-full bg-foreground text-background hover:bg-[#383838] px-4 py-2">
  Click me
</button>
```

### State Management Strategy

- **Component state**: Use `useState` for local UI state
- **Server state**: Use TanStack Query for API data
- **Global client state**: Use Zustand stores
- **Form state**: Use React Hook Form

```typescript
// Local state
const [isOpen, setIsOpen] = useState(false);

// Server state (when TanStack Query is added)
const { data, isLoading } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
});

// Global state (when Zustand is added)
const { user, setUser } = useUserStore();
```

### Error Handling

Always handle loading and error states gracefully:

```typescript
if (isLoading) {
  return <LoadingSpinner />;
}

if (error) {
  return <ErrorMessage message={error.message} />;
}

return <Content data={data} />;
```

---

## Creating New Features

### Using the CLI

Generate new features using the scaffolding command:

```bash
npx create-lscs-next-app feature <feature-name>
```

This creates a complete feature structure under `src/features/<feature-name>/` with all necessary folders and a README.

### Manual Feature Creation

When creating features manually, replicate the structure in `src/features/example-feature/`:

1. Create feature directory: `src/features/<feature-name>/`
2. Add subdirectories: `components/`, `containers/`, `hooks/`, `services/`, `queries/`, `types/`, `data/`
3. Create a `README.md` explaining the feature's purpose
4. Follow the Container/Presentational pattern for components

---

## Testing Guidelines

### Unit Tests (Vitest)

- Place tests adjacent to implementation or in `__tests__/unit/`
- Use `.test.ts` or `.test.tsx` extension
- Follow AAA pattern: Arrange, Act, Assert

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### E2E Tests (Cypress)

- Place tests in `__tests__/e2e/`
- Test critical user flows
- Use data-testid attributes for stable selectors

---

## Code Quality Standards

### Formatting and Linting

- **Prettier** handles code formatting automatically
- **ESLint** enforces code quality rules (with Prettier integration)
- Run `npm run lint` before committing
- Run `npm run format` to auto-fix formatting

### Commit Message Convention

Follow **Conventional Commits** format:

```
<type>(<scope>): <description>

[optional body]
```

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:

```
feat(auth): add JWT authentication
fix(api): correct null pointer in user service
docs(readme): update installation instructions
```

---

## Git Workflow

### Branch Strategy

- `main`: Production-ready code
- `staging`: Pre-release testing
- `dev`: Integration branch for features

### Contribution Flow

1. Create feature branch from `dev`: `feature/<issue-no-desc>` or `fix/<issue-no-desc>`
2. Make changes following code standards
3. Write tests for new functionality
4. Run linting and tests: `npm run lint && npm run test`
5. Commit with conventional commit messages
6. Open PR targeting `dev` branch
7. Get at least 1 approval
8. Use "Squash and Merge" when merging

---

## CI/CD Pipeline

The project includes GitHub Actions workflows:

1. **Setup, Lint, Test, Scan** (`001-setup-lint-test-scan.yml`): Runs on PRs to validate code quality
2. **Build & Push Image** (`002-build-push-image.yml`): Builds Docker images
3. **Trigger Deployment** (`003-trigger-deployment.yml`): Handles deployment automation

When generating code, ensure it passes:

- TypeScript compilation
- ESLint rules
- Prettier formatting
- Existing tests

---

## Common Patterns & Best Practices

### Functional Components Only

Always use functional components with hooks:

```typescript
// Good
export function UserProfile({ user }: { user: User }) {
  const [expanded, setExpanded] = useState(false);
  return <div>{/* ... */}</div>;
}

// Avoid class components
```

### Explicit Error Boundaries

Wrap components that fetch data with error boundaries:

```typescript
<ErrorBoundary fallback={<ErrorFallback />}>
  <DataFetchingComponent />
</ErrorBoundary>
```

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers when possible

### Performance

- Use `React.memo` for expensive components
- Lazy load routes and heavy components
- Optimize images with Next.js `Image` component
- Use dynamic imports for code splitting

---

## Environment & Configuration

### Path Aliases

TypeScript is configured with `@/` alias pointing to `src/`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Environment Variables

Store environment variables in `.env.local` (not committed). Access them via `process.env.NEXT_PUBLIC_*` for client-side or `process.env.*` for server-side.

---

## When to Ask for Clarification

Before generating code, ask the user for clarification when:

1. **Feature placement**: Whether a component should be global or feature-specific
2. **State management**: Whether to use local state, context, or a global store
3. **API integration**: Endpoint URLs, authentication methods, data schemas
4. **Styling details**: Specific design requirements not covered by Tailwind
5. **Business logic**: Domain-specific rules or validation requirements

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Building
npm run build            # Production build

# Quality Checks
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run test             # Run Vitest tests

# Feature Scaffolding
npx create-lscs-next-app feature <name>
```

---

## Additional Context

- **Organization**: LSCS (La Salle Computer Society)
- **Project Type**: Web application (institutional/organizational platform)
- **Target Environment**: Modern browsers with JavaScript enabled
- **Deployment**: Containerized deployment via Docker (based on CI/CD workflows)

---

**Last Updated**: 2025-10-15

When assisting with this project, prioritize consistency with existing patterns, TypeScript safety, accessibility, and maintainable code organization. Always consider the feature-driven architecture when suggesting where new code should live.
