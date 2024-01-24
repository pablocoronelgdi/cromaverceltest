import { create } from '@storybook/theming/create'
import { color } from '@cromaui/foundations'

export default create({
  base: 'light',
  brandTitle: 'Croma UI',
  brandUrl: '',
  brandImage: 'https://media-asgard.s3.eu-west-1.amazonaws.com/23/10/31/4224bca7-5df5-4013-898b-0a5c5b0c5bdf_garaje-logo-l---negr.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: color.blue.extraSoft,
  colorSecondary: color.blue.soft,

  // UI
  appBg: color.blue.extraSoft,
});
