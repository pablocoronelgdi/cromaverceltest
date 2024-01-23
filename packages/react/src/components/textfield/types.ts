import type { InputHTMLAttributes } from 'react'

export type TextfieldPropTypes = {
  error: boolean | (() => boolean)
  label: string
  helperText: string
  type: 'text' | 'password'
  isFocused: boolean
  characterCount: number
} & InputHTMLAttributes<HTMLInputElement>
