import React, { type ReactNode, isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type { LogoPropTypes } from './types'
import { color } from '@cromaui/foundations'
import { getAsset } from '@cromaui/assets'
import DOMpurify from 'dompurify'
import { LogoContainerStyled } from './styles'

const sanitizeChildren = (unsafeChildren: ReactNode): string => {
  if (unsafeChildren && typeof unsafeChildren === 'string') {
    return DOMpurify.sanitize(unsafeChildren)
  }
  if (
    unsafeChildren &&
    isValidElement(unsafeChildren) &&
    unsafeChildren.type === 'svg'
  ) {
    const svgChildrenHtml: string =
      renderToStaticMarkup(unsafeChildren).toString()
    return DOMpurify.sanitize(svgChildrenHtml, {
      USE_PROFILES: { svg: true }
    })
  }
  return ''
}

const Logo: React.FC<LogoPropTypes> = ({
  name,
  width = 'auto',
  height = 'auto',
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50],
  children
}) => {
  const sanitizedChildren = sanitizeChildren(children)
  const logoTemplate = getAsset(name)
  const replacedLogo = logoTemplate
    .replaceAll(/colorPrimary/g, colorPrimary)
    .replaceAll(/colorSecondary/g, colorSecondary)
    .replaceAll(/logoWidth/g, `${width}`)
    .replaceAll(/logoHeight/g, `${height}`)

  return children && typeof children === 'string' ? (
    <img alt={'logo macro'} title={'logo macro'} src={sanitizedChildren} />
  ) : children && isValidElement(children) && children.type === 'svg' ? (
    <LogoContainerStyled
      dangerouslySetInnerHTML={{ __html: sanitizedChildren }}
    />
  ) : (
    <LogoContainerStyled dangerouslySetInnerHTML={{ __html: replacedLogo }} />
  )
}

export default Logo
