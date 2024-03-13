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
  $name,
  $width = '100%',
  $height = '100%',
  $colorPrimary = color.navy.main,
  $colorSecondary = color.neutral[50],
  children,
  $type,
  $id
}) => {
  const sanitizedChildren = sanitizeChildren(children)
  const svgTemplate = getAsset($name, $type)
  const replacedSvg = svgTemplate
    .replaceAll(/colorPrimary/g, $colorPrimary)
    .replaceAll(/colorSecondary/g, $colorSecondary)
    .replaceAll(/assetWidth/g, `${$width}`)
    .replaceAll(/assetHeight/g, `${$height}`)

  return children && typeof children === 'string' ? (
    <img alt={`${$type} macro`} title={`${$type} macro`} src={sanitizedChildren} id={$id} />
  ) : children && isValidElement(children) && children.type === 'svg' ? (
    <SvgContainerStyled id={$id} dangerouslySetInnerHTML={{ __html: sanitizedChildren }} />
  ) : (
    <SvgContainerStyled id={$id} dangerouslySetInnerHTML={{ __html: replacedSvg }} />
  )
}

export default AssetLoader
