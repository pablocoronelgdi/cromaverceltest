import { ThemeWrapper } from '@cromaui/react'
import Dashboard from './templates/dashboard/Dashboard'

function App(): JSX.Element {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <ThemeWrapper $theme="macro">
        <Dashboard />
      </ThemeWrapper>
    </main>
  )
}

export default App
