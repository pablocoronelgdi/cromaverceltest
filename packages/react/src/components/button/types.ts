import { type ButtonHTMLAttributes } from 'react'

export type ButtonPropTypes = {
  variant?: 'filled' | 'outlined' | 'link'
  iconName?: string | undefined
  size?: 'small' | 'medium' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>
