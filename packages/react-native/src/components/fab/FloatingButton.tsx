/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react'
import type { FloatingButtonPropTypes } from './types'
import {
  type GestureResponderEvent,
  type NativeSyntheticEvent,
  type TargetedEvent,
  Pressable,
  View
} from 'react-native'
import { Icon } from '../icon'
import { CromaText } from '../text'
import { getAreaStyle, getTextStyle } from './styles'

const FloatingButton: React.FC<FloatingButtonPropTypes> = ({
  onPress,
  disabled = false,
  size = 'small',
  iconName = 'edit',
  label,
  children,
  ...props
}) => {
  const [pressed, setPressed] = useState(false)
  const [focused, setFocused] = useState(false)

  const handlePressIn = (e: GestureResponderEvent): void => {
    setPressed(true)
    props.onPressIn && props.onPressIn(e)
  }
  const handlePressOut = (e: GestureResponderEvent): void => {
    setPressed(false)
    props.onPressOut && props.onPressOut(e)
  }
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

  const areaStyle = getAreaStyle(size, disabled, pressed, focused)
  const textStyle = getTextStyle(size, disabled, pressed, focused)

  return (
    areaStyle &&
    textStyle && (
      <>
        <Pressable
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <View style={areaStyle}>
            <Icon style={textStyle} size={size === 'small' ? 'medium' : 'large'} name={iconName} />
            {label && (
              <CromaText style={textStyle} variant="semibold" component="buttonMd">
                {label}
              </CromaText>
            )}
          </View>
        </Pressable>
      </>
    )
  )
}

export default FloatingButton
