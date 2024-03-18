import React, { type InputHTMLAttributes, useState, useId } from 'react'
import { Icon } from '../icon'
import { SwitchContainer } from './styles'

/**
 * Elemento de interfaz de usuario que permite a los usuarios alternar entre dos estados
 * "verdadero" o "falso" ofreciendo una forma intuitiva de controlar opciones binarias
 * con retroalimentación visual inmediata. Ideal para activar o desactivar funciones de manera sencilla.
 */
const Switch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  checked,
  disabled,
  defaultValue,
  ...props
}) => {
  const [isChecked, setChecked] = useState<boolean>(
    defaultValue?.toString().toLocaleLowerCase() === 'true' ?? false
  )
  const [isPressed, setIsPressed] = useState(false)
  const defaultID = useId()

  /**
   * Modifica el estado de "isChecked" y si existe una funcion pasada como parámetro
   * por el usuario, la ejecuta pasándole el estado del "checked".
   * De esta forma el componente puede ser controlado o no controlado.
   */
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!disabled) {
      if (checked === undefined) {
        setChecked(!isChecked)
      }
      if (onChange) {
        setChecked(!isChecked)
        onChange(e)
      }
    }
  }

  const handlePress = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (!disabled) {
      setIsPressed(!isPressed)
    }
  }
  const handleMouseLeave = (): void => {
    if (isPressed) {
      setIsPressed(!isPressed)
    }
  }

  return (
    <SwitchContainer
      id={props.id ?? defaultID}
      $isChecked={checked ?? isChecked}
      $isPressed={isPressed}
      onMouseDown={(e) => {
        handlePress(e)
      }}
      onMouseUp={(e) => {
        handlePress(e)
      }}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className="croMa-switch-container"
    >
      <label>
        <input
          type="checkbox"
          checked={checked ?? isChecked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleCheck(e)
          }}
        />
        <div>{checked ?? isChecked ? <Icon $size="medium" $name="check" /> : null}</div>
      </label>
    </SwitchContainer>
  )
}

export default Switch
