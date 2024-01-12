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
  checked,
  defaultValue,
}) => {
  const [isChecked, setChecked] = useState(defaultValue || false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Modifica el estado de "isChecked" y si existe una funcion pasada como parámetro
   * por el usuario, la ejecuta pasándole el estado del "checked".
   * De esta forma el componente puede ser controlado o no controlado.
   */
  const handleCheck = () => {
    if (!disabled) {
      if (checked === undefined) {
        setChecked(!isChecked);
      }
      if (onChange) {
        setChecked(!isChecked);
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
    <SwitchContainer
      isChecked={checked !== undefined ? checked : isChecked}
      isPressed={isPressed}
      onMouseDown={(e) => handlePress(e)}
      onMouseUp={(e) => handlePress(e)}
      onMouseLeave={handleMouseLeave}
      isFocused={isFocused}
      disabled={disabled}
      tabIndex={isFocused ? 0 : -1}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <label>
        <input
          type="checkbox"
          checked={checked !== undefined ? checked : isChecked}
          onChange={handleCheck}
        />
        <div>
          {checked || isChecked ? <Icon size="medium" name="check" /> : null}
        </div>
      </label>
    </SwitchContainer>
  );
};

export default Switch;
