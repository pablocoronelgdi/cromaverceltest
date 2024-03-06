import { ThemeWrapper } from '@cromaui/react'
import FormBond from './templates/formBond'

function App(): JSX.Element {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '4rem'
      }}
    >
      <ThemeWrapper $theme="macro">
        <FormBond />
      </ThemeWrapper>
    </main>
  )
}

export default App
