import React, { useState, useId } from 'react'
import type { ChangeEvent } from 'react'
import { Icon } from '../icon'
import { color } from '@cromaui/foundations'
import { RadioContainer } from './styles'
import type { RadioPropTypes } from './types'

const RadioButton: React.FC<RadioPropTypes> = ({
  onChange,
  disabled,
  checked,
  defaultChecked,
  value,
  id,
  name,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false)
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const defaultId = useId()

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Tab') {
      setIsFocused(true)
    }
  }

  const handleClick = (): void => {
    if (!disabled) {
      setIsFocused(!isFocused)
    }
  }

  return (
    <RadioContainer $isPressed={isPressed} $isFocused={isFocused} disabled={disabled}>
      <label
        onMouseDown={(e) => {
          handlePress(e)
        }}
        onMouseUp={(e) => {
          handlePress(e)
        }}
        onMouseLeave={handleMouseLeave}
        htmlFor={id}
        tabIndex={isFocused ? 0 : -1}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <input
          id={id || defaultId}
          disabled={disabled}
          type="radio"
          checked={checked ?? isChecked}
          name={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleRadioChange(e)
          }}
          {...props}
        />
        <Icon
          color={disabled ? color.neutral[400] : color.navy.main}
          $name={checked ? 'radio_button_checked' : ' radio_button_unchecked'}
        />
      </label>
    </RadioContainer>
  )
}

export default RadioButton
