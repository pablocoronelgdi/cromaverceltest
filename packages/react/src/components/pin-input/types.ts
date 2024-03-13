import type { InputHTMLAttributes } from 'react'

export type PinInputPropTypes = {
  $pinLength?: number
  $label?: string
  $secret?: boolean
  $errorMessage?: string
  $error?: boolean
  $onComplete?: (pin: string) => void
  $onPinChange?: (pin: string) => void

} & InputHTMLAttributes<HTMLInputElement>
