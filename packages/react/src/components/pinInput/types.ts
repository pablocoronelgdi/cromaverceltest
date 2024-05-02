import type { InputHTMLAttributes } from 'react'

export type PinInputPropTypes = {
  $error?: boolean | ((arg: any) => boolean)
  $helperText?: string | null
  $label?: string
  $pinLength?: number
  $visibility?: boolean
  $onComplete?: (pin: string) => void
  $onPinChange?: (pin: string) => void
} & InputHTMLAttributes<HTMLInputElement>
