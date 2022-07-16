import ButtonDanger from 'components/button/ButtonDanger'
import TextBold from 'components/fonts/TextBold'
import TextRegular from 'components/fonts/TextRegular'
import React from 'react'
import { Image, Modal, View } from 'react-native'

interface IAlertDanger {
  message: string
  onPressNext: () => void
  setVisible: () => void
  visible: boolean
}

const AlertDanger = ({
  message,
  onPressNext,
  setVisible,
  visible,
}: IAlertDanger) => (
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
          source={require('assets/images/danger.png')}
          style={{ width: 40, height: 40, marginBottom: 15 }}
        />
        <TextBold color="#000" size={18} value="Peringatan!" />
        <TextRegular color="#000" size={14} value={message} />
        <ButtonDanger onPress={onPressNext} />
      </View>
    </View>
  </Modal>
)

export default AlertDanger
