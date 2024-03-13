import type { PictogramCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type PictogramSegmentName = 'Individuos' | 'Selecta' | 'Empresas' | 'Agro' | 'Gobierno'
export type PictogramBackgroundColor = 'Light' | 'Dark'
export type PictogramIndividuosColor = 'Blue' | 'Pink'
export type PictogramSize = 'large' | 'medium' | 'small'

export type PictogramPropTypes = {
  $name?: PictogramCatalog
  $size?: PictogramSize
  $segmentName?: PictogramSegmentName
  $backgroundColor?: PictogramBackgroundColor
  $individuosColor?: PictogramIndividuosColor
  children?: ReactNode
  $id?: string
}
