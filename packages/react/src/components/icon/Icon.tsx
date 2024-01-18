import React from 'react'
import styled from 'styled-components'
import { color, shapes } from '@cromaui/foundations'
import type { IconPropTypes, IconSizeType } from './types'

const getSize = (size?: IconSizeType): string => {
  switch (size) {
    case 'small':
      return '16px'
    case 'medium':
      return '20px'
    case 'large':
      return '24px'
    case 'extra-large':
      return '32px'
    default:
      return '24px'
  }
}

const StyledIcon = styled.span<IconPropTypes>`
  white-space: nowrap;
  word-wrap: normal;
  margin: 0;
  padding: 0;
  line-height: ${(props) => getSize(props.size)};
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  color: ${(props) => props.color && color.navy.main};
  background-color: transparent;
  font-size: ${(props) => getSize(props.size)};
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  user-select: none;
  border-radius: ${shapes.full};
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`

const Icon: React.FC<IconPropTypes> = ({ name = 'info', size, color }) => {
  return (
    <StyledIcon color={color} size={size}>
      {name}
    </StyledIcon>
  )
}

export default Icon
