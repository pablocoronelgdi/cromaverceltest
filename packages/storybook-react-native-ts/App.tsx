import { View, StyleSheet } from 'react-native'
import { Switch, Checkbox, CromaText } from '@cromaui/react-native'
import { useState } from 'react'

function App(): JSX.Element {
  const [value, setvalue] = useState(true)

  const handlePress = (innerValue: boolean): void => {
    console.log(innerValue)
  }
  return (
    <View style={styles.container}>
      <Switch onChange={handlePress} defaultValue={false} disabled />
      <Switch
        value={value}
        onChange={() => {
          setvalue(!value)
        }}
      />
      <Checkbox onChange={() => {}} />
      <CromaText component="h2">Hola</CromaText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
