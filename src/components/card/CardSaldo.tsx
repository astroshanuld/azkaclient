import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextRegular from 'assets/fonts/TextRegular'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TextBold from 'assets/fonts/TextBold'

const CardSaldo = () => (
  <View
    style={{
      width: '100%',
      borderWidth: 0.5,
      borderRadius: 10,
      marginTop: 30,
      marginBottom: 15,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TouchableOpacity
      style={{
        width: '20%',
        alignItems: 'center',
      }}
    >
      <Icon name="qrcode-scan" size={20} color="#a5a5a5" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '40%', alignItems: 'center', borderLeftWidth: 0.5 }}
    >
      <TextRegular color="#000" size={10} value="Plafon" />
      <TextBold color="#000" size={12} value="Rp 123.456.789" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ width: '40%', alignItems: 'center', borderLeftWidth: 0.5 }}
    >
      <TextRegular color="#000" size={10} value="RA Poin" />
      <TextBold color="#000" size={12} value="1.234" />
    </TouchableOpacity>
  </View>
)

export default CardSaldo
