import { PressableProps } from "react-native"

export type LinkSizeType = 'small' | 'medium' | 'large'
export type LinkIconPositionType = 'left' | 'right'

export type LinkPropTypes = {
  disabled?: boolean
  href?: string
  iconName?: string
  iconPosition?: LinkIconPositionType 
  pressed?: boolean
  size?: LinkSizeType
  text?: string
  visited?: boolean
} & PressableProps
