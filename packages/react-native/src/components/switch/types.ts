import type { PressableProps } from 'react-native'

export type SwitchProps = {
  onChange: (e: boolean) => void
  value?: boolean
  defaultValue?: boolean
} & PressableProps
