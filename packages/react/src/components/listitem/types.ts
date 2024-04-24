import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ListItemPropsTypes = {
  $description?: string
  $contentLeft?: ReactNode | undefined
  $contentRight?: ReactNode | undefined
  $disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
