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
  ...props
}) => {
  const rotateOuterView = useRef(new Animated.Value(0)).current
  const rotateInnerView = useRef(new Animated.Value(0)).current
  const id = useId()

  useEffect(() => {
    const outerAnimation = Animated.loop(
      Animated.timing(rotateOuterView, {
        toValue: 1,
        duration: 1250,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    )

    const innerAnimation = Animated.loop(
      Animated.timing(rotateInnerView, {
        toValue: 1,
        duration: 1250,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    )

    outerAnimation.start()
    innerAnimation.start()
    return () => {
      outerAnimation.stop()
      innerAnimation.stop()
    }
  }, [])

  const outerRotation = rotateOuterView.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '405deg']
  })

  const innerRotation = rotateInnerView.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View id={props.id || id} style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.outerRing,
          withLogo ? styles.logoOuterRing : styles.noLogoOuterRing,
          { transform: [{ rotate: outerRotation }] }
        ]}
      >
        {withLogo && (
          <Animated.View style={[styles.logoInnerRing, { transform: [{ rotate: innerRotation }] }]}>
            <View style={styles.logoThumb} />
          </Animated.View>
        )}
      </Animated.View>
      {label && (
        <CromaText variant="regular" component="bodySm" style={[styles.label, labelStyle]}>
          {label}
        </CromaText>
      )}
    </View>
  )
}

export default Spinner
