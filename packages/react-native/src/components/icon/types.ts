import type { MaterialIcons } from '@expo/vector-icons'
import type { StyleProp, TextStyle } from 'react-native'

export type IconSizeType = 'small' | 'medium' | 'large' | 'extraLarge'
export type IconColorType = string
export type IconNameType = keyof typeof MaterialIcons.glyphMap | undefined
export type IconPropTypes = {
  name?: IconNameType
  size?: IconSizeType
  color?: IconColorType
  style?: StyleProp<TextStyle>
  theme?: object
}
