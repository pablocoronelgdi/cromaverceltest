import { color } from '@cromaui/foundations'
import type {
  PictogramBackgroundColor,
  PictogramSegmentName,
  PictogramIndividuosColor,
  PictogramSize
} from './types'

export const getPictogramColors = (
  segmentName: PictogramSegmentName,
  backgroundColor: PictogramBackgroundColor,
  individuosColor: PictogramIndividuosColor
): { colorPrimary: string, colorSecondary: string } => {
  const isBackgroundLight = backgroundColor === 'Light'
  const isBlue = individuosColor === 'Blue'

  const segmentColors: Record<
  PictogramSegmentName,
  { colorPrimary: string, colorSecondary: string }
  > = {
    Individuos: {
      colorPrimary: isBackgroundLight ? color.navy.main : color.neutral[200],
      colorSecondary: isBlue ? color.blue.main : color.pink.main
    },
    Selecta: {
      colorPrimary: isBackgroundLight ? color.black.main : color.neutral[200],
      colorSecondary: color.gold.main
    },
    Empresas: {
      colorPrimary: isBackgroundLight ? color.navy.main : color.neutral[200],
      colorSecondary: color.brandRed.main
    },
    Agro: {
      colorPrimary: isBackgroundLight ? color.navy.main : color.neutral[200],
      colorSecondary: color.green.main
    },
    Gobierno: {
      colorPrimary: isBackgroundLight ? color.navy.main : color.neutral[200],
      colorSecondary: color.skyBlue.main
    }
  }

  return segmentColors[segmentName] || segmentColors.Individuos
}

export const getPictogramSize = (size: PictogramSize): { height: string, width: string } => {
  switch (size) {
    case 'large':
      return { height: '64px', width: '64px' }
    case 'medium':
      return { height: '32px', width: '32px' }
    case 'small':
      return { height: '24px', width: '24px' }
    default:
      return { height: '32px', width: '32px' }
  }
}
