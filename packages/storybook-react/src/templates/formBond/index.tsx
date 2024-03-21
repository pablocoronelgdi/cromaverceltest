import { Button, TextArea, InputField, Logo, Toogletip } from '@cromaui/react'

import './styles.css'
import React, { type FormEvent, useState } from 'react'

function FormBond(): JSX.Element {
  const [isError, setIsError] = useState(false)
  const helperMessageError = isError ? 'Ocurrio un error con tu email?' : ''
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comment, setComment] = useState('')

  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsError(!isError)
    if (name && email && password && comment) {
      setIsError(false)
      console.log('Usuario:', name)
      console.log('Email:', email)
      console.log('Password:', password)
      console.log('Comentario:', comment)
    }
  }
  const [showToogletip, setShowToogletip] = useState(false)

  const handleToogle = (): void => {
    setShowToogletip(!showToogletip)
    console.log('click')
  }

  return (
    <section className="form_bond__section">
      <div className="form_bond__header" id="form">
        <h1 className="form_bond__title">Formulario para solicitar bono</h1>
        <Logo $name="MacroTagLine" $size="large" />
        <Toogletip
          $title="Solicita tu bono"
          $arrowPosition="middle"
          $position="right"
          $description="Este bono es importante para ayudar a nuestros alumnos a solventar gastos durante el ciclo lectivo"
          $visible={showToogletip}
          $onToogletipClose={handleToogle}
          $actionButtons={
            <>
              <Button $variant="outline" onClick={handleToogle} $text="Cerrar" />
              <Button onClick={handleToogle} $text="Entendido" />
            </>
          }
          $steps={[
            { title: 'Paso 1', label: 'Este es el contenido del mensaje del paso 1' },
            { title: 'Paso 2', label: 'Este es el contenido del mensaje del paso 2' },
            { title: 'Paso 3', label: 'Este es el contenido del mensaje del paso 3' }
          ]}
        >
          <Button
            $variant="ghost"
            $size="extra-small"
            $iconName="info"
            onClick={handleToogle}
            $text="Más información acá"
          />
        </Toogletip>
      </div>
      <form className="form_bond__form" onSubmit={handleForm}>
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
        <div className="form_bond__buttons">
          <Button type="submit" $text="Enviar" $fullWidth />
          <Button
            $as="a"
            $variant="fill"
            $iconName="expand_less"
            $text="Subir"
            $iconPosition="left"
            href="#form"
          />
        </div>
      </form>
    </section>
  )
}

export default FormBond
