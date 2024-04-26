import { ReactNode } from "react"

export type LeftContentListItemPropTypes = {
  as?: 'switch' | 'iconItem' | 'radioButton' | 'checkbox'
  children?: ReactNode
  $onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  $selected?: boolean
  $disabled?: boolean
  $nameInput?: string
}
