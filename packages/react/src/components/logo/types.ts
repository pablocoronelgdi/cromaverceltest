import type { LogoCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type LogoSizes = 'small' | 'medium' | 'large'

export type LogoPropTypes = {
  $colorPrimary?: string
  $colorSecondary?: string
  $name?: LogoCatalog
  $size?: LogoSizes
  $id?: string
  children?: ReactNode
}
