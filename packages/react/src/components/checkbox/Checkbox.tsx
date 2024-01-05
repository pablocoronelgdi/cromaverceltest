import React, { useState } from "react";
import styled from "styled-components";
import * as checkboxStyles from "./styles";
import { Icon } from "../icon";
import { Color } from "@cromaui/foundations";
import { CheckInnerProps, CheckProps } from "./types";

const CheckContainer = styled.div<CheckInnerProps>`
  ${() => checkboxStyles.checkContainer}
`;
const CheckInput = styled.input`
  ${() => checkboxStyles.checkInput}
`;
const CheckArea = styled.label<CheckInnerProps>`
  ${() => checkboxStyles.checkArea}
`;

const Checkbox: React.FC<CheckProps> = ({
  onChange,
  disabled,
  value,
  defaultValue,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);

  const handleCheck = () => {
    if (!disabled) {
      if (value === undefined) {
        setIsChecked(!isChecked);
      }
      if (onChange) {
        onChange(!isChecked);
      }
    }
  };
  const handlePress = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsPressed(!isPressed);
  };
  const handleMouseLeave = () => {
    if (isPressed) {
      setIsPressed(!isPressed);
    }
  };

  return (
    <CheckContainer
      isChecked={isChecked}
      isPressed={isPressed}
      disabled={disabled}
    >
      <CheckArea
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        isPressed={isPressed}
        isChecked={value !== undefined ? value : isChecked}
        disabled={disabled}
      >
        <CheckInput
          disabled={disabled}
          type="checkbox"
          checked={value !== undefined ? value : isChecked}
          onChange={handleCheck}
        />
        <Icon
          color={disabled ? Color.Neutral[400] : Color.Navy.main}
          name={value || isChecked ? "check_box" : "check_box_outline_blank"}
        />
      </CheckArea>
    </CheckContainer>
  );
};

export default Checkbox;
