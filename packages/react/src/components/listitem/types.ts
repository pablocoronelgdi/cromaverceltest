import { type ReactNode } from 'react'

export type ListItemPropsTypes = {
  title: string
  subtitle?: string
  contentLeft?: ReactNode | undefined
  contentRight?: ReactNode | undefined
  disabled?: boolean
}
