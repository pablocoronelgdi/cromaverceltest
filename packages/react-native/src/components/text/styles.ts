/* eslint-disable @typescript-eslint/ban-types */
import { StyleSheet } from 'react-native'
import type { StyleTextRecordType } from './types'
import { typographyNative } from '@cromaui/foundations'

export const styles = (variant: string): StyleSheet.NamedStyles<StyleTextRecordType> => {
  const fontDisplayVariant = typographyNative.variant.display[variant as keyof Object]
  const fontHeadingDisplayVariant = typographyNative.variant.heading[variant as keyof Object]
  const fontBodyDisplayVariant = typographyNative.variant.body[variant as keyof Object]

  return StyleSheet.create({
    displayXL: {
      ...typographyNative.displayXl,
      ...fontDisplayVariant
    },
    displayLg: { ...typographyNative.displayLg, ...fontDisplayVariant },
    headingXl: { ...typographyNative.headingXl, ...fontHeadingDisplayVariant },
    headingLg: { ...typographyNative.headingLg, ...fontHeadingDisplayVariant },
    headingMd: { ...typographyNative.headingMd, ...fontHeadingDisplayVariant },
    headingSm: { ...typographyNative.headingSm, ...fontHeadingDisplayVariant },
    bodyLg: { ...typographyNative.bodyLg, ...fontBodyDisplayVariant },
    bodyMd: { ...typographyNative.bodyMd, ...fontBodyDisplayVariant },
    bodySm: { ...typographyNative.bodySm, ...fontBodyDisplayVariant },
    caption: typographyNative.caption,
    linkLg: typographyNative.linkLg,
    linkMd: typographyNative.linkMd,
    linkSm: typographyNative.linkSm,
    buttonMd: typographyNative.buttonMd,
    buttonSm: typographyNative.buttonSm,
    buttonXsm: typographyNative.buttonXsm
  })
}
