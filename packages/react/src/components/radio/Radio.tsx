import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import { Icon } from '../icon'
import { color } from '@cromaui/foundations'
import { RadioContainer } from './styles'
import type { RadioPropTypes } from './types'

const Radio: React.FC<RadioPropTypes> = ({
  onChange,
  disabled,
  checked,
  value,
  id,
  name
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e)
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
    setIsFocused(false)
  }

  return (
    <RadioContainer
      isPressed={isPressed}
      isFocused={isFocused}
      disabled={disabled}
    >
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
          id={id}
          disabled={disabled}
          type="radio"
          checked={checked}
          name={name}
          value={value}
          onChange={(e) => {
            handleRadioChange(e)
          }}
        />
        <Icon
          color={disabled ? color.neutral[400] : color.navy.main}
          name={checked ? 'radio_button_checked' : ' radio_button_unchecked'}
        />
      </label>
    </RadioContainer>
  )
}

export default Radio
