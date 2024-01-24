import React from 'react'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import { getLogo } from '@cromaui/assets'

const replaceSvgValues = (
  logo: string,
  width: number,
  heigth: number,
  colorPrimary: string,
  colorSecondary: string
): string => {
  let replacedLogo = logo
  replacedLogo = logo.replaceAll(/colorPrimary/g, colorPrimary)
  replacedLogo = logo.replaceAll(/colorSecondary/g, colorSecondary)
  replacedLogo = logo.replaceAll(/width/g, `${width}`)
  replacedLogo = logo.replaceAll(/heigth/g, `${heigth}`)

  return replacedLogo
}

const Logo: React.FC<LogoPropTypes> = ({
  name,
  width = 200,
  heigth = 100,
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50]
}) => {
  const logoTemplate = getLogo(name)
  console.log(logoTemplate)
  const customedLogo = replaceSvgValues(
    logoTemplate,
    width,
    heigth,
    colorPrimary,
    colorSecondary
  )

  return <div dangerouslySetInnerHTML={{ __html: customedLogo }}></div>
}

export default Logo
