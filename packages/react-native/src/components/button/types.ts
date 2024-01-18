import type { MaterialIcons } from '@expo/vector-icons'
import type { ReactNode } from 'react'
import type { PressableProps } from 'react-native'
import type { IconPropTypes } from '../icon'

/* ----------  Props del botón  ---------- */

export type ButtonSizeType = 'small' | 'medium' | 'large'
export type ButtonVariantType = 'filled' | 'outlined' | 'link'

export type ButtonPropTypes = {
  size?: ButtonSizeType
  variant?: ButtonVariantType
  theme?: any
  children?: ReactNode
  disabled?: boolean
  iconName?: keyof typeof MaterialIcons.glyphMap
  iconPosition?: 'left' | 'right'
  color?: string
} & PressableProps

export type ChildrenButtonPropTypes = {
  isPressed: boolean
} & ButtonPropTypes

/* ----------  Props del texto del boton  ---------- */

export type ButtonTextPropTypes = {
  size?: ButtonSizeType
  variant?: ButtonVariantType
  isPressed?: boolean
  disabled?: boolean
  theme?: any
  color?: string
}
/* ----------  Props del icono del boton  ---------- */

export type ButonIconPropTypes = {
  variant?: ButtonVariantType
  isPressed?: boolean
} & IconPropTypes
