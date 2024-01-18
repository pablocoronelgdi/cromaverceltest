import type { IconPropTypes } from '../icon/types'
import type { StyledImageProps } from '../image/types'

export type RoundedImageSizeType =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'

export type RoundedImagePropsTypes = {
  monogram?: string
  iconName?: IconPropTypes['name']
  photo?: StyledImageProps
  disabled?: boolean
  size: RoundedImageSizeType
}
