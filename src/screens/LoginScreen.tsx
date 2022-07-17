/* eslint-disable react-hooks/exhaustive-deps */
import { View, SafeAreaView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import TextBold from 'components/fonts/TextBold'
import LoginFooter from 'components/section/LoginFooter'
import LoginForm from 'components/section/LoginForm'
import { AuthContext } from 'routes/AuthProvider'
import _ from 'lodash'

const LoginScreen = ({ navigation }) => {
  const { user, initializing } = useContext(AuthContext)

  useEffect(() => {
    if (!_.isNil(user)) navigation.navigate('HomeScreen')
  }, [user])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextBold color="#000" size={30} value="Rezeki Abadi" />
        {!initializing && _.isNil(user) ? <LoginForm /> : null}
      </View>
      <LoginFooter />
    </SafeAreaView>
  )
}

export default LoginScreen
