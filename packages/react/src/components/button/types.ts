import { type ButtonHTMLAttributes } from 'react'

export type ButtonPropTypes = {
  variant?: 'filled' | 'outlined' | 'ghost'
  iconName?: string | undefined
  size?: 'extra-small' | 'small' | 'medium' | 'large'
  onClick?: () => void
  iconPosition?: 'left' | 'right'
  background?: 'light' | 'dark'
} & ButtonHTMLAttributes<HTMLButtonElement>

export type InnerButtonProps = {
  isPressed?: boolean
} & ButtonPropTypes
