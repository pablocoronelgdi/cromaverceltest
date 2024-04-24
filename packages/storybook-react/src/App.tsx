import { CromaThemeProvider } from '@cromaui/react'
import Dashboard from './templates/dashboard/Dashboard'

function App(): JSX.Element {
  return (
    <CromaThemeProvider $theme="macro">
      <Dashboard />
    </CromaThemeProvider>
  )
}

export default App
