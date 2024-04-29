import type { InputHTMLAttributes } from 'react'

export type RadioPropTypes = {
  onChange?: (e: any) => void
  disabled?: boolean
  checked?: boolean
  name?: string
  value?: string
} & InputHTMLAttributes<HTMLInputElement>

export type RadioInnerProps = {
  $isPressed: boolean
  $isFocused: boolean
  disabled?: boolean
}
