import { type NativeSyntheticEvent, type TargetedEvent, Linking, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '../icon'
import { linkStyles } from './styles'
import type { IconNameType } from '../icon/types'
import type { LinkPropTypes } from './types'
import { CromaText } from '../text'

const Link: React.FC<LinkPropTypes> = ({
  disabled = false,
  href,
  iconName,
  iconPosition = 'left',
  size,
  text,
  visited = false,
  ...props
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [focused, setFocused] = useState<boolean>(false)

  const styles = linkStyles(disabled, iconPosition, pressed, visited)

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
  const handlePress = () => {
    if (href) {
      Linking.openURL(href).catch((err) => console.error('Error al abrir el enlace:', err))
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
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPress={handlePress}
      disabled={disabled}
      style={[styles.container, focused && styles.focused]}
    >
      {iconName && (
        <Icon
          name={iconName as IconNameType}
          size={size === 'small' ? 'small' : 'medium'}
          style={styles.container}
        />
      )}
      <CromaText
        component={size === 'small' ? 'linkSm' : size === 'medium' ? 'linkMd' : 'linkLg'}
        children={text}
        style={styles.container}
      />
    </Pressable>
  )
}

export default Link
