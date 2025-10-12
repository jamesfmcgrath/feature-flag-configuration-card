'use client';

import { FeatureFlagCard } from '@/components/feature-flags/FeatureFlagCard';
import { useState } from 'react';

export default function Home() {
  const [flags, setFlags] = useState({
    onboarding: true,
    analytics: false,
    darkMode: true,
    apiV2: false,
    longName: true,
    minimal: false,
  });

  const handleToggle = (flagKey: string) => (newState: boolean) => {
    setFlags((prev) => ({ ...prev, [flagKey]: newState }));
    console.log(`${flagKey} toggled to ${newState}`);
  };

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Feature Flag Configuration Card
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Production-ready component demonstration
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
            Active Flags
          </h2>

          <FeatureFlagCard
            name="User Onboarding Flow"
            description="Controls rollout of the new onboarding process with step-by-step guidance and tutorials."
            active={flags.onboarding}
            createdAt="2025-09-15"
            updatedAt="2025-10-01"
            onToggle={handleToggle('onboarding')}
          />

          <FeatureFlagCard
            name="Dark Mode Theme"
            description="Enable dark mode theme across the entire application interface."
            active={flags.darkMode}
            createdAt="2025-08-20"
            updatedAt="2025-10-10"
            onToggle={handleToggle('darkMode')}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
            Inactive Flags
          </h2>

          <FeatureFlagCard
            name="Advanced Analytics Dashboard"
            description="Enable advanced analytics with real-time metrics, custom reports, and data visualization."
            active={flags.analytics}
            createdAt="2025-07-10"
            onToggle={handleToggle('analytics')}
          />

          <FeatureFlagCard
            name="API v2 Migration"
            description="Switch to new API v2 endpoints."
            active={flags.apiV2}
            onToggle={handleToggle('apiV2')}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
            Edge Cases
          </h2>

          <FeatureFlagCard
            name="Super Long Feature Flag Name That Demonstrates Text Truncation Behavior When The Name Exceeds Container Width"
            description="This flag has an extremely long name to demonstrate how the component handles text truncation and overflow scenarios in both mobile and desktop layouts."
            active={flags.longName}
            createdAt="2025-10-11"
            updatedAt="2025-10-11"
            onToggle={handleToggle('longName')}
          />

          <FeatureFlagCard
            name="Minimal Flag"
            active={flags.minimal}
            onToggle={handleToggle('minimal')}
          />
        </section>
      </div>
    </main>
  );
}
