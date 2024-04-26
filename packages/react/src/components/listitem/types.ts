import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import type { LeftContentListItemPropTypes } from './leftContent/types'
import type { RightContentListItemPropTypes } from './rightContent/types'

export type ListItemPropTypes = {
  $as?: 'item' | 'link'
  $description?: string
  $leftComponentRender?: LeftContentListItemPropTypes['as']
  $leftContentChildren?: ReactNode | null
  $rightComponentRender?: RightContentListItemPropTypes['as']
  $rightContentChildren?: ReactNode | null
  $onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  $selected?: boolean
  $labelLinkRight?: string
  $iconNameRight?: string
  $nameInput?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>

export type ListItemLinkPropTypes = {
  $disabled?: boolean
} & ListItemPropTypes
