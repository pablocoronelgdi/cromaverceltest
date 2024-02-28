/* eslint-disable no-useless-escape */
import { Button, Link, Toogletip } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Data Display/Toogletip',
  component: Toogletip,
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
      control: false
    },
    actionButtons: {
      description: 'Los componentes button que mostraría el toogletip',
      control: false
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
  args: {
    position: 'bottom',
    title: 'Titulo',
    label: 'Texto the ejemplo proveniente la prop label',
    arrowPosition: 'middle',
    children: <h3>Hover This Title</h3>
  }
}

export const WithButtons: Story = {
  name: 'Con botones de acción',
  args: {
    position: 'bottom',
    title: 'Titulo',
    label: 'Texto the ejemplo proveniente la prop label',
    actionButtons: (
      <>
        <Button size="small" variant="text">
          Cancelar
        </Button>
        <Button size="small" variant="filled">
          Confirmar
        </Button>
      </>
    ),
    arrowPosition: 'middle',
    children: <h3>Hover This Title</h3>
  }
}

export const WithLinks: Story = {
  name: 'Con links de acción',
  args: {
    position: 'bottom',
    title: 'Titulo',
    label: 'Texto the ejemplo proveniente la prop label',
    actionLinks: (
      <>
        <Link title="link1" content="link1" alt="link1" link="link1" />
        <Link title="link2" content="link2" alt="link2" link="link2" />
      </>
    ),
    arrowPosition: 'middle',
    children: <h3>Hover This Title</h3>
  }
}

export const WithLinksAndButtons: Story = {
  name: 'Con links y botones',
  args: {
    position: 'bottom',
    title: 'Titulo',
    label: 'Texto the ejemplo proveniente la prop label',
    actionLinks: <Link title="link2" content="link2" alt="link2" link="link2" />,
    actionButtons: (
      <>
        <Button variant="filled" size="small">
          Confirmar
        </Button>
      </>
    ),
    arrowPosition: 'middle',
    children: <h3>Hover This Title</h3>
  }
}

/* ----------  DOC STORIES ---------- */

export const SimpleToogletipGrid: Story = {
  name: 'Simple Toogletip',
  tags: ['docs-only'],
  args: { label: '', arrowPosition: 'middle', position: 'bottom', children: '', title: 'titulo' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `

        return (
          <div className="grid">
            <Toogletip position="top" label={'test de contenido'} arrowPosition="start">
              <div>Top start</div>
            </Toogletip>
            <Toogletip position="top" label={'test de contenido'} arrowPosition="middle">
              <div>Top middle</div>
            </Toogletip>
            <Toogletip position="top" label={'test de contenido'} arrowPosition="end">
              <div>Top end</div>
            </Toogletip>
            <Toogletip position="bottom" label={'test de contenido'} arrowPosition="start">
              <div>Bottom start</div>
            </Toogletip>
            <Toogletip position="bottom" label={'test de contenido'} arrowPosition="middle">
              <div>Bottom middle</div>
            </Toogletip>
            <Toogletip position="bottom" label={'test de contenido'} arrowPosition="end">
              <div>Bottom end</div>
            </Toogletip>
            <Toogletip position="left" label={'test de contenido'} arrowPosition="start">
              <div>Left start</div>
            </Toogletip>
            <Toogletip position="left" label={'test de contenido'} arrowPosition="middle">
              <div>Left middle</div>
            </Toogletip>
            <Toogletip position="left" label={'test de contenido '} arrowPosition="end">
              <div>Left end</div>
            </Toogletip>
            <Toogletip position="right" label={'test de contenido'} arrowPosition="start">
              <div>Right start</div>
            </Toogletip>
            <Toogletip position="right" label={'test de contenido'} arrowPosition="middle">
              <div>Right middle</div>
            </Toogletip>
            <Toogletip position="right" label={'test de contenido'} arrowPosition="end">
              <div>Right end</div>
            </Toogletip>
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
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="top"
            arrowPosition="start"
          >
            <div>Top start</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="top"
            arrowPosition="middle"
          >
            <div>Top middle</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="top"
            arrowPosition="end"
          >
            <div>Top end</div>
          </Toogletip>
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
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="bottom"
            arrowPosition="start"
          >
            <div>Bottom start</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="bottom"
            arrowPosition="middle"
          >
            <div>Bottom middle</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="bottom"
            arrowPosition="end"
          >
            <div>Bottom end</div>
          </Toogletip>
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
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="left"
            arrowPosition="start"
          >
            <div>Left start</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="left"
            arrowPosition="middle"
          >
            <div>Left middle</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="left"
            arrowPosition="end"
          >
            <div>Left end</div>
          </Toogletip>
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
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="right"
            arrowPosition="start"
          >
            <div>Right start</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="right"
            arrowPosition="middle"
          >
            <div>Right middle</div>
          </Toogletip>
          <Toogletip
            title="Titulo del toogletip"
            label="Información que va en el cuerpo del Toogletip"
            position="right"
            arrowPosition="end"
          >
            <div>Right end</div>
          </Toogletip>
        </div>
      </div>
    )
  }
}

export const WithActionButtons: Story = {
  name: 'Botones de Acción',
  tags: ['docs-only'],
  args: { label: '', arrowPosition: 'middle', position: 'bottom', children: '', title: 'titulo' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Toogletip
          title="Botones de accion"
          label="Acá abajo se mostrarán los botones de acción"
          position="bottom"
          arrowPosition="middle"
          actionButtons={
            <>
            <Button size="small">Acción1</Button>
            <Button size="small">Acción2</Button>
            </>
          }
        >
          Botones de Acción
        </Toogletip>
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
        <Toogletip
          title="Botones de accion"
          label="Acá abajo se mostrarán los botones de acción"
          position="bottom"
          arrowPosition="middle"
          actionButtons={
            <>
              <Button size="small">Acción1</Button>
              <Button size="small">Acción2</Button>
            </>
          }
        >
          Botones de Acción
        </Toogletip>
      </div>
    )
  }
}

export const WithActionLinks: Story = {
  name: 'Links de Acción',
  tags: ['docs-only'],
  args: { label: '', arrowPosition: 'middle', position: 'bottom', children: '', title: 'titulo' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Toogletip
          title="Links de accion"
          label="Acá abajo se mostrarán los links de acción"
          position="bottom"
          arrowPosition="middle"
          actionLinks={
            <>
            <Link link="/" alt="link1" content="Link1" title="link1" />
            <Link link="/" alt="link2" content="Link2" title="link2" />
          </>
          }
        >
        Links de Acción
        </Toogletip>
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
        <Toogletip
          title="Links de accion"
          label="Acá abajo se mostrarán los links de acción"
          position="bottom"
          arrowPosition="middle"
          actionLinks={
            <>
              <Link link="/" alt="link1" content="Link1" title="link1" />
              <Link link="/" alt="link2" content="Link2" title="link2" />
            </>
          }
        >
          Links de Acción
        </Toogletip>
      </div>
    )
  }
}

export const StepperToogletip: Story = {
  name: 'Con pasos múltiples',
  tags: ['docs-only'],
  args: {
    label: '',
    arrowPosition: 'middle',
    position: 'bottom',
    children: '',
    title: 'titulo',
    steps: [
      { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
      { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
      { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
    ]
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Toogletip
          title="Esta prop no se mostrará si la prop step se encuentra definida"
          label="Esta prop no se mostrará si la prop step se encuentra definida"
          position="bottom"
          arrowPosition="middle"
          steps={[
            { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
            { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
            { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
          ]}
        >
          Stepper Toogletip
        </Toogletip>
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
        <Toogletip
          title="Links de acción"
          label="Acá abajo se mostrarán los links de acción"
          position="bottom"
          arrowPosition="middle"
          steps={[
            { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
            { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
            { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
          ]}
        >
          Stepper Toogletip
        </Toogletip>
      </div>
    )
  }
}
