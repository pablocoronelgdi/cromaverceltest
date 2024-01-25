import * as Logos from '../logos'
import type { LogoCatalog } from '../types/types'

const importedLogo: any = Logos

const getLogo = (name: LogoCatalog): string => {
  const logo = importedLogo[name as string]
  return logo ? logo.toString() : 'Logo not found'
}

export { getLogo }
