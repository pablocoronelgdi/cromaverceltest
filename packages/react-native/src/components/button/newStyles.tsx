import { color, shapesNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'
import { ButtonBackgroundType, ButtonIconPositionType, ButtonPropTypes } from './types'

export const buttonStyles = (
    iconPosition: ButtonIconPositionType,
    backgroundType : ButtonBackgroundType,
    pressed: boolean
): StyleSheet.NamedStyles<any> =>
  StyleSheet.create({
    baseButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row',
      borderRadius: shapesNative.sm,
      maxWidth: 328
    },

    fillLight:{
        backgroundColor
    }



    fill: {
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
    },
    outline: {
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
    },
    ghost: {
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
    },
    tonal: {
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
    }
  })
