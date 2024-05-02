import { color, opacities, shapesNative, spacingsNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
