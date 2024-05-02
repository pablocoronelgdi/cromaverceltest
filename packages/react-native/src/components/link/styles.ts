import { StyleSheet } from 'react-native'
import { color, shapesNative, spacingsNative } from '@cromaui/foundations'
import type { LinkIconPositionType } from './types'

export const linkStyles = (
  disabled: boolean,
  iconPosition: LinkIconPositionType,
  pressed: boolean,
  visited: boolean
): StyleSheet.NamedStyles<any> => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderRadius: shapesNative.xs,
      color: disabled ? color.neutral[400] : pressed ? color.blue.dark : visited ? color.navy.dark : color.blue.main,
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacingsNative.space2,
      gap: spacingsNative.space8,
      flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
      textDecorationLine: 'underline',
      textDecorationColor: disabled ? color.neutral[400] : pressed ? color.blue.dark : visited ? color.navy.dark : color.blue.main,
      textDecorationStyle: 'solid'
    },
    focused: {
      borderStyle: 'solid',
      borderColor: color.blue.soft,
      borderWidth: spacingsNative.space2
    },
  })
}