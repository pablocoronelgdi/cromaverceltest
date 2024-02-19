import { color } from '@cromaui/foundations'
import { Logo, ThemeWrapper } from '@cromaui/react'
// import Cashin from './pictogram-cash.svg'

function App(): JSX.Element {
  return (
    <>
      <ThemeWrapper $theme="macro">
        <div style={{ gap: 24, display: 'flex', flexDirection: 'column', padding: 24 }}>
          {/* <Logo>{Cashin}</Logo> */}
          Macro horizontal
          <Logo name="MacroHorizontal" colorPrimary={color.navy.main} height={40} />
          <Logo name="MacroHorizontal" colorPrimary={color.navy.main} height={32} />
          <Logo name="MacroHorizontal" colorPrimary={color.navy.main} height={24} />
          Macro tagline
          <Logo name="MacroTagLine" colorPrimary={color.neutral[900]} height={48} />
          <Logo name="MacroTagLine" colorPrimary={color.neutral[900]} height={40} />
          <Logo name="MacroTagLine" colorPrimary={color.neutral[900]} height={32} />
          Macro vertical
          <Logo name="MacroVertical" colorPrimary={color.navy.main} height={96} />
          <Logo name="MacroVertical" colorPrimary={color.navy.main} height={48} />
          <Logo name="MacroVertical" colorPrimary={color.navy.main} height={40} />
          Macro iso
          <Logo name="Iso" colorPrimary={color.neutral[900]} height={40} />
          <Logo name="Iso" colorPrimary={color.neutral[900]} height={32} />
          <Logo name="Iso" colorPrimary={color.neutral[900]} height={24} />
          Macro wink
          <Logo name="Wink" colorPrimary={color.navy.main} height={96} />
          <Logo name="Wink" colorPrimary={color.navy.main} height={72} />
          <Logo name="Wink" colorPrimary={color.navy.main} height={48} />
          Macro click de pago
          <Logo name="ClickDePago" colorPrimary={color.navy.main} height={48} />
          <Logo name="ClickDePago" colorPrimary={color.navy.main} height={40} />
          <Logo name="ClickDePago" colorPrimary={color.navy.main} height={32} />
          Macro securities
          <Logo name="Securities" colorPrimary={color.neutral[900]} height={48} />
          <Logo name="Securities" colorPrimary={color.neutral[900]} height={40} />
          <Logo name="Securities" colorPrimary={color.neutral[900]} height={32} />
          Macro fondos
          <Logo name="Fondos" colorPrimary={color.navy.main} height={48} />
          <Logo name="Fondos" colorPrimary={color.navy.main} height={40} />
          <Logo name="Fondos" colorPrimary={color.navy.main} height={32} />
          Macro fiducia
          <Logo name="Fiducia" colorPrimary={color.navy.main} height={48} />
          <Logo name="Fiducia" colorPrimary={color.navy.main} height={40} />
          <Logo name="Fiducia" colorPrimary={color.navy.main} height={32} />
          Macro premia
          <Logo
            name="Premia"
            colorSecondary={color.black.main}
            colorPrimary={color.gold.main}
            height={96}
          />
          <Logo
            name="Premia"
            colorSecondary={color.navy.main}
            colorPrimary={color.pink.main}
            height={48}
          />
          <Logo
            name="Premia"
            colorSecondary={color.black.main}
            colorPrimary={color.gold.main}
            height={40}
          />
          Macro limited vertical
          <Logo name="BankLimitedVertical" colorPrimary={color.navy.main} height={96} />
          <Logo name="BankLimitedVertical" colorPrimary={color.navy.main} height={48} />
          <Logo name="BankLimitedVertical" colorPrimary={color.navy.main} height={40} />
          Macro limited horizontal
          <Logo name="BankLimited" colorPrimary={color.navy.main} height={40} />
          <Logo name="BankLimited" colorPrimary={color.navy.main} height={32} />
          <Logo name="BankLimited" colorPrimary={color.navy.main} height={24} />
          Macro selecta
          <Logo name="Selecta" colorPrimary={color.black.main} height={56} />
          <Logo name="Selecta" colorPrimary={color.black.main} height={48} />
          <Logo name="Selecta" colorPrimary={color.black.main} height={32} />
          Macro selecta privado
          <Logo name="SelectaPrivado" colorPrimary={color.black.main} height={64} />
          <Logo name="SelectaPrivado" colorPrimary={color.black.main} height={56} />
          <Logo name="SelectaPrivado" colorPrimary={color.black.main} height={40} />
          Macro Agro
          <Logo
            name="Agro"
            colorPrimary={color.navy.main}
            colorSecondary={color.green.main}
            height={56}
          />
          <Logo
            name="Agro"
            colorPrimary={color.navy.main}
            colorSecondary={color.green.main}
            height={48}
          />
          <Logo
            name="Agro"
            colorPrimary={color.navy.main}
            colorSecondary={color.green.main}
            height={32}
          />
        </div>
      </ThemeWrapper>
    </>
  )
}

export default App
