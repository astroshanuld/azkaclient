import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextBold from 'assets/fonts/TextBold'
import CardDiskonItem from 'components/card/CardDiskonItem'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'

const CardStok = () => {
  const [products, setProducts] =
    useState<
      FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
    >(null)

  useEffect(() => {
    const subscriber = firestore()
      .collection('Product')
      .where('stock', '<=', 50)
      .onSnapshot((documentSnapshot) => {
        setProducts(documentSnapshot?.docs)
      })

    return () => subscriber()
  }, [])

  return (
    <View style={{ marginVertical: 15 }}>
      <TextBold color="#000" size={16} value="Stok terbatas!" />
      <View style={{ marginVertical: 3 }} />
      <View style={{ width: '100%' }}>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <CardDiskonItem
              name={item.get('name')}
              image={item.get('image')}
              price={item.get('price')}
              disc={item.get('discount')}
              unit={item.get('unit')}
            />
          )}
        />
      </View>
    </View>
  )
}

export default CardStok
