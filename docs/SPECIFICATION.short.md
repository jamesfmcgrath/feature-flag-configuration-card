# Feature Flag Configuration Card

## Overview

The **Feature Flag Configuration Card** manages the display and state of a single feature flag within a dashboard.  
It demonstrates high-fidelity translation from a Figma-style design into clean, accessible React code using Tailwind CSS.  
The component emphasizes responsiveness, semantic structure, and design-system alignment for a production SaaS interface.

---

## Visual Design

- **Container:** White background, large shadow, rounded corners (`bg-white shadow-xl rounded-xl`)  
  Creates clear elevation within a dashboard layout.
- **Accent Border:** 4px left border in indigo when active (`border-l-4 border-indigo-500`), gray when inactive (`border-l-4 border-gray-200`).  
  Provides visual state distinction.
- **Typography:** Title in semibold (`text-base font-semibold text-gray-900`), metadata in muted tone (`text-sm text-gray-500`).
- **Spacing:** Balanced white space around content (`p-6 space-y-3`).
- **Animation:** Subtle transitions for hover and focus states (`transition-colors duration-150 ease-in-out`).

---

## States

- **Active:** Indigo border, toggle ON, full text contrast.
- **Inactive:** Gray border, toggle OFF, muted text.
- **Hover/Focus:** Lightened border (`border-indigo-400`) and visible focus ring (`ring-2 ring-indigo-300 ring-offset-2`).

---

## Layout & Responsiveness

- Desktop: Grid layout (`grid grid-cols-[auto,1fr,auto] gap-4 items-center`)
- Mobile: Stacked layout (`grid-cols-1 gap-4`)
- Text truncation for long names (`truncate`).
- Adaptive padding (`p-4 md:p-6`).

---

## Accessibility

- Keyboard-accessible toggle and focus ring visibility.
- Semantic HTML elements (`<article>`, `<h3>`, `<button>`).
- ARIA attributes to indicate active/inactive state.
- Color contrast meets WCAG 2.1 AA standards.

---

## Example Usage

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

## Future Enhancements

- Integrate Storybook stories for design documentation.
- Connect to a `useFeatureFlags()` hook for real data.
- Add snapshot and accessibility tests.
- Extend to grouped flag or environment-specific variants.
