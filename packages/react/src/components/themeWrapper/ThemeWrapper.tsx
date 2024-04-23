import React from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import * as Theme from '../../theme/theme'
import { GlobalStyle } from '../../globals/globals'

type CromaThemeProviderPropTypes = {
  $theme: string
  children: ReactNode
}

const getMacroTheme = ($theme: string): any => {
  const keys = Object.keys(Theme)
  let selectedTheme = null
  keys.forEach((theme): any => {
    if (theme === $theme) {
      selectedTheme = Theme[$theme as keyof unknown]
    }
  })
  return selectedTheme ?? Theme.macro
}

const CromaThemeProvider: React.FC<CromaThemeProviderPropTypes> = ({
  children,
  $theme = 'macro'
}) => {
  return (
    <>
      <ThemeProvider theme={getMacroTheme($theme)}>
        <GlobalStyle />
        <>{children}</>
      </ThemeProvider>
    </>
  )
}

export default CromaThemeProvider
