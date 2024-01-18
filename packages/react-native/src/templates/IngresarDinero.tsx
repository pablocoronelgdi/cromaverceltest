import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Color } from '@cromaui/foundations'
import CromaText from '../components/text/Text'
import Button from '../components/button/Button'

const IngresarDinero: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <CromaText $color="light">Ingresar dinero</CromaText>
      </View>
      <View style={styles.body}>
        <CromaText $variant="semibold">
          ¿Donde queres que se acredite?
        </CromaText>
        <CromaText $component="bodySm">
          Elegí una de tus cuentas de macro
        </CromaText>
      </View>
      <View style={{ width: 200 }}>
        <Button>Continuar</Button>
      </View>
    </View>
  )
}

export default IngresarDinero

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 36,
    alignItems: 'center'
  },
  navBar: {
    width: '100%',
    height: 48,
    paddingVertical: 3,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 16,
    flexShrink: 0,
    backgroundColor: Color.Navy.main
  },
  body: {
    width: '100%',
    padding: 12
  }
})
