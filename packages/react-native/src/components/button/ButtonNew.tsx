import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { ButtonPropTypes } from './types'
import { buttonStyles } from './newStyles'

const pressedVariant: Record<string, string> = {
  filled: 'fillPressed',
  outline: 'outlinePressed',
  ghost: 'ghostPressed',
  tonal: 'tonalPressed'
}
const focusedVariant: Record<string, string> = {
  filled: 'fillFocused',
  outline: 'outlineFocused',
  ghost: 'ghostFocused',
  tonal: 'tonalFocused'
}

const ButtonNew: React.FC<ButtonPropTypes> = ({
  text,
  backgroundType,
  iconPosition = 'left',
  variant = 'filled'
}) => {
  return (
    <Pressable style={({pressed}) => [buttonStyles(iconPosition, backgroundType, true).focusedVariant[variant]]}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default ButtonNew

const styles = StyleSheet.create({})
