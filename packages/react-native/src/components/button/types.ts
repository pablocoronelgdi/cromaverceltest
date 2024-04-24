import type { MaterialIcons } from '@expo/vector-icons'
import type { ReactNode } from 'react'
import type { PressableProps } from 'react-native'
import type { IconPropTypes } from '../icon'

/* ----------  Props del botón  ---------- */


export type ButtonIconPositionType = 'left' | 'right'
export type ButtonSizeType = 'extraSmall' | 'small' | 'medium' | 'large'
export type ButtonVariantType = 'fill' | 'outline' | 'ghost' | 'tonal'
export type ButtonBackgroundType = 'light' | 'dark'

export type ButtonPropTypes = {
  size?: ButtonSizeType
  text: string
  backgroundType: ButtonBackgroundType
  fullWidth: boolean
  iconName: string
  iconPosition?: 'left' | 'right'
  variant?: ButtonVariantType
  disabled?: boolean
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

export type ButtonIconPropTypes = {
  variant?: ButtonVariantType
  isPressed?: boolean
} & IconPropTypes
