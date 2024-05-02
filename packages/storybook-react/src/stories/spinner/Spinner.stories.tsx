import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@cromaui/react'
import { color } from '@cromaui/foundations'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  argTypes: {
    $withLogo: {
      description: 'Muestra una variante basada en el logo de Macro.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $label: {
      description: 'El mensaje de carga que muestra el componente',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' }
      }
    },
    $size: {
      description: 'Define el tamaño del componente',
      control: { type: 'select' },
      options: ['extra-small', 'small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'extra-small' },
        type: { summary: 'string' }
      }
    },
    $variantColor: {
      description:
        'Define el color del componente, pero no aplica este cambio junto a la prop $withLogo',
      control: { type: 'select' },
      options: ['light', 'dark'],
      table: {
        defaultValue: { summary: 'dark' },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const SpinnerDefault: Story = {
  name: 'Spinner Default',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Spinner />
        )
        `
      }
    }
  },
  render: function Render() {
    return <Spinner />
  }
}

export const SpinnerWithLabel: Story = {
  name: 'Spinner with label',
  args: {
    $label: 'Cargando',
    $size: 'large'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Spinner $size="large" $label="Cargando" />
            <Spinner $withLogo $size="large" $label="Cargando" />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Spinner $size="large" $label="Cargando" />
        <Spinner $withLogo $size="large" $label="Cargando" />
      </div>
    )
  }
}

export const SpinerWithLogo: Story = {
  name: 'Spinner with logo',
  args: {
    $withLogo: true
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Spinner $withLogo $size="small" />
            <Spinner $withLogo $size="large" />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Spinner $withLogo $size="small" />
        <Spinner $withLogo $size="large" />
      </div>
    )
  }
}

export const SpinnerSize: Story = {
  name: 'Spinner sizes',
  args: {
    $withLogo: true,
    $label: 'Cargando',
    $size: 'small'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Spinner $size="extra-small" />
          <Spinner $size="small" />
          <Spinner $size="medium" />
          <Spinner $size="large" />
          <Spinner $label="Cargando" $size="large" />
          <Spinner $withLogo $label="Cargando" $size="small" />
          <Spinner $withLogo $label="Cargando" $size="large" />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Spinner $size="extra-small" />
        <Spinner $size="small" />
        <Spinner $size="medium" />
        <Spinner $size="large" />
        <Spinner $label="Cargando" $size="large" />
        <Spinner $withLogo $label="Cargando" $size="small" />
        <Spinner $withLogo $label="Cargando" $size="large" />
      </div>
    )
  }
}

export const SpinnerVariantColor: Story = {
  name: 'Spinner variants',
  args: {
    $withLogo: true,
    $label: 'Cargando',
    $variantColor: 'light'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                padding: '12px',

              }}
            >
              <Spinner $label="Cargando" $size="small" $variantColor="dark" />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                padding: '12px',
                backgroundColor: color.navy.dark
              }}
            >
              <Spinner $label="Cargando" $size="large" $variantColor="light" />
            </div>
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            padding: '12px'
          }}
        >
          <Spinner $label="Cargando" $size="large" $variantColor="dark" />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            padding: '12px',
            backgroundColor: color.navy.dark
          }}
        >
          <Spinner $label="Cargando" $size="large" $variantColor="light" />
        </div>
      </div>
    )
  }
}
