import React, { useState } from "react";
import { Icon } from "../icon";
import { Color } from "@cromaui/foundations";
import { CheckProps } from "./types";
import { CheckContainer } from "./styles";

const Checkbox: React.FC<CheckProps> = ({
  onChange,
  disabled,
  checked,
  defaultValue,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleCheck = () => {
    if (!disabled) {
      if (checked === undefined) {
        setIsChecked(!isChecked);
      }
      if (onChange) {
        setIsChecked(!isChecked);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Tab") {
      setIsFocused(true);
    }
  };

  const handleClick = () => {
    setIsFocused(false);
  };

  return (
    <CheckContainer
      isChecked={checked !== undefined ? checked : isChecked}
      isPressed={isPressed}
      isFocused={isFocused}
      disabled={disabled}
    >
      <label
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        tabIndex={isFocused ? 0 : -1}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <input
          disabled={disabled}
          type="checkbox"
          checked={checked !== undefined ? checked : isChecked}
          onChange={handleCheck}
        />
        <Icon
          color={disabled ? Color.Neutral[400] : Color.Navy.main}
          name={checked || isChecked ? "check_box" : "check_box_outline_blank"}
        />
      </label>
    </CheckContainer>
  );
};

export default Checkbox;
