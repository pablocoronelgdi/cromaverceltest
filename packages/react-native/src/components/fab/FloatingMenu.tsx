import { Animated, type GestureResponderEvent, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import type { FloatingMenuPropTypes } from './types'
import FloatingButton from './FloatingButton'

const FloatingMenu: React.FC<FloatingMenuPropTypes> = ({
  children,
  openIcon = 'add',
  closeIcon = 'remove',
  mainButtonProps,
  label,
  ...props
}) => {
  const { iconName: iconFromProps, label: buttonLabel, ...buttonProps } = mainButtonProps || {}

  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [opacity] = useState(new Animated.Value(isHidden ? 0 : 1))
  const handleOnPress = (e: GestureResponderEvent): void => {
    setIsHidden(!isHidden)

    Animated.timing(opacity, {
      toValue: !isHidden ? 0 : 1,
      duration: !isHidden ? 150 : 250,
      useNativeDriver: false
    }).start()
    mainButtonProps?.onPress && mainButtonProps?.onPress(e)
  }

  return (
    <View {...props} style={[styles.menu, props.style]}>
      <FloatingButton
        size="large"
        label={buttonLabel || label}
        iconName={isHidden ? openIcon : closeIcon}
        onPress={handleOnPress}
        {...buttonProps}
      />
      <Animated.View style={[styles.buttonList, { opacity }]}>{children}</Animated.View>
    </View>
  )
}

export default FloatingMenu

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between'
  },
  buttonList: {
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 'auto'
  }
})
