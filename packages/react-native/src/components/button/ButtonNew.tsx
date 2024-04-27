import { type NativeSyntheticEvent, Pressable, type TargetedEvent, Text, View } from 'react-native'
import React, { useState } from 'react'
import { type ButtonPropTypes } from './types'
import { buttonStyles } from './newStyles'
import { Icon } from '../icon'
import { type IconNameType } from '../icon/types'

const ButtonNew: React.FC<ButtonPropTypes> = ({
  text,
  backgroundType = 'light',
  iconPosition = 'left',
  iconName,
  variant = 'fill',
  disabled = false,
  size = 'medium',
  fullWidth,
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
  const styles = buttonStyles(iconPosition, text, iconName, variant, pressed, disabled, size)

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
      onPress={props.onPress}
      style={[focused && styles.focused, fullWidth && { width: '100%' }]}
    >
      <View style={[styles.baseButton, styles[viewClass], styles[size]]}>
        <Text style={[styles[viewClass + 'Color'], { lineHeight: 24, fontSize: 18 }]}>{text}</Text>
        {iconName && (
          <Icon
            name={iconName as IconNameType}
            size={
              size === 'extraSmall'
                ? 'small'
                : size === 'medium' || size === 'large'
                ? 'large'
                : 'medium'
            }
          />
        )}
      </View>
    </Pressable>
  )
}

export default ButtonNew
