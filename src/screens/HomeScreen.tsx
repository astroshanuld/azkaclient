/* eslint-disable react-hooks/exhaustive-deps */
import { BackHandler, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderMain from 'components/header/HeaderMain'
import FooterMain from 'components/footer/FooterMain'
import Home from 'components/section/Home'
import HomeProfile from 'components/section/HomeProfile'

const HomeScreen = () => {
  const [active, setActive] = useState('Home')
  const [render, setRender] = useState(<Home />)

  useEffect(() => {
    if (active === 'Home') setRender(<Home />)
    if (active === 'Account') setRender(<HomeProfile />)
    if (active === 'Cart') setRender(<Home />)
    if (active === 'History') setRender(<Home />)
  }, [active])

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
        {render}
      </ScrollView>
      <FooterMain
        active={active}
        onPressAccount={() => setActive('Account')}
        onPressCart={() => setActive('Cart')}
        onPressHistory={() => setActive('History')}
        onPressHome={() => setActive('Home')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
