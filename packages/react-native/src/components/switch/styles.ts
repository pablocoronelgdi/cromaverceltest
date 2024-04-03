import { color, opacities } from '@cromaui/foundations'
import { shapesNative } from '@cromaui/foundations/dist/shapes'
import { spacingsNative } from '@cromaui/foundations/dist/spacings'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
