export type SwitchProps = {
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  value?: boolean;
  defaultValue?: boolean;
};
export type SwitchInnerProps = {
  isChecked: boolean;
  isPressed: boolean;
  disabled?: boolean;
};
