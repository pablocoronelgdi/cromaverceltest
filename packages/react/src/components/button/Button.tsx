import React, { useState } from 'react'
import type { ButtonPropTypes } from './types'
import { ButtonContainerStyled, ButtonStyled } from './styles'
import { Icon } from '../icon'

const Button: React.FC<ButtonPropTypes> = ({
  variant = 'filled',
  children,
  iconName,
  size = 'medium',
  iconPosition = 'left',
  disabled,
  background = 'dark',
  onClick,
  type = 'button',
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = (e?: React.MouseEvent<HTMLElement>): void => {
    if (e) {
      e.preventDefault()
    }
    setIsPressed(true)
  }
  const handleMouseUp = (e?: React.MouseEvent<HTMLElement>): void => {
    if (e) {
      e.preventDefault()
    }
    setIsPressed(false)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Tab') {
      console.log(e)
    }
    if (e.key === 'Enter') {
      handleMouseDown()
    }
  }
  const handleKeyUp = (e: React.KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Tab') {
      console.log(e)
    }
    if (e.key === 'Enter') {
      handleMouseUp()
    }
  }
  const handleMouseLeave = (): void => {
    if (isPressed) {
      setIsPressed(!isPressed)
    }
  }
  return (
    <ButtonContainerStyled>
      <ButtonStyled
        className={`croma-button-${background === 'light' ? 'light-' : ''}${variant}`}
        disabled={disabled}
        size={size}
        iconPosition={iconPosition}
        onClick={onClick}
        onKeyDown={(e): void => {
          handleKeyDown(e)
        }}
        onKeyUp={(e): void => {
          handleKeyUp(e)
        }}
        onMouseDown={(e): void => {
          handleMouseDown(e)
        }}
        onMouseUp={(e): void => {
          handleMouseUp(e)
        }}
        onMouseLeave={handleMouseLeave}
        isPressed={isPressed}
        {...props}
      >
        {children}
        {iconName && (
          <Icon
            $name={iconName}
            $size={
              size === 'extra-small'
                ? 'small'
                : size === 'medium' || size === 'large'
                  ? 'large'
                  : 'medium'
            }
          />
        )}
      </ButtonStyled>
    </ButtonContainerStyled>
  )
}

export default Button
