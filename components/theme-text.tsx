import { globalStyles } from '@/styles/global.styles'
import { Text, type TextProps } from 'react-native'

type Variant = 'h1' | 'h2'

type Props = {
  variant: Variant
} & TextProps

export function ThemeText({ children, variant, ...props }: Props) {
  const style =
    variant === 'h1' ? globalStyles.mainResult : globalStyles.subResult

  return (
    <Text
      style={[style, { fontFamily: 'SpaceMono' }]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  )
}
