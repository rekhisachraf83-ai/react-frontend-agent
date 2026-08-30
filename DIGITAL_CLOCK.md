# 🕐 Digital Clock - World Time Display

A beautiful React application that displays the current time across multiple time zones with a modern, responsive interface.

## ✨ Features

- **Multiple Time Zones**: Display current time for different time zones simultaneously
- **Real-time Updates**: Automatic time updates every second
- **Add Custom Zones**: Easily add new time zones on the fly
- **Remove Zones**: Remove unwanted time zones from the display
- **Validation**: Intelligent timezone validation with helpful error messages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient backgrounds, smooth animations, and professional styling
- **Accessibility**: Full WCAG 2.1 compliance with ARIA labels and semantic HTML

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/rekhisachraf83-ai/react-frontend-agent.git
cd react-frontend-agent

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── DigitalClock.tsx          # Individual clock display component
│   │   └── DigitalClock.test.tsx     # Clock component tests
│   └── features/
│       ├── ClockManager.tsx           # Main clock manager component
│       └── ClockManager.test.tsx      # Clock manager tests
├── App.tsx                            # Main app component
├── App.css                            # Global styles
└── main.tsx                           # Entry point
```

## 🧩 Components

### DigitalClock Component

Displays a single clock for a specific timezone.

**Props:**
- `timezone` (string): IANA timezone identifier (e.g., "America/New_York")
- `label` (string): Display label for the timezone (e.g., "New York (EST)")

**Example:**
```tsx
<DigitalClock 
  timezone="Europe/London" 
  label="London (GMT)" 
/>
```

**Features:**
- Live time updates every second
- Automatic interval cleanup on unmount
- 24-hour HH:MM:SS format
- Gradient background with cyan accent

### ClockManager Component

Main component that manages multiple clocks and handles user interactions.

**Features:**
- Default 6 pre-configured time zones
- Add new time zones with validation
- Remove existing time zones
- Error handling and user feedback
- Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Timezone reference guide

## 🌍 Supported Time Zones

The application supports all IANA timezone identifiers. Common examples:

**Americas:**
- `America/New_York` - Eastern Time
- `America/Chicago` - Central Time
- `America/Denver` - Mountain Time
- `America/Los_Angeles` - Pacific Time
- `America/Anchorage` - Alaska Time
- `America/Toronto` - Eastern Canada
- `America/Mexico_City` - Mexico

**Europe:**
- `Europe/London` - GMT/BST
- `Europe/Paris` - CET/CEST
- `Europe/Berlin` - CET/CEST
- `Europe/Istanbul` - EET/EEST
- `Europe/Moscow` - MSK

**Asia:**
- `Asia/Tokyo` - JST
- `Asia/Shanghai` - CST
- `Asia/Hong_Kong` - HKT
- `Asia/Dubai` - GST
- `Asia/Bangkok` - ICT
- `Asia/Singapore` - SGT
- `Asia/Kolkata` - IST
- `Asia/Jakarta` - WIB

**Australia & Pacific:**
- `Australia/Sydney` - AEDT/AEST
- `Australia/Melbourne` - AEDT/AEST
- `Australia/Brisbane` - AEST
- `Pacific/Auckland` - NZDT/NZST

## 🎨 Styling

Built with **Tailwind CSS** for responsive, utility-first styling:

- Dark theme with gradient backgrounds
- Cyan/blue color scheme
- Smooth transitions and hover effects
- Mobile-first responsive design
- Custom color palette

## 🧪 Testing

Comprehensive test suite with **Jest** and **React Testing Library**:

### DigitalClock Tests
- Component rendering
- Time format validation (HH:MM:SS)
- Timezone handling
- Interval management and cleanup
- Accessibility attributes
- CSS class application

### ClockManager Tests
- Initial rendering with default timezones
- Input field validation
- Timezone addition with validation
- Timezone removal
- Error message handling
- Input field clearing after addition
- Accessibility compliance
- Grid layout rendering

**Test Coverage Target:** 70%+ (branches, functions, lines, statements)

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript compiler options (strict mode enabled)
- `jest.config.cjs` - Jest testing configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS with Autoprefixer
- `vite.config.ts` - Vite build configuration
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Code formatting rules

## ✅ Code Quality Standards

- **TypeScript**: Strict mode with no `any` types
- **React**: Functional components with Hooks
- **Testing**: Jest + React Testing Library (70%+ coverage)
- **Linting**: ESLint with React recommended rules
- **Formatting**: Prettier for consistent code style
- **Accessibility**: WCAG 2.1 compliance

## 📝 Usage Examples

### Adding a Custom Timezone

1. Enter timezone in IANA format (e.g., `America/Los_Angeles`)
2. Enter a descriptive label (e.g., `Los Angeles`)
3. Click "Add Clock"
4. The new clock appears in the grid

### Removing a Timezone

1. Hover over any clock card
2. Click the "✕" button in the top-right corner
3. The clock is removed from the display

### Viewing Multiple Zones

The application comes pre-configured with 6 major time zones:
- New York (EST)
- London (GMT)
- Paris (CET)
- Tokyo (JST)
- Dubai (GST)
- Sydney (AEDT)

Add more zones as needed!

## 🐛 Troubleshooting

### Invalid Timezone Error
- Check timezone format (use IANA format like `America/New_York`)
- Verify spelling and capitalization
- Reference the "Common Timezone Format" section on the page

### Clock Not Updating
- Ensure JavaScript is enabled in your browser
- Check browser console for errors
- Refresh the page

### Styling Issues
- Clear browser cache
- Ensure Tailwind CSS is properly built
- Run `npm run build` to rebuild CSS

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting errors
npm run format           # Format with Prettier
npm run type-check       # Check TypeScript

# Testing
npm run test             # Run tests once
npm run test:watch       # Watch mode
npm run test:ci          # CI mode with coverage
npm run test:coverage    # Generate coverage report
```

## 📊 Performance Considerations

- Efficient re-rendering with React hooks
- Interval cleanup on component unmount prevents memory leaks
- CSS-in-JS optimized with Tailwind
- Lazy loading support for production builds

## 🔒 Security

- No sensitive data stored locally
- Input validation for timezone strings
- XSS prevention through React's automatic escaping
- No external API calls required

## 📚 Dependencies

**Runtime:**
- `react` ^18.2.0
- `react-dom` ^18.2.0

**Development:**
- `vite` ^5.0.8
- `typescript` ^5.3.3
- `tailwindcss` ^3.4.0
- `jest` ^29.7.0
- `@testing-library/react` ^14.1.2
- `eslint` ^8.56.0
- `prettier` ^3.1.1

## 📄 License

MIT

## 👤 Author

**rekhisachraf83-ai**

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 💡 Future Enhancements

- [ ] Persist selected timezones to localStorage
- [ ] Add 12-hour time format option
- [ ] Timezone search functionality
- [ ] Day/date display
- [ ] Analog clock option
- [ ] Export time data
- [ ] Keyboard shortcuts
- [ ] Dark/Light theme toggle

---

**Ready to use?** Start with `npm run dev` and explore different time zones! 🌍⏰
