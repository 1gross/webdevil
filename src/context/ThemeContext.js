import { createContext, useState } from 'react';

export const ThemeContext = createContext([false, () => null]);

export const ThemeProvider = ({children}) => {
    const lightTheme = useState(false);

    return <ThemeContext.Provider value={lightTheme}>{children}</ThemeContext.Provider>
};