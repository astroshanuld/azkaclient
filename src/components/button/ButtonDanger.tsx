import { TouchableOpacity } from 'react-native'
import React from 'react'
import TextBold from 'components/fonts/TextBold'

interface IButtonDanger {
  onPress: () => void
}

const ButtonDanger = ({ onPress }: IButtonDanger) => (
  <TouchableOpacity
    style={{
      width: '50%',
      height: 35,
      borderRadius: 5,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    }}
    onPress={onPress}
  >
    <TextBold color="#fff" size={14} value="Tutup" />
  </TouchableOpacity>
)

export default ButtonDanger
