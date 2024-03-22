import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@cromaui/react'
import { hsl, rgba } from 'polished'

const meta = {
  title: 'Inputs/Icon',
  component: Icon,
  argTypes: {
    $name: {
      description:
        'El nombre del icono, se utiliza la nomenclatura de Material Icons de google. Puede utilizarse el children en reemplazo de esta prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' }
      }
    },
    $size: {
      description: 'Define el tamaño del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' }
      }
    },
    color: {
      description: 'Define el color del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' }
      }
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  DOC STORIES ---------- */

export const SizeIcon: Story = {
  name: 'Tamaños del Icono',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        <>
          <Icon $name="person" $size="small" />
          <Icon $name="person" $size="medium" />
          <Icon $name="person" $size="large" />
          <Icon $name="person" $size="extra-large" />
        </>
        `
      }
    }
  },
  args: {
    $size: 'large',
    $name: 'person'
  },

  render: function Render() {
    return (
      <>
        <Icon $name="person" $size="small" />
        <Icon $name="person" $size="medium" />
        <Icon $name="person" $size="large" />
        <Icon $name="person" $size="extra-large" />
      </>
    )
  }
}

export const ColorIcon: Story = {
  name: 'colores del icono',
  tags: ['docs-only'],
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        <>
          <Icon $name="person" color="pink" />
          <Icon $name="person" color={rgba(10, 141, 43, 1)} />
          <Icon $name="person" color={navy} />
          <Icon $name="person" color={hsl(135.1145038167939, 86.75496688741723, 29.607843137254903)} />
        </>
        `
      }
    }
  },

  render: function Render() {
    const navy = '#053575'
    return (
      <>
        <Icon $name="person" color="pink" />
        <Icon $name="person" color={rgba(10, 141, 43, 1)} />
        <Icon $name="person" color={navy} />
        <Icon
          $name="person"
          color={hsl(135.1145038167939, 86.75496688741723, 29.607843137254903)}
        />
      </>
    )
  }
}

/* ----------  STORYBOOK STORIES ---------- */

export const Default: Story = {
  args: {
    $size: 'large',
    $name: 'person',
    color: 'inherit'
  }
}
