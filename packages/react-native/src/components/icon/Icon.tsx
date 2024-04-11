import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import type { IconPropTypes } from './types'
import { iconStyles } from './styles'

const IconSize = {
  small: 18,
  medium: 20,
  large: 24,
  extraLarge: 32
}

const Icon: React.FC<IconPropTypes> = ({
  name,
  size = 'large',
  color = '#000',
  ...props
}: IconPropTypes) => {
  return (
    <MaterialIcons
      name={name}
      color={color}
      style={[iconStyles(IconSize[size]).icon, props.style]}
      size={IconSize[size]}
    />
  )
}

export default Icon
