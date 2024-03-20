import type { HTMLAttributes, ReactNode } from 'react'

export type TabsItemProps = {
  label?: string
  iconLeftName?: string
  iconRightName?: string
  $hide?: boolean
  $focused?: boolean
  $active?: boolean
} & HTMLAttributes<HTMLDivElement>

export type TabsProps = {
  tabs: TabsItemProps[]
  $labelShow?: boolean
  $iconLeft?: boolean
  $iconRight?: boolean
  disabled?: boolean
  $vertical?: boolean
  className?: string
  $active?: boolean
  $content?: ReactNode | undefined
  $slidesToShow?: number
} & HTMLAttributes<HTMLDivElement>
