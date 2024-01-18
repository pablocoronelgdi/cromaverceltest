import React from 'react'
import { color } from '@cromaui/foundations'
import { StyledLink } from './styles'
import { Icon } from '../icon'
import type { LinkPropsTypes, LinkSizeType } from './types'

export const getSize = (size?: LinkSizeType): string => {
  switch (size) {
    case 'large':
      return '20px'
    case 'medium':
      return '20px'
    case 'small':
      return '16px'
    default:
      return '20px'
  }
}

const Link: React.FC<LinkPropsTypes> = ({
  link = '',
  content = 'terminos y condiciones',
  alt = 'terminos y condiciones',
  title = 'terminos y condiciones',
  target,
  disabled = false,
  size,
  className = 'no-drop',
  iconLeft = false,
  iconRight = false,
  iconName = 'attachment'
}) => {
  const iconSize: LinkSizeType = (() => {
    switch (size) {
      case 'small':
        return 'small'
      case 'medium':
        return 'medium'
      case 'large':
        return 'large'
      default:
        return 'medium'
    }
  })()

  return (
    <StyledLink
      link={disabled ? '#' : link}
      href={disabled ? '#' : link}
      alt={alt}
      title={title}
      content={content}
      target={target}
      disabled={disabled}
      className={`${className} size`}
      iconName={iconName}
      size={size}
    >
      {iconRight && (
        <Icon
          color={disabled ? color.neutral[400] : color.blue.main}
          name={iconName}
          size={iconSize}
        />
      )}
      <p>{content}</p>
      {iconLeft && (
        <Icon
          color={disabled ? color.neutral[400] : color.blue.main}
          name={iconName}
          size={iconSize}
        />
      )}
    </StyledLink>
  )
}

export default Link
