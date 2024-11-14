import { CalculatorButton } from '@/components/calculator-button'
import { ThemeText } from '@/components/theme-text'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/use-calculator'
import { globalStyles } from '@/styles/global.styles'
import { View } from 'react-native'

export default function CalculatorApp() {
  const {
    formula,
    prevNumber,
    toggleSign,
    deleteLast,
    buildNumber,
    clean,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.lightGray} blackText onPress={clean}>
          C
        </CalculatorButton>
        <CalculatorButton
          color={Colors.lightGray}
          blackText
          onPress={toggleSign}
        >
          +/-
        </CalculatorButton>
        <CalculatorButton
          color={Colors.lightGray}
          blackText
          onPress={deleteLast}
        >
          DEL
        </CalculatorButton>
        <CalculatorButton color={Colors.orange} onPress={divideOperation}>
          /
        </CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')}>7</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('8')}>8</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('9')}>9</CalculatorButton>
        <CalculatorButton color={Colors.orange} onPress={multiplyOperation}>
          *
        </CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')}>4</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('5')}>5</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('6')}>6</CalculatorButton>
        <CalculatorButton color={Colors.orange} onPress={substractOperation}>
          -
        </CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')}>1</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('2')}>2</CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('3')}>3</CalculatorButton>
        <CalculatorButton color={Colors.orange} onPress={addOperation}>
          +
        </CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton doubleSize onPress={() => buildNumber('0')}>
          0
        </CalculatorButton>
        <CalculatorButton onPress={() => buildNumber('.')}>,</CalculatorButton>
        <CalculatorButton color={Colors.orange}>=</CalculatorButton>
      </View>
    </View>
  )
}
