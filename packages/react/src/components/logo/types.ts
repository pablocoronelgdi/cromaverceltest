import type { LogoCatalog } from '@cromaui/assets'
import type { ReactNode } from 'react'

export type LogoPropTypes = {
  name?: LogoCatalog
  height?: number | string
  colorPrimary?: string
  colorSecondary?: string
  children?: ReactNode
}
