import { color } from '@cromaui/foundations'
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
      variant: {
        filled: {
          backgroundColor: color.pink.dark,
          color: color.neutral[100]
        },
        outlined: {
          backgroundColor: color.neutral[0],
          color: color.pink.dark
        },
        link: {
          backgroundColor: color.neutral[0],
          color: color.pink.dark
        }
      }
    }
  }
}

export { macro }
