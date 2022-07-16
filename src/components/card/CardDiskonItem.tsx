import { Image, View } from 'react-native'
import React from 'react'
import { CardDiskonItemProps } from 'constants/Component'
import TextRegular from 'assets/fonts/TextRegular'
import NumberFormat from 'react-number-format'
import TextBold from 'assets/fonts/TextBold'

const CardDiskonItem = ({
  name,
  image,
  price,
  disc,
  unit,
}: CardDiskonItemProps) => (
  <View
    style={{
      width: 110,
      height: 190,
      padding: 7,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#a5a5a5',
      marginRight: 20,
      marginVertical: 10,
    }}
  >
    <View
      style={{
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 5,

        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 75, height: 75 }}
      />
    </View>
    <View style={{ marginVertical: 5 }} />
    <TextRegular color="#000" size={12} value={name} />
    <NumberFormat
      value={price}
      decimalSeparator=","
      thousandSeparator="."
      displayType="text"
      renderText={(value) => (
        <TextBold color="#a5a5a5" size={8} value={`Rp ${value}`} />
      )}
    />
    <NumberFormat
      value={disc}
      decimalSeparator=","
      thousandSeparator="."
      displayType="text"
      renderText={(value) => (
        <TextBold color="#000" size={10} value={`Rp ${value} / ${unit}`} />
      )}
    />
  </View>
)

export default CardDiskonItem
