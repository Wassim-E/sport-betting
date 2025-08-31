import { createContext, useContext, useState, useCallback } from 'react';

// Define the context interface for better type safety
const AppContext = createContext();

// Context Provider component
export function AppContextProvider({ children }) {
  // App state
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Loading state management
  const setLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  // Simple notification function
  const showNotification = useCallback((type, message, duration = 5000) => {
    const notification = {
      id: Date.now(),
      type,
      message,
      duration,
    };
    
    setNotifications(prev => [...prev, notification]);
    
    // Auto-remove after duration
    setTimeout(() => {
      removeNotification(notification.id);
    }, duration);
  }, []);

  // Remove specific notification
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const contextValue = {
    // App state
    isLoading,
    setLoading,
    
    // Notifications
    notifications,
    showNotification,
    removeNotification,
    clearNotifications,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
}

// Export the context for direct usage if needed
export { AppContext };