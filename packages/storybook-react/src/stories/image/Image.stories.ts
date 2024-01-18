import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Images',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    image: { control: { type: 'string' } },
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
    alt: { control: { type: 'string' } },
    backgroundImage: { control: { type: 'boolean' } },
    circle: { control: { type: 'boolean' } }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const ImageDefault: Story = {
  args: {
    image:
      'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE',
    width: 100,
    height: 100,
    backgroundImage: false,
    alt: 'Banca Internet'
  }
}

export const ImageBackground: Story = {
  args: {
    image:
      'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE',
    backgroundImage: true,
    width: 200,
    height: 200,
    alt: 'Banca Internet'
  }
}

export const ImageCircle: Story = {
  args: {
    image:
      'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE',
    backgroundImage: true,
    circle: true,
    width: 150,
    height: 150,
    alt: 'Banca Internet'
  }
}

export const ImageHover: Story = {
  args: {
    image:
      'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE',
    backgroundImage: true,
    circle: false,
    width: 150,
    height: 150,
    alt: 'Banca Internet',
    hover: true
  }
}

export const ImageFullWidth: Story = {
  args: {
    image:
      'https://media.licdn.com/dms/image/C4E0BAQEdEHYXLJwxlQ/company-logo_200_200/0/1644521494829/garajedeideas_americas_logo?e=2147483647&v=beta&t=R4jQRSH2vlsHMNhBC_ZLwLgpmCvtHI9F4KBAOMhMNWE',
    backgroundImage: false,
    fullWidth: true,
    alt: 'Banca Internet'
  }
}
