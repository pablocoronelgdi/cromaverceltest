import { color, shapesNative, spacingsNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'
import { type ButtonVariantType, type ButtonIconPositionType, type ButtonSizeType } from './types'

export const buttonStyles = (
  iconPosition: ButtonIconPositionType | undefined,
  text: string | undefined,
  iconName: string | undefined,
  variant: ButtonVariantType,
  pressed: boolean,
  disabled: boolean,
  size: ButtonSizeType
): StyleSheet.NamedStyles<any> => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacingsNative.space2,
      borderRadius: shapesNative.sm
    },
    baseButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
      gap:
        iconName && text && size === 'extraSmall' ? spacingsNative.space6 : spacingsNative.space8,
      borderRadius: shapesNative.sm
    },
    focused: {
      borderStyle: 'solid',
      borderColor: color.blue.soft,
      borderWidth: 2
    },
    fillLight: {
      backgroundColor: disabled ? color.neutral[300] : pressed ? color.navy.dark : color.navy.main
    },
    fillLightColor: {
      color: disabled ? color.neutral[500] : color.neutral[50]
    },
    fillDark: {
      backgroundColor: disabled
        ? color.neutral[400]
        : pressed
          ? color.navy.soft
          : color.neutral[100]
    },
    fillDarkColor: {
      color: disabled ? color.neutral[600] : color.navy.main
    },
    outlineLight: {
      backgroundColor: pressed ? color.navy.extraSoft : 'transparent',
      borderWidth: 1.7,
      borderColor: disabled ? color.neutral[400] : pressed ? color.navy.dark : color.navy.main
    },
    outlineLightColor: {
      color: disabled ? color.neutral[400] : pressed ? color.navy.dark : color.navy.main
    },
    outlineDark: {
      backgroundColor: pressed ? color.navy.extraSoft : color.neutral[50],
      borderWidth: 1.7,
      borderColor: disabled ? color.neutral[600] : pressed ? color.navy.soft : color.neutral[50]
    },
    outlineDarkColor: {
      color: disabled ? color.neutral[600] : pressed ? color.navy.dark : color.neutral[50]
    },
    ghostLight: {
      backgroundColor: pressed ? color.neutral[200] : 'transparent'
    },
    ghostLightColor: {
      color: disabled ? color.neutral[400] : color.neutral[900]
    },
    ghostDark: {
      backgroundColor: pressed ? color.navy.soft : 'transparent'
    },
    ghostDarkColor: {
      color: disabled ? color.neutral[600] : pressed ? color.navy.dark : color.neutral[50]
    },
    tonalLight: {
      backgroundColor: disabled ? color.neutral[300] : pressed ? color.blue.dark : color.blue.main
    },
    tonalLightColor: {
      color: disabled ? color.neutral[500] : color.neutral[50]
    },
    tonalDark: {
      backgroundColor: disabled ? color.neutral[600] : pressed ? color.blue.dark : color.blue.soft
    },
    tonalDarkColor: {
      color: disabled ? color.neutral[400] : color.neutral[50]
    },
    // Sizes
    extraSmall: {
      paddingTop: variant === 'ghost' && !text ? spacingsNative.space2 : spacingsNative.space4,
      paddingBottom: variant === 'ghost' && !text ? spacingsNative.space2 : spacingsNative.space4,
      paddingLeft:
        iconPosition === 'right' && text && iconName
          ? spacingsNative.space12
          : spacingsNative.space8,
      paddingRight: spacingsNative.space8
    },
    small: {
      paddingTop: spacingsNative.space8,
      paddingBottom: spacingsNative.space8,
      paddingLeft:
        iconPosition === 'right' && text && iconName
          ? spacingsNative.space12
          : spacingsNative.space8,
      paddingRight: spacingsNative.space8
    },
    medium: {
      paddingTop: spacingsNative.space8,
      paddingBottom: spacingsNative.space8,
      paddingLeft:
        iconPosition === 'right' && text && iconName
          ? spacingsNative.space12
          : spacingsNative.space8,
      paddingRight: spacingsNative.space8
    },
    large: {
      paddingTop: spacingsNative.space12,
      paddingBottom: spacingsNative.space12,
      paddingLeft:
        iconPosition === 'right' && text && iconName
          ? spacingsNative.space16
          : spacingsNative.space12,
      paddingRight: spacingsNative.space12
    }
  })
}
