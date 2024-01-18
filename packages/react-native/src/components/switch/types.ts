import type { PressableProps } from 'react-native'

export type SwitchProps = {
  disabled?: boolean
  onPress?: any
  value: boolean
} & PressableProps

export type SwitchAreaProps = {
  disabled: boolean
  checked: boolean
  pressed?: boolean
}
