import type { TextProps, ViewProps } from 'react-native'

export type SpinnerPropTypes = {
  withLogo?: boolean
  label?: string
  labelStyle?: TextProps
  size?: 'extraSmall' | 'small' | 'medium' | 'large'
  color?: string
} & ViewProps
