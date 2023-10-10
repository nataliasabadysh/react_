import React, { createContext, useState, useCallback, ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface ThemeContextValue {
  data: {
    userName: string;
    role: string;
    theme: string;
  };
  switchTheme: (property: string) => void;
}

export const AppContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const switchTheme = useCallback((property: string) => {
    if (property !== "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const fallbackData = {
    userName: "natalia",
    role: "student",
    theme: theme,
  };

  return (
    <AppContext.Provider value={{ data: fallbackData, switchTheme }}>
      {children}
    </AppContext.Provider>
  );
};
