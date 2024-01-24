import * as Logos from '../index'
import type { LogoTypes } from '../types/types'

const importedLogo: any = Logos

const getLogo = (name: LogoTypes): string => {
  const logo = importedLogo[name]

  return logo ? logo.toString() : 'Logo not found'
}

export { getLogo }
