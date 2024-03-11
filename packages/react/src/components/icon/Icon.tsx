import React from 'react'
import type { IconPropTypes } from './types'
import { StyledIcon } from './styles'

const Icon: React.FC<IconPropTypes> = ({
  name,
  size,
  color,
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <StyledIcon
      className={` ${className || ''}croma-icon-${size ?? 'large'}`}
      color={color}
      size={size}
      onClick={onClick}
      {...props}
    >
      {name != null ? name : typeof children === 'string' ? children : ''}
    </StyledIcon>
  )
}

export default Icon
