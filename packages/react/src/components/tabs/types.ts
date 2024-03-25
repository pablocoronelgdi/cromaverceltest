import type { HTMLAttributes, ReactNode } from 'react'

export type TabsItemProps = {
  label?: string
  iconLeftName?: string
  iconRightName?: string
  $hide?: boolean
  $focused?: boolean
  $active?: boolean
  $content?: ReactNode | undefined
} & HTMLAttributes<HTMLDivElement>

export type TabsProps = {
  $tabs: TabsItemProps[]
  $labelShow?: boolean
  $iconLeft?: boolean
  $iconRight?: boolean
  disabled?: boolean
  $vertical?: boolean
  className?: string
  $active?: boolean
  $slidesToShow?: number
  length?: ReactNode | undefined
} & HTMLAttributes<HTMLDivElement>
