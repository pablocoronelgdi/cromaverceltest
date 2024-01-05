import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { IconPropTypes } from "../icon";

/*----------  Props del botón  ----------*/

export type ButtonSizeType = "small" | "medium" | "large";
export type ButtonVariantType = "filled" | "outlined" | "link";

export type ButtonPropTypes = {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  theme?: object;
  children?: ReactNode;
  disabled?: boolean;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  iconPosition?: "left" | "right";
  color?: string;
} & PressableProps;

export type ChildrenButtonPropTypes = {
  isPressed: boolean;
} & ButtonPropTypes;

/*----------  Props del texto del boton  ----------*/

export type ButtonTextPropTypes = {
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  isPressed?: boolean;
  disabled?: boolean;
};
/*----------  Props del icono del boton  ----------*/

export type ButonIconPropTypes = {
  variant?: ButtonVariantType;
  isPressed?: boolean;
} & IconPropTypes;