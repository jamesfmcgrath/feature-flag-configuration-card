# Feature Flag Configuration Card

A production-ready, accessible React component for managing feature flag states in SaaS dashboards. Built with Next.js 15, TypeScript, Tailwind CSS, and Storybook.

![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38bdf8)
![Storybook](https://img.shields.io/badge/Storybook-8.4-ff4785)

## 📋 Overview

This project demonstrates high-fidelity translation of design specifications into production-ready code. The Feature Flag Configuration Card component showcases:

- **Design System Fidelity**: Pixel-perfect implementation matching design specifications
- **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation
- **Responsiveness**: Mobile-first design that adapts seamlessly across viewports
- **Testing**: Comprehensive Jest + React Testing Library tests
- **Documentation**: Interactive Storybook playground with controls

## 🚀 Quick Start

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

```bash
# Run Storybook
npm run storybook

# Open http://localhost:6006
```

> **Note**: This project uses Storybook 8.4.7 for compatibility with Next.js 15. If you encounter webpack errors, ensure you're using the correct versions specified in `package.json`.

## 📚 Available Commands

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

## 🎨 Component API

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

## 📚 Documentation

See the **[docs/](./docs/)** directory for complete documentation.

### Quick Links

- **[QUICKSTART.md](./docs/QUICKSTART.md)** - Commands, tips, and troubleshooting
- **[SPECIFICATION.short.md](./docs/SPECIFICATION.short.md)** - Interview walkthrough (1 page)
- **[SPECIFICATION.extended.md](./docs/SPECIFICATION.extended.md)** - Design-to-code mapping
- **[SPECIFICATION.md](./docs/SPECIFICATION.md)** - Complete technical specification
- **[CHANGELOG.md](./docs/CHANGELOG.md)** - Version history and compatibility

### Design System

The component follows a strict design system:

- **Container**: White background with `shadow-xl` and `rounded-xl` borders
- **State Borders**: 4px left border (Indigo-500 for active, Gray-200 for inactive)
- **Typography**: Semibold titles, muted metadata text
- **Spacing**: Consistent padding using 8px grid system (`p-4 md:p-6`)
- **Animations**: Smooth 150ms transitions for state changes

### Responsive Behavior

- **Mobile (< 768px)**: Vertical stack layout with full-width toggle
- **Desktop (≥ 768px)**: Grid layout with toggle aligned right
- **Text Handling**: Automatic truncation for long names

### Accessibility Features

- ✅ Semantic HTML (`<article>`, `<h3>`, `<button>`, `<time>`)
- ✅ ARIA attributes (`role="switch"`, `aria-checked`, `aria-label`)
- ✅ Full keyboard navigation (Tab, Space, Enter)
- ✅ Visible focus indicators
- ✅ WCAG 2.1 AA color contrast ratios
- ✅ Respects `prefers-reduced-motion`

## 🧪 Testing

The component includes comprehensive tests covering:

- Rendering with various prop combinations
- Toggle functionality (mouse and keyboard)
- ARIA attributes and accessibility
- Keyboard navigation (Space, Enter keys)
- Visual states (active/inactive borders)
- Semantic HTML structure

```bash
# Run tests
npm test

# Run tests in CI mode
npm run test:ci
```

## 🏗️ Project Structure

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
│   ├── QUICKSTART.md             # Quick reference guide
│   ├── SPECIFICATION.short.md    # Interview walkthrough
│   ├── SPECIFICATION.extended.md # Detailed mapping
│   ├── SPECIFICATION.md          # Complete technical spec
│   └── CHANGELOG.md              # Version history
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── jest.config.js
└── README.md
```

## 🚢 Vercel Deployment

This project is optimized for Vercel deployment.

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will auto-detect Next.js and deploy

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Setup

No environment variables required for the demo. The component works out of the box.

### Build Configuration

The project uses Next.js 15 with App Router. Vercel automatically:

- Detects Next.js framework
- Installs dependencies with npm
- Builds with `npm run build`
- Deploys optimized static and server assets

## 🎯 Design Decisions

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

## 🔧 Development Tips

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

## 🔧 Troubleshooting

### Storybook Webpack Errors

If you encounter webpack compilation errors when running Storybook, ensure you're using the correct package versions:

```bash
# Reinstall dependencies with correct versions
rm -rf node_modules package-lock.json
npm install
```

The project uses Storybook 8.4.7 for compatibility with Next.js 15. Auto-upgrading to newer Storybook versions may cause webpack bundling conflicts.

## 📦 Dependencies

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

## 🤝 Contributing

This is a demonstration project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

MIT License - feel free to use this component in your projects.

## 🙏 Acknowledgments

- Design system inspired by modern SaaS applications
- Accessibility patterns from [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- Built with best practices from the React and Next.js communities

## 📞 Support

For questions or issues:

- Review the [documentation](./docs/) directory
- See [troubleshooting guide](./docs/QUICKSTART.md#-troubleshooting)
- Check [Storybook documentation](http://localhost:6006) (when running)
- Open an issue on GitHub

---

**Built with ❤️ by James F. McGrath**

_Demonstrating production-ready React component development_
