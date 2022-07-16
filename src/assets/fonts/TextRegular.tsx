import { Text } from 'react-native'
import React from 'react'
import { TextIntProps } from 'interfaces/Components'

const TextRegular = ({ color, size, value }: TextIntProps) => (
  <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: size, color }}>
    {value}
  </Text>
)

export default TextRegular
