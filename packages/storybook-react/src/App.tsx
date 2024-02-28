import { ThemeWrapper } from '@cromaui/react'

function App(): JSX.Element {
  return (
    <>
      <ThemeWrapper $theme="macro">
        <div style={{ gap: 24, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', padding: 24 }}>
        </div>
      </ThemeWrapper>
    </>
  )
}

export default App
