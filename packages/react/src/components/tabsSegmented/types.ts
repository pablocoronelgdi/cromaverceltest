import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TabsItemProps = {
  $label?: string
  $iconLeftName?: string
  $iconRightName?: string
  $content?: ReactNode | undefined
  $active?: boolean
  $focused?: boolean
  $hide?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export type TabsProps = {
  $id?: string
  $disabled?: boolean
  $tabs: TabsItemProps[]
  $iconLeft?: boolean
  $iconRight?: boolean
  $vertical?: boolean
  $slidesToShow?: number
  $active?: boolean
}
