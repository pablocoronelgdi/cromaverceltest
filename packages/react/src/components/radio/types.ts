export type RadioProps = {
  onChange?: (e:any) => void;
  disabled?: boolean;
  checked: boolean;
  name: string;
  value: string;
  id?: string;
};
export type RadioInnerProps = {
  isPressed: boolean;
  disabled?: boolean;
};
