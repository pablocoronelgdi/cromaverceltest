/* eslint-disable no-useless-escape */
import { Tooltip } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
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
    label: {
      description: 'Texto que mostrará el tooltip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    arrowPosition: {
      description: 'La posición de la flecha del tooltip.',
      options: ['start', 'middle', 'end'],
      control: { type: 'select' },

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' }
      }
    }
  }
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  STORYBOOK STORIES ---------- */

export const SimpleToolTip: Story = {
  name: 'Tooltip simple',
  args: {
    position: 'bottom',
    label: 'Texto the ejemplo proveniente la prop label',
    arrowPosition: 'middle',
    children: <button>Confirmar</button>
  }
}

/* ----------  DOC STORIES ---------- */

export const SimpleTooltipGrid: Story = {
  name: 'Simple Tooltip',
  tags: ['docs-only'],
  args: { label: '', arrowPosition: 'middle', position: 'bottom', children: '' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `

        return (
          <div className="grid">
            <Tooltip position="top" label={'test de contenido'} arrowPosition="start">
              <div>Top start</div>
            </Tooltip>
            <Tooltip position="top" label={'test de contenido'} arrowPosition="middle">
              <div>Top middle</div>
            </Tooltip>
            <Tooltip position="top" label={'test de contenido'} arrowPosition="end">
              <div>Top end</div>
            </Tooltip>
            <Tooltip position="bottom" label={'test de contenido'} arrowPosition="start">
              <div>Bottom start</div>
            </Tooltip>
            <Tooltip position="bottom" label={'test de contenido'} arrowPosition="middle">
              <div>Bottom middle</div>
            </Tooltip>
            <Tooltip position="bottom" label={'test de contenido'} arrowPosition="end">
              <div>Bottom end</div>
            </Tooltip>
            <Tooltip position="left" label={'test de contenido'} arrowPosition="start">
              <div>Left start</div>
            </Tooltip>
            <Tooltip position="left" label={'test de contenido'} arrowPosition="middle">
              <div>Left middle</div>
            </Tooltip>
            <Tooltip position="left" label={'test de contenido '} arrowPosition="end">
              <div>Left end</div>
            </Tooltip>
            <Tooltip position="right" label={'test de contenido'} arrowPosition="start">
              <div>Right start</div>
            </Tooltip>
            <Tooltip position="right" label={'test de contenido'} arrowPosition="middle">
              <div>Right middle</div>
            </Tooltip>
            <Tooltip position="right" label={'test de contenido'} arrowPosition="end">
              <div>Right end</div>
            </Tooltip>
        </>
        )
        `
      }
    }
  },

  render: function Render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Tooltip position="top" label={'test de contenido'} arrowPosition="start">
            <div>Top start</div>
          </Tooltip>
          <Tooltip position="top" label={'test de contenido'} arrowPosition="middle">
            <div>Top middle</div>
          </Tooltip>
          <Tooltip position="top" label={'test de contenido'} arrowPosition="end">
            <div>Top end</div>
          </Tooltip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Tooltip position="bottom" label={'test de contenido'} arrowPosition="start">
            <div>Bottom start</div>
          </Tooltip>
          <Tooltip position="bottom" label={'test de contenido'} arrowPosition="middle">
            <div>Bottom middle</div>
          </Tooltip>
          <Tooltip position="bottom" label={'test de contenido'} arrowPosition="end">
            <div>Bottom end</div>
          </Tooltip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Tooltip position="left" label={'test de contenido'} arrowPosition="start">
            <div>Left start</div>
          </Tooltip>
          <Tooltip position="left" label={'test de contenido'} arrowPosition="middle">
            <div>Left middle</div>
          </Tooltip>
          <Tooltip position="left" label={'test de contenido '} arrowPosition="end">
            <div>Left end</div>
          </Tooltip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Tooltip position="right" label={'test de contenido'} arrowPosition="start">
            <div>Right start</div>
          </Tooltip>
          <Tooltip position="right" label={'test de contenido'} arrowPosition="middle">
            <div>Right middle</div>
          </Tooltip>
          <Tooltip position="right" label={'test de contenido'} arrowPosition="end">
            <div>Right end</div>
          </Tooltip>
        </div>
      </div>
    )
  }
}
