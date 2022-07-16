import { View, Modal, Image } from 'react-native'
import React from 'react'
import ButtonNext from 'components/button/ButtonNext'
import TextBold from 'components/fonts/TextBold'
import TextRegular from 'components/fonts/TextRegular'

interface IAlertSuccess {
  message: string
  onPressNext: () => void
  setVisible: () => void
  visible: boolean
}

const AlertSuccess = ({
  message,
  onPressNext,
  setVisible,
  visible,
}: IAlertSuccess) => (
  <Modal
    animationType="fade"
    transparent
    visible={visible}
    onRequestClose={setVisible}
  >
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Image
          source={require('assets/images/success.png')}
          style={{ width: 40, height: 40, marginBottom: 15 }}
        />
        <TextBold color="#000" size={18} value="Success!" />
        <TextRegular
          color="#000"
          size={14}
          value={message}
          options={{ textAlign: 'center' }}
        />
        <ButtonNext onPress={onPressNext} />
      </View>
    </View>
  </Modal>
)

export default AlertSuccess
