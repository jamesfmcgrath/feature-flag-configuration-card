import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeatureFlagCard } from './FeatureFlagCard';

describe('FeatureFlagCard', () => {
  const defaultProps = {
    name: 'Test Feature Flag',
    description: 'Test description',
    active: false,
    onToggle: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the feature flag name', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      expect(screen.getByText('Test Feature Flag')).toBeInTheDocument();
    });

    it('renders the description when provided', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('renders without description when not provided', () => {
      render(<FeatureFlagCard {...defaultProps} description={undefined} />);
      expect(screen.queryByText('Test description')).not.toBeInTheDocument();
    });

    it('renders created date when provided', () => {
      render(<FeatureFlagCard {...defaultProps} createdAt="2025-10-01" />);
      expect(screen.getByText(/Created:/)).toBeInTheDocument();
      expect(screen.getByText(/Oct 1, 2025/)).toBeInTheDocument();
    });

    it('renders updated date when provided', () => {
      render(<FeatureFlagCard {...defaultProps} updatedAt="2025-10-11" />);
      expect(screen.getByText(/Updated:/)).toBeInTheDocument();
      expect(screen.getByText(/Oct 11, 2025/)).toBeInTheDocument();
    });

    it('does not render metadata section when no dates provided', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      expect(screen.queryByText(/Created:/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Updated:/)).not.toBeInTheDocument();
    });
  });

  describe('Status Badge', () => {
    it('displays "Active" badge when flag is active', () => {
      render(<FeatureFlagCard {...defaultProps} active={true} />);
      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('displays "Inactive" badge when flag is inactive', () => {
      render(<FeatureFlagCard {...defaultProps} active={false} />);
      expect(screen.getByText('Inactive')).toBeInTheDocument();
    });
  });

  describe('Toggle Functionality', () => {
    it('calls onToggle with true when inactive toggle is clicked', async () => {
      const user = userEvent.setup();
      const onToggle = jest.fn();

      render(
        <FeatureFlagCard {...defaultProps} active={false} onToggle={onToggle} />
      );

      const toggle = screen.getByRole('switch');
      await user.click(toggle);

      expect(onToggle).toHaveBeenCalledTimes(1);
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('calls onToggle with false when active toggle is clicked', async () => {
      const user = userEvent.setup();
      const onToggle = jest.fn();

      render(
        <FeatureFlagCard {...defaultProps} active={true} onToggle={onToggle} />
      );

      const toggle = screen.getByRole('switch');
      await user.click(toggle);

      expect(onToggle).toHaveBeenCalledTimes(1);
      expect(onToggle).toHaveBeenCalledWith(false);
    });

    it('does not throw when onToggle is undefined', async () => {
      const user = userEvent.setup();

      render(<FeatureFlagCard {...defaultProps} onToggle={undefined} />);

      const toggle = screen.getByRole('switch');
      await expect(user.click(toggle)).resolves.not.toThrow();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA role for toggle', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toBeInTheDocument();
    });

    it('has aria-checked="false" when inactive', () => {
      render(<FeatureFlagCard {...defaultProps} active={false} />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('has aria-checked="true" when active', () => {
      render(<FeatureFlagCard {...defaultProps} active={true} />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('has accessible label for toggle', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute(
        'aria-label',
        'Toggle Test Feature Flag feature flag'
      );
    });

    it('has screen reader only text for toggle state', () => {
      render(<FeatureFlagCard {...defaultProps} active={false} />);
      expect(screen.getByText('Enable Test Feature Flag')).toHaveClass(
        'sr-only'
      );
    });

    it('updates screen reader text when state changes', () => {
      const { rerender } = render(
        <FeatureFlagCard {...defaultProps} active={false} />
      );
      expect(screen.getByText('Enable Test Feature Flag')).toBeInTheDocument();

      rerender(<FeatureFlagCard {...defaultProps} active={true} />);
      expect(screen.getByText('Disable Test Feature Flag')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('toggles on Space key press', async () => {
      const user = userEvent.setup();
      const onToggle = jest.fn();

      render(
        <FeatureFlagCard {...defaultProps} active={false} onToggle={onToggle} />
      );

      const toggle = screen.getByRole('switch');
      toggle.focus();
      await user.keyboard(' ');

      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('toggles on Enter key press', async () => {
      const user = userEvent.setup();
      const onToggle = jest.fn();

      render(
        <FeatureFlagCard {...defaultProps} active={false} onToggle={onToggle} />
      );

      const toggle = screen.getByRole('switch');
      toggle.focus();
      await user.keyboard('{Enter}');

      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it('does not toggle on other key presses', async () => {
      const user = userEvent.setup();
      const onToggle = jest.fn();

      render(
        <FeatureFlagCard {...defaultProps} active={false} onToggle={onToggle} />
      );

      const toggle = screen.getByRole('switch');
      toggle.focus();
      await user.keyboard('a');

      expect(onToggle).not.toHaveBeenCalled();
    });
  });

  describe('Semantic HTML', () => {
    it('renders as an article element', () => {
      const { container } = render(<FeatureFlagCard {...defaultProps} />);
      const article = container.querySelector('article');
      expect(article).toBeInTheDocument();
    });

    it('uses h3 for the flag name', () => {
      render(<FeatureFlagCard {...defaultProps} />);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('Test Feature Flag');
    });

    it('uses time elements for dates', () => {
      render(
        <FeatureFlagCard
          {...defaultProps}
          createdAt="2025-10-01"
          updatedAt="2025-10-11"
        />
      );
      const timeElements = screen.getAllByRole('time');
      expect(timeElements).toHaveLength(2);
    });

    it('has proper datetime attributes on time elements', () => {
      render(<FeatureFlagCard {...defaultProps} createdAt="2025-10-01" />);
      const timeElement = screen.getByRole('time');
      expect(timeElement).toHaveAttribute('dateTime');
      expect(timeElement.getAttribute('dateTime')).toContain('2025-10-01');
    });
  });

  describe('Visual States', () => {
    it('applies active border color when flag is active', () => {
      const { container } = render(
        <FeatureFlagCard {...defaultProps} active={true} />
      );
      const article = container.querySelector('article');
      expect(article).toHaveClass('border-indigo-500');
    });

    it('applies inactive border color when flag is inactive', () => {
      const { container } = render(
        <FeatureFlagCard {...defaultProps} active={false} />
      );
      const article = container.querySelector('article');
      expect(article).toHaveClass('border-gray-200');
    });

    it('applies custom className when provided', () => {
      const { container } = render(
        <FeatureFlagCard {...defaultProps} className="custom-class" />
      );
      const article = container.querySelector('article');
      expect(article).toHaveClass('custom-class');
    });
  });
});
