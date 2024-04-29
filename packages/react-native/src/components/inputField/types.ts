import type { TextInputProps, DimensionValue } from 'react-native'

export type InputFieldPropTypes = {
  error?: boolean | ((arg: any) => boolean)
  helperText?: string
  iconName?: string | undefined
  iconPosition?: 'left' | 'right'
  label?: string
  maxCharacterCount?: number
  password?: boolean
  disabled?: boolean
  width?: DimensionValue | undefined
} & TextInputProps
