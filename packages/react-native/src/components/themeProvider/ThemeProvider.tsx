import { Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import type { ThemeProviderPropTypes } from './types'
import useCromaFonts from '../../hooks/useCromaFonts'

const ThemeContext = createContext({})
export const useTheme = (): unknown => useContext(ThemeContext)

const CromaThemeProvider: React.FC<ThemeProviderPropTypes> = ({ theme, children }) => {
  const fontsLoaded = useCromaFonts()
  const [currentTheme, setCurrentTheme] = useState(theme)
  const setTheme = (newTheme: object): void => {
    setCurrentTheme(newTheme)
  }
  console.log('el valor de las font es', fontsLoaded)

  return fontsLoaded ? (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>{children}</ThemeContext.Provider>
  ) : (
    <Text>Cargando assets...</Text>
  )
}

export default CromaThemeProvider
