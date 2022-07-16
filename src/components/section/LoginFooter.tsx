import { View } from 'react-native'
import React, { useContext } from 'react'
import TextRegular from 'components/fonts/TextRegular'
import { devHeight } from 'constants/Dimension'
import { AuthContext } from 'routes/AuthProvider'

const LoginFooter = () => {
  const { initializing } = useContext(AuthContext)

  return (
    <View
      style={{
        width: '90%',
        height: devHeight * 0.15,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextRegular
        color="#000"
        size={14}
        value={initializing ? 'Memeriksa sesi masuk Anda...' : ''}
      />
      <View style={{ marginVertical: 3 }} />
      <TextRegular color="#000" size={12} value="&copy;2022 CV. Rezeki Abadi" />
    </View>
  )
}

export default LoginFooter
