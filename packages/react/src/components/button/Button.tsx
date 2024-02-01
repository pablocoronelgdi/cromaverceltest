import React from 'react'
import type { ButtonPropTypes } from './types'
import { StyledButton } from './styles'
import { Icon } from '../icon'

const Button: React.FC<ButtonPropTypes> = ({
  variant = 'filled',
  children,
  iconName,
  size = 'medium',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={props.onClick}
      {...props}
    >
      {children}
      {iconName && (
        <Icon name={iconName} size={size !== 'small' ? 'large' : 'medium'} />
      )}
    </StyledButton>
  )
}

export default Button
