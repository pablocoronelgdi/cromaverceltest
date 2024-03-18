import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { SwitchIcon, CromaSwitch } from '@cromaui/react-native/'
import { useState } from 'react'

function App() {
  const [value, setvalue] = useState(true)

  const handlePress = (innerValue) => {
    console.log(innerValue)
  }
  return (
    <View style={styles.container}>
      <SwitchIcon
        value={value}
        onPress={() => {
          setvalue(!value)
        }}
      />
      <CromaSwitch onChange={handlePress} defaultValue={false} disabled />
      <CromaSwitch value={value} onChange={() => setvalue(!value)} />
    </View>
  )
}

let AppEntryPoint = App
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AppEntryPoint
