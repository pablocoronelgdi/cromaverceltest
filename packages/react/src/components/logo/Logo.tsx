import React from 'react'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import { type LogoCatalog, getLogo } from '@cromaui/assets'

const Logo: React.FC<LogoPropTypes> = ({
  name,
  width = 200,
  height = 100,
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50]
}) => {
  const logoTemplate = getLogo(name as keyof LogoCatalog)
  let replacedLogo = logoTemplate
  replacedLogo = replacedLogo.replaceAll(/colorPrimary/g, colorPrimary)
  replacedLogo = replacedLogo.replaceAll(/colorSecondary/g, colorSecondary)
  replacedLogo = replacedLogo.replaceAll(/logoWidth/g, `${width}`)
  replacedLogo = replacedLogo.replaceAll(/logoHeight/g, `${height}`)

  return <div dangerouslySetInnerHTML={{ __html: replacedLogo }}></div>
}

export default Logo
