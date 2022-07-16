/* eslint-disable comma-dangle */
import { View } from 'react-native'
import React, { useState } from 'react'
import InputFull from 'components/input/InputFull'
import ButtonSuccess90 from 'components/button/ButtonSuccess90'
import TextRegular from 'components/fonts/TextRegular'
import TextLoginSignUp from 'components/fonts/TextLoginSignUp'
import ButtonPrimary90 from 'components/button/ButtonPrimary90'
import auth from '@react-native-firebase/auth'
import AlertSuccess from 'components/alert/AlertSuccess'
import { LoginFormProps } from 'interfaces/Components'
import AlertDanger from 'components/alert/AlertDanger'

const LoginForm = ({ navigation }: LoginFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [isAlertMessage, setIsAlertMessage] = useState('')
  const [isAlertSuccess, setIsAlertSuccess] = useState(false)
  const [isAlertDanger, setIsAlertDanger] = useState(false)

  const onSwitchSignup = () => {
    setEmail('')
    setPassword('')
    setIsSignup(!isSignup)
  }

  const onSuccess = () => {
    setIsAlertSuccess(false)
    navigation.navigate('HomeScreen')
  }

  const postSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setIsAlertSuccess(true)
        if (isSignup) {
          setIsAlertMessage(
            'Selamat datang di Rezeki Abadi. Selamat berbelanja!'
          )
        } else setIsAlertMessage('Berhasil masuk ke aplikasi.')
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
      })
  }

  const postLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsAlertSuccess(true)
        if (isSignup) {
          setIsAlertMessage(
            'Selamat datang di Rezeki Abadi. Selamat berbelanja!'
          )
        } else setIsAlertMessage('Berhasil masuk ke aplikasi.')
      })
      .catch((error) => {
        setIsAlertDanger(true)
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
      <AlertSuccess
        message={isAlertMessage}
        onPressNext={() => onSuccess()}
        setVisible={() => onSuccess()}
        visible={isAlertSuccess}
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
