import type { HTMLAttributes } from 'react'

export type ProgressBarPropsTypes = {
  $duration: number
  $width?: number
  $label?: string
} & HTMLAttributes<HTMLDivElement>
