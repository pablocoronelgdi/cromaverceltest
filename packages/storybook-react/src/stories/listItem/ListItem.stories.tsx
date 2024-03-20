import type { Meta, StoryObj } from '@storybook/react'
import { ListItem, RoundedImage, Switch, Radio, Checkbox, Link, Icon } from '@cromaui/react'

const meta: Meta<typeof Image> = {
  title: 'Data Display/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    $title: {
      description: 'Se le puede agregar un título al componente pin input',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: 'Título de ejemplo' },
          type: { summary: 'string' }
        }
      }
    },
    $contentLeft: {
      description:
        'En este caso se pueden agregar componentes internos como (Switch, Radio, Checkbox entre otros)',
      control: {
        type: ''
      }
    },
    $contentRight: {
      description:
        'En este caso se pueden agregar componentes internos como (Switch, Radio, Checkbox entre otros)',
      control: {
        type: ''
      }
    },
    $description: {
      description: 'Se le puede agregar un label o mensaje al componente',
      control: {
        type: 'text',
        table: {
          defaultValue: { summary: 'Supporting text' },
          type: { summary: 'string' }
        }
      }
    },
    $disabled: {
      description: 'Activa el estado disabled para impedir poder llenar los campos',
      control: {
        type: 'boolean',
        table: {
          defaultValue: { summary: false },
          type: { summary: 'boolean' }
        }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: (
      <div style={{ padding: 8, display: 'flex', justifyContent: 'center' }}>
        <Icon $name="arrow_forward_ios" $size="small" />
      </div>
    )
  }
}

export const AvatarSwich: Story = {
  args: {
    $contentLeft: <RoundedImage $size="medium" $iconName="person" />,
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: <Switch />
  }
}

export const AvatarRadio: Story = {
  args: {
    $contentLeft: <RoundedImage $size="medium" $iconName="person" />,
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: <Radio name="defaults" value="radio1" checked={false} />
  }
}

export const SwichCheckbox: Story = {
  args: {
    $contentLeft: <Switch />,
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: <Checkbox />
  }
}

export const AvatarLink: Story = {
  args: {
    $contentLeft: <Switch />,
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: <Link content={'Click acá'} href={'#'} alt={'#'} title={'#'} />
  }
}

export const AvatarIcon: Story = {
  args: {
    $contentLeft: <RoundedImage $size="medium" $iconName="person" />,
    title: 'Título',
    $description: 'Texto informativo',
    $contentRight: (
      <div style={{ padding: 8, display: 'flex', justifyContent: 'center' }}>
        <Icon $name="arrow_forward_ios" $size="small" />
      </div>
    )
  }
}

export const Disabled: Story = {
  args: {
    $contentLeft: <Switch disabled />,
    title: 'Título',
    $disabled: true,
    $description: 'Texto informativo',
    $contentRight: <RoundedImage $size="medium" $iconName="person" $disabled />
  }
}

export const Medium: Story = {
  args: {
    $contentLeft: <Switch disabled />,
    title: 'Título',
    $disabled: false,
    $contentRight: <RoundedImage $size="small" $iconName="person" $disabled />
  }
}

export const Medium: Story = {
  args: {
    $contentLeft: <Switch disabled />,
    $title: 'Título',
    $disabled: true,
    $contentRight:
      <RoundedImage $size="small" $iconName="person" $disabled />
  }
}
