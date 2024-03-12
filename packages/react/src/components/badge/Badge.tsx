import React from 'react'
import { Icon } from '../icon'
import { BadgeContainerStyled } from './styles'
import { badgeRegex } from '../../utils/stringsUtils'
import type { BadgePropsTypes } from './types'
import type { IconSizeType } from '../icon/types'

/** Descripción del componente Badge WIP */
const Badge: React.FC<BadgePropsTypes> = ({
  backgroundType = 'light',
  size = 'small',
  color = 'pink',
  count,
  iconName,
  text
}) => {
  const iconSize: IconSizeType = (() => {
    switch (size) {
      case 'small':
      case 'medium':
        return 'small'
      case 'large':
        return 'medium'
      default:
        return 'small'
    }
  })()
  const maxCount = '999'
  const customCount =
    count !== undefined && count > 999
      ? maxCount?.concat('+')
      : count

  return (
    <BadgeContainerStyled
      backgroundType={backgroundType}
      color={color}
      size={size}
      text={text}
      count={count}
      iconName={iconName}
    >
      {iconName && (
        <Icon
          $size={iconSize}
          $name={iconName ? iconName.toLocaleLowerCase() : 'check'}
        />
      )}
      {(text ?? count) && <small>{badgeRegex(text) ?? customCount}</small>}
    </BadgeContainerStyled>
  )
}

export default Badge
