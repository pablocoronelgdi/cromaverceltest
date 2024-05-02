import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TabSegmentedItemTypes = {
  $label: string
  $content?: ReactNode
  $isActive?: boolean
  $hasMaxItems?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export type TabsSegmentedPropTypes = {
  $items: TabSegmentedItemTypes[]
  $id?: string
}
