import { TouchableOpacity } from 'react-native'
import React from 'react'
import TextBold from 'components/fonts/TextBold'
import { ButtonProps } from 'interfaces/Components'

const ButtonSuccess90 = (props: ButtonProps) => {
  const { onPress, title } = props

  return (
    <TouchableOpacity
      style={{
        width: '90%',
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 7,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <TextBold color="#fff" size={14} value={title} />
    </TouchableOpacity>
  )
}

export default ButtonSuccess90
