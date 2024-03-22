import type { HTMLAttributes } from 'react'

export type SpinnerPropTypes = {
  id?: string
  $withLogo?: boolean
  $label?: string
} & HTMLAttributes<HTMLDivElement>
