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
  $children = 'macro',
  $size,
  $className = 'no-drop',
  $iconLeft = false,
  $iconRight = false,
  $iconName = '',
  $weightRegular,
  $id,
  $disabled,
  ...props
}) => {
  const iconSize: LinkSizeType = (() => {
    switch ($size) {
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
      $id={$id}
      $weightRegular={$weightRegular}
      href={!$disabled ? props.href : ''}
      alt={props.alt || props.href}
      title={props.title || props.href}
      target={props.target}
      $disabled={$disabled}
      className={`${$className} size`}
      $iconName={$iconName}
      $size={$size}
      onClick={$disabled ? (e) => e.preventDefault() : undefined}
      {...props}
    >
      {$iconRight && (
        <Icon
          color={$disabled ? color.neutral[400] : color.blue.main}
          $name={$iconName}
          $size={iconSize}
        />
      )}
      {$children}
      {$iconLeft && (
        <Icon
          color={$disabled ? color.neutral[400] : color.blue.main}
          $name={$iconName}
          $size={iconSize}
        />
      )}
    </StyledLink>
  )
}

export default Link
