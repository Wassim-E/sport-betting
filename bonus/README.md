# SportBetting Frontend

A modern, well-organized React/Next.js application for sports betting analysis and odds comparison.

## 🚀 Features

- **Modern UI/UX**: Built with Material-UI (MUI) for a professional, responsive design
- **Theme System**: Centralized color palette and consistent styling throughout the application
- **Page Routing**: Next.js page-based routing system
- **Context Management**: React Context for global state management
- **Simple Notifications**: Easy-to-use notification system for user feedback
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Architecture**: Reusable, well-structured components

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer, Layout)
│   └── ui/              # Common UI components (LoadingSpinner, NotificationSystem)
├── lib/                 # Core utilities and context
│   ├── Context.js       # Main application context
│   └── cache.js         # Emotion cache configuration
├── pages/               # Next.js pages (routing)
│   ├── _app.js          # App wrapper with providers
│   ├── index.js         # Home page
│   ├── odds.js          # Odds page
│   └── analysis.js      # Analysis page
├── theme/               # Theme configuration
│   └── index.js         # MUI theme and color palette
└── utils/               # Utility functions
    ├── themeUtils.js    # Theme and color utilities
    └── validation.js    # Form validation utilities
```

## 🎨 Theme System

The application uses a centralized theme system with a clean color palette:

### Primary Colors
- **Primary**: Blue (#1976d2) - Main brand color
- **Secondary**: Pink (#dc004e) - Accent color
- **Success**: Green (#2e7d32) - Success states
- **Warning**: Orange (#ed6c02) - Warning states
- **Error**: Red (#d32f2f) - Error states

### Usage Examples

```jsx
import { useTheme } from '@mui/material';
import { colors, getColor } from '../theme';
import { getStatusColor } from '../utils/themeUtils';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      // Or use utility functions:
      borderColor: getColor('success', 'light'),
      backgroundColor: getStatusColor('live'),
    }}>
      Content
    </Box>
  );
}
```

## 🔧 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Component Usage

### Layout Components

The application uses a consistent layout structure:

```jsx
import Layout from '../components/layout/Layout';

function MyPage() {
  return (
    <Layout>
      {/* Your page content */}
    </Layout>
  );
}
```

### Context Usage

Access global state and functions:

```jsx
import { useAppContext } from '../lib/Context';

function MyComponent() {
  const { 
    showNotification,
    isLoading,
    setLoading 
  } = useAppContext();
  
  // Use context values and functions
}
```

### Notifications

Show user feedback with a simple function call:

```jsx
const { showNotification } = useAppContext();

// Success notification (5 seconds)
showNotification('success', 'Operation completed successfully!');

// Error notification (5 seconds)
showNotification('error', 'Error 404: Endpoint not found');

// Custom duration (3 seconds)
showNotification('warning', 'Please check your input', 3000);

// Available types: 'success', 'error', 'warning', 'info'
```

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Breakpoints**: xs, sm, md, lg, xl
- **Grid System**: MUI Grid component for responsive layouts
- **Typography**: Responsive typography scales
- **Spacing**: Consistent spacing system using theme.spacing

## 🎯 Future Enhancements

- [ ] Real-time odds data integration
- [ ] Advanced analytics and charts
- [ ] User preferences and settings
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] PWA capabilities

## 🛠️ Development Guidelines

### Code Style
- Use functional components with hooks
- Follow MUI design patterns
- Use theme colors instead of hardcoded values
- Implement proper error handling
- Write meaningful component and function names

### Component Structure
```jsx
import React from 'react';
import { /* MUI imports */ } from '@mui/material';

export default function ComponentName() {
  return (
    // JSX content
  );
}
```

### Theme Usage
- Always use `theme.palette.colors` instead of hardcoded hex values
- Use utility functions for complex color operations
- Maintain consistency with the established color palette

### Error Handling
Use the notification system for user feedback:

```jsx
try {
  const response = await fetch('/api/endpoint');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  showNotification('success', 'Data loaded successfully');
} catch (error) {
  showNotification('error', `Request failed: ${error.message}`);
}
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.
