import React, { ChangeEvent, useState } from "react";
import { Icon } from "../icon";
import { Color } from "@cromaui/foundations";
import { RadioPropTypes } from "./types";
import { RadioContainer } from "./styles";

const Radio: React.FC<RadioPropTypes> = ({
  onChange,
  disabled,
  checked,
  value,
  id,
  name,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
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
    <RadioContainer
      isPressed={isPressed}
      isFocused={isFocused}
      disabled={disabled}
    >
      <label
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        htmlFor={id}
        tabIndex={isFocused ? 0 : -1}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <input
          id={id}
          disabled={disabled}
          type="radio"
          checked={checked}
          name={name}
          value={value}
          onChange={(e) => handleRadioChange(e)}
        />
        <Icon
          color={disabled ? Color.Neutral[400] : Color.Navy.main}
          name={checked ? "radio_button_checked" : " radio_button_unchecked"}
        />
      </label>
    </RadioContainer>
  );
};

export default Radio;
