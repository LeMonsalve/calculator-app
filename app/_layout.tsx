import { globalStyles } from '@/styles/global.styles'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { Platform, Text, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'

if (Platform.OS === 'android') {
  NavigationBar.setBackgroundColorAsync('black')
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={globalStyles.background}>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  )
}
