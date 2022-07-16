import { View } from 'react-native'
import React from 'react'
import TextBold from 'components/fonts/TextBold'
import TextRegular from 'components/fonts/TextRegular'
import { devWidth } from 'constants/Dimension'

const HeaderMain = () => (
  <View
    style={{
      width: devWidth,
      backgroundColor: '#0f17fa',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      padding: 15,
      flexDirection: 'row',
    }}
  >
    <View style={{ width: '70%', justifyContent: 'center' }}>
      <TextBold color="#fff" size={10} value="Selamat Datang," />
      <TextRegular color="#fff" size={15} value="Atharazka" />
    </View>
    <View
      style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextBold color="#fff" size={10} value="RA" />
      </View>
    </View>
  </View>
)

export default HeaderMain
