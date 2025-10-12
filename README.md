# Feature Flag Configuration Card

An accessible React component for managing feature flag states in SaaS dashboards. Built with Next.js 15, TypeScript, Tailwind CSS, and Storybook.

![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38bdf8)
![Storybook](https://img.shields.io/badge/Storybook-8.4-ff4785)

## Overview

This project demonstrates high-fidelity translation of design specifications into working code. The Feature Flag Configuration Card component showcases:

- **Design System Fidelity**: Pixel-perfect implementation matching design specifications
- **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation and ARIA attributes
- **Responsiveness**: Mobile-first design that adapts seamlessly across viewports (mobile/desktop layouts)
- **Testing**: 27 comprehensive tests with 100% passing rate
- **Documentation**: 8 Storybook stories with interactive controls and examples

## Quick Start

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Storybook

Explore **8 interactive stories** demonstrating different component states:

```bash
# Run Storybook locally
npm run storybook

# Open http://localhost:6006
```

**Available Stories**:

- **Default**: Active flag with full metadata
- **Inactive**: Inactive flag state
- **Long Name**: Text truncation demonstration
- **With Dates**: Creation and update timestamps
- **Minimal**: Only name and active state (no description)
- **Active No Dates**: Active flag without timestamps
- **Multiple Flags**: Stacked list view
- **Mobile View**: Mobile viewport demonstration

> **Note**: This project uses Storybook 8.4.7 for compatibility with Next.js 15. If you encounter webpack errors, ensure you're using the correct versions specified in `package.json`.

## Available Commands

| Command                   | Description                                   |
| ------------------------- | --------------------------------------------- |
| `npm run dev`             | Start Next.js development server on port 3000 |
| `npm run build`           | Build production application                  |
| `npm run start`           | Start production server                       |
| `npm run lint`            | Run ESLint                                    |
| `npm run format`          | Format code with Prettier                     |
| `npm run format:check`    | Check code formatting                         |
| `npm test`                | Run tests in watch mode                       |
| `npm run test:ci`         | Run tests in CI mode                          |
| `npm run storybook`       | Start Storybook on port 6006                  |
| `npm run build-storybook` | Build static Storybook                        |

## Component API

### Props

```typescript
type FeatureFlagCardProps = {
  name: string; // Display name of the feature flag
  description?: string; // Detailed description
  active: boolean; // Current enabled state
  createdAt?: string | Date; // Creation timestamp
  updatedAt?: string | Date; // Last update timestamp
  onToggle?: (newState: boolean) => void; // Toggle callback
  className?: string; // Additional CSS classes
};
```

### Example Usage

```tsx
import { FeatureFlagCard } from '@/components/feature-flags/FeatureFlagCard';

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  return (
    <FeatureFlagCard
      name="User Onboarding Flow"
      description="Controls rollout of the new onboarding process."
      active={isActive}
      createdAt="2025-10-01"
      updatedAt="2025-10-11"
      onToggle={(newState) => setIsActive(newState)}
    />
  );
}
```

## Documentation

See the **[docs/](./docs/)** directory for complete documentation.

### Quick Links

- **[QUICKSTART.md](./docs/QUICKSTART.md)** - Commands, tips, and troubleshooting
- **[SPECIFICATION.md](./docs/SPECIFICATION.md)** - Complete technical specification with design-to-code mapping
- **[INTERVIEW-SPEC.md](./docs/INTERVIEW-SPEC.md)** - Interview presentation guide (17 min demo structure)
- **[CHANGELOG.md](./docs/CHANGELOG.md)** - Version history and compatibility notes

### Design System

The component follows a strict design system with high-fidelity implementation:

- **Container**: White background (`bg-white`) with `shadow-xl` and `rounded-xl` borders
- **State Borders**: 4px left border (`border-l-4`)
  - Active: `border-indigo-600` (Indigo 600)
  - Inactive: `border-gray-400` (Gray 400)
- **Toggle Switch**: iOS-style design
  - Active: `bg-green-500` with `hover:bg-green-600`
  - Inactive: `bg-gray-300` with `hover:bg-gray-400`
  - Thumb: White circle with `shadow-md` and `ring-1 ring-gray-200`
- **Status Badge**: Bold text on dark background
  - Active: `bg-green-800 text-white`
  - Inactive: `bg-gray-800 text-white`
- **Typography**:
  - Title: `text-base font-semibold` with truncation
  - Description: `text-sm text-gray-700` with 2-line clamp
  - Metadata: `text-sm text-gray-700 font-semibold` labels
- **Spacing**: Responsive padding using 8px grid (`p-4 md:p-6`)
- **Animations**: Smooth 150-200ms transitions for all state changes

### Responsive Behavior

The component uses mobile-first responsive design:

- **Mobile (< 768px)**:
  - Single column stack layout (`grid-cols-1`)
  - Content and toggle stack vertically
  - Toggle aligned to the left
  - Metadata stacks vertically
- **Desktop (≥ 768px)**:
  - Three-column grid (`md:grid-cols-[auto,1fr,auto]`)
  - Content spans 2 columns, toggle in final column
  - Toggle aligned to the right (`md:justify-end`)
  - Metadata displayed in horizontal row
- **Text Handling**:
  - Name uses `truncate` (single line with ellipsis)
  - Description uses `line-clamp-2` (2 lines max)
  - `min-w-0` prevents grid overflow issues

### Accessibility Features

All accessibility features are thoroughly tested (see `FeatureFlagCard.test.tsx`):

- Semantic HTML (`<article>`, `<h3>`, `<button role="switch">`, `<time>`)
- ARIA attributes (`role="switch"`, `aria-checked`, `aria-label`)
- Full keyboard navigation (Tab, Space, Enter)
- Screen reader support (sr-only text for toggle state)
- Visible focus indicators with 2px indigo ring and 4px offset
- WCAG 2.1 AA color contrast ratios (tested visually)
- 44×44px minimum tap target for touch devices
- Proper datetime attributes on time elements

## Testing

The project includes **27 comprehensive tests** (all passing) covering:

- **Rendering**: Various prop combinations, optional dates and descriptions
- **Status Badge**: Active/Inactive state display
- **Toggle Functionality**: Mouse clicks and keyboard interactions
- **Accessibility**: ARIA roles, labels, checked states, screen reader text
- **Keyboard Navigation**: Space and Enter key handling
- **Semantic HTML**: Article element, heading levels, time elements
- **Visual States**: Active/inactive border colors, custom className support

```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
npm run test:ci
```

**Test Results**: 27/27 passing ✓

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles with Tailwind
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Demo page with examples
│   └── components/
│       └── feature-flags/
│           ├── FeatureFlagCard.tsx         # Main component
│           ├── FeatureFlagCard.stories.tsx # Storybook stories
│           └── FeatureFlagCard.test.tsx    # Jest tests
├── .storybook/
│   ├── main.ts                   # Storybook configuration
│   └── preview.ts                # Global decorators
├── docs/
│   ├── README.md                 # Documentation index
│   ├── QUICKSTART.md             # Quick reference guide with commands
│   ├── SPECIFICATION.md          # Complete technical specification min)
│   └── CHANGELOG.md              # Version history and compatibility
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── jest.config.js
└── README.md
```

## Vercel Deployment

This project is optimized for Vercel deployment with both the Next.js app and Storybook accessible from a single deployment.

### Quick Deploy

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel auto-detects Next.js and deploys both app and Storybook

### Accessing Your Deployment

After deployment, you'll have two sites available:

- **Main App**: `https://your-project.vercel.app/` - Next.js demo with 6 example flags
- **Storybook**: `https://your-project.vercel.app/storybook` - Interactive component playground

The build process (`npm run build`) automatically:

1. Builds Storybook to `storybook-static/`
2. Copies it to `public/storybook/` for Next.js static serving
3. Builds the Next.js application

This allows both the demo app and Storybook to be deployed from a single Vercel project.

### Environment Setup

No environment variables required for the demo. The component works out of the box.

## Design Decisions

### Why These Technologies?

- **Next.js 15**: Modern React framework with App Router for optimal performance
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS for rapid development and consistent design
- **Storybook 8.4**: Component documentation and visual testing
- **Jest + RTL**: Industry-standard testing tools for React

### Component Architecture

The `FeatureFlagCard` is designed as a **controlled component**:

- Parent manages state via `active` prop
- Component notifies parent via `onToggle` callback
- No internal state for the active/inactive status
- Follows React best practices for reusability

### Accessibility First

Every interactive element is keyboard accessible:

- Toggle button uses `role="switch"` with `aria-checked`
- Visible focus rings for keyboard navigation
- Semantic HTML for screen readers
- Proper ARIA labels for context

## Development Tips

### Adding New States

To add new states (e.g., "warning" or "error"):

1. Update the props type in `FeatureFlagCard.tsx`
2. Add border color mapping in the component
3. Create new Storybook stories
4. Add tests for the new state

### Customizing Styles

The component uses Tailwind classes throughout. To customize:

1. Edit `tailwind.config.ts` for theme changes
2. Use the `className` prop for one-off customizations
3. Extend with CSS modules if needed

### Testing Changes

```bash
# Run tests in watch mode while developing
npm test

# Check accessibility
# Tests include ARIA attribute validation
```

## Troubleshooting

### Storybook Webpack Errors

If you encounter webpack compilation errors when running Storybook, ensure you're using the correct package versions:

```bash
# Reinstall dependencies with correct versions
rm -rf node_modules package-lock.json
npm install
```

The project uses Storybook 8.4.7 for compatibility with Next.js 15. Auto-upgrading to newer Storybook versions may cause webpack bundling conflicts.

## Dependencies

### Core

- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer
- `clsx` - Conditional className utility

### Development

- `@storybook/nextjs` - Storybook integration
- `@testing-library/react` - React testing utilities
- `@testing-library/user-event` - User interaction simulation
- `jest` - Testing framework
- `typescript` - Type checking
- `tailwindcss` - Utility CSS framework
- `eslint` - Code linting
- `prettier` - Code formatting

## Contributing

This is a demonstration project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

MIT License - feel free to use this component in your projects.

## Acknowledgments

- Design system inspired by modern SaaS applications
- Accessibility patterns from [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- Built with best practices from the React and Next.js communities

## Support

For questions or issues:

- Review the [documentation](./docs/) directory
- See [troubleshooting guide](./docs/QUICKSTART.md#-troubleshooting)
- Check [Storybook documentation](http://localhost:6006) (when running)
- Open an issue on GitHub

---

**Built by James F. McGrath**

_Demonstrating React component development with accessibility and design system best practices_
