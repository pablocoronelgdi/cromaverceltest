import type { Meta, StoryObj } from '@storybook/react'
import { RoundedImage } from '@cromaui/react'
import { PHOTO_DATA_MOCK } from '../../mocks/images'

const meta = {
  title: 'Data Display/RoundedImage',
  component: RoundedImage,
  tags: ['autodocs'],
  argTypes: {
    $size: {
      control: { type: 'select' },
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
      description: 'La prop $size es que indica el tamaño del componente RoundedImage',
      table: {
        defaultValue: { summary: "'small'" },
        type: { summary: 'string' }
      }
    },
    $disabled: {
      control: { type: 'boolean' },
      description:
        'La prop $disabled es la que indica si el componente RoundedImage está habilitado o no',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $monogram: {
      control: { type: 'text' },
      description:
        'La prop $monogram es la que indica el monograma del componente, debe estar compuesto por 2 letras. No acepta tildes, ni diéricis, ni números',
      table: {
        defaultValue: { summary: "'AR'" },
        type: { summary: 'string' }
      }
    },
    $src: {
      control: { type: 'text' },
      description:
        'La propiedad $src es la que admite la url de una imagen para renderizar en el componente RoundedImage',
      table: {
        defaultValue: { summary: null },
        type: { summary: 'string' }
      }
    },
    $alt: {
      control: { type: 'text' },
      description:
        'La propiedad $alt es la que admite el texto description de la imagen que se renderiza en el componente RoundedImage, va junto a la prop $src',
      table: {
        defaultValue: { summary: "'Descripción de la imagen'" },
        type: { summary: 'string' }
      }
    },
    $iconName: {
      control: { type: 'text' },
      description:
        'La prop iconName es la que indica el nombre del icono a renderizar en el componente RoundedImage, se permiten los strings empenzando con minúscula de Material Symbols: https://fonts.google.com/icons',
      table: {
        defaultValue: { summary: "'person'" },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof RoundedImage>

export default meta
type Story = StoryObj<typeof meta>

export const RoundedImageDefault: Story = {
  args: {
    $size: 'extra-small'
  }
}

export const RoundedImageWithIcon: Story = {
  args: {
    $size: 'small',
    $disabled: false,
    $iconName: 'mood'
  }
}

export const RoundedImageDisabled: Story = {
  args: {
    $size: 'medium',
    $disabled: true,
    $iconName: 'person'
  }
}

export const RoundedImageWithMonogram: Story = {
  args: {
    $size: 'large',
    $disabled: false,
    $monogram: 'ar'
  }
}

export const RoundedImageWithPhoto: Story = {
  args: {
    $size: 'extra-large',
    $disabled: false,
    $src: PHOTO_DATA_MOCK.image,
    $alt: PHOTO_DATA_MOCK.alt
  }
}
