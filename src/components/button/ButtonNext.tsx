import { TouchableOpacity } from 'react-native'
import React from 'react'
import TextBold from 'components/fonts/TextBold'

interface IButtonNext {
  onPress: () => void
}

const ButtonNext = ({ onPress }: IButtonNext) => (
  <TouchableOpacity
    style={{
      width: '50%',
      height: 35,
      borderRadius: 5,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    }}
    onPress={onPress}
  >
    <TextBold color="#fff" size={14} value="OK" />
  </TouchableOpacity>
)

export default ButtonNext
