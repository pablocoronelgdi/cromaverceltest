export type CheckProps = {
  onChange?: (isChecked: boolean) => void
  disabled?: boolean
  checked?: boolean
  defaultValue?: boolean
}
export type CheckInnerProps = {
  isChecked: boolean
  isPressed: boolean
  isFocused: boolean
  disabled?: boolean
}
