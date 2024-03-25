import React, { useState } from 'react'
import { color } from '@cromaui/foundations'
import { Icon } from '../icon'
import { type NativeSyntheticEvent, type TargetedEvent, Pressable, View } from 'react-native'
import type { CheckboxProps } from './types'
import { styles } from './styles'

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
