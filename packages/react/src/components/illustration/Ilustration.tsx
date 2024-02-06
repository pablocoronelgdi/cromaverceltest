import React from 'react'
import type { IllustrationPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'

const Illustration: React.FC<IllustrationPropTypes> = ({
  name,
  width = 'auto',
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
      type={'illustration'}
      width={width}
      height={height}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  )
}

export default Illustration
