import React, { useEffect, useId, useState } from 'react'
import { StyledAvatarContainer } from './styles'
import { Icon } from '../icon'
import { Image } from '../image'
import { monogramRegex } from '../../utils/stringsUtils'
import type { IconSizeType } from '../icon/types'
import type { AvatarPropTypes } from './types'

const Avatar: React.FC<AvatarPropTypes> = ({
  $size = 'small',
  $iconName,
  $id,
  $disabled = false,
  $monogram,
  $alt,
  $src
}) => {
  const defaultId = useId()
  const [monogramCustom, setMonogramCustom] = useState<string | null>('AR')
  const maxLenghtMonogram = 2
  const iconSize: IconSizeType = (() => {
    switch ($size) {
      case 'extra-small':
        return 'medium'
      case 'small':
      case 'medium':
        return 'large'
      case 'large':
      case 'extra-large':
        return 'extra-large'
      default:
        return 'medium'
    }
  })()

  useEffect(() => {
    if ($monogram && $monogram.length <= maxLenghtMonogram) {
      setMonogramCustom(monogramRegex($monogram))
    } else if ($monogram && $monogram.length >= maxLenghtMonogram) {
      setMonogramCustom(monogramRegex($monogram?.charAt(0).concat($monogram?.charAt(1))))
    } else if ($monogram && $monogram.trim() === '') {
      setMonogramCustom(null)
    }
  }, [$monogram])

  return (
    <StyledAvatarContainer $size={$size} $disabled={$disabled} $id={$id || defaultId}>
      {$monogram && !$src && (!$iconName || $iconName) && <small>{monogramCustom}</small>}
      {$src && $alt && (!$monogram || $monogram) && (!$iconName || $iconName) && (
        <Image alt={$alt} title={$alt} image={$src} height="100%" width="100%" />
      )}
      {((!$src && !$monogram) || !isNaN(Number($monogram))) && (
        <Icon $size={iconSize} $name={$iconName?.toLowerCase() ?? 'person'} />
      )}
    </StyledAvatarContainer>
  )
}

export default Avatar
