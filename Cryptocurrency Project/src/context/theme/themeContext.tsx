import { createContext, useContext, useState } from "react";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

interface ColorsProps {
    ThemeBackground: string;
    ThemeText: string;
}

interface ThemeProps {
  title: string;
  colors: ColorsProps;
}

type ThemeProviderProps = {
  theme: ThemeProps;
  toggleTheme: () => void;
};

const defaultThemeContextValue: ThemeProviderProps = {
  theme: dark,
  toggleTheme: () => {},
};

const ThemeProviderContext = createContext<ThemeProviderProps>(
  defaultThemeContextValue
);

export function ThemeContextProvider({
  children,
} : {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
    console.log(theme)
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeProviderContext);
  if (!context) throw new Error("Error when using useThemeContext!");
  return context;
}
