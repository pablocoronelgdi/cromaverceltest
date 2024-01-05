export type CheckProps = {
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  value?: boolean;
  defaultValue?: boolean;
};
export type CheckInnerProps = {
  isChecked: boolean;
  isPressed: boolean;
  disabled?: boolean;
};
