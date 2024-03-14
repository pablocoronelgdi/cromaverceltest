import type { InputHTMLAttributes } from 'react'

export type PinInputPropTypes = {
  $pinLength?: number
  $label?: string
  $helperText?: string
  $visibility?: boolean
  $errorMessage?: string
  $error?: boolean
  $onComplete?: (pin: string) => void
  $onPinChange?: (pin: string) => void

} & InputHTMLAttributes<HTMLInputElement>
