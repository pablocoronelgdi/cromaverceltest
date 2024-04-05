import type { PressableProps } from 'react-native'

export type CheckboxProps = {
  onChange: (e: boolean) => void
  checked?: boolean
  defaultChecked?: boolean
} & PressableProps
