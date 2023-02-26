import React, { createContext, type PropsWithChildren, useState } from 'react'

export const ThemeContext = createContext([false, () => null])

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const lightTheme = useState(false) as any // @TODO fix this

  return <ThemeContext.Provider value={lightTheme}>{children}</ThemeContext.Provider>
}
