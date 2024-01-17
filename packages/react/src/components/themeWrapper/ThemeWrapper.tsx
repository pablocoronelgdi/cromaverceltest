import React from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import * as Theme from '../../theme/theme'
import { GlobalStyle } from '../../globals/globals'

type ThemeWrapperProps = {
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

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
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

export default ThemeWrapper
