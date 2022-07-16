import { View, FlatList } from 'react-native'
import React from 'react'
import TextBold from 'assets/fonts/TextBold'
import CardDiskonItem from 'components/card/CardDiskonItem'
import cardDiskon from 'constants/Dummy'

const CardDiskon = () => (
  <View style={{ marginVertical: 15 }}>
    <TextBold color="#000" size={16} value="Diskon buat Anda!" />
    <View style={{ marginVertical: 3 }} />
    <View style={{ width: '100%' }}>
      <FlatList
        horizontal
        data={cardDiskon}
        renderItem={({ item }) => (
          <CardDiskonItem
            name={item.name}
            image={item.image}
            price={item.price}
            disc={item.disc}
            unit={item.unit}
          />
        )}
      />
    </View>
  </View>
)

export default CardDiskon
