import React from 'react'
import './inicio.css'
import { Button, Pictogram, Tooltip } from '@cromaui/react'

const Inicio: React.FC = () => {
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

        <div className="gridItem"></div>
      </div>
    </>
  )
}

export default Inicio
