import type { Meta, StoryObj } from '@storybook/react'
import { ListItem, Avatar } from '@cromaui/react'
import { useState } from 'react'
import { ListItemPropTypes } from '@cromaui/react/dist/components/listitem/types'

const meta: Meta<typeof Image> = {
  title: 'Data Display/ListItem',
  component: ListItem,
  argTypes: {
    title: {
      description: 'Mediante esta propiedad se puede definir el título del item',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'Título' },
        type: { summary: 'string' }
      }
    },
    $description: {
      description:
        'Mediante esta propiedad se puede agregar una descripción para acompañar al título (opcional)',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'Descripción del título' },
        type: { summary: 'string' }
      }
    },
    $as: {
      description:
        'Mediante esta propiedad se puede definir si el componente es un link o un item (opcional)',
      control: { type: 'select' },
      options: ['item', 'link'],
      table: {
        defaultValue: { summary: 'item' },
        type: 'string'
      }
    },
    $leftComponentRender: {
      description:
        'Mediante esta propiedad se puede definir el nombre del componente que se quiere renderizar del lado izquierdo del componente (opcional), las opciones son: checkbox, switch, iconItem y radioButton',
      control: { type: 'select' },
      options: ['checkbox', 'switch', 'iconItem', 'radioButton'],
      table: {
        defaultValue: { summary: 'iconItem' },
        type: 'string'
      }
    },
    $leftContentChildren: {
      description:
        'Mediante esta propiedad se puede agregar un componente de tipo ReactNode para renderizar en el lado izquierdo del componente (opcional). Esto es para casos que no estén contemplados en las opciones de la propiedad $leftComponentRender. Se debe usar una o la otra',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: null },
        type: 'ReactNode'
      }
    },
    $rightComponentRender: {
      description:
        'Mediante esta propiedad se puede definir el nombre del componente que se quiere renderizar del lado derecho del componente (opcional), las opciones son: checkbox, switch, icon, radioButton y link',
      control: { type: 'select' },
      options: ['checkbox', 'switch', 'icon', 'radioButton', 'link'],
      table: {
        defaultValue: { summary: 'icon' },
        type: 'string'
      }
    },
    $rightContentChildren: {
      description:
        'Mediante esta propiedad se puede agregar un componente de tipo ReactNode para renderizar en el lado derecho del componente (opcional). Esto es para casos que no estén contemplados en las opciones de la propiedad $rightComponentRender. Se debe usar una o la otra',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: null },
        type: 'ReactNode'
      }
    },
    disabled: {
      description:
        'Mediante esta propiedad se define el estado deshabilitado del componente (opcional)',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $selected: {
      description:
        'Para controlar el componente con esta  propiedad se define si el componente esta selecionado haciendo uso del componente switch, checkbox, o radioButton a la izquierda o derecha (opcional)',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      }
    },
    $onSelect: {
      description:
        'Función que se ejecuta cuando se hace click o presiona el componente checkbox, switch o radioButton. Esta propiedad se debe usar junto a $selected para controlar el componente',
      action: 'onClick',
      table: {
        type: { summary: 'function' }
      }
    },
    href: {
      description:
        'Mediante esta propiedad se define el link interno o el ancla a dónde se quiera navegar, siempre y cuando el $as sea "link"',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: null },
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const ListItemDefault: Story = {
  name: 'ListItem default',
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <ListItem />
        )
        `
      }
    }
  },
  render: function Render() {
    return <ListItem />
  }
}

export const ListItemDescription: Story = {
  name: 'ListItem description',
  args: { $description: 'Descripción del ListItem' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <ListItem $description="Descripción del ListItem" />
        )
        `
      }
    }
  },
  render: function Render() {
    return <ListItem $description="Descripción del ListItem" />
  }
}

export const ListItemLink: Story = {
  name: 'ListItem link',
  args: { title: 'Título', $description: 'Hacer click para ir al inicio', $as: 'link', href: '/' },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <ListItem 
            title="Título" 
            $description="Hacer click para ir al inicio"
            $as="link"
            href="/"
          />
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <ListItem title="Título" $description="Hacer click para ir al inicio" $as="link" href="/" />
    )
  }
}

export const ListItemDisabled: Story = {
  name: 'ListItem disabled',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'checkbox',
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ListItem
              title="Título"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              disabled
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender='checkbox'
              disabled
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender='iconItem'
              disabled
              $rightComponentRender="link"
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender='radioButton'
              disabled
              $rightComponentRender="icon"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender='switch'
              disabled
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="checkbox"
              disabled
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="radioButton"
              disabled
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender='iconItem'
              $rightComponentRender="switch"
              disabled
            />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem
          title="Título"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          disabled
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="checkbox"
          disabled
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          disabled
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="radioButton"
          disabled
          $rightComponentRender="icon"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="switch"
          disabled
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="checkbox"
          disabled
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="radioButton"
          disabled
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="switch"
          disabled
        />
      </div>
    )
  }
}

export const ListItemSelected: Story = {
  name: 'ListItem selected',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'checkbox',
    $selected: true
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [selectedId, setSelectedId] = useState<string>('')
        const handleChcked = (id: string) => {
          setSelectedId(id)
          alert('Seleccionaste el item con id: {selectedId}')
        }
        const items: ListItemPropTypes[] = [
          {
            id: '1',
            title: 'Item 1',
            $leftComponentRender: 'switch'
          },
          {
            id: '2',
            title: 'Item 2',
            $leftContentChildren: <Avatar $size="medium" $iconName="person" />,
            $description: 'Descripcion del item 2',
            $rightComponentRender: 'checkbox'
          },
          {
            id: '3',
            title: 'Item 3',
            $description: 'Descripcion del item 3',
            $leftComponentRender: 'iconItem',
            $rightComponentRender: 'radioButton'
          },
          {
            id: '4',
            title: 'Item 4',
            $description: 'Descripcion del item 4',
            $leftComponentRender: 'radioButton',
            $rightComponentRender: 'icon'
          },
          {
            id: '5',
            title: 'Item 5',
            $description: 'Descripcion del item 5',
            $leftComponentRender: 'checkbox',
            $rightComponentRender: 'icon',
            $iconNameRight: 'info'
          },
          {
            id: '6',
            title: 'Item 6',
            $description: 'Descripcion del item 6',
            $leftComponentRender: 'iconItem',
            $rightComponentRender: 'switch'
          },
          {
            id: '7',
            title: 'Item 7',
            $leftComponentRender: 'switch',
            $rightComponentRender: 'link',
            $labelLinkRight: 'Ir a macro',
            href: 'https://www.macro.com.ar/'
          },
          {
            id: '8',
            title: 'Item 8',
            $leftComponentRender: 'switch',
            $rightComponentRender: 'link',
            $labelLinkRight: 'Ir a macro',
            href: 'https://www.macro.com.ar/',
            disabled: true
          }
        ]
    
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => (
              <ListItem
                key={item.id}
                $description={item.$description}
                title={item.title}
                $leftComponentRender={item.$leftComponentRender}
                $rightComponentRender={item.$rightComponentRender}
                disabled={item.disabled}
                $leftContentChildren={item.$leftContentChildren}
                $labelLinkRight={item.$labelLinkRight}
                $iconNameRight={item.$iconNameRight}
                $selected={selectedId === item.id}
                $onSelect={() => handleChcked(item.id || '')}
              />
            ))}
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    const [selectedId, setSelectedId] = useState<string>('')
    const handleChcked = (id: string) => {
      setSelectedId(id)
      if (selectedId !== '') {
        alert(`Seleccionaste el item con id: ${selectedId}`)
      }
    }
    const items: ListItemPropTypes[] = [
      {
        id: '1',
        title: 'Item 1',
        $leftComponentRender: 'switch'
      },
      {
        id: '2',
        title: 'Item 2',
        $leftContentChildren: <Avatar $size="medium" $iconName="person" />,
        $description: 'Descripcion del item 2',
        $rightComponentRender: 'checkbox'
      },
      {
        id: '3',
        title: 'Item 3',
        $description: 'Descripcion del item 3',
        $leftComponentRender: 'iconItem',
        $rightComponentRender: 'radioButton'
      },
      {
        id: '4',
        title: 'Item 4',
        $description: 'Descripcion del item 4',
        $leftComponentRender: 'radioButton',
        $rightComponentRender: 'icon'
      },
      {
        id: '5',
        title: 'Item 5',
        $description: 'Descripcion del item 5',
        $leftComponentRender: 'checkbox',
        $rightComponentRender: 'icon',
        $iconNameRight: 'info'
      },
      {
        id: '6',
        title: 'Item 6',
        $description: 'Descripcion del item 6',
        $leftComponentRender: 'iconItem',
        $rightComponentRender: 'switch'
      },
      {
        id: '7',
        title: 'Item 7',
        $leftComponentRender: 'switch',
        $rightComponentRender: 'link',
        $labelLinkRight: 'Ir a macro',
        href: 'https://www.macro.com.ar/'
      },
      {
        id: '8',
        title: 'Item 8',
        $leftComponentRender: 'switch',
        $rightComponentRender: 'link',
        $labelLinkRight: 'Ir a macro',
        href: 'https://www.macro.com.ar/',
        disabled: true
      }
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            $description={item.$description}
            title={item.title}
            $leftComponentRender={item.$leftComponentRender}
            $rightComponentRender={item.$rightComponentRender}
            disabled={item.disabled}
            $leftContentChildren={item.$leftContentChildren}
            $labelLinkRight={item.$labelLinkRight}
            $iconNameRight={item.$iconNameRight}
            $selected={selectedId === item.id}
            $onSelect={() => handleChcked(item.id || '')}
          />
        ))}
      </div>
    )
  }
}

export const ListItemLeftSwitch: Story = {
  name: 'ListItem LeftComponentRender Switch & RightComponentRender differents',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'switch'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem
            title="Título"
            $leftComponentRender="switch"
          />
            <ListItem 
              title="Título" 
              $description="Descripción del ListItem"
              $leftComponentRender="switch"
            />
            <ListItem 
              title="Título" 
              $description="Descripción del ListItem"
              $leftComponentRender="switch"
              $rightComponentRender='link'
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem 
              title="Título" 
              $description="Descripción del ListItem"
              $leftComponentRender="switch"
              $rightComponentRender='icon'
              $iconNameRight="info"
            />
          </div>
       )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem title="Título" $leftComponentRender="switch" />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="switch"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="switch"
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="switch"
          $rightComponentRender="icon"
          $iconNameRight="info"
        />
      </div>
    )
  }
}

export const ListItemLeftIconItem: Story = {
  name: 'ListItem LeftComponentRender IconItem & RightComponentRender differents',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'iconItem'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem
            title="Título"
            $leftComponentRender="iconItem"
          />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="link"
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="icon"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="icon"
              $labelLinkRight="info"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="checkbox"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="radioButton"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="iconItem"
              $rightComponentRender="switch"
            />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem title="Título" $leftComponentRender="iconItem" />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="icon"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="icon"
          $labelLinkRight="info"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="checkbox"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="radioButton"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="iconItem"
          $rightComponentRender="switch"
        />
      </div>
    )
  }
}

export const ListItemLeftRadioButton: Story = {
  name: 'ListItem LeftComponentRender RadioButton & RightComponentRender differents',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'radioButton'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem
            title="Título"
            $leftComponentRender="radioButton"
          />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="radioButton"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="radioButton"
              $rightComponentRender="link"
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="radioButton"
              $rightComponentRender="icon"
              $labelLinkRight="info"
            />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem title="Título"        $leftComponentRender="radioButton"
        $nameInput='1' 
        
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="radioButton"
          $nameInput='1'
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="radioButton"
          $nameInput='1'
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="radioButton"
          $nameInput='1'
          $rightComponentRender="icon"
          $labelLinkRight="info"
        />
      </div>
    )
  }
}

export const ListItemLeftCheckbox: Story = {
  name: 'ListItem LeftComponentRender Checkbox & RightComponentRender differents',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftComponentRender: 'checkbox'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ListItem
              title="Título"
              $leftComponentRender="checkbox"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="checkbox"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="checkbox"
              $rightComponentRender="link"
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftComponentRender="checkbox"
              $rightComponentRender="icon"
              $labelLinkRight="info"
            />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem title="Título" $leftComponentRender="checkbox" />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="checkbox"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="checkbox"
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftComponentRender="checkbox"
          $rightComponentRender="icon"
          $labelLinkRight="info"
        />
      </div>
    )
  }
}

export const ListItemLeftChildrenAvatar: Story = {
  name: 'ListItem LeftChildren Avatar & RightComponentRender differents',
  args: {
    title: 'Título',
    $description: 'Descripción del ListItem',
    $leftContentChildren: '<Avatar $size="medium" $iconName="person"'
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ListItem
              title="Título"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="link"
              $labelLinkRight="Ir a Macro"
              href="https://macro.com.ar/"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="icon"
              $labelLinkRight="info"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="icon"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="checkbox"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="radioButton"
            />
            <ListItem
              title="Título"
              $description="Descripción del ListItem"
              $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
              $rightComponentRender="switch"
            />
          </div>
        )
        `
      }
    }
  },
  render: function Render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ListItem
          title="Título"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="link"
          $labelLinkRight="Ir a Macro"
          href="https://macro.com.ar/"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="icon"
          $labelLinkRight="info"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="icon"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="checkbox"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="radioButton"
        />
        <ListItem
          title="Título"
          $description="Descripción del ListItem"
          $leftContentChildren={<Avatar $size="medium" $iconName="person" />}
          $rightComponentRender="switch"
        />
      </div>
    )
  }
}
