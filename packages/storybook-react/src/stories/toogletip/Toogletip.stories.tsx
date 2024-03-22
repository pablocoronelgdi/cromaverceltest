/* eslint-disable no-useless-escape */
import { Button, Link, Toogletip } from '@cromaui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta = {
  title: 'Data Display/Toogletip',
  component: Toogletip,
  argTypes: {
    $position: {
      description:
        'Indica de que lado del componente se mostrará. Si no hay espacio, se ubicará del lado contrario.',
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' }
      }
    },
    $title: {
      description: 'Texto que se mostrará como titulo del Toogletip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    $description: {
      description: 'Texto que se mostrará en el cuerpo del Toogletip.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    $arrowPosition: {
      description: 'La posición de la flecha del Toogletip.',
      options: ['start', 'middle', 'end'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' }
      }
    },
    $actionLinks: {
      description: 'Los componentes link que mostraría el toogletip',
      control: false
    },
    $actionButtons: {
      description: 'Los componentes button que mostraría el toogletip',
      control: false
    },
    $steps: {
      description:
        'Un array de objetos con propiedades title y label para definir los pasos en el toogletip',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: undefined }
      }
    },
    $visible: {
      description: 'Si el valor es true, el Toogletip se mostrará',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    $onToogletipClose: {
      description: 'Función que se ejecuta cuando se quiere cerrar el Toogletip',
      action: 'onClick',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'void' }
      }
    }
  }
} satisfies Meta<typeof Toogletip>

export default meta
type Story = StoryObj<typeof meta>

/* ----------  STORYBOOK STORIES ---------- */
export const SimpleToogleTip: Story = {
  name: 'Toogletip',
  args: {
    $description: '',
    $arrowPosition: 'middle',
    $position: 'bottom',
    children: '',
    $title: 'titulo',
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
        const handleOnClickBottomMiddle = (): void => {
          setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
        }
        return (
          <Toogletip
          $title="Titulo"
          $description="Descripcion larga del toogletip"
          $position="bottom"
          $arrowPosition="middle"
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
        >
        <Button $variant="ghost" onClick={handleOnClickBottomMiddle} $text="Ver toogletip" />
        </Toogletip>
        )
        `
      }
    }
  },
  render: function Render() {
    const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
    const handleOnClickBottomMiddle = (): void => {
      setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Toogletip
          $title="Titulo"
          $description="Descripcion larga del toogletip"
          $position="bottom"
          $arrowPosition="middle"
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
        >
          <Button $variant="ghost" onClick={handleOnClickBottomMiddle} $text="Ver toogletip" />
        </Toogletip>
      </div>
    )
  }
}

export const WithActionLinks: Story = {
  name: 'Toogletip con links',
  args: {
    $description: '',
    $arrowPosition: 'end',
    $position: 'bottom',
    children: '',
    $title: 'titulo',
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
        const handleOnClickBottomMiddle = (): void => {
          setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
        }

        return (
          <Toogletip
          $title="Links de accion"
          $description="Acá abajo se mostrarán los links de acción"
          $position="bottom"
          $arrowPosition="end"
          $actionLinks={
            <>
              <Link
                href="https://www.google.com/"
                alt="Link Google"
                $children="Ver más"
                title="Link Google"
              />
              <Link
                href="https://www.macro.com.ar/home-page"
                alt="Ir a Macro"
                $children="Ir a Macro"
                title="Ir a Macro"
              />
            </>
          }
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
        >
        <Button $variant="ghost" onClick={handleOnClickBottomEnd} $text='Toogletip con links' />
        </Toogletip>
        )
        `
      }
    }
  },

  render: function Render() {
    const [isVisibleBottomEnd, setIsVisibleBottomEnd] = useState(false)
    const handleOnClickBottomEnd = (): void => {
      setIsVisibleBottomEnd(!isVisibleBottomEnd)
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Toogletip
          $title="Links de accion"
          $description="Acá abajo se mostrarán los links de acción"
          $position="bottom"
          $arrowPosition="end"
          $actionLinks={
            <>
              <Link
                href="https://www.google.com/"
                alt="Link Google"
                $children="Ver más"
                title="Link Google"
              />
              <Link
                href="https://www.macro.com.ar/home-page"
                alt="Ir a Macro"
                $children="Ir a Macro"
                title="Ir a Macro"
              />
            </>
          }
          $visible={isVisibleBottomEnd}
          $onToogletipClose={handleOnClickBottomEnd}
        >
          <Button $variant="ghost" onClick={handleOnClickBottomEnd} $text="Toogletip con links" />
        </Toogletip>
      </div>
    )
  }
}

export const WithLinkAndButtons: Story = {
  name: 'Toogletip con link y boton',
  args: {
    $description: '',
    $arrowPosition: 'end',
    $position: 'bottom',
    children: '',
    $title: 'titulo',
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
        const handleOnClickBottomMiddle = (): void => {
          setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
        }

        return (
          <Toogletip
          $title="Link y boton"
          $description="Acá abajo se mostrarán los links de acción"
          $position="bottom"
          $arrowPosition="end"
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
          $actionLinks={<Link href="https://www.google.com/" alt="Link Google" $children="Ver más información" title="Link Google" />}
          $actionButtons={
            <Button $variant="fill" $size="small" onClick={handleOnClickBottomMiddle} $text='Confirmar' />
          }
        >
          <Button $variant="ghost" onClick={handleOnClickBottomMiddle} $text='Toogletip con link y boton' />
        </Toogletip>
        )
        `
      }
    }
  },

  render: function Render() {
    const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
    const handleOnClickBottomMiddle = (): void => {
      setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Toogletip
          $title="Link y boton"
          $description="Acá abajo se mostrarán los links de acción"
          $position="bottom"
          $arrowPosition="end"
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
          $actionLinks={
            <Link
              href="https://www.google.com/"
              alt="Link Google"
              $children="Ver más información"
              title="Link Google"
            />
          }
          $actionButtons={
            <Button
              $variant="fill"
              $size="small"
              onClick={handleOnClickBottomMiddle}
              $text="Confirmar"
            />
          }
        >
          <Button
            $variant="ghost"
            onClick={handleOnClickBottomMiddle}
            $text="Toogletip con link y boton"
          />
        </Toogletip>
      </div>
    )
  }
}

export const WithActionButtons: Story = {
  name: 'Toogletip con botones',
  args: {
    $description: '',
    $arrowPosition: 'middle',
    $position: 'right',
    children: '',
    $title: 'titulo',
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleActionButtons, setIsVisibleActionButtons] = useState(false)
        const handleOnClickActionButtons = (): void => {
          setIsVisibleActionButtons(!isVisibleActionButtons)
        }

        return (
          <Toogletip
          $title="Toogletip con botones"
          $description="Acá abajo se mostrarán los botones"
          $position="right"
          $arrowPosition="middle"
          $actionButtons={
            <>
              <Button $size="small" $variant="ghost" $text="Acción2" />
              <Button $size="small" $text="Acción1" />
            </>
          }
          $visible={isVisibleActionButtons}
          $onToogletipClose={handleOnClickActionButtons}
        >
          <Button
            $variant="ghost"
            onClick={handleOnClickActionButtons}
            $text="Ver Toogletip con botones"
          />
        </Toogletip>
        )
        `
      }
    }
  },

  render: function Render() {
    const [isVisibleActionButtons, setIsVisibleActionButtons] = useState(false)
    const handleOnClickActionButtons = (): void => {
      setIsVisibleActionButtons(!isVisibleActionButtons)
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Toogletip
          $title="Toogletip con botones"
          $description="Acá abajo se mostrarán los botones"
          $position="bottom"
          $arrowPosition="middle"
          $actionButtons={
            <>
              <Button $size="small" $variant="ghost" $text="Acción2" />
              <Button $size="small" $text="Acción1" />
            </>
          }
          $visible={isVisibleActionButtons}
          $onToogletipClose={handleOnClickActionButtons}
        >
          <Button
            $variant="ghost"
            onClick={handleOnClickActionButtons}
            $text="Ver Toogletip con botones"
          />
        </Toogletip>
      </div>
    )
  }
}

export const StepperToogletip: Story = {
  name: 'Con pasos múltiples',
  args: {
    $description: '',
    $arrowPosition: 'middle',
    $position: 'bottom',
    children: '',
    $title: 'titulo',
    $steps: [
      { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
      { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
      { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
    ],
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
        const handleOnClickBottomMiddle = (): void => {
          setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
        }
        return (
          <Toogletip
          $title="Esta prop no se mostrará si la prop step se encuentra definida"
          $description="Esta prop no se mostrará si la prop step se encuentra definida"
          $position="bottom"
          $arrowPosition="middle"
          $steps={[
            { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
            { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
            { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
          ]}
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
        >
        <Button
          $variant="ghost"
          onClick={handleOnClickBottomMiddle}
          $text="Ver Toogletip con steps"
        />
        </Toogletip>
        )
        `
      }
    }
  },

  render: function Render() {
    const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
    const handleOnClickBottomMiddle = (): void => {
      setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Toogletip
          $title="Toogletip con steps"
          $position="bottom"
          $arrowPosition="middle"
          $steps={[
            { title: 'Paso1', label: 'Este es el contenido del mensaje del paso 1' },
            { title: 'Paso2', label: 'Este es el contenido del mensaje del paso 2' },
            { title: 'Paso3', label: 'Este es el contenido del mensaje del paso 3' }
          ]}
          $visible={isVisibleBottomMiddle}
          $onToogletipClose={handleOnClickBottomMiddle}
        >
          <Button
            $variant="ghost"
            onClick={handleOnClickBottomMiddle}
            $text="Ver Toogletip con steps"
          />
        </Toogletip>
      </div>
    )
  }
}

/* ----------  DOC STORIES ---------- */

export const SimpleToogletipGrid: Story = {
  name: 'Simple Toogletip',
  tags: ['docs-only'],
  args: {
    $description: '',
    $arrowPosition: 'middle',
    $position: 'bottom',
    children: '',
    $title: 'titulo',
    $visible: false,
    $onToogletipClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'tsx',
        dark: true,
        code: `
        const [isVisibleTopStart, setIsVisibleTopStart] = useState(false)
    const handleOnClick = (): void => {
      setIsVisibleTopStart(!isVisibleTopStart)
    }
    const [isVisibleTopMiddle, setIsVisibleTopMiddle] = useState(false)
    const handleOnClickTopMiddle = (): void => {
      setIsVisibleTopMiddle(!isVisibleTopMiddle)
    }
    const [isVisibleTopEnd, setIsVisibleTopEnd] = useState(false)
    const handleOnClickTopEnd = (): void => {
      setIsVisibleTopEnd(!isVisibleTopEnd)
    }
    const [isVisibleBottomStart, setIsVisibleBottomStart] = useState(false)
    const handleOnClickBottomStart = (): void => {
      setIsVisibleBottomStart(!isVisibleBottomStart)
    }
    const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
    const handleOnClickBottomMiddle = (): void => {
      setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
    }
    const [isVisibleBottomEnd, setIsVisibleBottomEnd] = useState(false)
    const handleOnClickBottomEnd = (): void => {
      setIsVisibleBottomEnd(!isVisibleBottomEnd)
    }
    const [isVisibleLeftStart, setIsVisibleLeftStart] = useState(false)
    const handleOnClickLeftStart = (): void => {
      setIsVisibleLeftStart(!isVisibleLeftStart)
    }
    const [isVisibleLeftMiddle, setIsVisibleLeftMiddle] = useState(false)
    const handleOnClickLeftMiddle = (): void => {
      setIsVisibleLeftMiddle(!isVisibleLeftMiddle)
    }
    const [isVisibleLeftEnd, setIsVisibleLeftEnd] = useState(false)
    const handleOnClickLeftEnd = (): void => {
      setIsVisibleLeftEnd(!isVisibleLeftEnd)
    }
    const [isVisibleRightStart, setIsVisibleRightStart] = useState(false)
    const handleOnClickRightStart = (): void => {
      setIsVisibleRightStart(!isVisibleRightStart)
    }
    const [isVisibleRightMiddle, setIsVisibleRightMiddle] = useState(false)
    const handleOnClickRightMiddle = (): void => {
      setIsVisibleRightMiddle(!isVisibleRightMiddle)
    }
    const [isVisibleRightEnd, setIsVisibleRightEnd] = useState(false)
    const handleOnClickRightEnd = (): void => {
      setIsVisibleRightEnd(!isVisibleRightEnd)
    }

      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '8vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: '12px'
            }}
          >
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="top"
              $arrowPosition="start"
              $visible={isVisibleTopStart}
              $onToogletipClose={handleOnClick}
            >
              <Button $variant="ghost" onClick={handleOnClick} $text="Abrir Toogletip top start" />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="top"
              $arrowPosition="middle"
              $visible={isVisibleTopMiddle}
              $onToogletipClose={handleOnClickTopMiddle}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickTopMiddle}
                $text="Abrir Toogletip top middle"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="top"
              $arrowPosition="end"
              $visible={isVisibleTopEnd}
              $onToogletipClose={handleOnClickTopEnd}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickTopEnd}
                $text="Abrir Toogletip top end"
              />
            </Toogletip>
          </div>
          <div
            style={{
              width: '100%',
              height: '8vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: '12px'
            }}
          >
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="bottom"
              $arrowPosition="start"
              $visible={isVisibleBottomStart}
              $onToogletipClose={handleOnClickBottomStart}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickBottomStart}
                $text="Abrir Toogletip bottom start"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="bottom"
              $arrowPosition="middle"
              $visible={isVisibleBottomMiddle}
              $onToogletipClose={handleOnClickBottomMiddle}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickBottomMiddle}
                $text="Abrir Toogletip bottom middle"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="bottom"
              $arrowPosition="end"
              $visible={isVisibleBottomEnd}
              $onToogletipClose={handleOnClickBottomEnd}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickBottomEnd}
                $text="Abrir Toogletip bottom end"
              />
            </Toogletip>
          </div>
          <div
            style={{
              width: '100%',
              height: '8vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: '12px'
            }}
          >
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="left"
              $arrowPosition="start"
              $visible={isVisibleLeftStart}
              $onToogletipClose={handleOnClickLeftStart}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickLeftStart}
                $text="Abrir Toogletip left start"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="left"
              $arrowPosition="middle"
              $visible={isVisibleLeftMiddle}
              $onToogletipClose={handleOnClickLeftMiddle}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickLeftMiddle}
                $text="Abrir Toogletip left middle"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="left"
              $arrowPosition="end"
              $visible={isVisibleLeftEnd}
              $onToogletipClose={handleOnClickLeftEnd}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickLeftEnd}
                $text="Abrir Toogletip left end"
              />
            </Toogletip>
          </div>
          <div
            style={{
              width: '100%',
              height: '8vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: '12px'
            }}
          >
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="right"
              $arrowPosition="start"
              $visible={isVisibleRightStart}
              $onToogletipClose={handleOnClickRightStart}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickRightStart}
                $text="Abrir Toogletip right start"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="right"
              $arrowPosition="middle"
              $visible={isVisibleRightMiddle}
              $onToogletipClose={handleOnClickRightMiddle}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickRightMiddle}
                $text="Abrir Toogletip right middle"
              />
            </Toogletip>
            <Toogletip
              $title="Titulo del toogletip"
              $description="Información que va en el cuerpo del Toogletip"
              $position="right"
              $arrowPosition="end"
              $visible={isVisibleRightEnd}
              $onToogletipClose={handleOnClickRightEnd}
            >
              <Button
                $variant="ghost"
                onClick={handleOnClickRightEnd}
                $text="Abrir Toogletip right end"
              />
            </Toogletip>
          </div>
        </div>
      )
        `
      }
    }
  },

  render: function Render() {
    const [isVisibleTopStart, setIsVisibleTopStart] = useState(false)
    const handleOnClick = (): void => {
      setIsVisibleTopStart(!isVisibleTopStart)
    }
    const [isVisibleTopMiddle, setIsVisibleTopMiddle] = useState(false)
    const handleOnClickTopMiddle = (): void => {
      setIsVisibleTopMiddle(!isVisibleTopMiddle)
    }
    const [isVisibleTopEnd, setIsVisibleTopEnd] = useState(false)
    const handleOnClickTopEnd = (): void => {
      setIsVisibleTopEnd(!isVisibleTopEnd)
    }
    const [isVisibleBottomStart, setIsVisibleBottomStart] = useState(false)
    const handleOnClickBottomStart = (): void => {
      setIsVisibleBottomStart(!isVisibleBottomStart)
    }
    const [isVisibleBottomMiddle, setIsVisibleBottomMiddle] = useState(false)
    const handleOnClickBottomMiddle = (): void => {
      setIsVisibleBottomMiddle(!isVisibleBottomMiddle)
    }
    const [isVisibleBottomEnd, setIsVisibleBottomEnd] = useState(false)
    const handleOnClickBottomEnd = (): void => {
      setIsVisibleBottomEnd(!isVisibleBottomEnd)
    }
    const [isVisibleLeftStart, setIsVisibleLeftStart] = useState(false)
    const handleOnClickLeftStart = (): void => {
      setIsVisibleLeftStart(!isVisibleLeftStart)
    }
    const [isVisibleLeftMiddle, setIsVisibleLeftMiddle] = useState(false)
    const handleOnClickLeftMiddle = (): void => {
      setIsVisibleLeftMiddle(!isVisibleLeftMiddle)
    }
    const [isVisibleLeftEnd, setIsVisibleLeftEnd] = useState(false)
    const handleOnClickLeftEnd = (): void => {
      setIsVisibleLeftEnd(!isVisibleLeftEnd)
    }
    const [isVisibleRightStart, setIsVisibleRightStart] = useState(false)
    const handleOnClickRightStart = (): void => {
      setIsVisibleRightStart(!isVisibleRightStart)
    }
    const [isVisibleRightMiddle, setIsVisibleRightMiddle] = useState(false)
    const handleOnClickRightMiddle = (): void => {
      setIsVisibleRightMiddle(!isVisibleRightMiddle)
    }
    const [isVisibleRightEnd, setIsVisibleRightEnd] = useState(false)
    const handleOnClickRightEnd = (): void => {
      setIsVisibleRightEnd(!isVisibleRightEnd)
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="top"
            $arrowPosition="start"
            $visible={isVisibleTopStart}
            $onToogletipClose={handleOnClick}
          >
            <Button $variant="ghost" onClick={handleOnClick} $text="Abrir Toogletip top start" />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="top"
            $arrowPosition="middle"
            $visible={isVisibleTopMiddle}
            $onToogletipClose={handleOnClickTopMiddle}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickTopMiddle}
              $text="Abrir Toogletip top middle"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="top"
            $arrowPosition="end"
            $visible={isVisibleTopEnd}
            $onToogletipClose={handleOnClickTopEnd}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickTopEnd}
              $text="Abrir Toogletip top end"
            />
          </Toogletip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="bottom"
            $arrowPosition="start"
            $visible={isVisibleBottomStart}
            $onToogletipClose={handleOnClickBottomStart}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickBottomStart}
              $text="Abrir Toogletip bottom start"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="bottom"
            $arrowPosition="middle"
            $visible={isVisibleBottomMiddle}
            $onToogletipClose={handleOnClickBottomMiddle}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickBottomMiddle}
              $text="Abrir Toogletip bottom middle"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="bottom"
            $arrowPosition="end"
            $visible={isVisibleBottomEnd}
            $onToogletipClose={handleOnClickBottomEnd}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickBottomEnd}
              $text="Abrir Toogletip bottom end"
            />
          </Toogletip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="left"
            $arrowPosition="start"
            $visible={isVisibleLeftStart}
            $onToogletipClose={handleOnClickLeftStart}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickLeftStart}
              $text="Abrir Toogletip left start"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="left"
            $arrowPosition="middle"
            $visible={isVisibleLeftMiddle}
            $onToogletipClose={handleOnClickLeftMiddle}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickLeftMiddle}
              $text="Abrir Toogletip left middle"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="left"
            $arrowPosition="end"
            $visible={isVisibleLeftEnd}
            $onToogletipClose={handleOnClickLeftEnd}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickLeftEnd}
              $text="Abrir Toogletip left end"
            />
          </Toogletip>
        </div>
        <div
          style={{
            width: '100%',
            height: '8vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: '12px'
          }}
        >
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="right"
            $arrowPosition="start"
            $visible={isVisibleRightStart}
            $onToogletipClose={handleOnClickRightStart}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickRightStart}
              $text="Abrir Toogletip right start"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="right"
            $arrowPosition="middle"
            $visible={isVisibleRightMiddle}
            $onToogletipClose={handleOnClickRightMiddle}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickRightMiddle}
              $text="Abrir Toogletip right middle"
            />
          </Toogletip>
          <Toogletip
            $title="Titulo del toogletip"
            $description="Información que va en el cuerpo del Toogletip"
            $position="right"
            $arrowPosition="end"
            $visible={isVisibleRightEnd}
            $onToogletipClose={handleOnClickRightEnd}
          >
            <Button
              $variant="ghost"
              onClick={handleOnClickRightEnd}
              $text="Abrir Toogletip right end"
            />
          </Toogletip>
        </div>
      </div>
    )
  }
}
