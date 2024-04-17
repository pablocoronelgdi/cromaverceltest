import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tab } from "@cromaui/react";
import { useState } from 'react';

const meta = {
  title: 'Navigation/Tab',
  component: Tab,
  argTypes: {
    $label: {
      description: 'Opcional, recibe el texto que se muestra en el contenido del Tab',
      control: { type: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Tab 1"' }
      }
    },
    $iconName: {
      description: 'Opcional, recibe el nombre del ícono que se quiere mostrar',
      control: { type: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null }
      }
    },
    $isActive: {
      description: 'Opcional, define si el Tab está activado o no, cambiando los estilos del mismo',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    $isVerticalContent: {
      description: 'Opcional, define si el contenido del Tab se debe ver en vertical o no. Solo funciona en medidas menores a 1200px',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    $isDismissible: {
      description: 'Opcional, define si el contenido del Tab se puede eliminar o no, si es verdadero se agrega el botón con ícono "close" ',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    $onDismiss: {
      description: 'Función que se ejecuta cuando se presiona el botón con ícono "close". Funciona si la propiedad $isDismissible es verdadera',
      action: 'onClick',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    }
  }
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const TabDefault: Story = {
  name: 'Tab default',
  args: { $label: 'Tab 1' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Tab $label="Tab 1" />
        )`
      }
    }
  },
  render: function Render() {
    return (
      <Tab $label="Tab 1" />
    )
  }
}

export const TabIcon: Story = {
  name: 'Tab icon',
  args: { $iconName: 'home' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <Tab $iconName='home' />
        )`
      }
    }
  },
  render: function Render() {
    return (
      <Tab $iconName='home' />
    )
  }
}

export const TabActive: Story = {
  name: 'Tab active',
  args: { $label: 'Tab 3', $iconName: 'person', $isActive: true },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
            <Tab $label="Tab 3" $iconName="person" $isActive />
        )`
      }
    }
  },
  render: function Render() {
    return (
      <Tab $label="Tab 3" $iconName="person" $isActive />
    )
  }
}

export const TabVertical: Story = {
  name: 'Tab vertical',
  args: { $label: 'Tab 4', $iconName: 'dataset', $isVerticalContent: true },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
            <Tab $label="Tab 4" $iconName="dataset" $isVerticalContent />
        )`
      }
    }
  },
  render: function Render() {
    return (
      <Tab $label="Tab 4" $iconName="dataset" $isVerticalContent />
    )
  }
}

export const TabDismissible: Story = {
  name: 'Tab Dismissible',
  args: { $label: 'Tab 5', $iconName: 'settings', $isDismissible: true },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <Button $text="Resetear estado" onClick={() => setShowTab(true)} />
            {showTab && <Tab $label="Tab 5" $iconName="settings" $isDismissible  $onDismiss={() => setShowTab(!showTab)} />}
        </div>
        )`
      }
    }
  },
  render: function Render() {
    const [showTab, setShowTab] = useState(true)
    
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}
      >
        <Button $text="Resetear estado" onClick={() => setShowTab(true)} />
        {showTab && <Tab $label="Tab 5" $iconName="settings" $isDismissible  $onDismiss={() => setShowTab(!showTab)} />}
    </div>
    )
  }
}
