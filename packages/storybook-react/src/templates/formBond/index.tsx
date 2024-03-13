import { Button, Checkbox, TextArea, InputField, Logo, Pictogram } from '@cromaui/react'

import './styles.css'
import React, { type FormEvent, useState } from 'react'

function FormBond(): JSX.Element {
  const [isError, setIsError] = useState(false)
  const helperMessageError = isError ? 'Ocurrio un error con tu email?' : ''
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comment, setComment] = useState('')
  const [isReminder, setIsReminder] = useState(false)

  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsError(!isError)
    if (name && email && password && comment) {
      setIsError(false)
      console.log('Usuario:', name)
      console.log('Email:', email)
      console.log('Password:', password)
      console.log('Comentario:', comment)
      console.log('Recordar contraseña:', isReminder)
    }
  }

  return (
    <section className="form_bond__section">
      <h1 className="form_bond__title">Formulario para solicitar bono</h1>
      <form className="form_bond__form" onSubmit={handleForm}>
        <Logo $name="MacroTagLine" $size="large" />
        <Pictogram $size="small" $name="Alert" $segmentName="Individuos" />
        <aside>
          <InputField
            $label="Nombre completo"
            $error={isError}
            $helperText={helperMessageError}
            placeholder="Jhon Doe"
            name={'name'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)
            }}
          />
          <InputField
            placeholder="ejemplo@macro.com.ar"
            $label="Correo electrónico"
            name={'email'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }}
            $iconName="email"
            $maxCharacterCount={30}
            $iconPosition="right"
          />
          <InputField
            $label="Clave del campus"
            $type="password"
            name={'password'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
          />
        </aside>
        <TextArea
          placeholder="Quiero comentar que necesito el bono para poder ayudar a mi familia"
          $label="Justifica por qué deberíamos darte el bono"
          $helperText="Que tenga fundamentos"
          $maxCharacterCount={30}
          $error={isError}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setComment(e.target.value)
          }}
        />
        <Checkbox
          checked={isReminder}
          onChange={() => {
            setIsReminder(!isReminder)
          }}
        />
        <div className="form_bond__buttons">
          <Button size="medium">Iniciar sesion</Button>
          <Button variant="outlined">Registrame</Button>
        </div>
      </form>
    </section>
  )
}

export default FormBond
