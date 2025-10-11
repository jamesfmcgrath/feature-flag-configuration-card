import type { Meta, StoryObj } from '@storybook/react';
import { FeatureFlagCard } from './FeatureFlagCard';

const meta = {
  title: 'Components/FeatureFlagCard',
  component: FeatureFlagCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A production-ready feature flag configuration card component that demonstrates high-fidelity design-to-code translation. Implements WCAG 2.1 AA accessibility standards with full keyboard navigation and responsive design.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Display name of the feature flag',
    },
    description: {
      control: 'text',
      description: 'Detailed description of what the flag controls',
    },
    active: {
      control: 'boolean',
      description: 'Current enabled state of the flag',
    },
    createdAt: {
      control: 'text',
      description: 'When the flag was created (ISO date string)',
    },
    updatedAt: {
      control: 'text',
      description: 'When the flag was last updated (ISO date string)',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback fired when toggle state changes',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] p-8 bg-gray-50">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FeatureFlagCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default active state with full metadata
 */
export const Default: Story = {
  args: {
    name: 'User Onboarding Flow',
    description:
      'Controls rollout of the new onboarding process with step-by-step guidance.',
    active: true,
    createdAt: '2025-09-15',
    updatedAt: '2025-10-01',
  },
};

/**
 * Inactive flag state
 */
export const Inactive: Story = {
  args: {
    name: 'Advanced Analytics Dashboard',
    description:
      'Enable advanced analytics with real-time metrics and custom reports.',
    active: false,
    createdAt: '2025-07-10',
    updatedAt: '2025-09-20',
  },
};

/**
 * Long name demonstrating text truncation
 */
export const LongName: Story = {
  args: {
    name: 'Super Long Feature Flag Name That Demonstrates Text Truncation Behavior When The Name Exceeds Container Width',
    description:
      'This flag has an extremely long name to demonstrate how the component handles text truncation and overflow scenarios in both mobile and desktop layouts.',
    active: true,
    createdAt: '2025-10-11',
    updatedAt: '2025-10-11',
  },
};

/**
 * With creation and update dates
 */
export const WithDates: Story = {
  args: {
    name: 'Dark Mode Theme',
    description: 'Enable dark mode theme across the entire application.',
    active: true,
    createdAt: '2025-08-20',
    updatedAt: '2025-10-10',
  },
};

/**
 * Minimal configuration without description or dates
 */
export const Minimal: Story = {
  args: {
    name: 'Minimal Feature Flag',
    active: false,
  },
};

/**
 * Active flag without dates
 */
export const ActiveNoDates: Story = {
  args: {
    name: 'API v2 Migration',
    description: 'Switch to new API v2 endpoints for improved performance.',
    active: true,
  },
};

/**
 * Multiple flags stacked to show list view
 */
export const MultipleFlags: Story = {
  args: {
    name: 'User Onboarding Flow',
    active: true,
  },
  render: () => (
    <div className="space-y-4 w-full">
      <FeatureFlagCard
        name="User Onboarding Flow"
        description="Controls rollout of the new onboarding process."
        active={true}
        createdAt="2025-09-15"
      />
      <FeatureFlagCard
        name="Advanced Analytics"
        description="Enable advanced analytics with real-time metrics."
        active={false}
        createdAt="2025-07-10"
      />
      <FeatureFlagCard
        name="Dark Mode Theme"
        description="Enable dark mode theme across the application."
        active={true}
        createdAt="2025-08-20"
      />
    </div>
  ),
};

/**
 * Mobile viewport demonstration
 */
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    name: 'Mobile Feature Flag',
    description:
      'This demonstrates how the component adapts to mobile viewport widths.',
    active: true,
    createdAt: '2025-10-11',
    updatedAt: '2025-10-11',
  },
};
