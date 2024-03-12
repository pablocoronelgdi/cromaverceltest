import type { AnchorHTMLAttributes, ReactNode } from 'react'
export type LinkSizeType = 'small' | 'medium' | 'large'

export type LinkPropsTypes = {
  $id?: number
  $children?: ReactNode
  $href?: string
  alt?: string
  $title?: string
  $iconRight?: boolean
  $iconLeft?: boolean
  $iconName?: string
  $className?: string
  $target?: string
  $disabled?: boolean
  $size?: LinkSizeType
  $weight?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>
