/* eslint-disable no-useless-escape */
import { Button, Toogletip } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Data Display/Toogletip',
  component: Toogletip,
  tags: ['autodocs'],

  argTypes: {
    position: {
      description:
        'Indica de que lado del componente se mostrará. Si no hay espacio, se ubicará del lado contrario.',
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' }
      }
    },
    title: {
      description: 'Texto que se mostrará como titulo del Toogletip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      description: 'Texto que se mostrará en el cuerpo del Toogletip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    arrowPosition: {
      description: 'La posición de la flecha del Toogletip.',
      options: ['start', 'middle', 'end'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' }
      }
    },
    actionLinks: {
      description: 'Los componentes link que mostraría el toogletip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    actionButtons: {
      description: 'Los componentes button que mostraría el toogletip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    steps: {
      description:
        'Un array de objetos con propiedades title y label para definir los pasos en el toogletip',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: undefined }
      }
    }
  }
} satisfies Meta<typeof Toogletip>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  STORYBOOK STORIES ---------- */

export const SimpleToogletip: Story = {
  name: 'Toogletip simple',
  tags: ['autodocs'],
  args: {
    position: 'bottom',
    title: 'Titulo',
    label: 'Texto the ejemplo proveniente la prop label',
    actionButtons: (
      <>
        <Button variant="filled"> Cancelar</Button>
        <Button variant="filled"> Confirmar</Button>
      </>
    ),
    arrowPosition: 'middle',
    children: <h3>Hover This Title</h3>
  }
}
