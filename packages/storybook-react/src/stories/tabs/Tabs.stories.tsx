import type { Meta, StoryObj } from '@storybook/react'
import { TabsNew } from '@cromaui/react'
import type { TabItemTypes } from '@cromaui/react/src/components/tabsNew/types'
// @TODO: Crear archivo Tabs.mdx|
const tabs: TabItemTypes[] = [
  {
    $label: 'Tab 1',
    $iconName: 'close',
    $content: <div>Contenido de la pestaña 1</div>
  },
  {
    $label: 'Tab 2',
    $iconName: 'home',
    $content: <div>Contenido de la pestaña 2</div>
  },
  {
    $label: 'Tab 3',
    $iconName: 'close',
    $content: <div>Contenido de la pestaña 3</div>
  },
  {
    $label: 'Tab 4',
    $iconName: 'close',
    $content: <div>Contenido de la pestaña 4</div>
  }
]

const tabsSlider: TabItemTypes[] = [
  {
    $label: 'Tab 1',
    $content: <div>Contenido de la pestaña 1</div>
  },
  {
    $label: 'Tab 2',
    $content: <div>Contenido de la pestaña 2</div>
  },
  {
    $label: 'Tab 3',
    $content: <div>Contenido de la pestaña 3</div>
  },
  {
    $label: 'Tab 4',
    $content: <div>Contenido de la pestaña 4</div>
  },
  {
    $label: 'Tab 5',
    $content: <div>Contenido de la pestaña 5</div>
  },
  {
    $label: 'Tab 6',
    $content: <div>Contenido de la pestaña 6</div>
  }
]

const meta = {
  title: 'Navigation/Tabs',
  component: TabsNew,
  tags: ['autodocs'],
  argTypes: {
    $items: {
      description: 'Recibe un Array de items con $content, $label e $iconName principalmente',
      control: { type: 'boolean' }
    },
    $isCarousel: {
      description:
        'Define si se los items de las Tabs usan botones para hacer scroll de forma horizontal',
      control: { type: 'boolean' }
    },
    $isDismissibleItems: {
      description: 'Define si los items y su contenido de las Tabs son descartables',
      control: { type: 'boolean' }
    },
    $isVerticalItems: {
      description:
        'Define si los items de las Tabs se ven de forma vertical, solo funciona en mobile',
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof TabsNew>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { $items: tabsSlider },
  decorators: [() => <TabsNew $items={tabsSlider} />]
}

export const WithIcons: Story = {
  args: { $items: tabs },
  decorators: [() => <TabsNew $items={tabs} />]
}

export const WithCarousel: Story = {
  args: { $items: tabsSlider, $isCarousel: true },
  decorators: [() => <TabsNew $items={tabsSlider} $isCarousel />]
}

export const VerticalItems: Story = {
  args: { $items: tabs, $isVerticalItems: true },
  decorators: [() => <TabsNew $items={tabs} $isVerticalItems />]
}

export const WithDismissibleItems: Story = {
  args: { $items: tabs, $isDismissibleItems: true },
  decorators: [() => <TabsNew $items={tabs} $isDismissibleItems />]
}
