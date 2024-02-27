import * as Logos from '../logos'
import * as Pictograms from '../pictograms'
import * as Illustrations from '../illustrations'
import type { IllustrationCatalog } from '../types/illustrationTypes'
import type { LogoCatalog } from '../types/logoTypes'
import type { PictogramCatalog } from '../types/pictogramTypes'

export type AssetName = PictogramCatalog | LogoCatalog | IllustrationCatalog

const importedLogo: any = Logos
const importedPictograms: any = Pictograms
const importedIllustrations: any = Illustrations

const getAsset = (name: AssetName, type: string | undefined): string => {
  let asset
  switch (type) {
    case 'illustration':
      asset = importedIllustrations[name as string]
      return asset ? asset.toString() : 'Svg not found'
    case 'pictogram':
      asset = importedPictograms[name as string]
      return asset ? asset.toString() : 'Svg not found'
    case 'logo':
      asset = importedLogo[name as string]
      return asset ? asset.toString() : 'Svg not found'
    default:
      asset = importedLogo[name as string]
      return asset ? asset.toString() : 'Svg not found'
  }
}

export { getAsset }
