import React from 'react'
import type { PictoGramPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'

const Pictogram: React.FC<PictoGramPropTypes> = ({
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
      type={'pictogram'}
      width={width}
      height={height}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    />
  )
}

export default Pictogram
