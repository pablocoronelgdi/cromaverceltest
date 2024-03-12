import type { IconPropTypes } from '../icon/types'

export type RoundedImageSizeType = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export type RoundedImagePropsTypes = {
  $monogram?: string
  $iconName?: IconPropTypes['name']
  $src?: string
  $alt?: string
  $disabled?: boolean
  $size?: RoundedImageSizeType
  $id?: string
}
