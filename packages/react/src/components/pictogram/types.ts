import type { PictogramCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type PictoGramPropTypes = {
  name?: PictogramCatalog
  width?: number | string
  height?: number | string
  colorPrimary?: string
  colorSecondary?: string
  children?: ReactNode
}
