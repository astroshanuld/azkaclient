/* eslint-disable comma-dangle */
import { View } from 'react-native'
import React, { useState } from 'react'
import InputFull from 'components/input/InputFull'
import ButtonSuccess90 from 'components/button/ButtonSuccess90'
import TextRegular from 'components/fonts/TextRegular'
import TextLoginSignUp from 'components/fonts/TextLoginSignUp'
import ButtonPrimary90 from 'components/button/ButtonPrimary90'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AlertDanger from 'components/alert/AlertDanger'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [isAlertMessage, setIsAlertMessage] = useState('')
  const [isAlertDanger, setIsAlertDanger] = useState(false)

  const onSwitchSignup = () => {
    setEmail('')
    setPassword('')
    setIsSignup(!isSignup)
  }

  const postSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response?.user.sendEmailVerification()
        firestore()
          .collection('User')
          .doc(response?.user?.uid)
          .set({
            name: `Juragan ${Math.floor(Math.random() * 1000)}`,
            email: response?.user?.email,
            verified: response?.user?.emailVerified,
            plafond: 0,
            point: 0,
          })
          .catch((error) => console.error(error))
      })
      .catch((error) => {
        setIsAlertDanger(true)
        if (error?.code === 'auth/email-already-in-use') {
          setIsAlertMessage(
            'Alamat email pernah didaftarkan di aplikasi ini. Gunakan alamat email lain.'
          )
        }
        if (error.code === 'auth/invalid-email') {
          setIsAlertMessage(
            'Alamat email tidak benar. Periksa kembali alamat email Anda.'
          )
        }
        if (error.code === 'auth/network-request-failed') {
          setIsAlertMessage('Koneksi internet terputus!')
        }
      })
  }

  const postLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setIsAlertDanger(true)
        if (error.code === 'auth/wrong-password') {
          setIsAlertMessage('Username atau password salah!')
        }
        if (error.code === 'auth/invalid-email') {
          setIsAlertMessage(
            'Alamat email tidak benar. Periksa kembali alamat email Anda.'
          )
        }
        if (error.code === 'auth/user-not-found') {
          setIsAlertMessage('User tidak ditemukan!')
        }
        if (error.code === 'auth/network-request-failed') {
          setIsAlertMessage('Koneksi internet terputus!')
        }
        console.log(error?.code)
      })
  }

  return (
    <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}>
      <TextRegular
        color="#000"
        size={16}
        value={isSignup ? 'Daftarkan Akun Anda' : 'Masuk untuk Melanjutkan'}
      />
      <InputFull
        placeholder="Email"
        setValue={setEmail}
        value={email}
        keyboardType="email-address"
        title="Email"
      />
      <InputFull
        placeholder="Kata Sandi"
        setValue={setPassword}
        value={password}
        secureText
        title="Kata Sandi"
      />
      <View style={{ marginVertical: 10 }} />
      {isSignup ? (
        <ButtonPrimary90 onPress={() => postSignup()} title="DAFTAR" />
      ) : (
        <ButtonSuccess90 onPress={() => postLogin()} title="MASUK" />
      )}
      <TextLoginSignUp
        color="#000"
        colorLink="blue"
        isSignup={isSignup}
        onPress={() => onSwitchSignup()}
      />
      <AlertDanger
        message={isAlertMessage}
        onPressNext={() => setIsAlertDanger(false)}
        setVisible={() => setIsAlertDanger(false)}
        visible={isAlertDanger}
      />
    </View>
  )
}

export default LoginForm
