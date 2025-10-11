'use client';

import clsx from 'clsx';
import { useCallback } from 'react';

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

/**
 * Feature Flag Configuration Card
 *
 * A production-ready component for managing feature flag states in SaaS dashboards.
 * Implements WCAG 2.1 AA accessibility standards with full keyboard navigation.
 *
 * @example
 * ```tsx
 * <FeatureFlagCard
 *   name="User Onboarding Flow"
 *   active={true}
 *   description="Controls rollout of the new onboarding process."
 *   createdAt="2025-10-01"
 *   onToggle={(newState) => console.log('toggled', newState)}
 * />
 * ```
 */
export function FeatureFlagCard({
  name,
  description,
  active,
  createdAt,
  updatedAt,
  onToggle,
  className,
}: FeatureFlagCardProps) {
  const handleToggle = useCallback(() => {
    onToggle?.(!active);
  }, [active, onToggle]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle]
  );

  const formatDate = (date: string | Date | undefined) => {
    if (!date) return null;
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <article
      className={clsx(
        // Container styles
        'bg-white shadow-xl rounded-xl',
        // Border accent based on state
        'border-l-4',
        active ? 'border-indigo-500' : 'border-gray-200',
        // Padding with responsive scaling
        'p-4 md:p-6',
        // Smooth transitions
        'transition-colors duration-150 ease-in-out',
        // Custom classes
        className
      )}
    >
      {/* Main content grid - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-4 md:items-center">
        {/* Text content */}
        <div className="space-y-1 md:col-span-2 min-w-0">
          <h3
            className={clsx(
              'text-base font-semibold truncate',
              active ? 'text-gray-900' : 'text-gray-500'
            )}
          >
            {name}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          )}
        </div>

        {/* Toggle switch */}
        <div className="flex items-center justify-start md:justify-end">
          <button
            type="button"
            role="switch"
            aria-checked={active}
            aria-label={`Toggle ${name} feature flag`}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className={clsx(
              // Base styles
              'relative inline-flex h-6 w-11 items-center rounded-full',
              'transition-colors duration-150 ease-in-out',
              // Focus styles
              'focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2',
              // Background color based on state
              active ? 'bg-indigo-600' : 'bg-gray-200',
              // Hover styles
              'hover:opacity-90'
            )}
          >
            <span className="sr-only">
              {active ? 'Disable' : 'Enable'} {name}
            </span>
            {/* Toggle thumb */}
            <span
              className={clsx(
                'inline-block h-4 w-4 rounded-full bg-white',
                'transition-transform duration-150 ease-in-out',
                'shadow-sm',
                active ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </button>
        </div>
      </div>

      {/* Metadata footer - only show if dates exist */}
      {(createdAt || updatedAt) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-500">
            {createdAt && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Created:</span>
                <time dateTime={new Date(createdAt).toISOString()}>
                  {formatDate(createdAt)}
                </time>
              </div>
            )}
            {updatedAt && (
              <div className="flex items-center gap-1">
                <span className="font-medium">Updated:</span>
                <time dateTime={new Date(updatedAt).toISOString()}>
                  {formatDate(updatedAt)}
                </time>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Status badge */}
      <div className="mt-3">
        <span
          className={clsx(
            'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold',
            active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          )}
        >
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
    </article>
  );
}
