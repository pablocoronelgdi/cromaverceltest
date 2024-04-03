import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { CromaText, useCromaFonts } from '@cromaui/react-native'
import React from 'react'

const App: React.FC = () => {
  const areFontsLoaded = useCromaFonts()
  return areFontsLoaded ? (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <CromaText>Holis</CromaText>
      <CromaText component="h1" variant="bold">
        Holis
      </CromaText>
    </View>
  ) : (
    <Text>he he</Text>
  )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.storybook').default
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default AppEntryPoint
