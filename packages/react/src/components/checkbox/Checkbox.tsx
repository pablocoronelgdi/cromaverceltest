import React, { type InputHTMLAttributes, useId, useState } from 'react'
import { Icon } from '../icon'
import { CheckContainer } from './styles'
import { color } from '@cromaui/foundations'

const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  disabled,
  checked,
  defaultChecked,
  type,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false)
  const [isPressed, setIsPressed] = useState(false)
  const defaultID = useId()

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!disabled) {
      if (checked === undefined) {
        setIsChecked(!isChecked)
      }
      if (onChange) {
        setIsChecked(!isChecked)
        onChange(e)
      }
    }
  }
  const handlePress = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    setIsPressed(!isPressed)
  }
  const handleMouseLeave = (): void => {
    if (isPressed) {
      setIsPressed(!isPressed)
    }
  }

  return (
    <CheckContainer
      $isChecked={checked ?? isChecked}
      $isPressed={isPressed}
      disabled={disabled}
      id={props.id || defaultID}
    >
      <label
        onMouseDown={(e) => {
          handlePress(e)
        }}
        onMouseUp={(e) => {
          handlePress(e)
        }}
        onMouseLeave={handleMouseLeave}
      >
        <input
          disabled={disabled}
          type="checkbox"
          checked={checked ?? isChecked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleCheck(e)
          }}
          {...props}
        />
        <Icon
          color={disabled ? color.neutral[400] : color.navy.main}
          $name={checked ?? isChecked ? 'check_box' : 'check_box_outline_blank'}
        />
      </label>
    </CheckContainer>
  )
}

export default Checkbox
