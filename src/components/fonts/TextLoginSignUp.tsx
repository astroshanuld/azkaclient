import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import TextRegular from 'components/fonts/TextRegular'
import TextBold from 'components/fonts/TextBold'
import { TextLoginSignUpProps } from 'interfaces/Components'

const TextLoginSignUp = (props: TextLoginSignUpProps) => {
  const { color, colorLink, isSignup, onPress } = props

  return (
    <React.Fragment>
      {!isSignup ? (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TextRegular color={color} size={13} value="Daftar akun baru" />
          <TouchableOpacity onPress={onPress}>
            <TextBold color={colorLink} size={13} value=" disini." />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TextRegular color={color} size={13} value="Masuk ke akun Anda" />
          <TouchableOpacity onPress={onPress}>
            <TextBold color={colorLink} size={13} value=" disini." />
          </TouchableOpacity>
        </View>
      )}
    </React.Fragment>
  )
}

export default TextLoginSignUp
