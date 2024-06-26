import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

export type InputFieldPropTypes = {
  $error?: boolean | ((arg: any) => boolean)
  $helperText?: string
  $iconName?: string | undefined
  $iconPosition?: 'left' | 'right'
  $label?: string
  $maxCharacterCount?: number
  $type?: HTMLInputTypeAttribute
} & InputHTMLAttributes<HTMLInputElement>
