# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 📦 Project Structure

```
optimize-react/
├── src/                      # Source code
│   ├── core/                 # Core application logic
│   │   ├── hooks/           # Shared hooks
│   │   │   ├── common/      # General purpose hooks
│   │   │   ├── performance/ # Performance hooks
│   │   │   └── state/       # State management hooks
│   │   ├── contexts/        # Global state management
│   │   ├── types/          # Shared TypeScript types
│   │   └── utils/          # Utility functions
│   │
│   ├── features/            # Feature-based modules
│   │   ├── hook-lab/       # Phase 1: Hook visualization
│   │   │   ├── components/ # Lab-specific components
│   │   │   ├── hooks/     # Lab-specific hooks
│   │   │   ├── types/     # Type definitions
│   │   │   ├── utils/     # Utilities
│   │   │   └── __tests__/ # Tests for this feature
│   │   │
│   │   ├── render-lab/     # Phase 2: Render behavior
│   │   ├── typescript-lab/ # Phase 3: TypeScript patterns
│   │   ├── state-lab/      # Phase 4: State management
│   │   ├── patterns-lab/   # Phase 5: Advanced patterns
│   │   ├── perf-lab/      # Phase 6: Performance
│   │   └── internals-lab/  # Phase 7: React internals
│   │
│   ├── shared/              # Shared components
│   │   ├── components/     # Reusable UI components
│   │   │   ├── visualization/
│   │   │   ├── metrics/
│   │   │   └── ui/
│   │   ├── layouts/       # Layout components
│   │   └── styles/        # Global styles
│   │
│   ├── lib/                 # Third-party integrations
│   │   ├── framer-motion/
│   │   └── vitest/
│   │
│   └── pages/               # Route pages
│       ├── labs/
│       └── docs/
│
├── public/                  # Static assets
├── config/                  # Configuration files
└── scripts/                # Build and dev scripts
```

## 🏗️ Architecture Overview

### Core Module `/src/core`
Houses essential application logic, hooks, and utilities shared across features.

#### Key Components:
- **Hooks**: Reusable React hooks
- **Contexts**: Global state management
- **Types**: Shared TypeScript definitions
- **Utils**: Common utility functions

### Feature Modules `/src/features`
Each lab is organized as a self-contained feature module.

#### Standard Feature Structure:
```
feature-name/
├── components/   # UI components
├── hooks/        # Feature-specific hooks
├── types/        # Type definitions
├── utils/        # Utilities
├── __tests__/    # Tests
│   ├── unit/
│   └── integration/
└── index.ts      # Public API
```

### Shared Components `/src/shared`
Reusable components and utilities used across features.

#### Categories:
- **Visualization**: Data visualization components
- **Metrics**: Performance measurement
- **UI**: Basic interface components

## 🧪 Testing Strategy

### Feature Tests
- Co-located with feature code
- Unit tests for hooks and utilities
- Integration tests for components
- Clear test ownership

### Global Test Setup
```
src/lib/vitest/
├── setup.ts      # Global test configuration
├── mocks/        # Shared test mocks
└── helpers/      # Test utilities
```

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Testing**: Vitest + Cypress

## 📝 Development Guidelines

### Code Organization
- Feature-first architecture
- Clear module boundaries
- Co-located tests
- Shared utilities in core

### State Management
- Local state when possible
- Context for shared state
- Clear state ownership

### Performance
- Code splitting by route
- Lazy loading for features
- Shared bundle optimization