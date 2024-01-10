import React, { useState } from "react";
import { Icon } from "../icon";
import { SwitchProps } from "./types";
import { SwitchContainer } from "./styles";

/**
 * Elemento de interfaz de usuario que permite a los usuarios alternar entre dos estados
 * "verdadero" o "falso" ofreciendo una forma intuitiva de controlar opciones binarias 
 * con retroalimentación visual inmediata. Ideal para activar o desactivar funciones de manera sencilla.
 */
const Switch: React.FC<SwitchProps> = ({
  onChange,
  disabled = false,
  value,
  defaultValue,
}) => {
  const [isChecked, setChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);

  /**
   * Modifica el estado de "isChecked" y si existe una funcion pasada como parámetro
   * por el usuario, la ejecuta pasándole el estado del "checked".
   * De esta forma el componente puede ser controlado o no controlado.
   */
  const handleCheck = () => {
    if (!disabled) {
      if (value === undefined) {
        setChecked(!isChecked);
      }
      if (onChange) {
        setChecked(!isChecked);
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
    <SwitchContainer
      isChecked={value !== undefined ? value : isChecked}
      isPressed={isPressed}
      onMouseDown={(e) => handlePress(e)}
      onMouseUp={(e) => handlePress(e)}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      <label>
        <input
          type="checkbox"
          checked={value !== undefined ? value : isChecked}
          onChange={handleCheck}
        />
        <div>
          {value || isChecked ? <Icon size="medium" name="check" /> : null}
        </div>
      </label>
    </SwitchContainer>
  );
};

export default Switch;
