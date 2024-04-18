import { Animated, Easing, View } from 'react-native'
import React, { useEffect, useId, useRef } from 'react'
import type { SpinnerPropTypes } from './types'
import { CromaText } from '../text'
import { styles } from './styles'

const Spinner: React.FC<SpinnerPropTypes> = ({
  style,
  withLogo = false,
  label,
  labelStyle,
  size = 'medium',
  color,
  ...props
}) => {
  const rotateAnimationValue = useRef(new Animated.Value(0)).current
  const opacityAnimationValue = useRef(new Animated.Value(1)).current
  const id = useId()

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnimationValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    )
    const opacityAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnimationValue, {
          toValue: 0.5,
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true
        }),
        Animated.timing(opacityAnimationValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true
        })
      ])
    )

    rotateAnimation.start()
    opacityAnimation.start()
    return () => {
      rotateAnimation.stop()
      opacityAnimation.stop()
    }
  }, [])

  const outerRotation = rotateAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '405deg']
  })

  const innerRotation = rotateAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View id={props.id || id} style={[styles().container, style]}>
      <Animated.View
        style={[
          styles(size, withLogo, color).outerRing,
          { transform: [{ rotate: outerRotation }] },
          { opacity: opacityAnimationValue }
        ]}
      >
        {withLogo && (
          <Animated.View
            style={[styles(size, withLogo).innerRing, { transform: [{ rotate: innerRotation }] }]}
          >
            <View style={styles(size, withLogo).thumb} />
          </Animated.View>
        )}
      </Animated.View>
      {label && (
        <CromaText
          variant="regular"
          component="bodySm"
          style={[styles(size, withLogo).label, labelStyle]}
        >
          {label}
        </CromaText>
      )}
    </View>
  )
}

export default Spinner
