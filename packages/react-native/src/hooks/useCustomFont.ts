import { useState, useEffect } from 'react'
import { loadAsync } from 'expo-font'

const useCustomFont = (): boolean => {
  const [fontsLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async (): Promise<void> => {
      try {
        await loadAsync({
          'Titillium-regular': require('../assets/TitilliumWeb-Regular.ttf'),
          'Titillium-semibold': require('../assets/TitilliumWeb-SemiBold.ttf'),
          'Titillium-bold': require('../assets/TitilliumWeb-Bold.ttf'),
          'OpenSans-regular': require('../assets/OpenSans-Regular.ttf'),
          'OpenSans-semibold': require('../assets/OpenSans-SemiBold.ttf'),
          'OpenSans-bold': require('../assets/OpenSans-Bold.ttf')
        })
        setFontLoaded(true)
      } catch (error) {
        setFontLoaded(false)
      }
    }
    void loadFonts()
    return () => {}
  }, [])

  return fontsLoaded
}

export default useCustomFont
