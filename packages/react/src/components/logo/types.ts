import type { LogoCatalog } from '@cromaui/assets'

export type LogoPropTypes = {
  name?: LogoCatalog
  width?: number
  height?: number
  colorPrimary?: string
  colorSecondary?: string
  children?: React.SVGAttributes<SVGSVGElement>
}
