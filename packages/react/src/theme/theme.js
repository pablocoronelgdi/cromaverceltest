import { Color,Elevations,Typography } from "@cromaui/foundations";
const { Navy, Blue, Pink, Neutral, Stone } = Color;
const { LineHeight, FontFamily, FontSize, FontWeight, LetterSpacing } =
  Typography;

const macro = {
  color: {
    primary: {
      dark: Navy[900],
      main: Navy[800],
      light: Navy[300],
      extraLight: Navy[50],
    },
    secondary: {
      dark: Pink[300],
      main: Pink[700],
      light: Pink[100],
      extraLight: Pink[500],
    },
    tertiary: {
      dark: Blue[700],
      main: Blue[500],
      light: Blue[200],
      extraLight: Blue[50],
    },
    complementary: {
      dark: Stone[300],
      main: Stone[200],
      light: Stone[50],
    },
    text: {
      light: Neutral[100],
      dark: Neutral[1100],
    },
  },
/*   typography: {
    fontWeight: {
      regular: FontWeight.regular,
      bold: FontWeight.bold,
      semibold: FontWeight.semibold,
    },
    h1: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h1,
      lineHeight: LineHeight.h1,
      letterSpacing: LetterSpacing.h1,
    },
    h2: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h2,
      lineHeight: LineHeight.h2,
      letterSpacing: LetterSpacing.h2,
    },
    h3: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h3,
      lineHeight: LineHeight.h3,
      letterSpacing: LetterSpacing.h3,
    },
    h4: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h4,
      lineHeight: LineHeight.h4,
      letterSpacing: LetterSpacing.h4,
    },
    h5: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h5,
      lineHeight: LineHeight.h5,
      letterSpacing: LetterSpacing.h5,
    },
    h6: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h6,
      lineHeight: LineHeight.h6,
      letterSpacing: LetterSpacing.h6,
    },
    bodyLg: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodyLg,
      lineHeight: LineHeight.bodyLg,
      letterSpacing: LetterSpacing.bodyLg,
    },
    bodyMd: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodyMd,
      lineHeight: LineHeight.bodyMd,
      letterSpacing: LetterSpacing.bodyMd,
    },
    bodySm: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodySm,
      lineHeight: LineHeight.bodySm,
      letterSpacing: LetterSpacing.bodySm,
    },
    caption: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.caption,
      lineHeight: LineHeight.caption,
      letterSpacing: LetterSpacing.caption,
    },
  }, */
  components:{
    button:{
      elevation: Elevations.md
    }
  }
};

const selecta = {
  color: {
    primary: {
      dark: Navy[900],
      main: Pink[800],
      light: Navy[300],
      extraLight: Navy[50],
    },
    secondary: {
      dark: Pink[300],
      main: Pink[700],
      light: Pink[100],
      extraLight: Pink[500],
    },
    tertiary: {
      dark: Blue[700],
      main: Blue[500],
      light: Blue[200],
      extraLight: Blue[50],
    },
    complementary: {
      dark: Stone[300],
      main: Stone[200],
      light: Stone[50],
    },
    text: {
      light: Neutral[100],
      dark: Neutral[1100],
    },
  },
/*   typography: {
    fontWeight: {
      regular: FontWeight.regular,
      bold: FontWeight.bold,
      semibold: FontWeight.semibold,
    },
    h1: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h1,
      lineHeight: LineHeight.h1,
      letterSpacing: LetterSpacing.h1,
    },
    h2: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h2,
      lineHeight: LineHeight.h2,
      letterSpacing: LetterSpacing.h2,
    },
    h3: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h3,
      lineHeight: LineHeight.h3,
      letterSpacing: LetterSpacing.h3,
    },
    h4: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h4,
      lineHeight: LineHeight.h4,
      letterSpacing: LetterSpacing.h4,
    },
    h5: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h5,
      lineHeight: LineHeight.h5,
      letterSpacing: LetterSpacing.h5,
    },
    h6: {
      fontFamily: FontFamily.titillium,
      fontSize: FontSize.h6,
      lineHeight: LineHeight.h6,
      letterSpacing: LetterSpacing.h6,
    },
    bodyLg: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodyLg,
      lineHeight: LineHeight.bodyLg,
      letterSpacing: LetterSpacing.bodyLg,
    },
    bodyMd: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodyMd,
      lineHeight: LineHeight.bodyMd,
      letterSpacing: LetterSpacing.bodyMd,
    },
    bodySm: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.bodySm,
      lineHeight: LineHeight.bodySm,
      letterSpacing: LetterSpacing.bodySm,
    },
    caption: {
      fontFamily: FontFamily.openSans,
      fontSize: FontSize.caption,
      lineHeight: LineHeight.caption,
      letterSpacing: LetterSpacing.caption,
    },
  }, */

};

export { macro, selecta };
