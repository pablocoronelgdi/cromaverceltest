import type { ReactNode } from 'react'

export type TooltipPositionTypes = {
  position: 'top' | 'right' | 'bottom' | 'left'
}

export type TooltipPropTypes = {
  label: string
  children: ReactNode
} & TooltipPositionTypes
