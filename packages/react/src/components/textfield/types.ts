import type { InputHTMLAttributes } from 'react'

export type TextfieldPropTypes = {
  error?: boolean | ((arg: any) => boolean)
  label?: string
  helperText?: string
  type?: 'text' | 'password'
  characterCount?: number
  iconName?: string | undefined
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>
