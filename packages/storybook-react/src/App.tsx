import { ThemeWrapper } from '@cromaui/react'
import Dashboard from './templates/dashboard/Dashboard'

function App(): JSX.Element {
  return (
    <ThemeWrapper $theme="macro">
      <Dashboard />
    </ThemeWrapper>
  )
}

export default App
