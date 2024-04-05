import type { ButtonHTMLAttributes } from 'react'

export type TabPropTypes = {
  $iconName?: string
  $isActive?: boolean
  $isDismissible?: boolean
  $isVerticalContent?: boolean
  $label?: string
  $onDismiss?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>
