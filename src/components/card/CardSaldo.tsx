import { TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TextRegular from 'components/fonts/TextRegular'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TextBold from 'components/fonts/TextBold'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { AuthContext } from 'routes/AuthProvider'
import NumberFormat from 'react-number-format'

const CardSaldo = () => {
  const { user } = useContext(AuthContext)
  const [dataUser, setDataUser] =
    useState<FirebaseFirestoreTypes.DocumentData>(null)

  useEffect(() => {
    firestore()
      .collection('User')
      .doc(user?.uid)
      .get()
      .then((response) => setDataUser(response?.data()))
  }, [user, dataUser])

  return (
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
        onPress={() => console.log(dataUser)}
      >
        <Icon name="qrcode-scan" size={20} color="#a5a5a5" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: '40%', alignItems: 'center', borderLeftWidth: 0.5 }}
      >
        <TextRegular color="#000" size={10} value="Plafon" />
        <NumberFormat
          value={dataUser?.plafond}
          decimalSeparator=","
          thousandSeparator="."
          displayType="text"
          renderText={(value) => (
            <TextBold color="#000" size={12} value={`Rp ${value}`} />
          )}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: '40%', alignItems: 'center', borderLeftWidth: 0.5 }}
      >
        <TextRegular color="#000" size={10} value="RA Poin" />
        <NumberFormat
          value={dataUser?.point}
          decimalSeparator=","
          thousandSeparator="."
          displayType="text"
          renderText={(value) => (
            <TextBold color="#000" size={12} value={value} />
          )}
        />
      </TouchableOpacity>
    </View>
  )
}

export default CardSaldo
