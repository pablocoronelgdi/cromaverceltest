export type RadioPropTypes = {
  onChange?: (e: any) => void
  disabled?: boolean
  checked: boolean
  name: string
  value: string
  id?: string
}
export type RadioInnerProps = {
  isPressed: boolean
  isFocused: boolean
  disabled?: boolean
}
