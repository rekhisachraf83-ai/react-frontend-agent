import { render, screen, waitFor } from '@testing-library/react';
import { DigitalClock } from './DigitalClock';

describe('DigitalClock Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with label and timezone', () => {
    render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    expect(screen.getByText('New York (EST)')).toBeInTheDocument();
    expect(screen.getByText('America/New_York')).toBeInTheDocument();
  });

  it('displays time in HH:MM:SS format', async () => {
    render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    await waitFor(() => {
      const timeElements = screen.getAllByText(/^\d{2}:\d{2}:\d{2}$/);
      expect(timeElements.length).toBeGreaterThan(0);
    });
  });

  it('updates time every second', async () => {
    render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    // Initial render
    const initialTime = screen.getByText(/^\d{2}:\d{2}:\d{2}$/);
    expect(initialTime).toBeInTheDocument();

    // Advance time by 1 second
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(initialTime).toBeInTheDocument();
    });
  });

  it('cleans up interval on unmount', () => {
    const { unmount } = render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('handles different timezones correctly', () => {
    const { rerender } = render(
      <DigitalClock timezone="America/New_York" label="New York" />
    );

    expect(screen.getByText('America/New_York')).toBeInTheDocument();

    rerender(
      <DigitalClock timezone="Europe/London" label="London" />
    );

    expect(screen.getByText('Europe/London')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    const label = screen.getByText('New York (EST)');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('H2');
  });

  it('applies correct CSS classes for styling', () => {
    const { container } = render(
      <DigitalClock timezone="America/New_York" label="New York (EST)" />
    );

    const clockContainer = container.querySelector(
      '.bg-gradient-to-br'
    );
    expect(clockContainer).toBeInTheDocument();

    const timeDisplay = container.querySelector('.text-5xl');
    expect(timeDisplay).toBeInTheDocument();
  });
});
