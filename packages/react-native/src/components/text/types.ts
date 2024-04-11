import type { TextProps, TextStyle } from 'react-native'

export type TypograpyRecordType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyLg'
  | 'bodyMd'
  | 'bodySm'
  | 'caption'
  | 'linkLg'
  | 'linkMd'
  | 'linkSm'
  | 'buttonMd'
  | 'buttonSm'
  | 'buttonXsm'

export type StyleTextRecordType = Record<string, TextStyle>

export type TextPropTypes = {
  component?: TypograpyRecordType
  variant?: 'bold' | 'semibold' | 'regular'
} & TextProps
