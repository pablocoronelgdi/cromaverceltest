import type { Meta, StoryObj } from '@storybook/react'
import { TabsSegmented } from '@cromaui/react'
import { type  TabSegmentedItemTypes } from '@cromaui/react/src/components/tabsSegmented/types'

const TABS_SEGMENTED_MOCK_1: TabSegmentedItemTypes[] = [
  {
    id: 'tab1',
    $label: 'Tab 1',
    $content: <div>Contenido de la tab 1</div>
  },
  {
    id: 'tab2',
    $label: 'Tab 2',
    $content: <div>Contenido de la tab 2</div>
  }
]

const TABS_SEGMENTED_MOCK_2: TabSegmentedItemTypes[] = [
  {
    id: 'tab3',
    $label: 'Tab 1',
    $content: <div>Contenido de la tab 1</div>
  },
  {
    id: 'tab4',
    $label: 'Tab 2',
    $content: <div>Contenido de la tab 2</div>
  },
  {
    id: 'tab5',
    $label: 'Tab 3',
    $content: <div>Contenido de la tab 3</div>
  }
]

const meta = {
  title: 'Navigation/TabsSegmented',
  component: TabsSegmented,
  argTypes: {
    $items: {
      description: 'Recibe un Array de items con $content, $label e id principalmente',
      control: { type: 'Array' },
      table: {
        type: { summary: 'Array' },
        defaultValue: {
          summary: `[{
          $content?: ReactNode,
          $label?: string,
          id?: string
        }]`
        }
      }
    }
  },
} satisfies Meta<typeof TabsSegmented>

export default meta
type Story = StoryObj<typeof meta>

export const TabsSegmentedDefault: Story = {
  name: 'Tabs Segmented default',
  args: { $items: TABS_SEGMENTED_MOCK_1 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_SEGMENTED_MOCK_1: TabSegmentedItemTypes[] = [
          {
            id: 'tab1',
            $label: 'Tab 1',
            $content: <div>Contenido de la tab 1</div>
          },
          {
            id: 'tab2',
            $label: 'Tab 2',
            $content: <div>Contenido de la tab 2</div>
          }
        ]
        return (
          <TabsSegmented $items={TABS_SEGMENTED_MOCK_1} />
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_SEGMENTED_MOCK_1: TabSegmentedItemTypes[] = [
      {
        id: 'tab1',
        $label: 'Tab 1',
        $content: <div>Contenido de la tab 1</div>
      },
      {
        id: 'tab2',
        $label: 'Tab 2',
        $content: <div>Contenido de la tab 2</div>
      }
    ]
    return (
      <TabsSegmented $items={TABS_SEGMENTED_MOCK_1} />
    )
  }
}

export const TabsSegmentedWithThreeItems: Story = {
  name: 'Tabs Segmented con tres items',
  args: { $items: TABS_SEGMENTED_MOCK_2 },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const TABS_SEGMENTED_MOCK_2: TabSegmentedItemTypes[] = [
          {
            id: 'tab3',
            $label: 'Tab 1',
            $content: <div>Contenido de la tab 1</div>
          },
          {
            id: 'tab4',
            $label: 'Tab 2',
            $content: <div>Contenido de la tab 2</div>
          },
          {
            id: 'tab5',
            $label: 'Tab 3',
            $content: <div>Contenido de la tab 3</div>
          }
        ]
        return (
          <TabsSegmented $items={TABS_SEGMENTED_MOCK_2} />
        )
        `
      }
    }
  },
  render: function Render() {
    const TABS_SEGMENTED_MOCK_2: TabSegmentedItemTypes[] = [
      {
        id: 'tab3',
        $label: 'Tab 1',
        $content: <div>Contenido de la tab 1</div>
      },
      {
        id: 'tab4',
        $label: 'Tab 2',
        $content: <div>Contenido de la tab 2</div>
      },
      {
        id: 'tab5',
        $label: 'Tab 3',
        $content: <div>Contenido de la tab 3</div>
      }
    ]
    return (
      <TabsSegmented $items={TABS_SEGMENTED_MOCK_2} />
    )
  }
}
