import React, { useState } from 'react'
import { Icon } from '../icon'
import {
  Animated,
  Pressable,
  View,
  type NativeSyntheticEvent,
  type TargetedEvent
} from 'react-native'
import { color } from '@cromaui/foundations'
import type { SwitchProps } from './types'
import { styles } from './styles'

const Switch: React.FC<SwitchProps> = ({
  onChange,
  value,
  defaultValue,
  disabled,
  ...props
}: SwitchProps) => {
  const [pressed, setPressed] = useState(false)
  const [focused, setFocused] = useState(false)

  const [innerValue, setInnerValue] = useState(value || defaultValue || false)
  const [animation] = useState(new Animated.Value(innerValue ? 1 : 0))

  const MoveAuraAndThumb = (bool: boolean): void => {
    Animated.timing(animation, {
      toValue: bool ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-6, 16]
  })

  const handlePress = (): void => {
    if (!disabled) {
      MoveAuraAndThumb(!innerValue)
      setInnerValue(!innerValue)
      onChange && onChange(!innerValue)
    }
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
      onPress={handlePress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[styles.pressable, focused && styles.withFocus]}
      {...props}
    >
      <View
        style={[
          styles.background,
          innerValue ? styles.backgroundChecked : styles.backgroundNotChecked,
          disabled && styles.disabled
        ]}
      >
        <Animated.View
          style={[
            styles.aura,
            !disabled && pressed && (innerValue ? styles.auraPressedOn : styles.auraPressedOff),
            { transform: [{ translateX }] }
          ]}
        >
          <View
            style={[
              styles.thumb,
              innerValue ? styles.thumbChecked : styles.thumbNotChecked,
              !disabled && pressed && styles.thumbPressed
            ]}
          >
            {innerValue && (
              <Icon
                name={'check'}
                color={disabled ? color.neutral[300] : color.navy.main}
                size="small"
              />
            )}
          </View>
        </Animated.View>
      </View>
    </Pressable>
  )
}

export default Switch
