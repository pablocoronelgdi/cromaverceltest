import * as Logos from '../logos'
import type { IllustrationCatalog } from '../types/illustrationTypes'
import type { LogoCatalog } from '../types/logoTypes'
import type { PictogramCatalog } from '../types/pictogramTypes'

export type AssetName = PictogramCatalog | LogoCatalog | IllustrationCatalog

const importedLogo: any = Logos

const getAsset = (name: AssetName): string => {
  const logo = importedLogo[name as string]
  return logo ? logo.toString() : 'Logo not found'
}

export { getAsset }
