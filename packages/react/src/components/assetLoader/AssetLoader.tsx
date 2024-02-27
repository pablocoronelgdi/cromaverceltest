import React, { type ReactNode, isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type { AssetPropTypes } from './types'
import { color } from '@cromaui/foundations'
import { getAsset } from '@cromaui/assets'
import DOMpurify from 'dompurify'
import { SvgContainerStyled } from './styles'

const sanitizeChildren = (unsafeChildren: ReactNode): string => {
  if (unsafeChildren && typeof unsafeChildren === 'string') {
    return DOMpurify.sanitize(unsafeChildren)
  }
  if (unsafeChildren && isValidElement(unsafeChildren) && unsafeChildren.type === 'svg') {
    const svgChildrenHtml: string = renderToStaticMarkup(unsafeChildren).toString()
    return DOMpurify.sanitize(svgChildrenHtml, {
      USE_PROFILES: { svg: true }
    })
  }
  return ''
}

const AssetLoader: React.FC<AssetPropTypes> = ({
  name,
  width = 'auto',
  height = 'auto',
  colorPrimary = color.navy.main,
  colorSecondary = color.neutral[50],
  children
}) => {
  const sanitizedChildren = sanitizeChildren(children)
  const svgTemplate = getAsset(name, 'logo')
  const replacedSvg = svgTemplate
    .replaceAll(/colorPrimary/g, colorPrimary)
    .replaceAll(/colorSecondary/g, colorSecondary)
    .replaceAll(/logoWidth/g, `${width}`)
    .replaceAll(/logoHeight/g, `${height}`)

  return children && typeof children === 'string' ? (
    <img alt={'logo macro'} title={'logo macro'} src={sanitizedChildren} />
  ) : children && isValidElement(children) && children.type === 'svg' ? (
    <SvgContainerStyled dangerouslySetInnerHTML={{ __html: sanitizedChildren }} />
  ) : (
    <SvgContainerStyled dangerouslySetInnerHTML={{ __html: replacedSvg }} />
  )
}

export default AssetLoader
