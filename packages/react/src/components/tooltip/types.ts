import type { ReactNode, RefObject } from 'react'

/* ----------  Base Types  ---------- */

export type AdjustementTypes = {
  oposite: string
  others: string[]
}
export type BorderPositions = 'top' | 'right' | 'bottom' | 'left'
export type LinePositions = 'start' | 'middle' | 'end'
export type TooltipContainerPropTypes = {
  position?: BorderPositions
  $arrowPosition?: LinePositions
  children?: ReactNode
}

/* ----------  Position Types  ---------- */

export type TooltipPositionTypes = {
  $position: BorderPositions
}
export type TooltipArrowPositionTypes = {
  $arrowPosition: LinePositions
}

/* ----------  Component Types  ---------- */

export type TooltipPropTypes = {
  $description?: string
  children: ReactNode
  $position: BorderPositions
  $arrowPosition: LinePositions
  $tooltipRef?: RefObject<any>
  $id?: string
}

export type ToogletipPropTypes = {
  $title: string
  $actionButtons?: ReactNode
  $actionLinks?: ReactNode
  $steps?: Array<{ title?: string, label?: string }>
  $onToogletipClose: () => void
  $visible: boolean
  $ariaTitelledBy?: string
  $ariaDescripbedBy?: string
  $ariaModal?: boolean
} & TooltipPropTypes
