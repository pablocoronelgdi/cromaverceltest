import type { InputHTMLAttributes } from 'react'

export type PinInputPropTypes = {
  length: number
  label?: string
  type?: 'text' | 'password'
  errorMessage?: string
  error?: boolean
  onComplete: (pin: string) => void
} & InputHTMLAttributes<HTMLInputElement>
