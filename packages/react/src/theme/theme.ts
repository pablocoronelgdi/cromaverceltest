import { color, elevations } from '@cromaui/foundations'
const { navy, blue, pink, neutral, stone } = color

const macro = {
  color: {
    primary: {
      dark: navy.main,
      main: navy.main,
      light: navy.main,
      extraLight: navy.main
    },
    secondary: {
      dark: pink.main,
      main: pink.main,
      light: pink.main,
      extraLight: pink.main
    },
    tertiary: {
      dark: blue.main,
      main: blue.main,
      light: blue.main,
      extraLight: blue.main
    },
    complementary: {
      dark: stone.dark,
      main: stone.dark,
      light: stone.dark
    },
    text: {
      light: neutral[100],
      dark: neutral[900]
    }
  },
  components: {
    button: {
      elevation: elevations.level2
    }
  }
}

export { macro }
