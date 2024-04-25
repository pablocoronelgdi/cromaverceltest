import React, { useState } from 'react'
import './home.css'
import { Button, Pictogram, ListItem, Tooltip, Checkbox } from '@cromaui/react'

const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('')
  const handleChcked = (id: string) => {
    setSelectedId(id)
    console.log(selectedId)
  }
  const items = [
    {
      id: '1',
      title: 'Item 1',
      description: 'Descripcion del item 1'
    },
    {
      id: '2',
      title: 'Item 2',
      description: 'Descripcion del item 2'
    },
    {
      id: '3',
      title: 'Item 3',
      description: 'Descripcion del item 3'
    },
    {
      id: '4',
      title: 'Item 4',
      description: 'Descripcion del item 4'
    },
    {
      id: '5',
      title: 'Item 5',
      description: 'Descripcion del item 5'
    },
    {
      id: '6',
      title: 'Item 6',
      description: 'Descripcion del item 6'
    }
  ]
  return (
    <>
      <h2 style={{ marginLeft: '2rem' }}>Inicio</h2>

      <div className="grid">
        <Tooltip
          $description="Controla y analizá tus inversiones desde este panel."
          $arrowPosition="middle"
          $position="top"
        >
          <div className="gridItem">
            <Pictogram $name="Cash" $segmentName="Individuos" />
            <Button $variant="outline" $size="small" $text="Mis inversiones" />
          </div>
        </Tooltip>
        <Tooltip
          $description="Conoceé el estado de tus puntos"
          $arrowPosition="end"
          $position="bottom"
        >
          <div className="gridItem">
            <Pictogram $name="Card" $segmentName="Gobierno" />
            <Button $variant="outline" $size="small" $text="Mis Puntos" />
          </div>
        </Tooltip>
        <Tooltip
          $description="Contacta con nuestro equipo de soporte para consultas y asistencias."
          $arrowPosition="start"
          $position="left"
        >
          <div className="gridItem">
            <Pictogram $name="Laptop" $segmentName="Selecta" />
            <Button $variant="outline" $size="small" $text="Soporte en línea" />
          </div>
        </Tooltip>
        <Tooltip
          $description="Esta opcion no hace nada pero nos gusta dejarla aquí"
          $arrowPosition="start"
          $position="left"
        >
          <div className="gridItem">
            <Pictogram $name="Question" $segmentName="Empresas" />
            <Button $variant="outline" $size="small" $text="Boton de nada" />
          </div>
        </Tooltip>
      </div>
      <div className="gridListItems">
        {items.map((item) => (
          <ListItem
            key={item.id} 
            $description={item.description}
            title={item.title}
            $leftComponentRender='iconItem'
            $rightComponentRender='icon'
            disabled
            // $leftContentChildren={<Checkbox checked={selectedId === item.id} onChange={() => handleChcked(item.id)} />}
            href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#try_it'
            $as='link'
  /*           $selected={selectedId === item.id}
            $onSelect={() => handleChcked(item.id)} */
          />
        ))}
      </div>
    </>
  )
}

export default Home
