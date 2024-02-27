import type { PictogramCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type PictogramSegmentName = 'Individuos' | 'Selecta' | 'Empresas' | 'Agro' | 'Gobierno'
export type PictogramBackgroundColor = 'Light' | 'Dark'
export type PictogramIndividuosColor = 'Blue' | 'Pink'
export type PictogramSize = 'LG' | 'MD' | 'SM'

export type PictogramPropTypes = {
  name?: PictogramCatalog
  size?: PictogramSize
  children?: ReactNode
  segmentName?: PictogramSegmentName
  backgroundColor?: PictogramBackgroundColor
  individuosColor?: PictogramIndividuosColor
}
