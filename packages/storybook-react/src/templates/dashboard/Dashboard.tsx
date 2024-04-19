import React from 'react'
import { Badge, Icon, Logo, RoundedImage, Tabs } from '@cromaui/react'
import './dashboard.css'
import Movimientos from './Movimientos'
import Home from './home'
import ValidacionMobile from './ValidacionMobile'
import Login from '../login/login'
import FormBond from '../formBond'
import type { TabItemTypes } from '@cromaui/react/src/components/tabs/types'

const tabs: TabItemTypes[] = [
  {
    id: 'idHome',
    $label: 'Inicio',
    $iconName: 'home',
    $content: <Home />
  },
  {
    id: 'idMovements',
    $label: 'Transferencias',
    $iconName: 'expand_circle_down',
    $content: <Movimientos />
  },
  {
    id: 'idMobileValidation',
    $label: 'Validación Móvil',
    $iconName: 'expand_circle_down',
    $content: <ValidacionMobile />
  },
  {
    id: 'idLogin',
    $label: 'Login Form',
    $iconName: 'expand_circle_down',
    $content: <Login />
  },
  {
    id: 'idFormBond',
    $label: 'Solicitud de Bono',
    $iconName: 'person',
    $content: <FormBond />
  }
]

const Dashboard: React.FC = () => {
  return (
    <>
      <nav>
        <div>
          <Logo $name="MacroHorizontal" $colorPrimary="white" />
        </div>
        <div>
          <h5 style={{ color: 'white' }}>Elmer Figueroa</h5>
          <Icon $name="notifications" style={{ color: 'white' }} $size="large" />
          <Badge $count={1000} $backgroundColor="pink" $backgroundType="dark" />
          <RoundedImage
            $size="large"
            $src="https://phantom-marca.unidadeditorial.es/5b09c2abe83fc40e6ebcb635adad40c7/resize/828/f/webp/assets/multimedia/imagenes/2022/12/31/16724746290185.jpg"
            $alt="Chayanne"
          />
        </div>
      </nav>
      <main>
        <Tabs $items={tabs} />
      </main>
    </>
  )
}

export default Dashboard
