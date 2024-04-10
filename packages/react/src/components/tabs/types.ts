import type { ReactNode } from 'react'
import type { TabPropTypes } from '../tab/types'

export type TabItemTypes = {
  $content?: ReactNode
} & TabPropTypes

export type TabsPropTypes = {
  $items: TabItemTypes[]
  $id?: string
  $isCarousel?: boolean
  $isDismissibleItems?: boolean
  $isVerticalItems?: boolean
}
