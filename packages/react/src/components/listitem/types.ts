import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import type { LeftContentListItemPropTypes } from './leftContent/types'
import type { RightContentListItemPropTypes } from './rightContent/types'

export type ListItemPropTypes = {
  $as?: 'item' | 'link'
  $description?: string
  $leftContentChildren?: ReactNode
  $leftComponentRender?: LeftContentListItemPropTypes['as']
  $rightContentChildren?: ReactNode
  $rightComponentRender?: RightContentListItemPropTypes['as']
  $onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  $selected?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
AnchorHTMLAttributes<HTMLAnchorElement>

export type ListItemLinkPropTypes = {
  $disabled?: boolean
} & ListItemPropTypes
