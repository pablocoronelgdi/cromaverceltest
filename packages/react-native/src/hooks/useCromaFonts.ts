import { useFonts } from 'expo-font'

const useCromaFonts = (): boolean => {
  const [loaded] = useFonts({
    TitilliumRegular: require('../assets/TitilliumWeb-Regular.ttf'),
    TitilliumSemibold: require('../assets/TitilliumWeb-SemiBold.ttf'),
    TitilliumBold: require('../assets/TitilliumWeb-Bold.ttf'),
    PublicSansRegular: require('../assets/PublicSans-Regular.ttf'),
    PublicSansSemibold: require('../assets/PublicSans-SemiBold.ttf'),
    PublicSansBold: require('../assets/PublicSans-Bold.ttf')
  })

  return loaded
}

export default useCromaFonts
