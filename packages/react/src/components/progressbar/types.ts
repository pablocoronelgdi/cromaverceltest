import type { HTMLAttributes } from 'react'

export type ProgressBarPropsTypes = {
  $duration: number
  $width?: number
  $label?: string
  $id?: string
} & HTMLAttributes<HTMLDivElement>
