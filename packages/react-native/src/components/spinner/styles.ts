import { color, spacingsNative } from '@cromaui/foundations'
import { StyleSheet } from 'react-native'

const flex: Record<string, unknown> = {
  justifyContent: 'center',
  alignItems: 'center'
}

export const styles = StyleSheet.create({
  container: {
    ...flex,
    padding: spacingsNative.space2
  },
  outerRing: {
    ...flex,
    borderStyle: 'solid'
  },
  noLogoOuterRing: {
    borderBottomColor: color.navy.extraSoft,
    borderLeftColor: color.navy.extraSoft,
    borderRightColor: color.navy.extraSoft,
    borderTopColor: color.navy.main,
    width: spacingsNative.space64,
    height: spacingsNative.space64,
    borderRadius: spacingsNative.space64 / 2,
    padding: 0,
    borderWidth: spacingsNative.space8
  },
  logoOuterRing: {
    width: spacingsNative.space76,
    height: spacingsNative.space76,
    borderRadius: spacingsNative.space76 / 2,
    padding: spacingsNative.space2,
    borderWidth: spacingsNative.space10,
    borderLeftColor: color.navy.main,
    borderTopColor: color.navy.main,
    borderBottomColor: color.navy.extraSoft,
    borderRightColor: color.navy.extraSoft
  },
  logoInnerRing: {
    ...flex,
    border: 'solid',
    borderWidth: spacingsNative.space10,
    borderRadius: 24,
    width: spacingsNative.space48,
    height: spacingsNative.space48,
    borderBottomColor: color.navy.extraSoft,
    borderRightColor: color.navy.extraSoft,
    borderLeftColor: color.navy.soft,
    borderTopColor: color.navy.soft
  },
  logoThumb: {
    width: spacingsNative.space20,
    height: spacingsNative.space20,
    backgroundColor: color.navy.main,
    borderRadius: 10,
    fontSize: 12
  },
  label: {
    textAlign: 'center',
    color: color.neutral[900]
  }
})
