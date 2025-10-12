# Feature Flag Configuration Card — Interview Specification

**Version**: 1.0.0
**Date**: October 12, 2025
**Status**: Production Ready

---

## 📋 Quick Overview

This document demonstrates **design-to-code translation** for a production-ready Feature Flag Card component. It showcases:

- High-fidelity Figma-to-code implementation
- WCAG 2.1 AA accessibility compliance
- Mobile-first responsive design
- TypeScript type safety
- Component-driven architecture

**Live Demo**: [feature-flag-configuration-card.vercel.app](https://feature-flag-configuration-card.vercel.app/)
**Storybook**: [/storybook](https://feature-flag-configuration-card.vercel.app/storybook)

---

## 🎨 Design-to-Code Mapping

This table shows the exact translation from design specification to Tailwind CSS implementation:

| Design Element      | Visual Specification                   | Tailwind Implementation                  | Rationale                                   |
| ------------------- | -------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| **Container**       | White background, elevated shadow      | `bg-white shadow-xl rounded-xl`          | Creates card elevation in dashboard context |
| **Active Border**   | 4px left border, Indigo-500            | `border-l-4 border-indigo-500`           | Clear visual indicator of enabled state     |
| **Inactive Border** | 4px left border, Gray-200              | `border-l-4 border-gray-200`             | Muted appearance for disabled state         |
| **Title**           | Semibold, 16–18px, high contrast       | `text-base font-semibold text-gray-900`  | Establishes clear hierarchy                 |
| **Description**     | Regular weight, medium gray            | `text-gray-600 leading-relaxed`          | Supporting information, readable contrast   |
| **Metadata**        | Small size, muted gray                 | `text-sm text-gray-500`                  | De-emphasized contextual info               |
| **Toggle Switch**   | iOS-style, green active, gray inactive | Custom with `bg-green-500`/`bg-gray-300` | Modern, familiar interaction pattern        |
| **Status Badge**    | Pill shape, colored background         | `bg-green-800 text-white` (7.67:1)       | AAA contrast for accessibility              |
| **Spacing**         | Balanced padding, vertical rhythm      | `p-6 space-y-3`                          | Comfortable breathing room                  |
| **Animation**       | Smooth state transitions               | `transition-colors duration-150`         | Polish without distraction                  |

### Color Contrast Ratios (WCAG 2.1)

| Element             | Colors             | Ratio   | Standard |
| ------------------- | ------------------ | ------- | -------- |
| Active Status Badge | White on Green-800 | 7.67:1  | AAA ✓    |
| Inactive Badge      | White on Gray-800  | 12.63:1 | AAA ✓    |
| Primary Text        | Gray-900 on White  | 16.08:1 | AAA ✓    |
| Description Text    | Gray-600 on White  | 7.23:1  | AAA ✓    |
| Metadata Text       | Gray-500 on White  | 4.61:1  | AA ✓     |

---

## 📱 Responsive Design Strategy

### Mobile-First Approach

**Breakpoints**:

- Mobile: `< 768px` (default, no prefix)
- Desktop: `≥ 768px` (`md:` prefix)
- Footer: `≥ 640px` (`sm:` prefix)

### Layout Transitions

#### Mobile (< 768px)

```
┌─────────────────────────┐
│ [Name]                  │
│ [Description]           │
│ [Toggle - Full Width]   │
│ ───────────────────────│
│ [Status Badge]          │
│ [Created Date]          │
└─────────────────────────┘
```

**Implementation**: Vertical stack with `flex flex-col gap-4`

#### Desktop (≥ 768px)

```
┌───────────────────────────────────────┐
│ [Name]                   [Toggle]     │
│ [Description]                         │
│ ─────────────────────────────────────│
│ [Status]           [Created Date]    │
└───────────────────────────────────────┘
```

**Implementation**: Flexible grid with `grid grid-cols-[auto,1fr,auto]`

### Key Responsive Classes

| Element | Mobile                | Desktop                                |
| ------- | --------------------- | -------------------------------------- |
| Padding | `p-4`                 | `md:p-6`                               |
| Layout  | `flex flex-col gap-4` | `md:grid md:grid-cols-[auto,1fr,auto]` |
| Footer  | `flex-col gap-2`      | `sm:flex-row sm:justify-between`       |
| Text    | Default               | Responsive with `truncate`             |

---

## ♿ Accessibility Implementation

### WCAG 2.1 AA Compliance

| Criterion                    | Implementation                                   |
| ---------------------------- | ------------------------------------------------ |
| **1.4.3 Contrast (Minimum)** | All text meets 4.5:1 minimum (badges exceed 7:1) |
| **1.4.11 Non-text Contrast** | UI components meet 3:1 minimum                   |
| **1.4.12 Text Spacing**      | Line height 1.6, adequate spacing                |
| **2.1.1 Keyboard**           | Full keyboard navigation with Tab/Space/Enter    |
| **2.4.7 Focus Visible**      | Custom focus rings on all interactive elements   |
| **2.5.5 Target Size**        | 44×44px tap targets (transparent wrapper)        |
| **4.1.2 Name, Role, Value**  | ARIA `role="switch"`, `aria-checked`             |

### Toggle Switch Accessibility

```tsx
<button
  role="switch"
  aria-checked={active}
  aria-label={`Toggle ${name} feature flag`}
  className="min-w-[44px] min-h-[44px] bg-transparent"
  onClick={handleToggle}
>
  {/* 44×44px invisible tap target wrapper */}
  <span className="h-8 w-14 bg-green-500 rounded-full">
    <span className="h-6 w-6 bg-white shadow-md ring-1 ring-gray-200" />
  </span>
</button>
```

**Key Features**:

- ✓ Native `<button>` element (semantic HTML)
- ✓ `role="switch"` + `aria-checked` (WAI-ARIA)
- ✓ Descriptive `aria-label` (screen readers)
- ✓ 44×44px minimum tap target (mobile accessibility)
- ✓ Keyboard support: Space/Enter to toggle
- ✓ Visible focus ring: `focus:ring-2 focus:ring-indigo-300`

### Keyboard Navigation

| Key           | Action                 |
| ------------- | ---------------------- |
| `Tab`         | Focus toggle switch    |
| `Space/Enter` | Toggle on/off          |
| `Shift+Tab`   | Focus previous element |

---

## 🧩 Component API

### TypeScript Interface

```typescript
export type FeatureFlagCardProps = {
  /** Display name of the feature flag */
  name: string;

  /** Detailed description of what the flag controls */
  description?: string;

  /** Current enabled state of the flag */
  active: boolean;

  /** When the flag was created */
  createdAt?: string | Date;

  /** When the flag was last updated */
  updatedAt?: string | Date;

  /** Callback function when toggle state changes */
  onToggle?: (newState: boolean) => void;

  /** Optional additional CSS classes */
  className?: string;
};
```

### Example Usage

```tsx
<FeatureFlagCard
  name="Advanced Analytics Dashboard"
  description="Enable real-time analytics with custom metrics"
  active={true}
  createdAt="2025-10-01"
  updatedAt="2025-10-12"
  onToggle={(newState) => console.log('Toggled to:', newState)}
/>
```

---

## 🎯 Interview Discussion Guide

### 1. Design-to-Code Translation (5 min)

**Opening**: "Let me walk you through how I translated the design spec into production code..."

**Show**:

1. Open this specification (Design-to-Code Mapping table)
2. Open `FeatureFlagCard.tsx` in VS Code
3. Point out specific Tailwind classes matching the spec

**Example**:

> "For the container, the spec called for 'elevated shadow with rounded corners', which I implemented with `shadow-xl rounded-xl`. The active state border is a 4px left border in Indigo-500, implemented as `border-l-4 border-indigo-500`."

### 2. Accessibility Deep Dive (5 min)

**Opening**: "Accessibility was a top priority. Let me show you the approach..."

**Demo**:

1. Show live site with keyboard-only navigation
2. Tab to toggle switch, press Space to toggle
3. Open DevTools to show ARIA attributes
4. Show color contrast table in this spec

**Key Points**:

- 44×44px tap target (transparent wrapper technique)
- 7.67:1 contrast on status badges (exceeds AAA)
- Full keyboard navigation with visible focus rings
- WAI-ARIA switch pattern implementation

### 3. Responsive Design (3 min)

**Opening**: "The component uses a mobile-first responsive strategy..."

**Demo**:

1. Open DevTools device toolbar
2. Resize from mobile (375px) to desktop (1440px)
3. Point out layout transition at 768px breakpoint

**Technical Details**:

> "I used CSS Grid with `grid-cols-[auto,1fr,auto]` for the desktop layout. This auto-sizes the columns based on content, keeping the toggle right-aligned while the name/description flexes. On mobile, it collapses to a vertical stack."

### 4. Component Architecture (2 min)

**Opening**: "This is intentionally a single component..."

**Points**:

- ~200 lines total - cohesive and focused
- Single responsibility: display and toggle feature flags
- Easy to test, understand, and maintain
- Avoided premature abstraction (YAGNI principle)

**When to refactor**:

> "I'd refactor into smaller components when I have 2-3 similar use cases and can identify clear abstraction boundaries. Right now, it's readable and maintainable as-is."

### 5. Testing & Quality (2 min)

**Show**:

- 27 passing tests (Jest + React Testing Library)
- 0 TypeScript errors
- 0 ESLint warnings
- Storybook with 8 interactive stories

**Quality Indicators**:

- Type-safe props with TypeScript
- Comprehensive test coverage (render, interaction, accessibility)
- Production deployed to Vercel
- Full documentation

---

## 📊 Project Stats

Quick reference numbers for discussion:

- ✅ **27/27 tests passing** (100% success rate)
- ✅ **WCAG 2.1 AA** (AAA in contrast areas)
- ✅ **8 Storybook stories** (interactive documentation)
- ✅ **~200 lines** (single cohesive component)
- ✅ **0 errors, 0 warnings** (TypeScript + ESLint)
- ✅ **Production deployed** (Vercel with custom build)
- ✅ **31 → 0 violations** (Siteimprove accessibility audit)

---

## 🔧 Technical Stack

| Category          | Technology   | Version | Purpose                         |
| ----------------- | ------------ | ------- | ------------------------------- |
| **Framework**     | Next.js      | 15.5.4  | React framework with App Router |
| **Language**      | TypeScript   | 5.x     | Type safety and developer DX    |
| **Styling**       | Tailwind CSS | 3.4.15  | Utility-first CSS framework     |
| **Testing**       | Jest + RTL   | 29.7.0  | Unit and integration tests      |
| **Documentation** | Storybook    | 8.4.7   | Component documentation         |
| **Deployment**    | Vercel       | Latest  | CI/CD and hosting               |

---

## 🚀 Deployment Architecture

### Build Pipeline

```bash
npm run build
  ├─> npm run build-storybook     # Build Storybook to storybook-static/
  ├─> npm run copy-storybook      # Copy to public/storybook/
  └─> next build                   # Build Next.js app
```

### Vercel Configuration

**Challenge**: Deploy both Next.js app AND Storybook from single deployment

**Solution 1**: Override auto-detection with `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

**Solution 2**: Fix Storybook asset paths with `manager-head.html`

```html
<base href="/storybook/" />
```

**Result**:

- Next.js app at `/`
- Storybook at `/storybook`
- Both working from single URL

---

## 📚 Related Documentation

| Document                        | Purpose                              |
| ------------------------------- | ------------------------------------ |
| `SPECIFICATION.short.md`        | Quick reference (1 page)             |
| `SPECIFICATION.extended.md`     | Detailed spec with all sections      |
| `SPECIFICATION.md`              | Complete spec (this is the full one) |
| `ACCESSIBILITY-IMPROVEMENTS.md` | 31 violations → 0 walkthrough        |
| `VERCEL-DEPLOYMENT.md`          | Deployment troubleshooting guide     |
| `QUICKSTART.md`                 | Getting started guide                |
| `INTERVIEW-PREPARATION.md`      | Comprehensive interview prep         |
| `INTERVIEW-CHEAT-SHEET.md`      | Quick talking points reference       |

---

## ✨ Key Achievements

1. **Design Fidelity**: Pixel-perfect translation from spec to code
2. **Accessibility**: 31 violations → 0 (Siteimprove audit)
3. **Quality**: 27/27 tests passing, 0 errors/warnings
4. **Documentation**: 5+ spec documents, Storybook stories
5. **Deployment**: Production-ready on Vercel with custom pipeline
6. **Architecture**: Clean, maintainable, single-component approach

---

## 🎓 Learning Outcomes

This project demonstrates:

- **Spec-to-code translation** - Following design systems precisely
- **Accessibility expertise** - WCAG 2.1 compliance implementation
- **Responsive design** - Mobile-first with breakpoint strategy
- **Component architecture** - Pragmatic decisions (avoid premature abstraction)
- **Testing discipline** - Comprehensive coverage
- **Build systems** - Custom deployment configuration
- **Documentation** - Clear, thorough, interview-ready

---

## 💬 Discussion Prompts

Use these to drive conversation during the interview:

1. **"How did you decide on this component structure?"**
   - Single component vs. multiple smaller ones
   - YAGNI principle and avoiding premature abstraction
   - Clear decision documented with rationale

2. **"Walk me through the accessibility fixes"**
   - Siteimprove audit (31 violations)
   - Systematic approach to each category
   - Balance between accessibility and visual design

3. **"How do you handle responsive design?"**
   - Mobile-first philosophy
   - Breakpoint strategy
   - Testing across devices

4. **"What was the deployment challenge?"**
   - Vercel auto-detection issue
   - Custom build configuration
   - Asset path resolution for Storybook

5. **"How would you extend this component?"**
   - Add grouped flags
   - Environment-specific toggles
   - Integration with real API
   - Dark mode support

---

**Last Updated**: October 12, 2025
**Ready for Interview**: ✅ Tuesday, October 14, 2025
