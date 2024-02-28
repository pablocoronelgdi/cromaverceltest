import React from 'react'
import type { PictogramPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'
import { getPictogramColors, getPictogramSize } from './utils'

const Pictogram: React.FC<PictogramPropTypes> = ({
  name = 'Cash',
  size = 'MD',
  segmentName = 'Individuos',
  backgroundColor = 'Light',
  individuosColor = 'Blue',
  children
}) => {
  const { colorPrimary, colorSecondary } = getPictogramColors(
    segmentName,
    backgroundColor,
    individuosColor
  )

  const { height, width } = getPictogramSize(size)

  return children ? (
    <AssetLoader>{children}</AssetLoader>
  ) : (
    <AssetLoader
      name={name}
      type={'pictogram'}
      height={height}
      width={width}
      colorPrimary={colorPrimary || color.navy.main}
      colorSecondary={colorSecondary || color.neutral[50]}
    />
  )
}

export default Pictogram
