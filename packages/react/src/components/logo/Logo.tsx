import React, { useId } from 'react'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'
import { getLogoSize } from './utils'

const Logo: React.FC<LogoPropTypes> = ({
  $colorPrimary = color.navy.main,
  $colorSecondary = color.neutral[50],
  $name = 'MacroHorizontal',
  $size = 'medium',
  $id,
  children
}) => {
  const logoHeight = getLogoSize($name, $size)
  const defaultId = useId()

  return children ? (
    <AssetLoader $id={$id || defaultId}>{children}</AssetLoader>
  ) : (
    <AssetLoader
      $type="logo"
      $width="100%"
      $name={$name}
      $height={logoHeight}
      $colorPrimary={$colorPrimary}
      $colorSecondary={$colorSecondary}
      $id={$id || defaultId}
    />
  )
}

export default Logo
