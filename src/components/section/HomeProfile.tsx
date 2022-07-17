/* eslint-disable react-hooks/exhaustive-deps */
import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import RNRestart from 'react-native-restart'
import ItemProfile from 'components/item/ItemProfile'
import TextBold from 'components/fonts/TextBold'
import AlertConfirm from 'components/alert/AlertConfirm'
import ModalEditProfile from 'components/modal/ModalEditProfile'
import { AuthContext } from 'routes/AuthProvider'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import _ from 'lodash'
import AlertSuccess from 'components/alert/AlertSuccess'

const HomeProfile = () => {
  const { user } = useContext(AuthContext)
  const [isAlertConfirm, setIsAlertConfirm] = useState(false)
  const [isAlertSuccessEditProfile, setIsAlertSuccessEditProfile] =
    useState(false)
  const [isAlertMessage, setIsAlertMessage] = useState('')
  const [isModalEdit, setIsModalEdit] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dataUser, setDataUser] =
    useState<FirebaseFirestoreTypes.DocumentData>(null)

  const fetch = () => {
    firestore()
      .collection('User')
      .doc(user?.uid)
      .get()
      .then((response) => setDataUser(response?.data()))
  }

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    if (!_.isNil(dataUser)) {
      setName(dataUser?.name)
      setPhone(dataUser?.phone)
    }
  }, [dataUser])

  const onCancelledEditProfile = () => {
    setIsModalEdit(false)
    fetch()
  }

  const onPressLogout = () => {
    setIsAlertConfirm(true)
    setIsAlertMessage('Anda yakin ingin keluar?')
  }

  const onSuccessEditProfile = () => {
    setIsAlertSuccessEditProfile(false)
    fetch()
  }

  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        RNRestart.Restart()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const putEditProfile = () => {
    setIsModalEdit(false)
    firestore()
      .collection('User')
      .doc(user?.uid)
      .update({
        name,
        phone,
      })
      .then(() => {
        setIsAlertSuccessEditProfile(true)
        setIsAlertMessage('Berhasil memperbarui profil!')
      })
  }

  return (
    <View style={{ width: '90%' }}>
      <View style={{ marginVertical: 15 }} />
      <TextBold color="#000" size={18} value="Transaksi" />
      <ItemProfile
        icon="logout-variant"
        onPress={() => console.log('MEONG')}
        title="Riwayat Pembayaran"
      />
      <ItemProfile
        icon="logout-variant"
        onPress={() => console.log('MEONG')}
        title="Plafon"
      />
      <View style={{ marginVertical: 8 }} />
      <TextBold color="#000" size={18} value="Pengaturan Akun" />
      <ItemProfile
        icon="account-cog"
        onPress={() => setIsModalEdit(true)}
        title="Ubah Profil"
      />
      <ItemProfile
        icon="logout-variant"
        onPress={() => onPressLogout()}
        title="Keluar"
      />
      <AlertConfirm
        message={isAlertMessage}
        onPressCancel={() => setIsAlertConfirm(false)}
        onPressNext={() => onLogout()}
        setVisible={() => setIsAlertConfirm(false)}
        visible={isAlertConfirm}
      />
      <AlertSuccess
        message={isAlertMessage}
        onPressNext={() => onSuccessEditProfile()}
        setVisible={() => onSuccessEditProfile()}
        visible={isAlertSuccessEditProfile}
      />
      <ModalEditProfile
        name={name}
        onChangeName={setName}
        onChangePhone={setPhone}
        onProcess={() => putEditProfile()}
        phone={phone}
        setVisible={() => onCancelledEditProfile()}
        visible={isModalEdit}
      />
    </View>
  )
}

export default HomeProfile
