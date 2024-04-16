import { color, spacingsNative } from '@cromaui/foundations'
import { type DimensionValue, StyleSheet } from 'react-native'

const flex: Record<string, unknown> = {
  justifyContent: 'center',
  alignItems: 'center'
}
const noLogoOuterSize: Record<string, unknown> = {
  extraSmall: 20,
  small: 24,
  medium: 48,
  large: 80
}
const logoOuterSize: Record<string, unknown> = {
  extraSmall: 48,
  small: 48,
  medium: 80,
  large: 80
}
const innerRingSize: Record<string, unknown> = {
  extraSmall: 28,
  small: 28,
  medium: 48,
  large: 48
}
const thumbSize: Record<string, unknown> = {
  extraSmall: 12,
  small: 12,
  medium: 20,
  large: 20
}
export const styles = (
  size: string = 'small',
  withLogo: boolean = false,
  colorProp: string = color.navy.main
): StyleSheet.NamedStyles<any> => {
  // Se define la opacidad minima de un color ya que si se setea en trasnparent
  // El componente entero no renderiza
  const transparent = '#00000001'

  return StyleSheet.create({
    container: {
      ...flex,
      gap: withLogo ? spacingsNative.space8 : spacingsNative.space4
    },
    outerRing: {
      ...flex,
      borderStyle: 'solid',
      width: withLogo
        ? (logoOuterSize[size] as DimensionValue)
        : (noLogoOuterSize[size] as DimensionValue),
      height: withLogo
        ? (logoOuterSize[size] as DimensionValue)
        : (noLogoOuterSize[size] as DimensionValue),
      borderRadius: withLogo
        ? (logoOuterSize[size] as number) / 2
        : (noLogoOuterSize[size] as number) / 2,
      padding: withLogo ? spacingsNative.space2 : 0,
      borderWidth: withLogo
        ? (logoOuterSize[size] as number) / 8
        : (noLogoOuterSize[size] as number) / 8,
      borderLeftColor: withLogo ? color.navy.main : colorProp,
      borderBottomColor: withLogo ? transparent : colorProp,
      borderRightColor: withLogo ? transparent : colorProp,
      borderTopColor: withLogo ? color.navy.main : transparent
    },
    innerRing: {
      ...flex,
      border: 'solid',
      width: innerRingSize[size] as DimensionValue,
      height: innerRingSize[size] as DimensionValue,
      borderRadius: (innerRingSize[size] as number) / 2,
      borderWidth: size === 'small' || size === 'extraSmall' ? 6 : 10,
      borderBottomColor: transparent,
      borderRightColor: transparent,
      borderLeftColor: color.navy.soft,
      borderTopColor: color.navy.soft
    },
    thumb: {
      width: thumbSize[size] as DimensionValue,
      height: thumbSize[size] as DimensionValue,
      backgroundColor: color.navy.main,
      borderRadius: (thumbSize[size] as number) / 2,
      fontSize: 12
    },
    label: {
      textAlign: 'center',
      color: color.neutral[900]
    }
  })
}
