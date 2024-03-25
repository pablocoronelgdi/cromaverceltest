import { Icon, Image, Link, ListItem, Spinner, Tooltip } from '@cromaui/react'
import React, { useEffect, useState } from 'react'
import './movimientos.css'

const movimientosBancarios = [
  { monto: -500000, descripcion: 'Coto Digital S.A 023dcs4:12 00032', id: 546876518 },
  { monto: 2000000, descripcion: 'Acreditacion de Haberes', id: 5487851648 },
  { monto: -24000, descripcion: 'Transferencia a Terceros', id: 5478951575 },
  { monto: -48500, descripcion: 'Transferencia a Cuartos', id: 54972315674 },
  { monto: -1200, descripcion: 'Debin Spotifya23cf50d3.payments.com plan básico', id: 54972315674 },
  { monto: 200000, descripcion: 'Transferencia de Isabel Mebarak', id: 54212354885 },
  { monto: -70000, descripcion: 'Alquiler traje torero', id: 542124154885 },
  {
    monto: -80000,
    descripcion: 'Pago voluntario multa por bailar en un semaforo',
    id: 54974613258
  },
  { monto: 400000, descripcion: 'Comision por reproducciones musicales mensual', id: 54812698520 }
]

const DescargarComprobante: React.FC<{ idComprobante: number }> = ({ idComprobante }) => {
  return (
    <Tooltip $description="Descargar comprobante" $position="top" $arrowPosition="middle">
      <Icon
        $name="download"
        onClick={() => {
          alert(`Comprobante N°${idComprobante} descargado con éxito`)
        }}
      />
    </Tooltip>
  )
}

const Movimientos: React.FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <h2 style={{ marginLeft: '2rem' }}>Transferencias</h2>
      <div className="grid">
        <div style={{ width: '70%' }}>
          {loading ? (
            <div className="spinnerContainer">
              <Spinner $withLogo $label="Cargando últimos movimientos" />
            </div>
          ) : (
            <div className="list">
              <ListItem title="" $contentLeft={<h6>Últimos Movimientos</h6>} />
              {movimientosBancarios.map((movimiento) => {
                return (
                  <ListItem
                    key={movimiento.id}
                    $contentLeft={
                      <Icon $name={movimiento.monto > 0 ? 'arrow_downward' : 'arrow_upward'} />
                    }
                    title={`$${movimiento.monto.toLocaleString()}`}
                    $description={movimiento.descripcion}
                    $contentRight={<DescargarComprobante idComprobante={movimiento.id} />}
                  />
                )
              })}
            </div>
          )}
        </div>
        <div className="gridItem">
          <Image
            image="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mobile_content_xvgr.svg"
            width={'70%'}
            height={'70%'}
            alt="pinInput"
            title="imagen"
          />
          <h6> Ahora podes realizar esta consulta desde tu telefono. </h6>
          <Link href="/" alt="pin input" content="Continuar en mobile" title="holis" />
        </div>
      </div>
    </>
  )
}

export default Movimientos
