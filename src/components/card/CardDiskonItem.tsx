import { Image, View } from 'react-native'
import React from 'react'
import TextRegular from 'components/fonts/TextRegular'
import NumberFormat from 'react-number-format'
import TextBold from 'components/fonts/TextBold'
import { CardDiskonItemProps } from 'interfaces/Components'

const CardDiskonItem = ({
  name,
  image,
  price,
  disc,
  unit,
}: CardDiskonItemProps) => {
  const discVal = disc / 100
  const priceDisc = price - price * discVal

  return (
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
      <View style={{ width: '100%', height: 43 }}>
        <TextRegular color="#000" size={12} value={name} />
      </View>
      <NumberFormat
        value={price}
        decimalSeparator=","
        thousandSeparator="."
        displayType="text"
        renderText={(value) => (
          <TextBold
            color="#a5a5a5"
            size={8}
            value={`Rp ${value} (-${disc}%)`}
          />
        )}
      />
      <NumberFormat
        value={priceDisc}
        decimalSeparator=","
        thousandSeparator="."
        displayType="text"
        renderText={(value) => (
          <TextBold color="#000" size={10} value={`Rp ${value} / ${unit}`} />
        )}
      />
    </View>
  )
}

export default CardDiskonItem
