import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    isDark,
    colors: isDark ? {
      primary: '#14b8a6',      // Teal/Cyan
      secondary: '#06b6d4',    // Sky blue
      accent: '#3b82f6',       // Blue
      highlight: '#8b5cf6',    // Purple
      bg: '#0f172a',           // Dark navy
      bgSecondary: '#1e293b',  // Lighter navy
      text: '#f8fafc',         // Almost white
      textSecondary: '#94a3b8', // Gray
      border: '#334155',       // Border gray
    } : {
      primary: '#14b8a6',      // Teal/Cyan
      secondary: '#06b6d4',    // Sky blue
      accent: '#3b82f6',       // Blue
      highlight: '#8b5cf6',    // Purple
      bg: '#ffffff',           // Pure white
      bgSecondary: '#f8fafc',  // Very light gray
      text: '#0f172a',         // Dark navy
      textSecondary: '#64748b', // Medium gray
      border: '#e2e8f0',       // Light border
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
