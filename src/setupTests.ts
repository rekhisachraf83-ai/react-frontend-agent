import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Intl if needed
global.Intl = {
  ...global.Intl,
  DateTimeFormat: jest.fn((locale, options) => ({
    format: (date) => {
      const formatter = new (Intl.DateTimeFormat as any)(locale, options);
      return formatter.format(date);
    },
  })) as any,
};
