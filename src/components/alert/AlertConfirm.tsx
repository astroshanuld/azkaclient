import { View, Modal, Image } from 'react-native'
import React from 'react'
import ButtonNext from 'components/button/ButtonNext'
import ButtonDanger from 'components/button/ButtonDanger'
import TextBold from 'components/fonts/TextBold'
import TextRegular from 'components/fonts/TextRegular'

interface IAlertConfirm {
  message: string
  onPressCancel: () => void
  onPressNext: () => void
  setVisible: () => void
  visible: boolean
}

const AlertConfirm = ({
  message,
  onPressCancel,
  onPressNext,
  setVisible,
  visible,
}: IAlertConfirm) => (
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
          source={require('assets/images/question.png')}
          style={{ width: 40, height: 40, marginBottom: 15 }}
        />
        <TextBold color="#000" size={17} value="Peringatan!" />
        <TextRegular color="#000" size={16} value={message} />
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ButtonDanger onPress={onPressCancel} />
          <View style={{ marginHorizontal: 10 }} />
          <ButtonNext onPress={onPressNext} />
        </View>
      </View>
    </View>
  </Modal>
)

export default AlertConfirm
