/* eslint-disable react-hooks/exhaustive-deps */
import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import TextBold from 'components/fonts/TextBold'
import TextRegular from 'components/fonts/TextRegular'
import { devWidth } from 'constants/Dimension'
import { AuthContext } from 'routes/AuthProvider'
import firestore from '@react-native-firebase/firestore'

const HeaderMain = () => {
  const { user } = useContext(AuthContext)
  const [dataUser, setDataUser] = useState(null)

  const fetch = () => {
    firestore()
      .collection('User')
      .doc(user?.uid)
      .get()
      .then((response) => setDataUser(response?.data()))
  }

  useEffect(() => {
    fetch()
  }, [user, dataUser])

  return (
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
        <TextRegular color="#fff" size={15} value={dataUser?.name} />
      </View>
      <View
        style={{
          width: '30%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
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
}

export default HeaderMain
