import React, { useId } from 'react'
import type { PictogramPropTypes } from './types'
import { color } from '@cromaui/foundations'
import AssetLoader from '../assetLoader/AssetLoader'
import { getPictogramColors, getPictogramSize } from './utils'

const Pictogram: React.FC<PictogramPropTypes> = ({
  $name = 'Cash',
  $size = 'medium',
  $segmentName = 'Individuos',
  $backgroundColor = 'Light',
  $individuosColor = 'Blue',
  $id,
  children
}) => {
  const defaultId = useId()
  const { colorPrimary, colorSecondary } = getPictogramColors(
    $segmentName,
    $backgroundColor,
    $individuosColor
  )

  const { height, width } = getPictogramSize($size)

  return children ? (
    <AssetLoader $id={$id || defaultId}>{children}</AssetLoader>
  ) : (
    <AssetLoader
      $type={'pictogram'}
      $name={$name}
      $height={height}
      $width={width}
      $colorPrimary={colorPrimary || color.navy.main}
      $colorSecondary={colorSecondary || color.neutral[50]}
      $id={$id || defaultId}
    />
  )
}

export default Pictogram
