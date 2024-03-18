import { Button, PinInput } from '@cromaui/react'
import React from 'react'
import './validacionmobiles.css'

const ValidacionMobile: React.FC = () => {
  const validarNumeros = (e: string | number): void => {
    if (e === '123456') {
      alert('Validación Exitosa.')
    } else {
      alert('El numero ingresado es correcto.')
    }
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Hola Elmer</h2>
        <h5>Pega aqui tu codigo recibido de tu telefono</h5>
        <PinInput
          $pinLength={6}
          $onComplete={(e: string): void => {
            validarNumeros(e)
          }}
        />
        <Button>Validar Pin</Button>
      </div>
    </div>
  )
}

export default ValidacionMobile
