import type { ReactNode } from 'react'

export type AdjustementTyoes = {
  oposite: string
  others: string[]
}
export type BorderPositions = 'top' | 'right' | 'bottom' | 'left'
export type LinePositions = 'start' | 'middle' | 'end'
export type TooltipPositionTypes = {
  position: BorderPositions
}
export type TooltipArrowPositionTypes = {
  arrowPosition: LinePositions
}
export type TooltipPropTypes = {
  label: string
  children: ReactNode
  position: BorderPositions
  arrowPosition: LinePositions
}
