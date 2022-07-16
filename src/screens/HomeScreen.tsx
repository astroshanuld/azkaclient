/* eslint-disable react-hooks/exhaustive-deps */
import { BackHandler, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderMain from 'components/header/HeaderMain'
import FooterMain from 'components/footer/FooterMain'
import Home from 'components/section/Home'

const HomeScreen = () => {
  const backHandler = () => BackHandler.exitApp()

  useEffect(() => {
    // @ts-expect-error
    BackHandler.addEventListener('hardwareBackPress', backHandler)
    return () => {
      // @ts-expect-error
      BackHandler.removeEventListener('hardwareBackPress', backHandler)
    }
  }, [backHandler])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderMain />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Home />
      </ScrollView>
      <FooterMain />
    </SafeAreaView>
  )
}

export default HomeScreen
