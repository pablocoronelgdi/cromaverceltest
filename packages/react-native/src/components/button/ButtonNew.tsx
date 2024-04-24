import { type NativeSyntheticEvent, Pressable, type TargetedEvent, Text, View } from 'react-native'
import React, { useState } from 'react'
import { type ButtonPropTypes } from './types'
import { buttonStyles } from './newStyles'

const ButtonNew: React.FC<ButtonPropTypes> = ({
  text,
  backgroundType = 'light',
  iconPosition = 'left',
  variant = 'filled',
  disabled = false,
  ...props
}) => {
  const [pressed, setPressed] = useState(false)
  const [focused, setFocused] = useState(false)

  /*   const handlePress = (e: GestureResponderEvent): void => {
    if (!disabled) {
      setPressed(pressed)
      props.onPress && props.onPress(e)
    }
  } */
  const handleFocus = (e: NativeSyntheticEvent<TargetedEvent>): void => {
    if (!disabled) {
      setFocused(true)
      props.onFocus && props.onFocus(e)
    }
  }
  const handleBlur = (e: NativeSyntheticEvent<TargetedEvent>): void => {
    if (!disabled) {
      setFocused(false)
      props.onBlur && props.onBlur(e)
    }
  }
  const viewClass =
    variant + (backgroundType.charAt(0).toUpperCase() + backgroundType.slice(1).toLowerCase())
  const styles = buttonStyles(iconPosition, pressed, disabled)

  return (
    <Pressable
      onPressIn={(e) => {
        setPressed(true)
        props.onPressIn && props.onPressIn(e)
      }}
      onPressOut={(e) => {
        setPressed(false)
        props.onPressOut && props.onPressOut(e)
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[focused && styles.focused]}
    >
      <View style={[styles.baseButton, styles[viewClass]]}>
        <Text>{text}</Text>
      </View>
    </Pressable>
  )
}

export default ButtonNew
