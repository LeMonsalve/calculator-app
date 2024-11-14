import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global.styles'
import { Pressable, Text } from 'react-native'
import * as Haptics from 'expo-haptics'

type Props = {
  children: string
  color?: string
  blackText?: boolean
  doubleSize?: boolean
  onPress?: () => void
}

export function CalculatorButton({
  children,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) {
  const handlePress = () => {
    Haptics.selectionAsync()
    onPress?.()
  }

  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button,
        {
          backgroundColor: color,
          opacity: pressed ? 0.5 : 1,
          width: doubleSize ? 180 : 80,
        },
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          globalStyles.buttonText,
          {
            color: blackText ? 'black' : 'white',
          },
        ]}
        adjustsFontSizeToFit
      >
        {children}
      </Text>
    </Pressable>
  )
}
