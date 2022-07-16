import { Text } from 'react-native'
import React from 'react'
import { TextIntProps } from 'interfaces/Components'

const TextBold = ({ color, size, value }: TextIntProps) => (
  <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: size, color }}>
    {value}
  </Text>
)

export default TextBold
