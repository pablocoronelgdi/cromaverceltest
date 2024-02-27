import type { IllustrationCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type IllustrationPropTypes = {
  name?: IllustrationCatalog
  width?: number | string
  height?: number | string
  colorPrimary?: string
  colorSecondary?: string
  children?: ReactNode
}
