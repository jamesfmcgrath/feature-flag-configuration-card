# Quick Reference Card

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start Next.js → http://localhost:3000
npm run storybook        # Start Storybook → http://localhost:6006

# Testing
npm test                 # Run tests (watch mode)
npm run test:ci          # Run tests (CI mode)

# Code Quality
npm run lint             # Check code with ESLint
npm run format           # Format with Prettier

# Production
npm run build            # Build for production
npm run start            # Start production server
npm run build-storybook  # Build static Storybook

# Deploy
vercel                   # Deploy to Vercel
```

## 📁 Key Files

- `src/components/feature-flags/FeatureFlagCard.tsx` - Main component
- `src/components/feature-flags/FeatureFlagCard.stories.tsx` - Storybook
- `src/components/feature-flags/FeatureFlagCard.test.tsx` - Tests
- `src/app/page.tsx` - Demo page
- `SPECIFICATION.short.md` - Quick spec for interviews
- `README.md` - Full documentation

## 🎯 Component Props

```typescript
<FeatureFlagCard
  name="Feature Name"              // Required
  description="Description"        // Optional
  active={true}                    // Required
  createdAt="2025-10-01"          // Optional
  updatedAt="2025-10-11"          // Optional
  onToggle={(state) => {}}        // Optional
  className="custom-class"         // Optional
/>
```

## ✅ Verification Checklist

- [x] `npm install` - Dependencies installed (1157 packages)
- [x] `npm run dev` - Next.js 15 runs on :3000
- [x] `npm run storybook` - Storybook 8.4.7 runs on :6006
- [x] `npm test` - All 27 tests pass
- [x] `npm run build` - Production build succeeds
- [x] `npm run lint` - No ESLint errors
- [x] Design matches specification exactly
- [x] Keyboard navigation works (Tab, Space, Enter)
- [x] ARIA attributes correct (role="switch", aria-checked)
- [x] Responsive on mobile and desktop
- [x] Focus indicators visible
- [x] Ready for Vercel deployment
- [x] Version compatibility verified (Next.js 15 + Storybook 8.4.7)

## 🎨 Design System Quick Reference

### Colors

- Active border: `border-indigo-500` (#6366f1)
- Inactive border: `border-gray-200` (#e5e7eb)
- Toggle active: `bg-indigo-600`
- Toggle inactive: `bg-gray-200`

### Layout

- Desktop: `grid grid-cols-[auto,1fr,auto]`
- Mobile: `grid-cols-1` (stacked)
- Padding: `p-4 md:p-6`
- Gap: `gap-4`

### Typography

- Title: `text-base font-semibold`
- Description: `text-sm text-gray-600`
- Metadata: `text-sm text-gray-500`
- Badge: `text-xs font-semibold`

## 📊 Test Coverage

27 tests total:

- 6 Rendering tests
- 2 Status badge tests
- 3 Toggle functionality tests
- 6 Accessibility tests
- 3 Keyboard navigation tests
- 4 Semantic HTML tests
- 3 Visual state tests

## 🚢 Deploy to Vercel

```bash
# Option 1: CLI
npm i -g vercel
vercel --prod

# Option 2: GitHub
# Push to GitHub, import in Vercel dashboard
```

## 📚 Specification Documents

1. **SPECIFICATION.short.md** - Interview walkthrough (1 page)
2. **SPECIFICATION.extended.md** - Detailed mapping (2 pages)
3. **SPECIFICATION.md** - Complete technical spec (full document)

## 🎯 Interview Talking Points

1. **Design Fidelity**: Show exact Tailwind class mapping to spec
2. **Accessibility**: Demonstrate keyboard navigation and ARIA
3. **Testing**: Show 27 comprehensive tests with full coverage
4. **Responsiveness**: Resize browser to show mobile/desktop
5. **Code Quality**: Clean, typed, well-documented
6. **Tooling**: Next.js 14, TypeScript, Storybook, Jest

## 💡 Tips

- Use Storybook for component demos (controls work!)
- Tests cover accessibility thoroughly
- All specifications preserved and referenced
- Zero dependencies beyond essentials
- Vercel-optimized, deploys in 1 command
- Code is production-ready, not a prototype

## ⚠️ Troubleshooting

### Storybook Webpack Errors

If you see webpack errors like "Cannot read properties of undefined (reading 'tap')":

```bash
# Verify correct versions are installed
npm list storybook @storybook/nextjs

# Should show:
# storybook@8.4.7
# @storybook/nextjs@8.4.7
```

The project uses **Storybook 8.4.7** for compatibility with **Next.js 15**. Do not upgrade Storybook beyond 8.4.x without testing compatibility.

### Missing Public Directory

If Storybook fails with "no such directory: ./public":

```bash
mkdir public
```

---

**Status**: ✅ All systems go!
**Time to deploy**: < 5 minutes
**Quality**: Production-ready
**Compatibility**: Verified Next.js 15 + Storybook 8.4.7
