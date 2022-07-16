import { View } from 'react-native'
import React from 'react'
import CardSaldo from 'components/card/CardSaldo'
import CardDiskon from 'components/card/CardDiskon'
import CardStok from 'components/card/CardStok'

const Home = () => (
  <View style={{ width: '90%' }}>
    <CardSaldo />
    <CardDiskon />
    <CardStok />
  </View>
)

export default Home
