import type { HTMLAttributes } from 'react'

export type SpinnerPropTypes = {
  id?: string
  $withLogo?: boolean
  $label?: string
  $size?: 'extra-small' | 'small' | 'medium' | 'large'
  $variantColor?: 'dark' | 'light'
} & HTMLAttributes<HTMLDivElement>
