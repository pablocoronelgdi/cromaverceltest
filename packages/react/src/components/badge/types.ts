import type { IconPropTypes } from '../icon/types'

export type BadgeSizeType = 'small' | 'medium' | 'large'
export type BadgeColorType = 'pink' | 'blue' | 'green' | 'light-blue'
export type BadgeBackgroundType = 'light' | 'dark'

export type BadgePropTypes = {
  $count?: number
  $iconName?: IconPropTypes['$name']
  $text?: string
  $size?: BadgeSizeType
  $color?: BadgeColorType
  $backgroundType?: BadgeBackgroundType
  $id?: string
} & React.HTMLAttributes<HTMLDivElement>
