import { ReactNode } from "react"

export type RightContentListItemPropTypes = {
  as?: 'switch' | 'icon' | 'radioButton' | 'checkbox' | 'link'
  children?: ReactNode
  $disabled?: boolean
  $href?: string
  $iconName?: string
  $onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  $selected?: boolean
}
