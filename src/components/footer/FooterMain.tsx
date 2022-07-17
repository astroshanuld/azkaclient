import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { devWidth } from 'constants/Dimension'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TextBold from 'components/fonts/TextBold'
import { FooterMainProps } from 'interfaces/Components'

const FooterMain = ({
  active,
  onPressAccount,
  onPressCart,
  onPressHistory,
  onPressHome,
}: FooterMainProps) => (
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
      onPress={onPressHome}
    >
      <Icon
        name="home-modern"
        size={25}
        color={active === 'Home' ? 'green' : '#0f17fa'}
      />
      <TextBold color="#000" size={10} value="Beranda" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={onPressHistory}
    >
      <Icon
        name="file-document"
        size={25}
        color={active === 'History' ? 'green' : '#0f17fa'}
      />
      <TextBold color="#000" size={10} value="Riwayat" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={onPressCart}
    >
      <Icon
        name="cart"
        size={25}
        color={active === 'Cart' ? 'green' : '#0f17fa'}
      />
      <TextBold color="#000" size={10} value="Keranjang" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}
      onPress={onPressAccount}
    >
      <Icon
        name="account"
        size={25}
        color={active === 'Account' ? 'green' : '#0f17fa'}
      />
      <TextBold color="#000" size={10} value="Akun" />
    </TouchableOpacity>
  </View>
)

export default FooterMain
