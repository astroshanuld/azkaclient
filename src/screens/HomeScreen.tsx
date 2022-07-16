import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderMain from 'components/header/HeaderMain'
import FooterMain from 'components/footer/FooterMain'
import Home from 'components/section/Home'

const HomeScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <HeaderMain />
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Home />
    </ScrollView>
    <FooterMain />
  </SafeAreaView>
)

export default HomeScreen
