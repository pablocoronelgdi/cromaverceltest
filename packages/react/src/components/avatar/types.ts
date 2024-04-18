import type { IconPropTypes } from '../icon/types'

export type AvatarSizeType = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export type AvatarPropTypes = {
  $alt?: string
  $disabled?: boolean
  $iconName?: IconPropTypes['$name']
  $monogram?: string
  $id?: string
  $size?: AvatarSizeType
  $src?: string
}
