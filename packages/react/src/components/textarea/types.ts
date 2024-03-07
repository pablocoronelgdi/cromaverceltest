import type { TextareaHTMLAttributes } from 'react'

export type TextAreaPropTypes = {
  $error?: boolean | ((arg: any) => boolean)
  $helperText?: string
  $label?: string
  $maxCharacterCount?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>
