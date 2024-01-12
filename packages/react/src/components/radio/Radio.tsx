import React, { ChangeEvent, useState } from "react";
import { Icon } from "../icon";
import { Color } from "@cromaui/foundations";
import { RadioProps } from "./types";
import { RadioContainer } from "./styles";

const Radio: React.FC<RadioProps> = ({
  onChange,
  disabled,
  checked,
  value,
  id,
  name,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleRadioChange = (e:ChangeEvent<HTMLInputElement>) => {
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

  return (
    <RadioContainer isPressed={isPressed} disabled={disabled}>
      <label
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        htmlFor={id}
      >
        <input
          id={id}
          disabled={disabled}
          type="radio"
          checked={checked}
          name={name}
          value={value}
          onChange={e=> handleRadioChange(e)}
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
