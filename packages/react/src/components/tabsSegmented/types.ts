import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TabSegmentedItemTypes = {
  $label: string
  $content?: ReactNode
  $isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export type TabsSegmentedPropTypes = {
  $items: TabSegmentedItemTypes[]
  $id?: string
}
