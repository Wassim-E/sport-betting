import { colors } from '../theme';

// Utility functions for working with theme colors
export const getColor = (colorName, variant = 'main') => {
  if (colors[colorName] && colors[colorName][variant]) {
    return colors[colorName][variant];
  }
  return colors.primary.main; // fallback
};

// Get contrast text color for a given background color
export const getContrastText = (colorName, variant = 'main') => {
  if (colors[colorName] && colors[colorName].contrastText) {
    return colors[colorName].contrastText;
  }
  return '#ffffff'; // default white
};

// Get a lighter version of a color
export const getLightColor = (colorName) => {
  return getColor(colorName, 'light');
};

// Get a darker version of a color
export const getDarkColor = (colorName) => {
  return getColor(colorName, 'dark');
};

// Generate a color with opacity
export const getColorWithOpacity = (colorName, opacity = 0.1) => {
  const color = getColor(colorName);
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Get status colors based on status type
export const getStatusColor = (status) => {
  const statusColors = {
    success: colors.success.main,
    warning: colors.warning.main,
    error: colors.error.main,
    info: colors.primary.main,
    live: colors.error.main,
    upcoming: colors.warning.main,
    completed: colors.success.main,
  };
  return statusColors[status] || colors.grey[500];
};

// Export the colors object for direct access
export { colors };
