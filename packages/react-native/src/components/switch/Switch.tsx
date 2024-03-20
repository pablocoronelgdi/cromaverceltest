import React, { useState } from 'react'
import { Icon } from '../icon'
import {
  Animated,
  Pressable,
  StyleSheet,
  View,
  type NativeSyntheticEvent,
  type TargetedEvent
} from 'react-native'
import { color, opacities } from '@cromaui/foundations'
import type { SwitchProps } from './types'
import { spacingsNative } from '@cromaui/foundations/dist/spacings'
import { shapesNative } from '@cromaui/foundations/dist/shapes'

const CromaSwitch: React.FC<SwitchProps> = ({
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
      console.log(e)
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
              <Icon name={'check'} color={disabled ? 'neutral' : 'primary'} size="small" />
            )}
          </View>
        </Animated.View>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  pressable: {
    width: spacingsNative.space60,
    padding: spacingsNative.space2,
    borderWidth: 2,
    borderRadius: shapesNative.full,
    borderColor: color.neutral[0]
  },
  withFocus: {
    borderColor: color.blue.main
  },
  background: {
    width: spacingsNative.space52,
    height: spacingsNative.space32,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backgroundChecked: {
    backgroundColor: color.navy.main
  },
  backgroundNotChecked: {
    backgroundColor: color.neutral[200]
  },
  disabled: {
    backgroundColor: color.neutral[300]
  },
  aura: {
    width: spacingsNative.space40,
    height: spacingsNative.space40,
    borderRadius: shapesNative.full,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  auraChecked: {
    transform: [{ translateX: 16 }]
  },
  auraNotChecked: {
    transform: [{ translateX: -6 }]
  },
  auraPressedOn: {
    backgroundColor: color.navy.soft + opacities.opacity15
  },
  auraPressedOff: {
    backgroundColor: color.neutral[600] + opacities.opacity15
  },
  thumb: {
    borderRadius: shapesNative.full,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbChecked: {
    width: spacingsNative.space24,
    height: spacingsNative.space24,
    backgroundColor: color.neutral[100]
  },
  thumbNotChecked: {
    width: spacingsNative.space16,
    height: spacingsNative.space16,
    backgroundColor: color.neutral[600]
  },
  thumbPressed: {
    width: spacingsNative.space28,
    height: spacingsNative.space28
  }
})

export default CromaSwitch
