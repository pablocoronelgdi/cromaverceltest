import type { MaterialIcons } from '@expo/vector-icons'
import type { PressableProps } from 'react-native'

export type FabPropTypes = {
  size: string
  disabled: boolean
  iconName: keyof typeof MaterialIcons.glyphMap
  value?: string
} & PressableProps

export type FabInnerPropTypes = {
  size: string
  disabled: boolean
}

export type FabPseudoTypes = {
  isHover?: boolean
  isFocus?: boolean
  isPressed?: boolean
}
