module.exports = {
  expo: {
    name: 'storybook-react-native-ts',
    slug: 'storybook-react-native-ts',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.anonymous.storybookreactnativets'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      storybookEnabled: process.env.STORYBOOK
    }
  }
}
