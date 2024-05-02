import type { MaterialIcons } from '@expo/vector-icons'
import type { TextStyle, TouchableOpacityProps, ViewProps, ViewStyle } from 'react-native'

export type FloatingRecordType = Record<string, ViewStyle | TextStyle>

export type FloatingButtonPropTypes = {
  size?: string
  disabled?: boolean
  iconName?: keyof typeof MaterialIcons.glyphMap
  label?: string
} & TouchableOpacityProps

export type FloatingMenuPropTypes = {
  disabled?: boolean
  openIcon?: keyof typeof MaterialIcons.glyphMap
  closeIcon?: keyof typeof MaterialIcons.glyphMap
  label?: string
  mainButtonProps?: FloatingButtonPropTypes
} & ViewProps
