import { Badge } from '@cromaui/react'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'La prop size es que indica el tamaño del componente Badge',
      table: {
        defaultValue: { summary: "'small'" },
        type: { summary: 'string' }
      }
    },
    text: {
      control: { type: 'text' },
      description:
        'La prop text es la que indica el contenido de tipo texto del componente, debe estar tener como máximo 4 palabras. Sin punto final',
      table: {
        defaultValue: { summary: "'Nuevo'" },
        type: { summary: 'string' }
      }
    },
    count: {
      control: { type: 'number' },
      description:
        'La prop count es la que indica el monograma del componente, debe estar compuesto por 2 letras. No acepta tildes, ni diéricis, ni números',
      table: {
        defaultValue: { summary: '3' },
        type: { summary: 'number' }
      }
    },
    iconName: {
      control: { type: 'text' },
      description:
        'La prop iconName es la que indica el nombre del icono a renderizar en el componente RoundedImage, se permiten los strings empenzando con minúscula de Material Symbols: https://fonts.google.com/icons',
      table: {
        defaultValue: { summary: "'info'" },
        type: { summary: 'string' }
      }
    },
    color: {
      control: { type: 'select' },
      options: ['pink', 'blue', 'green'],
      description: 'La prop color es que indica el color del componente Badge',
      table: {
        defaultValue: { summary: "'pink'" },
        type: { summary: 'string' }
      }
    },
    backgroundType: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description:
        'La prop backgroundType es la que indica el color del borde del componente Badge',
      table: {
        defaultValue: { summary: "'light'" },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const BadgeDefault: Story = {
  args: {
    size: 'small',
    color: 'pink'
  }
}

export const BadgeWithTextOrPill: Story = {
  args: {
    size: 'small',
    color: 'blue',
    text: 'Nuevo servicio'
  }
}

export const BadgeWithCount: Story = {
  args: {
    size: 'medium',
    color: 'green',
    count: 300
  }
}

export const BadgeWithExcedentCount: Story = {
  args: {
    size: 'large',
    color: 'pink',
    count: 9999
  }
}

export const BadgeWithIcon: Story = {
  args: {
    size: 'large',
    color: 'blue',
    iconName: 'checked'
  }
}

export const BadgeWithIconAndText: Story = {
  args: {
    size: 'large',
    color: 'green',
    iconName: 'checked',
    text: 'Pago recibido'
  }
}

export const BadgeWithBackgroundDark: Story = {
  args: {
    size: 'large',
    color: 'pink',
    backgroundType: 'dark',
    count: 3
  }
}
