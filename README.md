# Feature Flag Configuration Card

A production-ready, accessible React component for managing feature flag states in SaaS dashboards.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.0%2B-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.0%2B-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4%2B-blue.svg)

## 📋 Overview

The Feature Flag Configuration Card is a highly responsive and accessible UI component that displays and manages feature flag metadata. Built with React, TypeScript, and Tailwind CSS, it demonstrates production-ready code with pixel-perfect design implementation.

### ✨ Key Features

- 🎨 **Production-Ready Design**: Pixel-perfect implementation with Tailwind CSS
- ♿ **WCAG 2.1 AA Compliant**: Full keyboard navigation and screen reader support
- 📱 **Fully Responsive**: Mobile-first design that adapts seamlessly to all screen sizes
- ⚡ **Performance Optimized**: Lightweight component with minimal re-renders
- 🔧 **TypeScript Support**: Fully typed for enhanced developer experience
- 🧪 **Well Tested**: Comprehensive unit and integration tests

## 🚀 Quick Start

### Installation

```bash
npm install feature-flag-configuration-card
```

or

```bash
yarn add feature-flag-configuration-card
```

### Basic Usage

```tsx
import { FeatureFlagCard } from 'feature-flag-configuration-card';

function App() {
  const handleToggle = (id: string, newState: boolean) => {
    console.log(
      `Feature flag ${id} is now ${newState ? 'enabled' : 'disabled'}`
    );
  };

  return (
    <FeatureFlagCard
      id="advanced-analytics"
      name="Advanced Analytics"
      description="Enable advanced analytics dashboard with real-time metrics and custom reports"
      isEnabled={true}
      requiresRestart={true}
      impact="high"
      onToggle={handleToggle}
    />
  );
}
```

## 📚 Documentation

### Props

| Prop              | Type                                      | Required | Default | Description                                    |
| ----------------- | ----------------------------------------- | -------- | ------- | ---------------------------------------------- |
| `id`              | `string`                                  | ✅       | -       | Unique identifier for the feature flag         |
| `name`            | `string`                                  | ✅       | -       | Display name of the feature flag               |
| `description`     | `string`                                  | ✅       | -       | Detailed description of what the flag controls |
| `isEnabled`       | `boolean`                                 | ✅       | -       | Current enabled state of the flag              |
| `requiresRestart` | `boolean`                                 | ✅       | -       | Whether a restart is required after toggling   |
| `impact`          | `'low' \| 'medium' \| 'high'`             | ✅       | -       | Impact level of the feature flag               |
| `onToggle`        | `(id: string, newState: boolean) => void` | ✅       | -       | Callback function when toggle state changes    |
| `className`       | `string`                                  | ❌       | `''`    | Optional additional CSS classes                |

### Examples

#### Disabled Flag with Low Impact

```tsx
<FeatureFlagCard
  id="dark-mode"
  name="Dark Mode"
  description="Enable dark mode theme across the application"
  isEnabled={false}
  requiresRestart={false}
  impact="low"
  onToggle={handleToggle}
/>
```

#### Enabled Flag with Restart Warning

```tsx
<FeatureFlagCard
  id="api-v2"
  name="API v2 Migration"
  description="Switch to the new API v2 endpoints for improved performance"
  isEnabled={true}
  requiresRestart={true}
  impact="high"
  onToggle={handleToggle}
/>
```

## 🎨 Design System

### Visual Specifications

The component follows a strict design system with careful attention to:

- **Spacing**: 8px grid system with consistent padding (24px)
- **Colors**: Semantic color palette with WCAG AA contrast ratios
- **Typography**: Clear hierarchy with bold headings and readable body text
- **Shadows**: Elevated card design with `shadow-xl`
- **Borders**: 4px left accent border for state indication

### Responsive Behavior

#### Mobile (< 768px)

- Vertical stack layout
- Full-width toggle switch
- Stacked footer elements

#### Desktop (≥ 768px)

- 3-column grid layout
- Name/description spans 2 columns
- Toggle switch aligned right
- Horizontal footer with space-between alignment

## ♿ Accessibility

This component is built with accessibility as a first-class concern:

### Keyboard Navigation

- **Tab**: Move focus to the toggle switch
- **Space/Enter**: Toggle the switch on/off
- **Shift + Tab**: Move focus backward

### Screen Reader Support

- Semantic HTML with proper heading hierarchy (`<h2>` for flag name)
- ARIA attributes (`role="switch"`, `aria-checked`)
- Screen reader announcements for state changes
- Hidden labels with `.sr-only` class

### WCAG 2.1 Compliance

- ✅ Level A: Keyboard accessible, semantic structure
- ✅ Level AA: 4.5:1 text contrast, 3:1 UI component contrast
- ✅ Focus indicators: Visible focus rings on all interactive elements

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run accessibility tests
npm run test:a11y
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- React 18+
- Tailwind CSS 3.4+

### Setup

```bash
# Clone the repository
git clone https://github.com/jamesfmcgrath/feature-flag-configuration-card.git

# Install dependencies
cd feature-flag-configuration-card
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
feature-flag-configuration-card/
├── src/
│   ├── FeatureFlagCard.tsx       # Main component
│   ├── FeatureFlagCard.test.tsx  # Unit tests
│   ├── types.ts                  # TypeScript types
│   └── index.ts                  # Entry point
├── SPECIFICATION.md              # Technical specification
├── README.md                     # This file
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 🎯 Use Cases

This component is ideal for:

- **SaaS Dashboards**: Feature flag management interfaces
- **Admin Panels**: Configuration screens for system administrators
- **Developer Tools**: Internal tools for toggling feature rollouts
- **A/B Testing Platforms**: Experiment configuration interfaces

## 📖 Technical Specification

For detailed technical specifications, including:

- Complete visual specifications
- Layout and responsiveness details
- Interactive element requirements
- Code quality standards
- Performance benchmarks

Please refer to [SPECIFICATION.md](./SPECIFICATION.md)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow the existing code style
- Write comprehensive tests for new features
- Ensure accessibility standards are met
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design system inspired by modern SaaS applications
- Accessibility patterns from [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/jamesfmcgrath/feature-flag-configuration-card/issues)
- **Documentation**: [Full Specification](./SPECIFICATION.md)
- **Email**: james@example.com

## 🗺️ Roadmap

- [ ] Add animation variants for toggle transitions
- [ ] Support for custom color themes
- [ ] Dark mode support
- [ ] Multi-language support (i18n)
- [ ] Storybook documentation
- [ ] Export as Web Component

---

**Made with ❤️ by James McGrath**

⭐ If you find this project useful, please consider giving it a star on GitHub!
