import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components'
import { getColorByProp } from '../../utils/colorUtils'
import type { IconPropTypes, IconSizeType } from './types'

const getSize = (size: IconSizeType): number => {
  switch (size) {
    case 'small':
      return 16
    case 'medium':
      return 32
    case 'large':
      return 40
    default:
      return 24
  }
}

const StyledIcon = styled(MaterialIcons)<IconPropTypes>`
  color: ${(props) => getColorByProp(props.color, props.theme)};
  font-weight: 600;
`

const Icon: React.FC<IconPropTypes> = ({
  name,
  size = 'medium',
  color = 'primary',
  style
}: IconPropTypes) => {
  return (
    <StyledIcon name={name} color={color} size={getSize(size)} style={style} />
  )
}

export default Icon
