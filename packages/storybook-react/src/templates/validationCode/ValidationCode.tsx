import { Button, PinInput } from '@cromaui/react'
import React, { useState } from 'react'
import './validationCode.css'

const ValidationCode: React.FC = () => {
  const [error, setError] = useState<boolean>(false)
  const [helperMessage, setHelperMessage] = useState<string | null>('Recordá que son 6 digitos numéricos')
  const handleValidation = (e: string | number): void => {
    if (e === '123456') {
      setError(false)
      setHelperMessage(null)
      alert('Validación Exitosa.')
    } else {
      setError(!error)
      setHelperMessage('El código ingresado es incorrecto')
    }
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Hola Elmer</h2>
        <PinInput
          $pinLength={10}
          $onComplete={(e: string): void => {
            handleValidation(e)
          }}
          $label='Codigo sms'
          $helperText={helperMessage}
          $error={error}
        />
        <Button $text="Validar Pin" />
      </div>
    </div>
  )
}

export default ValidationCode
