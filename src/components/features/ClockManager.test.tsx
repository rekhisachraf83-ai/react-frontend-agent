import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClockManager } from './ClockManager';

describe('ClockManager Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the component with title', () => {
    render(<ClockManager />);

    expect(screen.getByText('🕐 World Clock')).toBeInTheDocument();
  });

  it('displays default timezones on initial render', () => {
    render(<ClockManager />);

    expect(screen.getByText('New York (EST)')).toBeInTheDocument();
    expect(screen.getByText('London (GMT)')).toBeInTheDocument();
    expect(screen.getByText('Paris (CET)')).toBeInTheDocument();
    expect(screen.getByText('Tokyo (JST)')).toBeInTheDocument();
    expect(screen.getByText('Dubai (GST)')).toBeInTheDocument();
    expect(screen.getByText('Sydney (AEDT)')).toBeInTheDocument();
  });

  it('renders input fields for adding new timezone', () => {
    render(<ClockManager />);

    expect(
      screen.getByPlaceholderText(/Timezone \(e\.g\., America\/Los_Angeles\)/)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/)
    ).toBeInTheDocument();
  });

  it('renders add button', () => {
    render(<ClockManager />);

    expect(screen.getByLabelText('Add timezone button')).toBeInTheDocument();
  });

  it('shows error when timezone input is empty', async () => {
    render(<ClockManager />);

    const addButton = screen.getByLabelText('Add timezone button');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please enter both timezone and label')
      ).toBeInTheDocument();
    });
  });

  it('shows error when label input is empty', async () => {
    render(<ClockManager />);

    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const addButton = screen.getByLabelText('Add timezone button');

    await userEvent.type(timezoneInput, 'America/Los_Angeles');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please enter both timezone and label')
      ).toBeInTheDocument();
    });
  });

  it('shows error for invalid timezone', async () => {
    render(<ClockManager />);

    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const labelInput = screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/);
    const addButton = screen.getByLabelText('Add timezone button');

    await userEvent.type(timezoneInput, 'Invalid/Timezone');
    await userEvent.type(labelInput, 'Invalid');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Invalid timezone\. Please check the timezone name\./)
      ).toBeInTheDocument();
    });
  });

  it('adds new timezone successfully', async () => {
    render(<ClockManager />);

    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const labelInput = screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/);
    const addButton = screen.getByLabelText('Add timezone button');

    await userEvent.type(timezoneInput, 'America/Los_Angeles');
    await userEvent.type(labelInput, 'Los Angeles');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('Los Angeles')).toBeInTheDocument();
    });

    // Verify input fields are cleared
    expect((timezoneInput as HTMLInputElement).value).toBe('');
    expect((labelInput as HTMLInputElement).value).toBe('');
  });

  it('removes timezone when remove button is clicked', async () => {
    render(<ClockManager />);

    // Add a new timezone first
    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const labelInput = screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/);
    const addButton = screen.getByLabelText('Add timezone button');

    await userEvent.type(timezoneInput, 'America/Los_Angeles');
    await userEvent.type(labelInput, 'Los Angeles');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('Los Angeles')).toBeInTheDocument();
    });

    // Find and click remove button
    const removeButtons = screen.getAllByText('✕');
    fireEvent.click(removeButtons[removeButtons.length - 1]);

    await waitFor(() => {
      expect(screen.queryByText('Los Angeles')).not.toBeInTheDocument();
    });
  });

  it('clears error message after successful addition', async () => {
    render(<ClockManager />);

    const addButton = screen.getByLabelText('Add timezone button');

    // First, trigger error
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please enter both timezone and label')
      ).toBeInTheDocument();
    });

    // Now add valid timezone
    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const labelInput = screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/);

    await userEvent.type(timezoneInput, 'America/Denver');
    await userEvent.type(labelInput, 'Denver');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('Denver')).toBeInTheDocument();
      expect(
        screen.queryByText('Please enter both timezone and label')
      ).not.toBeInTheDocument();
    });
  });

  it('displays timezone reference information', () => {
    render(<ClockManager />);

    expect(screen.getByText('Common Timezone Format')).toBeInTheDocument();
    expect(screen.getByText('America/New_York')).toBeInTheDocument();
    expect(screen.getByText('Europe/London')).toBeInTheDocument();
    expect(screen.getByText('Asia/Tokyo')).toBeInTheDocument();
    expect(screen.getByText('Australia/Sydney')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<ClockManager />);

    const timezoneInput = screen.getByPlaceholderText(
      /Timezone \(e\.g\., America\/Los_Angeles\)/
    );
    const labelInput = screen.getByPlaceholderText(/Label \(e\.g\., Los Angeles\)/);
    const addButton = screen.getByLabelText('Add timezone button');

    expect(timezoneInput).toHaveAttribute('aria-label');
    expect(labelInput).toHaveAttribute('aria-label');
    expect(addButton).toHaveAttribute('aria-label');
  });

  it('displays multiple clocks in a grid layout', () => {
    const { container } = render(<ClockManager />);

    const gridContainer = container.querySelector(
      '.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3'
    );
    expect(gridContainer).toBeInTheDocument();
  });
});
