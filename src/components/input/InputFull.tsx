import { View, Text, TextInput } from 'react-native'
import React from 'react'
import NumberFormat from 'react-number-format'
import { InputFullProps } from 'interfaces/Components'

const InputFull = (props: InputFullProps) => {
  const {
    keyboardType,
    secureText,
    currency,
    placeholder,
    setValue,
    title,
    value,
  } = props

  return (
    <View
      style={{
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 8,
        backgroundColor: '#fff',
      }}
    >
      {title ? (
        <Text
          style={{
            fontFamily: 'Comfortaa-Regular',
            fontSize: 12,
            color: '#000',
            position: 'absolute',
            top: -10,
            left: 15,
            backgroundColor: '#fff',
          }}
        >
          {title}
        </Text>
      ) : null}
      {currency ? (
        <NumberFormat
          value={value}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={0}
          renderText={(item) => (
            <TextInput
              value={item}
              onChangeText={setValue}
              autoCapitalize="none"
              keyboardType="number-pad"
              placeholder={placeholder}
              style={{
                width: '95%',
                fontFamily: 'Comfortaa-Regular',
                fontSize: 14,
                alignSelf: 'center',
              }}
            />
          )}
        />
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureText}
          autoCapitalize="none"
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          style={{
            width: '95%',
            fontFamily: 'Comfortaa-Regular',
            fontSize: 14,
            alignSelf: 'center',
          }}
        />
      )}
    </View>
  )
}

export default InputFull
