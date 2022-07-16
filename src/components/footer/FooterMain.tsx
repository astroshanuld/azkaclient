import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { devWidth } from 'constants/Dimension'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TextBold from 'components/fonts/TextBold'

const FooterMain = () => (
  <View
    style={{
      width: devWidth,
      justifyContent: 'center',
      backgroundColor: '#fff',
      shadowColor: '#000',
      borderTopWidth: 0.5,
      borderTopColor: '#a5a5a5',
      height: 70,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
    }}
  >
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={() => console.log('MEONG')}
    >
      <Icon name="home" size={25} color="#0f17fa" />
      <TextBold color="#000" size={10} value="Beranda" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={() => console.log('MEONG')}
    >
      <Icon name="file-document" size={25} color="#0f17fa" />
      <TextBold color="#000" size={10} value="Riwayat" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={() => console.log('MEONG')}
    >
      <Icon name="cart" size={25} color="#0f17fa" />
      <TextBold color="#000" size={10} value="Keranjang" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={() => console.log('MEONG')}
    >
      <Icon name="account" size={25} color="#0f17fa" />
      <TextBold color="#000" size={10} value="Akun" />
    </TouchableOpacity>
  </View>
)

export default FooterMain
