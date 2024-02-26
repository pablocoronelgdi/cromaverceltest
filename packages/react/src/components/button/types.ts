import { type ButtonHTMLAttributes } from 'react'

export type ButtonPropTypes = {
  variant?: 'filled' | 'outlined' | 'text'
  iconName?: string | undefined
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  iconPosition?: 'left' | 'right'
  background?: 'light' | 'dark'
} & ButtonHTMLAttributes<HTMLButtonElement>

export type InnerButtonProps = {
  isPressed?: boolean
} & ButtonPropTypes
