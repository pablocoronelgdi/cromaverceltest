import { Button, Link, Logo, Switch, InputField } from '@cromaui/react'
import React, { useState } from 'react'

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    ageChecked: false
  })

  const [formErrors, setFormErrors] = useState({
    user: '',
    password: '',
    ageChecked: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    setFormErrors({ ...formErrors, [name]: '' })
  }

  const handleAgeCheck = (): void => {
    const checked = !formData.ageChecked
    setFormData({ ...formData, ageChecked: checked })
    setFormErrors({ ...formErrors, ageChecked: checked })
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    let hasErrors = false
    const newErrors = { ...formErrors }

    if (formData.user.trim() === '') {
      newErrors.user = 'Falta agregar usuario'
      hasErrors = true
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Falta agregar clave'
      hasErrors = true
    }

    if (!formData.ageChecked) {
      newErrors.ageChecked = false
      hasErrors = true
    }

    setFormErrors(newErrors)

    if (!hasErrors) {
      alert('¡Formulario enviado correctamente!')
      console.log(formData)
    }
  }

  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <form
        style={{
          width: '100%',
          maxWidth: 450,
          background: 'white',
          height: 'auto',
          padding: 20,
          borderRadius: 8,
          boxShadow: '6px 9px 14px -4px rgba(0,0,0,0.28)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Logo $name="MacroHorizontal" $size="medium" />
        </div>
        <div>
          <label>Usuario</label>
          <InputField
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
            $error={!!formErrors.user}
            $helperText={formErrors.user && formErrors.user}
          />
        </div>
        <div>
          <label>Clave</label>
          <InputField
            style={{ width: '100%' }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            $error={!!formErrors.password}
            $helperText={formErrors.password && formErrors.password}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20
          }}
        >
          <label>Soy mayor de edad:</label>
          <Switch
            checked={formData.ageChecked}
            onChange={handleAgeCheck}
            /* Agregar estas props?
          name="ageChecked"
          color="primary" */
          />
          {formErrors.ageChecked && <span>{formErrors.ageChecked}</span>}
        </div>
        <div>
          <Button
            type="submit"
            onClick={() => handleSubmit}
            disabled={!formData.ageChecked}
            $fullWidth
            $text="Acceder"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <Link
            content="olvide mi clave"
            target="_blank"
            href="https://google.com"
            alt="#"
            title="#"
          />
        </div>
      </form>
    </section>
  )
}

export default Login
