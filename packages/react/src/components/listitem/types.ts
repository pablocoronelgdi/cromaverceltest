import type { ReactNode } from 'react'

export type ListItemPropsTypes = {
  id?: number | undefined
  $title: string
  $subtitle?: string
  $contentLeft?: ReactNode | undefined
  $contentRight?: ReactNode | undefined
  $disabled?: boolean
} & HTMLElement
