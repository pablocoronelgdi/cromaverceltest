import React, { useState } from 'react'
import { Icon } from '../icon'
import { color } from '@cromaui/foundations'
import { CheckContainer } from './styles'
import type { CheckProps } from './types'

const Checkbox: React.FC<CheckProps> = ({
  onChange,
  disabled,
  checked,
  defaultValue
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue ?? false)
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleCheck = (): void => {
    if (!disabled) {
      if (checked === undefined) {
        setIsChecked(!isChecked)
      }
      if (onChange) {
        setIsChecked(!isChecked)
        onChange(!isChecked)
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
    setIsFocused(false)
  }

  return (
    <CheckContainer
      isChecked={checked ?? isChecked}
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
        tabIndex={isFocused ? 0 : -1}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <input
          disabled={disabled}
          type="checkbox"
          checked={checked ?? isChecked}
          onChange={handleCheck}
        />
        <Icon
          color={disabled ? color.neutral[400] : color.navy.main}
          name={checked ?? isChecked ? 'check_box' : 'check_box_outline_blank'}
        />
      </label>
    </CheckContainer>
  )
}

export default Checkbox
