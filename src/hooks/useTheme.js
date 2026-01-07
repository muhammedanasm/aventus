import { useEffect } from "react";

export const useTheme = (theme) => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--bg-color", theme.backgroundColor);
    root.style.setProperty("--text-color", theme.textColor);
    root.style.setProperty("--radius", theme.borderRadius);
  }, [theme]);
};
