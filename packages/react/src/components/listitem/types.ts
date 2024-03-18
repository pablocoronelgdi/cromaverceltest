import type { LiHTMLAttributes, ReactNode } from 'react'

export type ListItemPropsTypes = {
  $title: string
  $description?: string
  $contentLeft?: ReactNode | undefined
  $contentRight?: ReactNode | undefined
  $disabled?: boolean
} & LiHTMLAttributes<HTMLElement>
