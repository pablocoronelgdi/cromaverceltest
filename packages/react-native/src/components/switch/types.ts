import type { PressableProps } from 'react-native'

export type SwitchProps = {
  value?: boolean
  defaultValue?: boolean
} & PressableProps

export type SwitchAreaProps = {
  disabled: boolean
  checked: boolean
  pressed?: boolean
}
