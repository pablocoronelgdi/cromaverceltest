import { color, shapesNative, spacingsNative, spacingsNativeNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'
import { type ButtonVariantType, type ButtonIconPositionType } from './types'

export const buttonStyles = (
  iconPosition: ButtonIconPositionType,
  pressed: boolean,
  disabled: boolean,
  text: string,
  iconName: string,
  variant: ButtonVariantType
): StyleSheet.NamedStyles<any> =>
  StyleSheet.create({
    baseButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row',
      borderRadius: shapesNative.sm,
      maxWidth: 328
    },
    focused: {
      borderStyle: 'solid',
      borderColor: color.blue.soft,
      borderWidth: 2
    },
    fillLight: {
      backgroundColor: disabled ? color.neutral[300] : pressed ? color.navy.dark : color.navy.main,
      color: disabled ? color.neutral[500] : color.neutral[50]
    },
    fillDark: {
      backgroundColor: disabled
        ? color.neutral[400]
        : pressed
          ? color.navy.soft
          : color.neutral[100],
      color: disabled ? color.neutral[600] : color.navy.main
    },
    outlineLight: {
      backgroundColor: pressed ? color.navy.extraSoft : 'transparent',
      color: disabled ? color.neutral[400] : pressed ? color.navy.dark : color.navy.main,
      borderWidth: 1.7,
      borderColor: disabled ? color.neutral[400] : pressed ? color.navy.dark : color.navy.main
    },
    outlineDark: {
      backgroundColor: pressed ? color.navy.extraSoft : color.neutral[50],
      color: disabled ? color.neutral[600] : pressed ? color.navy.dark : color.neutral[50],
      borderWidth: 1.7,
      borderColor: disabled ? color.neutral[600] : pressed ? color.navy.soft : color.neutral[50]
    },
    ghostLight: {
      backgroundColor: pressed ? color.neutral[200] : 'transparent',
      color: disabled ? color.neutral[400] : pressed ? color.neutral[200] : color.neutral[900]
    },
    ghostDark: {
      backgroundColor: pressed ? color.navy.soft : 'transparent',
      color: disabled ? color.neutral[600] : pressed ? color.navy.dark : color.neutral[50]
    },
    tonalLight: {
      backgroundColor: disabled ? color.neutral[300] : pressed ? color.blue.dark : color.blue.main,
      color: disabled ? color.neutral[500] : color.neutral[50]
    },
    tonalDark: {
      backgroundColor: disabled ? color.neutral[600] : pressed ? color.blue.dark : color.blue.soft,
      color: disabled ? color.neutral[400] : color.neutral[50]
    },
    // Sizes
    extraSmall: {
      paddingTop: variant === 'ghost' && !text ? spacingsNative.space2 : spacingsNative.space4,
      paddingBottom: variant === 'ghost' && !text ? spacingsNative.space2 : spacingsNative.space4,
      paddingLeft:
        iconPosition === 'left'
          ? spacingsNative.space8
          : iconPosition === 'right' || (text && !iconPosition)
            ? spacingsNative.space12
            : !!iconName && !iconPosition && !text && variant !== 'ghost'
                ? spacingsNative.space4
                : variant === 'ghost' && !!iconName && !iconPosition && !text
                  ? spacingsNative.space2
                  : 0,
      paddingRight:
        iconPosition === 'right'
          ? spacingsNative.space8
          : iconPosition === 'left' || (text && !iconPosition)
            ? spacingsNative.space12
            : !!iconName && !iconPosition && !text && variant !== 'ghost'
                ? spacingsNative.space4
                : variant === 'ghost' && !!iconName && !iconPosition && !text
                  ? spacingsNative.space2
                  : 0
    },
    small: {

    }

    /*    fill: {
      backgroundColor: backgroundType === 'light' ? color.navy.main : color.neutral[100],
      color: backgroundType === 'light' ? color.neutral[50] : color.navy.main
    },
    fillPressed: {
      backgroundColor: backgroundType === 'light' ? color.navy.dark : color.navy.soft,
      color: color.neutral[50]
    },
    fillFocused: {
      borderWidth: 2,
      borderColor: color.blue.soft
    }, */
    /*     outline: {
      backgroundColor: 'transparent',
      color: backgroundType === 'light' ? color.navy.main : color.neutral[50],
      borderWidth: 1.7,
      borderColor: backgroundType === 'light' ? color.navy.main : color.neutral[50]
    },
    outlinePressed: {
      backgroundColor: color.navy.extraSoft,
      borderColor: backgroundType === 'light' ? color.navy.dark : color.navy.soft,
      color: color.navy.dark
    },
    outlineFocused: {
      backgroundColor: 'transparent',
      borderColor: backgroundType === 'light' ? color.navy.dark : color.neutral[50],
      color: backgroundType === 'light' ? color.navy.dark : color.neutral[50],
      borderWidth: 2
    }, */
    /*    ghost: {
      backgroundColor: 'transparent',
      color: backgroundType === 'light' ? color.neutral[900] : color.neutral[50]
    },
    ghostPressed: {
      backgroundColor: backgroundType === 'light' ? color.neutral[200] : color.navy.soft,
      color: backgroundType === 'light' ? color.navy.dark : color.neutral[50]
    },
    ghostFocused: {
      color: backgroundType === 'light' ? color.neutral[900] : color.neutral[50],
      borderColor: color.blue.soft,
      borderWidth: 2
    }, */
    /*     tonal: {
      backgroundColor: backgroundType === 'light' ? color.blue.main : color.blue.soft,
      color: color.neutral[50]
    },
    tonalPressed: {
      backgroundColor: color.blue.dark
    },
    tonalFocused: {
      backgroundColor: backgroundType === 'light' ? color.blue.main : color.blue.soft,
      borderColor: color.blue.soft,
      borderWidth: 2
    } */
  })
