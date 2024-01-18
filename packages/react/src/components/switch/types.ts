export type SwitchProps = {
  onChange?: (isChecked: boolean) => void
  disabled?: boolean
  checked?: boolean
  defaultValue?: boolean
}
export type SwitchInnerProps = {
  isChecked: boolean
  isPressed: boolean
  isFocused: boolean
  disabled?: boolean
}
