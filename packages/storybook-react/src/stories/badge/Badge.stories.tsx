import { Badge, Icon } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    $size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'La prop $size es que indica el tamaño del componente Badge',
      table: {
        defaultValue: { summary: "'small'" },
        type: { summary: 'string' }
      }
    },
    $text: {
      control: { type: 'text' },
      description:
        'La prop $text es la que indica el contenido de tipo texto del componente, debe estar tener como máximo 4 palabras. Sin punto final',
      table: {
        defaultValue: { summary: "'Nuevo'" },
        type: { summary: 'string' }
      }
    },
    $count: {
      control: { type: 'number' },
      description:
        'La prop $count es la que indica el contenido del componente, si se excede de 999 se suma un +. Solo se permiten números',
      table: {
        defaultValue: { summary: '3' },
        type: { summary: 'number' }
      }
    },
    $iconName: {
      control: { type: 'text' },
      description:
        'La prop $iconName es la que indica el nombre del icono a renderizar en el componente, se permiten los strings empenzando con minúscula de Material Symbols: https://fonts.google.com/icons',
      table: {
        defaultValue: { summary: "'info'" },
        type: { summary: 'string' }
      }
    },
    $backgroundColor: {
      control: { type: 'select' },
      options: ['pink', 'blue', 'green', 'light-blue'],
      description: 'La prop $backgroundColor es que indica el color del componente Badge',
      table: {
        defaultValue: { summary: "'pink'" },
        type: { summary: 'string' }
      }
    },
    $backgroundType: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description:
        'La prop $backgroundType es la que indica el color del borde del componente Badge',
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
    $size: 'small',
    $backgroundColor: 'pink'
  }
}

export const BadgeWithTextOrPill: Story = {
  args: {
    $size: 'small',
    $backgroundColor: 'blue',
    $text: 'Nuevo servicio'
  }
}

export const BadgeWithCount: Story = {
  args: {
    $size: 'medium',
    $backgroundColor: 'green',
    $count: 300
  }
}

export const BadgeWithExcedentCount: Story = {
  args: {
    $size: 'large',
    $backgroundColor: 'light-blue',
    $count: 9999
  }
}

export const BadgeWithIcon: Story = {
  args: {
    $size: 'large',
    $backgroundColor: 'pink',
    $iconName: 'checked'
  }
}

export const BadgeWithIconAndText: Story = {
  args: {
    $size: 'large',
    $backgroundColor: 'blue',
    $iconName: 'checked',
    $text: 'Pago recibido'
  }
}

export const BadgeWithBackgroundDark: Story = {
  args: {
    $size: 'large',
    $backgroundColor: 'green',
    $backgroundType: 'dark',
    $count: 3
  }
}

export const BadgeNotification: Story = {
  name: 'Badge Notification',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
        <div style={{ display: 'flex' }}>
          <div style={{ position: 'relative' }}>
            <Icon $name="notifications" style={{ color: 'white' }} $size="large" />
            <Badge
              $count={1000}
              $backgroundColor="light-blue"
              $backgroundType="dark"
              style={{ position: 'absolute', top: '-8px', right: '-26px' }}
            />
          </div>
        </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative' }}>
          <Icon $name="notifications" $size="large" />
          <Badge
            $count={1000}
            $backgroundColor="light-blue"
            $backgroundType="dark"
            style={{ position: 'absolute', top: '-8px', right: '-26px' }}
          />
        </div>
      </div>
    )
  }
}
