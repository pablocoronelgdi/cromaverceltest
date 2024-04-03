import type { TextProps, TextStyle } from 'react-native'

export type TypograpyRecordType = Record<string, string>
export type StyleTextRecordType = Record<string, TextStyle>
export type TextPropTypes = {
  component?: keyof TypograpyRecordType
  variant?: 'bold' | 'semibold' | 'regular'
} & TextProps
