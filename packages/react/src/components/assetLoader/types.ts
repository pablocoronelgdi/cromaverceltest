import type { IllustrationCatalog, LogoCatalog, PictogramCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type AssetPropTypes = {
  name?: LogoCatalog | PictogramCatalog | IllustrationCatalog
  type?: 'logo' | 'pictogram' | 'illustration'
  width?: number | string
  height?: number | string
  colorPrimary?: string
  colorSecondary?: string
  children?: ReactNode
}
