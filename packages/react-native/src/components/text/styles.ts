import { StyleSheet } from 'react-native'
import type { StyleTextRecordType } from './types'
import { typographyNative } from '@cromaui/foundations/dist/typography'

export const styles: StyleTextRecordType = StyleSheet.create({
  displayXL: typographyNative.displayXl,
  displayLg: typographyNative.displayLg,
  headingXl: typographyNative.headingXl,
  headingLg: typographyNative.headingLg,
  headingMd: typographyNative.headingMd,
  headingSm: typographyNative.headingSm,
  bodyLg: typographyNative.bodyLg,
  bodyMd: typographyNative.bodyMd,
  bodySm: typographyNative.bodySm,
  caption: typographyNative.caption,
  linkLg: typographyNative.linkLg,
  linkMd: typographyNative.linkMd,
  linkSm: typographyNative.linkSm,
  buttonMd: typographyNative.buttonMd,
  buttonSm: typographyNative.buttonSm,
  buttonXsm: typographyNative.buttonXsm,
  bold: {
    fontWeight: '700'
  },
  semibold: {
    fontWeight: '600'
  },
  regular: {
    fontWeight: '400'
  }
})
