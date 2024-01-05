import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon";
import * as SwitchStyles from "./styles";
import { SwitchInnerProps, SwitchProps } from "./types";



// Un div que contiene a todo el componente.
const SwitchContainer = styled.div`
  ${() => SwitchStyles.SwitchContainer}
`;

// El background del componente que contiene al input y al thumb.
const SwitchArea = styled.label<SwitchInnerProps>`
  ${() => SwitchStyles.SwitchArea}
`;

// El input oculto con transparencia 0 para manejo de eventos.
const SwitchInput = styled.input`
  ${() => SwitchStyles.SwitchInput}
`;

// La bolita trasladable del switch que contiene el icono.
const SwitchThumb = styled.div<SwitchInnerProps>`
  ${() => SwitchStyles.SwitchThumb}
`;

const Switch: React.FC<SwitchProps> = ({
  onChange,
  disabled,
  value,
  defaultValue,
}) => {
  const [isChecked, setChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);

  /* Modifica el estado de "isChecked" y si existe una funcion pasada como parámetro
   * por el usuario, la ejecuta pasándole el estado del "checked".
   * De esta forma el componente puede ser controlado o no controlado. */
  const handleCheck = () => {
    if (!disabled) {
      if (value === undefined) {
        setChecked(!isChecked);
      }
      if (onChange) {
        onChange(!isChecked);
      }
    }
  };

  /* Eventos para setear en true o falso el estado de isPressed que permite agrandar el thumb */
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
    <SwitchContainer>
      <SwitchArea
        isChecked={value !== undefined ? value : isChecked}
        isPressed={isPressed}
        onMouseDown={(e) => handlePress(e)}
        onMouseUp={(e) => handlePress(e)}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
      >
        <SwitchInput
          type="checkbox"
          checked={value !== undefined ? value : isChecked}
          onChange={handleCheck}
        />
        <SwitchThumb
          disabled={disabled}
          isChecked={value !== undefined ? value : isChecked}
          isPressed={isPressed}
        >
          {value || isChecked ? <Icon size="medium" name="check" /> : null}
        </SwitchThumb>
      </SwitchArea>
    </SwitchContainer>
  );
};

export default Switch;
