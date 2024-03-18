import { create } from '@storybook/theming/create'
import { color } from '@cromaui/foundations'
import cromaLogo from '../public/logo-croMa.svg'

export default create({
  base: 'light',
  brandTitle: 'Croma UI',
  brandUrl: '',
  brandImage: cromaLogo,
  brandTarget: '_self',

  // Colors
  colorPrimary: color.blue.extraSoft,
  colorSecondary: color.blue.soft,

  // UI
  appBg: color.blue.extraSoft,
});
