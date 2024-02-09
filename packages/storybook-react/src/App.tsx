import { Checkbox, Tabs, ThemeWrapper } from '@cromaui/react'
import { type TabsItemProps } from '@cromaui/react/dist/components/tabs/types'

const tabs: TabsItemProps[] = [
  { label: 'Tab 1', content: <div>Contenido de la pestaña 1</div> },
  { label: 'Tab 2', content: <div>Contenido de la pestaña 2</div> },
  { label: 'Tab 3', content: <div>Contenido de la pestaña 3</div> }
]

function App(): JSX.Element {
  return (
    <>
      <ThemeWrapper $theme="macro">
        <Checkbox />
        <Tabs tabs={tabs} />
      </ThemeWrapper>
    </>
  )
}

export default App
