import type { LogoCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type LogoPropTypes = {
  name?: LogoCatalog
  width?: number
  height?: number
  colorPrimary?: string
  colorSecondary?: string
  children?: ReactNode
}
