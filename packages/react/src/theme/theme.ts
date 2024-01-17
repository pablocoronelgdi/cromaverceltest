import { Color, Elevations } from '@cromaui/foundations'
const { Navy, Blue, Pink, Neutral, Stone } = Color

const macro = {
  color: {
    primary: {
      dark: Navy.main,
      main: Navy.main,
      light: Navy.main,
      extraLight: Navy.main
    },
    secondary: {
      dark: Pink.main,
      main: Pink.main,
      light: Pink.main,
      extraLight: Pink.main
    },
    tertiary: {
      dark: Blue.main,
      main: Blue.main,
      light: Blue.main,
      extraLight: Blue.main
    },
    complementary: {
      dark: Stone.dark,
      main: Stone.dark,
      light: Stone.dark
    },
    text: {
      light: Neutral[100],
      dark: Neutral[900]
    }
  },
  components: {
    button: {
      elevation: Elevations.level2
    }
  }
}

export { macro }
