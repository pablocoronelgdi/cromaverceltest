import type { ButtonHTMLAttributes } from 'react'

export type TabPropTypes = {
  $text?: string
  $iconName?: string
  $selected?: boolean
  $isVertical?: boolean
  $onClose?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>
