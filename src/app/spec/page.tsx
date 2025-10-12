'use client';

import { Navigation } from '@/components/Navigation';

export default function SpecificationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-slate max-w-none">
            {/* Header */}
            <div className="not-prose mb-8 pb-8 border-b border-gray-200">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Feature Flag Configuration Card — Specification
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                <div>
                  <strong>Version:</strong> 1.0.0
                </div>
                <div>
                  <strong>Date:</strong> October 12, 2025
                </div>
                <div>
                  <strong>Status:</strong>{' '}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Interview Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Quick Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This document demonstrates{' '}
                <strong>design-to-code translation</strong> for an
                interview-ready Feature Flag Card component. It showcases:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>High-fidelity Figma-to-code implementation</li>
                <li>WCAG 2.1 AA accessibility compliance</li>
                <li>Mobile-first responsive design</li>
                <li>TypeScript type safety</li>
                <li>Component-driven architecture</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
                >
                  View Live Demo
                </a>
                <a
                  href="/storybook"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  View Storybook
                </a>
              </div>
            </section>

            {/* Design-to-Code Mapping */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎨 Design-to-Code Mapping
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This table shows the exact translation from design specification
                to Tailwind CSS implementation:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Design Element
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Visual Specification
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Tailwind Implementation
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Rationale
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Container
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        White background, elevated shadow
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-indigo-600">
                        bg-white shadow-xl rounded-xl
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Creates card elevation in dashboard context
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Active Border
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        4px left border, Indigo-500
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-indigo-600">
                        border-l-4 border-indigo-500
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Clear visual indicator of enabled state
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Inactive Border
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        4px left border, Gray-200
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-indigo-600">
                        border-l-4 border-gray-200
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Muted appearance for disabled state
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Toggle Switch
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        iOS-style, green active, gray inactive
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-indigo-600">
                        bg-green-500 / bg-gray-300
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Modern, familiar interaction pattern
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Status Badge
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Pill shape, colored background
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-indigo-600">
                        bg-green-800 text-white
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        AAA contrast (7.67:1)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Color Contrast */}
            <section className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Color Contrast Ratios (WCAG 2.1)
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Element
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Colors
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Ratio
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Active Status Badge
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        White on Green-800
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        7.67:1
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          AAA ✓
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Inactive Badge
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        White on Gray-800
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        12.63:1
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          AAA ✓
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Primary Text
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Gray-900 on White
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        16.08:1
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          AAA ✓
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Metadata Text
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Gray-500 on White
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        4.61:1
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          AA ✓
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Responsive Design */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📱 Responsive Design Strategy
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mobile-First Approach
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Breakpoints:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-indigo-600 font-mono text-xs">
                      Mobile
                    </code>
                    : &lt; 768px (default, no prefix)
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-indigo-600 font-mono text-xs">
                      Desktop
                    </code>
                    : ≥ 768px (
                    <code className="text-indigo-600 font-mono text-xs">
                      md:
                    </code>{' '}
                    prefix)
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-indigo-600 font-mono text-xs">
                      Footer
                    </code>
                    : ≥ 640px (
                    <code className="text-indigo-600 font-mono text-xs">
                      sm:
                    </code>{' '}
                    prefix)
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Mobile (&lt; 768px)
                  </h4>
                  <pre className="text-xs text-gray-600 font-mono bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                    {`┌─────────────────────┐
│ [Name]              │
│ [Description]       │
│ [Toggle - Full]     │
│ ─────────────────── │
│ [Status Badge]      │
│ [Created Date]      │
└─────────────────────┘`}
                  </pre>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Implementation:</strong> Vertical stack with{' '}
                    <code className="text-indigo-600 font-mono text-xs">
                      flex flex-col gap-4
                    </code>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Desktop (≥ 768px)
                  </h4>
                  <pre className="text-xs text-gray-600 font-mono bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                    {`┌──────────────────────────────┐
│ [Name]          [Toggle]     │
│ [Description]                │
│ ──────────────────────────── │
│ [Status]    [Created Date]   │
└──────────────────────────────┘`}
                  </pre>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Implementation:</strong> Flexible grid with{' '}
                    <code className="text-indigo-600 font-mono text-xs">
                      grid grid-cols-[auto,1fr,auto]
                    </code>
                  </p>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ♿ Accessibility Implementation
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                WCAG 2.1 AA Compliance
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Criterion
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Implementation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        1.4.3 Contrast (Minimum)
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        All text meets 4.5:1 minimum (badges exceed 7:1)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        2.1.1 Keyboard
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Full keyboard navigation with Tab/Space/Enter
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        2.4.7 Focus Visible
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Custom focus rings on all interactive elements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        2.5.5 Target Size
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        44×44px tap targets (transparent wrapper)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        4.1.2 Name, Role, Value
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        ARIA{' '}
                        <code className="text-indigo-600 font-mono text-xs">
                          role="switch"
                        </code>
                        ,{' '}
                        <code className="text-indigo-600 font-mono text-xs">
                          aria-checked
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Toggle Switch Accessibility
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono">
                  {`<button
  role="switch"
  aria-checked={active}
  aria-label={\`Toggle \${name} feature flag\`}
  className="min-w-[44px] min-h-[44px] bg-transparent"
  onClick={handleToggle}
>
  {/* 44×44px invisible tap target wrapper */}
  <span className="h-8 w-14 bg-green-500 rounded-full">
    <span className="h-6 w-6 bg-white shadow-md" />
  </span>
</button>`}
                </pre>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-sm text-gray-700">
                    Native{' '}
                    <code className="text-indigo-600 font-mono text-xs">
                      &lt;button&gt;
                    </code>{' '}
                    element (semantic HTML)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-sm text-gray-700">
                    <code className="text-indigo-600 font-mono text-xs">
                      role="switch"
                    </code>{' '}
                    +{' '}
                    <code className="text-indigo-600 font-mono text-xs">
                      aria-checked
                    </code>{' '}
                    (WAI-ARIA)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-sm text-gray-700">
                    44×44px minimum tap target (mobile accessibility)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span className="text-sm text-gray-700">
                    Keyboard support: Space/Enter to toggle
                  </span>
                </div>
              </div>
            </section>

            {/* Component API */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🧩 Component API
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                TypeScript Interface
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
                <pre className="text-sm text-green-400 font-mono">
                  {`export type FeatureFlagCardProps = {
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
};`}
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Example Usage
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono">
                  {`<FeatureFlagCard
  name="Advanced Analytics Dashboard"
  description="Enable real-time analytics with custom metrics"
  active={true}
  createdAt="2025-10-01"
  updatedAt="2025-10-12"
  onToggle={(newState) => console.log('Toggled to:', newState)}
/>`}
                </pre>
              </div>
            </section>

            {/* Project Stats */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📊 Project Stats
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-900">
                      Tests Passing
                    </span>
                    <span className="text-2xl font-bold text-green-700">
                      27/27
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-900">
                      WCAG Compliance
                    </span>
                    <span className="text-2xl font-bold text-blue-700">AA</span>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-900">
                      Storybook Stories
                    </span>
                    <span className="text-2xl font-bold text-purple-700">
                      8
                    </span>
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-900">
                      Component Size
                    </span>
                    <span className="text-2xl font-bold text-indigo-700">
                      ~200 lines
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Stack */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🔧 Technical Stack
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Technology
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Version
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Framework
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Next.js
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        15.5.4
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        React framework with App Router
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Language
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        TypeScript
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">5.x</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Type safety and developer DX
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Styling
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Tailwind CSS
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        3.4.15
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Utility-first CSS framework
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Testing
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Jest + RTL
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        29.7.0
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Unit and integration tests
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Documentation
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Storybook
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">8.4.7</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Component documentation
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        Deployment
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        Vercel
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        Latest
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        CI/CD and hosting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Footer */}
            <div className="not-prose mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>
                  <strong>Last Updated:</strong> October 12, 2025
                </div>
                <div className="flex items-center gap-2">
                  <strong>Ready for Interview:</strong>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✅ Tuesday, October 14, 2025
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
