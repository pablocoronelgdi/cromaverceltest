import React from 'react'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import { getAsset } from '@cromaui/assets'

const Logo: React.FC<LogoPropTypes> = ({
  name,
  width = 200,
  height = 100,
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50],
  children
}) => {
  const logoTemplate = getAsset(name)
  const replacedLogo = logoTemplate
    .replaceAll(/colorPrimary/g, colorPrimary)
    .replaceAll(/colorSecondary/g, colorSecondary)
    .replaceAll(/logoWidth/g, `${width}`)
    .replaceAll(/logoHeight/g, `${height}`)

  return children || <div dangerouslySetInnerHTML={{ __html: replacedLogo }}></div>
}

export default Logo
