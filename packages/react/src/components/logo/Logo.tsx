import React from 'react'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'

const Logo: React.FC<LogoPropTypes> = ({
  name,
  height = 'auto',
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50],
  children
}) => {
  return children ? (
    <AssetLoader>{children}</AssetLoader>
  ) : (
    <AssetLoader
      name={name}
      type={'logo'}
      width="auto"
      height={height}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  )
}

export default Logo
