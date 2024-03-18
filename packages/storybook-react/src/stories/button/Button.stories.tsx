import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@cromaui/react'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description:
        "Si su valor es 'true' el componente se mostrara deshabilitado impidiendo así su uso.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onClick: {
      description: 'Función que se ejecuta cuando se clickea el botón',
      action: 'onChange',
      table: {
        type: { summary: 'function' }
      }
    },
    variant: {
      description: 'Las variantes de estilo que posee el componente.',
      options: ['filled', 'outlined', 'ghost'],
      control: { type: 'select' },
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: 'filled' }
      }
    },
    size: {
      description: 'Define el tamaño del componente.',
      options: ['extra-small', 'small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    iconName: {
      description: 'Las variantes de estilo que posee el componente.',
      control: { type: 'text' },

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    iconPosition: {
      description: 'Dependiendo de su valor mostrará el icono a la izquierda o derecha del texto.',
      options: ['left', 'right'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    },
    background: {
      description:
        'Define entre claro y oscuro (light/dark) el color de fondo del boton y su contraste.',
      options: ['dark', 'light'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dark' }
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
          <Button> Ingresar <Button />
        `
      }
    }
  },
  args: {
    disabled: false,
    variant: 'filled',
    iconName: undefined,
    iconPosition: 'left',
    background: 'dark',
    children: 'Aceptar'
  }
}
