import { Text } from 'react-native'
import React from 'react'
import { TextIntProps } from 'interfaces/Components'

const TextRegular = ({ color, size, options, value }: TextIntProps) => (
  <Text
    style={{
      // @ts-expect-error
      ...options,
      fontFamily: 'Comfortaa-Regular',
      fontSize: size,
      color,
    }}
  >
    {value}
  </Text>
)

export default TextRegular
