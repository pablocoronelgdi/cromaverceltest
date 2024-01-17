import { Color } from '@cromaui/foundations'

export const getColorByProp = (
  color?: string,
  theme?: any,
  variant?: string,
  neutralNumber?: number
): string => {
  switch (color) {
    case 'primary':
      return theme?.color?.primary?.[variant || 'main'] || Color.Navy.main
    case 'secondary':
      return theme?.color?.secondary?.[variant || 'main'] || Color.Pink.main
    case 'tertiary':
      return theme?.color?.tertiary?.[variant || 'main'] || Color.Blue.main
    case 'complementary':
      return (
        theme?.color?.complementary?.[variant || 'main'] || Color.Stone.main
      )
    case 'success':
      return theme?.color?.success?.[variant || 'main'] || Color.Success.main
    case 'warning':
      return theme?.color?.warning?.[variant || 'main'] || Color.Warning.main
    case 'error':
      return theme?.color?.error?.[variant || 'main'] || Color.Error.main
    case 'info':
      return theme?.color?.info?.[variant || 'main'] || Color.Info.main
    case 'neutral':
      return (
        theme?.color?.info?.[variant || 'main'][neutralNumber || 300] ||
        Color.Neutral[500]
      )
    default:
      return theme?.color?.primary?.[variant || 'main'] || Color.Navy.main
  }
}

export const hexToRgb = (hex: string, alpha: number): string => {
  // Nos aseguramos que el color empieze con un hashtag #
  hex = hex.startsWith('#') ? hex.slice(1) : hex

  // Pareamos los valores para los colores rgb
  const hexParseado = parseInt(hex, 16)
  const r = (hexParseado >> 16) & 255
  const g = (hexParseado >> 8) & 255
  const b = hexParseado & 255

  // Validamos el alpha y seteamos default si no viene en el parametro
  alpha = alpha === undefined ? 1 : alpha

  // Esto es para asegurarnos que el alfa se encuentre en rango [0, 1]
  alpha = Math.min(1, Math.max(0, alpha))

  // Creamos RGBA

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
