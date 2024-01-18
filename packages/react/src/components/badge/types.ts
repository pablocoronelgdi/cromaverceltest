import type { IconPropTypes } from '../icon/types'

export type BadgeSizeType = 'small' | 'medium' | 'large'
export type BadgeColorType = 'pink' | 'blue' | 'green'
export type BadgeBackgroundType = 'light' | 'dark'

export type BadgePropsTypes = {
  count?: number
  iconName?: IconPropTypes['name']
  text?: string
  size?: BadgeSizeType
  color?: BadgeColorType
  backgroundType?: BadgeBackgroundType
}
