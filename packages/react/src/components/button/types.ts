import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonIconPositionType = 'left' | 'right'
export type ButtonSizeType = 'extra-small' | 'small' | 'medium' | 'large'
export type ButtonVariantType = 'fill' | 'outline' | 'ghost' | 'tonal'
export type ButtonBackgroundType = 'light' | 'dark'

export type ButtonPropTypes = {
  $as?: 'button' | 'a'
  $backgroundType?: ButtonBackgroundType
  $fullWidth?: boolean
  $iconName?: string
  $iconPosition?: ButtonIconPositionType
  $size?: ButtonSizeType
  $text?: string
  $variant?: ButtonVariantType
} & ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>

export type AnchorPropTypes = {
  $disabled?: boolean
} & ButtonPropTypes
