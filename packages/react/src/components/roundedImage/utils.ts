import type { RoundedImageSizeType } from './types'

export const getSize = (size?: RoundedImageSizeType): string => {
  switch (size) {
    case 'extra-small':
      return '32px'
    case 'small':
      return '40px'
    case 'medium':
      return '48px'
    case 'large':
      return '72px'
    case 'extra-large':
      return '80px'
    default:
      return '32px'
  }
}
