import styled from "styled-components/native";
import { useState } from "react";
import * as ButtonStyle from "./styles";
import {
  ButtonPropTypes,
  ChildrenButtonPropTypes,
  ButtonTextPropTypes,
  ButonIconPropTypes,
} from "./types";
import { Icon } from "../icon";

const StyledPressable = styled.Pressable<ChildrenButtonPropTypes>`
  padding: 2px;
  border: solid 2px;
  border-color: transparent;
  border-radius: 12px;
`;
const ViewButton = styled.View<ChildrenButtonPropTypes>`
  ${() => ButtonStyle.getBaseButtonStyles()}
  ${(props: ChildrenButtonPropTypes) => ButtonStyle.getButtonSize(props)}
${(props: ChildrenButtonPropTypes) => ButtonStyle.getButtonVariant(props)}
`;
const TextButton = styled.Text<ButtonTextPropTypes>`
  ${() => ButtonStyle.getBaseButtonTextStyles()}
  ${(props: ButtonTextPropTypes) => ButtonStyle.getButtonTextSize(props)}
${(props: ButtonTextPropTypes) => ButtonStyle.getButtonTextVariant(props)};
`;
const IconButton = styled(Icon).attrs<ButonIconPropTypes>(
  (props: ButonIconPropTypes) => ({
    variant: props.variant,
  })
)`
  ${(props: ButonIconPropTypes) => ButtonStyle.getButtonTextVariant(props)};
`;

const Button = ({
  size = "medium",
  variant,
  children,
  disabled,
  style,
  iconName,
  iconPosition = "left",
  color = "primary",
}: ButtonPropTypes) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <StyledPressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      isPressed={isPressed}
    >
      <ViewButton
        style={style}
        variant={variant}
        disabled={disabled}
        size={size}
        isPressed={isPressed}
        color={color}
      >
        {iconName && iconPosition === "left" && (
          <IconButton
            name={iconName}
            size={size}
            color={color}
            variant={variant}
            isPressed={isPressed}
          />
        )}
        <TextButton
          variant={variant}
          disabled={disabled}
          size={size}
          isPressed={isPressed}
        >
          {children}
        </TextButton>
        {iconName && iconPosition === "right" && (
          <IconButton
            name={iconName}
            size={size}
            color={color}
            variant={variant}
            isPressed={isPressed}
          />
        )}
      </ViewButton>
    </StyledPressable>
  );
};

export default Button;
