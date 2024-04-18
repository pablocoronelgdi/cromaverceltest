import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@cromaui/react'

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    $size: {
      description: 'La propiedad $size es la que define el tamaño del componente',
      control: { type: 'select' },
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
      table: {
        defaultValue: { summary: "'small'" },
        type: { summary: 'string' }
      }
    },
    $disabled: {
      description:
        'La propiedad $disabled es la que define si el componente Avatar está habilitado o no',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $monogram: {
      description:
        'La propiedad $monogram es la que define el monograma (texto) del componente, debe estar compuesto por 2 letras. No acepta tildes, ni diéricis, ni números',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: "'AR'" },
        type: { summary: 'string' }
      }
    },
    $src: {
      description:
        'La propiedad $src es la que define una url de una imagen para renderizar en el componente',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: null },
        type: { summary: 'string' }
      }
    },
    $alt: {
      control: { type: 'text' },
      description:
        'La propiedad $alt es la que define el texto descriptivo de la imagen que se renderiza en el componente, con la propiedad $src',
      table: {
        defaultValue: { summary: "'Descripción de la imagen'" },
        type: { summary: 'string' }
      }
    },
    $iconName: {
      description:
        'La propiedad $iconName es la que define el nombre del icono que se quiere renderizar en el componente, se permiten los strings empenzando con minúscula de Material Symbols: https://fonts.google.com/icons',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: "'person'" },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarDefault: Story = {
  name: 'Avatar default',
  args: { $size: 'extra-small' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `return <Avatar $size="extra-small" />`
      }
    }
  },
  render: function Render() {
    return <Avatar $size="extra-small" />
  }
}

export const AvatarWithIcon: Story = {
  name: 'Avatar con icono',
  args: {
    $size: 'small',
    $iconName: 'mood'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `return <Avatar $size="small" $iconName="mood" />`
      }
    }
  },
  render: function Render() {
    return <Avatar $size="small" $iconName="mood" />
  }
}

export const AvatarDisabled: Story = {
  name: 'Avatar deshabilitado',
  args: {
    $size: 'medium',
    $disabled: true,
    $iconName: 'person'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `return <Avatar $size="medium" $iconName="person" $disabled />`
      }
    }
  },
  render: function Render() {
    return <Avatar $size="medium" $iconName="person" $disabled />
  }
}

export const AvatarWithMonogram: Story = {
  name: 'Avatar con Monograma',
  args: {
    $size: 'large',
    $monogram: 'ar'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `return <Avatar $size="large" $monogram="ar" />`
      }
    }
  },
  render: function Render() {
    return <Avatar $size="large" $monogram="ar" />
  }
}

export const AvatarWithPhoto: Story = {
  name: 'Avatar con Foto',
  args: {
    $size: 'extra-large',
    $alt: 'Foto de perfil de usuario',
    $src: 'https://iili.io/JRkrejf.png'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Avatar 
            $size="extra-large"
            $alt="Foto de perfil de usuario"
            $src="https://iili.io/JRkrejf.png"
          />
          )
        `
      }
    }
  },
  render: function Render() {
    return (
      <Avatar 
        $size="extra-large"
        $alt="Foto de perfil de usuario"
        $src="https://iili.io/JRkrejf.png"
      />
    )
  }
}
