import React, { useState } from 'react'
import { color, opacities } from '@cromaui/foundations'
import { Icon } from '../icon'
import {
  type NativeSyntheticEvent,
  type TargetedEvent,
  Pressable,
  StyleSheet,
  View
} from 'react-native'
import { spacingsNative } from '@cromaui/foundations/dist/spacings'
import { shapesNative } from '@cromaui/foundations/dist/shapes'
import type { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  checked,
  defaultChecked,
  disabled,
  ...props
}) => {
  const [pressed, setPressed] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const [innerValue, setInnerValue] = useState(checked || defaultChecked || false)

  const handlePress = (): void => {
    if (!disabled) {
      setInnerValue(!innerValue)
      onChange && onChange(!innerValue)
      console.log(innerValue)
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
  const handleHover = (value: boolean): void => {
    if (!disabled) {
      setHovered(value)
    }
  }

  return (
    <Pressable
      style={[
        styles.container,
        hovered && styles.containerHovered,
        pressed && styles.containerPressed
      ]}
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
      onHoverIn={() => {
        handleHover(true)
      }}
      onHoverOut={() => {
        handleHover(false)
      }}
    >
      <View style={[styles.area, focused && styles.areaFocused]}>
        <Icon
          size="large"
          color={disabled ? color.neutral[400] : color.navy.main}
          name={innerValue ? 'check-box' : 'check-box-outline-blank'}
        />
      </View>
    </Pressable>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  container: {
    width: spacingsNative.space40,
    height: spacingsNative.space40,
    padding: spacingsNative.space8,
    borderRadius: shapesNative.full,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerHovered: {
    backgroundColor: color.navy.soft + opacities.opacity20
  },
  containerPressed: {
    backgroundColor: color.neutral[600] + opacities.opacity20
  },
  area: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacingsNative.space26,
    height: spacingsNative.space26,
    borderRadius: shapesNative.xs,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  areaFocused: {
    borderColor: color.blue.main
  }
})
