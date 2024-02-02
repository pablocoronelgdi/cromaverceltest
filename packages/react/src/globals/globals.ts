import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'polished'
import { typography } from '@cromaui/foundations'

// FlexBox
export const FLEX_CENTER = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FLEX_START = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const FLEX_END = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const FLEX_BETWEEN = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`
export const FLEX_COLUMN_CENTER = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

// Typography
export const FONT_DISPLAY_XL = css`
  font-size: ${typography.display.xl.fontSize};
  text-decoration: ${typography.display.xl.textDecoration};
  font-family: ${typography.display.xl.fontFamily};
  font-style: ${typography.display.xl.fontStyle};
  font-stretch: ${typography.display.xl.fontStretch};
  letter-spacing: ${typography.display.xl.letterSpacing};
  line-height: ${typography.display.xl.lineHeight};
`
export const FONT_DISPLAY_LG = css`
  font-size: ${typography.display.lg.fontSize};
  text-decoration: ${typography.display.lg.textDecoration};
  font-family: ${typography.display.lg.fontFamily};
  font-style: ${typography.display.lg.fontStyle};
  font-stretch: ${typography.display.lg.fontStretch};
  letter-spacing: ${typography.display.lg.letterSpacing};
  line-height: ${typography.display.lg.lineHeight};
`
export const FONT_HEADING_XL = css`
  font-size: ${typography.heading.xl.fontSize};
  text-decoration: ${typography.heading.xl.textDecoration};
  font-family: ${typography.heading.xl.fontFamily};
  font-style: ${typography.heading.xl.fontStyle};
  font-stretch: ${typography.heading.xl.fontStretch};
  letter-spacing: ${typography.heading.xl.letterSpacing};
  line-height: ${typography.heading.xl.lineHeight};
`
export const FONT_HEADING_LG = css`
  font-size: ${typography.heading.lg.fontSize};
  text-decoration: ${typography.heading.lg.textDecoration};
  font-family: ${typography.heading.lg.fontFamily};
  font-style: ${typography.heading.lg.fontStyle};
  font-stretch: ${typography.heading.lg.fontStretch};
  letter-spacing: ${typography.heading.lg.letterSpacing};
  line-height: ${typography.heading.lg.lineHeight};
`
export const FONT_HEADING_MD = css`
  font-size: ${typography.heading.md.fontSize};
  text-decoration: ${typography.heading.md.textDecoration};
  font-family: ${typography.heading.md.fontFamily};
  font-style: ${typography.heading.md.fontStyle};
  font-stretch: ${typography.heading.md.fontStretch};
  letter-spacing: ${typography.heading.md.letterSpacing};
  line-height: ${typography.heading.md.lineHeight};
`
export const FONT_HEADING_SM = css`
  font-size: ${typography.heading.sm.fontSize};
  text-decoration: ${typography.heading.sm.textDecoration};
  font-family: ${typography.heading.sm.fontFamily};
  font-style: ${typography.heading.sm.fontStyle};
  font-stretch: ${typography.heading.sm.fontStretch};
  letter-spacing: ${typography.heading.sm.letterSpacing};
  line-height: ${typography.heading.sm.lineHeight};
`
export const FONT_BODY_LG = css`
  font-size: ${typography.body.lg.fontSize};
  text-decoration: ${typography.body.lg.textDecoration};
  font-family: ${typography.body.lg.fontFamily};
  font-style: ${typography.body.lg.fontStyle};
  font-stretch: ${typography.body.lg.fontStretch};
  letter-spacing: ${typography.body.lg.letterSpacing};
  line-height: ${typography.body.lg.lineHeight};
`
export const FONT_BODY_MD = css`
  font-size: ${typography.body.md.fontSize};
  text-decoration: ${typography.body.md.textDecoration};
  font-family: ${typography.body.md.fontFamily};
  font-style: ${typography.body.md.fontStyle};
  font-stretch: ${typography.body.md.fontStretch};
  letter-spacing: ${typography.body.md.letterSpacing};
  line-height: ${typography.body.md.lineHeight};
`
export const FONT_BODY_SM = css`
  font-size: ${typography.body.sm.fontSize};
  text-decoration: ${typography.body.sm.textDecoration};
  font-family: ${typography.body.sm.fontFamily};
  font-style: ${typography.body.sm.fontStyle};
  font-stretch: ${typography.body.sm.fontStretch};
  letter-spacing: ${typography.body.sm.letterSpacing};
  line-height: ${typography.body.sm.lineHeight};
`
export const FONT_CAPTION = css`
  font-size: ${typography.caption.fontSize};
  text-decoration: ${typography.caption.textDecoration};
  font-family: ${typography.caption.fontFamily};
  font-style: ${typography.caption.fontStyle};
  font-stretch: ${typography.caption.fontStretch};
  letter-spacing: ${typography.caption.letterSpacing};
  line-height: ${typography.caption.lineHeight};
`
export const FONT_LINK_LG = css`
  font-size: ${typography.link.lg.fontSize};
  text-decoration: ${typography.link.lg.textDecoration};
  font-family: ${typography.link.lg.fontFamily};
  font-style: ${typography.link.lg.fontStyle};
  font-stretch: ${typography.link.lg.fontStretch};
  letter-spacing: ${typography.link.lg.letterSpacing};
  line-height: ${typography.link.lg.lineHeight};
`
export const FONT_LINK_MD = css`
  font-size: ${typography.link.md.fontSize};
  text-decoration: ${typography.link.md.textDecoration};
  font-family: ${typography.link.md.fontFamily};
  font-style: ${typography.link.md.fontStyle};
  font-stretch: ${typography.link.md.fontStretch};
  letter-spacing: ${typography.link.md.letterSpacing};
  line-height: ${typography.link.md.lineHeight};
`
export const FONT_LINK_SM = css`
  font-size: ${typography.link.sm.fontSize};
  text-decoration: ${typography.link.sm.textDecoration};
  font-family: ${typography.link.sm.fontFamily};
  font-style: ${typography.link.sm.fontStyle};
  font-stretch: ${typography.link.sm.fontStretch};
  letter-spacing: ${typography.link.sm.letterSpacing};
  line-height: ${typography.link.sm.lineHeight};
`
export const FONT_BUTTOM_MD = css`
  font-size: ${typography.button.md.fontSize};
  text-decoration: ${typography.button.md.textDecoration};
  font-family: ${typography.button.md.fontFamily};
  font-style: ${typography.button.md.fontStyle};
  font-stretch: ${typography.button.md.fontStretch};
  letter-spacing: ${typography.button.md.letterSpacing};
  line-height: ${typography.button.md.lineHeight};
`
export const FONT_BUTTOM_SM = css`
  font-size: ${typography.button.sm.fontSize};
  text-decoration: ${typography.button.sm.textDecoration};
  font-family: ${typography.button.sm.fontFamily};
  font-style: ${typography.button.sm.fontStyle};
  font-stretch: ${typography.button.sm.fontStretch};
  letter-spacing: ${typography.button.sm.letterSpacing};
  line-height: ${typography.button.sm.lineHeight};
`

export const FONT_TYPE_REGULAR = css`
  font-weight: 400;
`
export const FONT_TYPE_SEMIBOLD = css`
  font-weight: 600;
`
export const FONT_TYPE_BOLD = css`
  font-weight: 700;
`

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzYw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/publicsans/v15/ijwRs572Xtc6ZYQws9YVwnNGfJ4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/publicsans/v15/ijwRs572Xtc6ZYQws9YVwnNGfJ4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/publicsans/v15/ijwRs572Xtc6ZYQws9YVwnNGfJ4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

${normalize()}

html{
   ${FONT_BODY_MD}
    box-sizing: border-box
}

*,*::before,*::after {
    box-sizing: inherit
}


h1{
  ${FONT_DISPLAY_XL}
}
h2{
  ${FONT_DISPLAY_LG}
}
h3{
  ${FONT_HEADING_XL}
}
h4{
  ${FONT_HEADING_LG}
}
h5{
  ${FONT_HEADING_MD}
}
h6{
  ${FONT_HEADING_SM}
}
button{
${FONT_BUTTOM_MD}
}

`
