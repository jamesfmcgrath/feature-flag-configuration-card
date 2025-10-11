# Feature Flag Configuration Card — Specification

## Document Information

- **Version**: 1.0.0
- **Last Updated**: October 11, 2025
- **Author**: James F. McGrath
- **Purpose**: Demonstration of design-to-code fidelity for technical interview
- **Status**: Production Ready

---

## 1. Overview

The **Feature Flag Configuration Card** manages the display and state of a single feature flag within a dashboard.
It demonstrates the translation of a Figma-style design specification into clean, maintainable, and accessible React code using Tailwind CSS.
The component reflects a **production-ready SaaS design system**: responsive, semantically structured, and easy to extend or document in Storybook.

### 1.1 Goals

- Translate visual design tokens directly into Tailwind classes
- Ensure responsive and accessible layout that fits within a SaaS dashboard
- Maintain clarity, readability, and flexibility for reuse
- Reflect design philosophy: simplicity, precision, and developer clarity
- Demonstrate high-fidelity translation of design constraints into clean, maintainable code

---

## 2. Visual Specifications (Fidelity Check)

| Element              | Visual Specification                                  | Tailwind Mapping                                               | Rationale                                     |
| -------------------- | ----------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| **Container**        | White background, large shadow, large rounded corners | `bg-white shadow-xl rounded-xl`                                | Elevates the card visually within a dashboard |
| **Active Border**    | 4px left border, Indigo-500                           | `border-l-4 border-indigo-500`                                 | Communicates enabled/active flag              |
| **Inactive Border**  | 4px left border, Gray-200                             | `border-l-4 border-gray-200`                                   | Indicates disabled/inactive flag              |
| **Title**            | Semibold, 16–18px (base to xl)                        | `text-base font-semibold text-gray-900` or `text-xl font-bold` | Clear hierarchy and readability               |
| **Description**      | Default size, gray-600 color                          | `text-gray-600`                                                | Standard readability                          |
| **Metadata Text**    | Small, muted                                          | `text-sm text-gray-500`                                        | De-emphasized contextual info                 |
| **Badges**           | Extra small, semibold/medium weights                  | `text-xs font-semibold` or `font-medium`                       | Visual categorization                         |
| **Toggle Control**   | Compact switch with focus state                       | `focus:ring-2 focus:ring-indigo-300`                           | Keyboard accessible, visible focus state      |
| **Spacing**          | Padding around card content                           | `p-6 space-y-3` or responsive `p-4 md:p-6`                     | Consistent rhythm and white space             |
| **Animation**        | Smooth border and background transitions              | `transition-colors duration-150 ease-in-out`                   | Visual polish without distraction             |
| **Internal Divider** | Light gray line separating sections                   | `pt-4 border-t border-gray-100`                                | Visual break for metadata section             |

### 2.1 Color Palette

#### State Colors

- **Active**: Indigo-500 (`#6366f1`)
- **Inactive**: Gray-200 (`#e5e7eb`)
- **Text Primary**: Gray-900 (`#111827`)
- **Text Secondary**: Gray-600 (`#4b5563`)
- **Metadata Text**: Gray-500 (`#6b7280`)
- **Divider**: Gray-100 (`#f3f4f6`)

#### Badge Colors

| Badge Type    | Background | Text       | Tailwind Classes                |
| ------------- | ---------- | ---------- | ------------------------------- |
| Active        | Green-100  | Green-800  | `bg-green-100 text-green-800`   |
| Inactive      | Red-100    | Red-800    | `bg-red-100 text-red-800`       |
| High Impact   | Yellow-100 | Yellow-800 | `bg-yellow-100 text-yellow-800` |
| Medium Impact | Blue-100   | Blue-800   | `bg-blue-100 text-blue-800`     |
| Low Impact    | Gray-100   | Gray-800   | `bg-gray-100 text-gray-800`     |

---

## 3. Component States

### 3.1 Active State

- Left border: `border-l-4 border-indigo-500`
- Toggle: ON
- Background: `bg-white`
- Text: Full contrast (`text-gray-900`)

### 3.2 Inactive State

- Left border: `border-l-4 border-gray-200`
- Toggle: OFF
- Text: Muted or gray (`text-gray-500`)
- Hover/focus styles lighten border color slightly for clarity

### 3.3 Hover & Focus States

- Border color lightens (`border-indigo-400`)
- Focus ring visible (`ring-2 ring-indigo-300 ring-offset-2`)
- Transition applied via `duration-150 ease-in-out`

---

## 4. Layout & Responsiveness

The component uses Tailwind's default breakpoint system with a mobile-first approach:

- **Mobile**: `< 768px` (default)
- **Tablet/Desktop**: `≥ 768px` (`md:` prefix)
- **Footer Transition**: `≥ 640px` (`sm:` prefix)

### 4.1 Mobile Layout (< 768px)

The card uses a **vertical stack** for the main content block.

```
┌─────────────────────────────────┐
│  [Flag Name]                    │
│  [Description]                  │
│  [Toggle Switch - Full Width]   │
│  ─────────────────────────────  │
│  [Status Badge]                 │
│  [Warning Indicator]            │
└─────────────────────────────────┘
```

**Implementation**:

- Vertical stack using default flexbox direction for main content
- Collapses to single-column stack: `grid-cols-1 gap-4`
- Name/Description stacked vertically
- Toggle switch full-width, left-aligned
- Footer stacks vertically (`flex-col`)
- Text truncates with `truncate` to prevent overflow
- Padding scales: `p-4 md:p-6`

### 4.2 Desktop Layout (≥ 768px)

The content block transitions to a **flexible grid** or **3-column grid**.

```
┌─────────────────────────────────────────────────┐
│  [Flag Name]                    [Toggle Switch] │
│  [Description]                                  │
│  ─────────────────────────────────────────────  │
│  [Status Badge]           [Warning Indicator]   │
└─────────────────────────────────────────────────┘
```

**Implementation Options**:

**Option A - Flexible Grid**:

- Uses: `grid grid-cols-[auto,1fr,auto] gap-4 items-center`
- Automatically sizes columns based on content

**Option B - 3-Column Grid**:

- Uses: `md:grid md:grid-cols-3`
- Name/Description: Spans 2 columns (`md:col-span-2`)
- Toggle Switch: Aligned right, spans 1 column (`md:col-span-1`)

### 4.3 Footer Section

The footer contains **status badges and warning indicators**.

**Implementation**:

- Mobile: Vertical stack (`flex-col`)
- Desktop: Horizontal layout (`sm:flex-row`)

### 4.4 Responsive Class Mapping

| Section          | Mobile Classes        | Desktop Classes                                         |
| ---------------- | --------------------- | ------------------------------------------------------- |
| Main Content     | `flex flex-col`       | `md:grid md:grid-cols-3` or `grid-cols-[auto,1fr,auto]` |
| Text Block       | `flex-1`              | `md:col-span-2`                                         |
| Toggle Container | `w-full`              | `md:col-span-1 md:flex md:justify-end`                  |
| Footer           | `flex flex-col gap-2` | `sm:flex-row sm:justify-between sm:items-center`        |

This ensures consistent rendering across viewport widths while maintaining clarity and balance.

---

## 5. Accessibility

All interactive elements (toggles, buttons) are keyboard accessible:

- Uses semantic HTML (`<article>`, `<h2>` or `<h3>`, `<button>`, `<time>`)
- Clear visible focus states and sufficient color contrast (WCAG 2.1 AA)
- ARIA attributes for the toggle to indicate active/inactive state
- States and transitions are non-motion-dependent for reduced motion settings

### 5.1 WCAG 2.1 Compliance

| Criterion                    | Level | Implementation                   |
| ---------------------------- | ----- | -------------------------------- |
| 1.3.1 Info and Relationships | A     | Semantic HTML (h2, button, etc.) |
| 1.4.3 Contrast (Minimum)     | AA    | 4.5:1 text, 3:1 UI components    |
| 2.1.1 Keyboard               | A     | Full keyboard navigation         |
| 2.1.2 No Keyboard Trap       | A     | Focus management                 |
| 2.4.7 Focus Visible          | AA    | Custom focus rings               |
| 4.1.2 Name, Role, Value      | A     | ARIA attributes                  |

### 5.2 Keyboard Navigation

| Key           | Action                      |
| ------------- | --------------------------- |
| `Tab`         | Move focus to toggle switch |
| `Space`       | Toggle switch on/off        |
| `Enter`       | Toggle switch on/off        |
| `Shift + Tab` | Move focus backward         |

### 5.3 Screen Reader Support

**Announcements**:

- Component load: "Feature Flag Configuration Card"
- Toggle state change: "Feature flag enabled" / "Feature flag disabled"
- Warning: "Warning: Restart required to apply changes"

---

## 6. Interactive Specifications

### 6.1 Toggle Switch Component

#### Requirements

1. **Interaction**: Must be interactive on click/tap
2. **Keyboard Navigation**: Full keyboard support (Space/Enter to toggle)
3. **Screen Readers**: Announce current state and role
4. **Visual Feedback**: Clear on/off states with smooth transitions

#### Implementation

**HTML Structure**:

Implemented as a native HTML `<button>` with `role="switch"` and `aria-checked` attributes to meet WAI-ARIA standards, ensuring robust accessibility.

```html
<button
  role="switch"
  aria-checked="{isEnabled}"
  aria-label="Toggle feature flag"
  onClick="{handleToggle}"
  className="relative inline-flex items-center..."
>
  <span className="sr-only">Enable feature flag</span>
  <span className="toggle-track...">
    <span className="toggle-thumb..." />
  </span>
</button>
```

**WAI-ARIA Attributes**:

- `role="switch"`: Identifies the button as a toggle switch
- `aria-checked`: Reflects current state (true/false)
- `aria-label`: Provides accessible name for screen readers

**Visual States**:
| State | Track Color | Thumb Position | Tailwind Classes |
|-------|-------------|----------------|------------------|
| Enabled | Indigo-600 | Right (translate-x-5) | `bg-indigo-600` |
| Disabled | Gray-200 | Left (translate-x-0) | `bg-gray-200` |

### 6.2 Warning Indicator

#### Visibility Logic

```javascript
{
  requiresRestart && isEnabled && (
    <div className="warning-indicator">
      ⚠️ Restart required to apply changes
    </div>
  );
}
```

**Conditions**:

- `isEnabled === true` AND
- `requiresRestart === true`

**Visual Treatment**:

- Icon: Warning emoji or SVG icon
- Text: Small, yellow-800 color
- Background: Yellow-50
- Classes: `bg-yellow-50 text-yellow-800 text-xs rounded px-2 py-1`

### 6.3 Interaction Logic

- Accepts `active` (boolean) and `onToggle` (function) as props
- Card re-renders only when state changes
- Optional metadata: `name`, `description`, `createdAt`, `updatedAt`, etc.

**Example**:

```tsx
<FeatureFlagCard
  name="User Onboarding Flow"
  active={true}
  description="Controls rollout of the new onboarding process."
  createdAt="2025-10-01"
  onToggle={() => console.log('toggled')}
/>
```

---

## 7. Component Props API

### 7.1 TypeScript Interface

```typescript
interface FeatureFlagCardProps {
  /** Unique identifier for the feature flag */
  id: string;

  /** Display name of the feature flag */
  name: string;

  /** Detailed description of what the flag controls */
  description: string;

  /** Current enabled state of the flag */
  isEnabled: boolean;

  /** Whether a restart is required after toggling */
  requiresRestart: boolean;

  /** Impact level of the feature flag */
  impact: 'low' | 'medium' | 'high';

  /** Callback function when toggle state changes */
  onToggle: (id: string, newState: boolean) => void;

  /** Optional additional CSS classes */
  className?: string;
}
```

### 7.2 Prop Validation

| Prop              | Type     | Required | Default | Validation              |
| ----------------- | -------- | -------- | ------- | ----------------------- |
| `id`              | string   | Yes      | -       | Non-empty string        |
| `name`            | string   | Yes      | -       | Non-empty string        |
| `description`     | string   | Yes      | -       | Any string              |
| `isEnabled`       | boolean  | Yes      | -       | true/false              |
| `requiresRestart` | boolean  | Yes      | -       | true/false              |
| `impact`          | enum     | Yes      | -       | 'low'\|'medium'\|'high' |
| `onToggle`        | function | Yes      | -       | (id, state) => void     |
| `className`       | string   | No       | ''      | Any string              |

---

## 8. State Management

### 8.1 Component State

```typescript
// Internal state (if needed)
const [isToggling, setIsToggling] = useState(false);

// Derived state
const borderColor = isEnabled ? 'border-indigo-500' : 'border-gray-200';
const statusBadge = isEnabled ? 'Active' : 'Inactive';
const showWarning = isEnabled && requiresRestart;
```

### 8.2 Event Handlers

```typescript
const handleToggle = async () => {
  setIsToggling(true);
  try {
    await onToggle(id, !isEnabled);
  } catch (error) {
    console.error('Failed to toggle flag:', error);
  } finally {
    setIsToggling(false);
  }
};
```

---

## 9. Testing Requirements

### 9.1 Unit Tests

- [ ] Component renders with all props
- [ ] Toggle switch changes state correctly
- [ ] Warning indicator shows only when conditions met
- [ ] Correct border color for enabled/disabled states
- [ ] All badges render with correct colors

### 9.2 Accessibility Tests

- [ ] Keyboard navigation works correctly
- [ ] Screen reader announces state changes
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] ARIA attributes are correct

### 9.3 Responsive Tests

- [ ] Mobile layout displays correctly (< 768px)
- [ ] Desktop layout displays correctly (≥ 768px)
- [ ] Footer transitions at correct breakpoint (640px)
- [ ] No horizontal scroll on mobile devices

### 9.4 Integration Tests

- [ ] onToggle callback fires with correct parameters
- [ ] Loading states handle async operations
- [ ] Error states display appropriately

---

## 10. Browser Support

| Browser       | Minimum Version | Notes           |
| ------------- | --------------- | --------------- |
| Chrome        | 90+             | Full support    |
| Firefox       | 88+             | Full support    |
| Safari        | 14+             | Full support    |
| Edge          | 90+             | Full support    |
| Mobile Safari | 14+             | Touch optimized |
| Mobile Chrome | 90+             | Touch optimized |

---

## 11. Performance Considerations

### 11.1 Optimization Strategies

1. **Memoization**: Use `React.memo()` to prevent unnecessary re-renders
2. **Callback Stability**: Use `useCallback()` for event handlers
3. **CSS-in-JS**: Use Tailwind for zero-runtime CSS
4. **Bundle Size**: Component should be < 5KB gzipped

### 11.2 Performance Metrics

| Metric              | Target  | Measurement    |
| ------------------- | ------- | -------------- |
| First Paint         | < 100ms | Lighthouse     |
| Time to Interactive | < 200ms | Lighthouse     |
| Component Re-render | < 16ms  | React DevTools |

---

## 12. Code Quality Standards

### 12.1 Linting Rules

- ESLint with `eslint-config-airbnb`
- Prettier for code formatting
- TypeScript strict mode enabled
- No console.log in production builds

### 12.2 Documentation Requirements

- JSDoc comments for all exported functions
- Inline comments for complex logic
- Props table in component documentation
- Usage examples in Storybook

---

## 13. Deployment & Integration

### 13.1 Package Structure

```
feature-flag-configuration-card/
├── src/
│   ├── FeatureFlagCard.tsx
│   ├── FeatureFlagCard.test.tsx
│   ├── types.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

### 13.2 Dependencies

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

### 13.3 Design & Build Notes

- Built with **React 18+**, **TypeScript**, and **Tailwind CSS**
- Designed for use in SaaS dashboards
- Can be wrapped in higher-order layout components for list or detail views
- Structure supports integration with headless CMS content (e.g., Sanity)

---

## 14. Future Enhancements

- Integrate Storybook stories for documentation and variant previews
- Connect to a `useFeatureFlags()` hook for live data simulation
- Add unit tests for rendering and accessibility
- Introduce theme variables for light/dark mode consistency
- Extend to handle grouped or environment-specific flags
- Integration with design tokens via Tailwind config
- State persistence (context or API simulation)
- Snapshot tests for visual regression

---

## 15. Change Log

| Version | Date       | Changes               |
| ------- | ---------- | --------------------- |
| 1.0.0   | 2025-10-11 | Initial specification |

---

## 16. References

- [WAI-ARIA Authoring Practices - Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Accessibility Guide](https://react.dev/learn/accessibility)

---

## 17. Interview Usage Guide

### 17.1 Recommended Approach

This specification document is designed to be used as a discussion tool during technical interviews or code reviews.

#### Step 1: Start with the Design Spec

**Opening Statement**:

> "I built this Feature Flag Card to showcase my design-to-code process. Here is the design specification I worked from."

**Action**: Share this markdown file or a screenshot of Section 2 (Visual Specifications).

#### Step 2: Transition to Code

**Transition Statement**:

> "Now, let's look at how I translated these specific requirements into the live React component..."

**Action**: Open the `FeatureFlagCard.tsx` file and reference specific implementations.

#### Step 3: Drive the Discussion

Use the specification sections as talking points, referencing the specific Tailwind classes in the `FeatureFlagCard.tsx` that implemented each rule.

**Example Discussion Points**:

1. **Visual Fidelity (Section 2)**:

   - "For the container, I used `bg-white shadow-xl rounded-xl` to achieve high visibility and elevation."
   - "The active state uses `border-l-4 border-indigo-500` for clear visual indication."

2. **Responsive Design (Section 3)**:

   - "I implemented a mobile-first strategy where the card defaults to a vertical stack..."
   - "On desktop, it transitions to a 3-column grid using `md:grid-cols-3`."

3. **Accessibility (Section 4 & 5)**:

   - "The toggle switch is a native `<button>` with `role='switch'` and `aria-checked` for WAI-ARIA compliance."
   - "Full keyboard navigation is supported with Space/Enter keys."

4. **Code Quality (Section 7 & 11)**:
   - "I use derived state to manage the border color based on `isEnabled`."
   - "TypeScript provides type safety for all props and state."

### 17.2 Key Talking Points by Section

| Section         | Discussion Point                           | Code Reference                     |
| --------------- | ------------------------------------------ | ---------------------------------- |
| **Section 2.1** | Visual specifications and Tailwind mapping | Container classes, border states   |
| **Section 3**   | Mobile-first responsive strategy           | Grid transitions, breakpoints      |
| **Section 4.1** | Toggle switch accessibility                | ARIA attributes, keyboard handlers |
| **Section 4.2** | Conditional rendering logic                | Warning indicator visibility       |
| **Section 6**   | TypeScript props API                       | Interface definition, prop types   |
| **Section 7**   | State management patterns                  | Derived state, event handlers      |

### 17.3 Demo Scenarios

#### Scenario 1: Show Responsive Behavior

1. Open browser DevTools
2. Toggle device toolbar
3. Resize from mobile to desktop
4. Point out layout transitions at 768px and 640px breakpoints

#### Scenario 2: Demonstrate Accessibility

1. Use keyboard only (Tab, Space, Enter)
2. Navigate to toggle switch
3. Toggle the switch with keyboard
4. Show focus indicators

#### Scenario 3: Explain State Logic

1. Show warning indicator logic (Section 4.2)
2. Explain conditional rendering
3. Toggle between states to demonstrate

## 18. Appendix

### 18.1 Example Usage

```tsx
import { FeatureFlagCard } from './FeatureFlagCard';

function Dashboard() {
  const handleToggle = (id: string, newState: boolean) => {
    console.log(`Flag ${id} toggled to ${newState}`);
    // Update your state management solution here
  };

  return (
    <FeatureFlagCard
      id="feature-1"
      name="Advanced Analytics"
      description="Enable advanced analytics dashboard with real-time metrics"
      isEnabled={true}
      requiresRestart={true}
      impact="high"
      onToggle={handleToggle}
    />
  );
}
```

### 18.2 Design Tokens

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        6: '1.5rem', // 24px
        4: '1rem', // 16px
      },
      borderWidth: {
        'l-4': '4px',
      },
    },
  },
};
```
