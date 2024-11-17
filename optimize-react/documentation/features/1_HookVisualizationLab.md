# Hook Visualization Lab

Phase 1 of the React Optimization Learning Platform focusing on hook patterns and lifecycle visualization.

## Directory Structure

```
hook-lab/
├── components/   # UI components for hook visualization
├── hooks/        # Custom hooks for demonstrations
├── types/        # TypeScript type definitions
├── utils/        # Utility functions
└── __tests__/    # Test suite
    ├── unit/
    └── integration/
```

## Key Features

- useState lifecycle visualization
- useEffect patterns demonstration
- Performance metrics tracking
- Dependency visualization

## Usage

```tsx
import { StateVisualization, EffectPatterns } from './components';
import { useStateDemo, useEffectDemo } from './hooks';

// Example usage in your component
```

## Testing

```bash
# Run all tests for this feature
npm run test -- --scope=hook-lab

# Run specific test suite
npm run test -- hook-lab/useState
```