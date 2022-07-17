import { View, Modal } from 'react-native'
import React from 'react'
import ButtonNext from 'components/button/ButtonNext'
import InputFull from 'components/input/InputFull'

interface IModalEditProfile {
  name: string
  phone: string
  onChangeName: (x: string) => void
  onChangePhone: (x: string) => void
  onProcess: () => void
  setVisible: () => void
  visible: boolean
}

const ModalEditProfile = ({
  name,
  onChangeName,
  onChangePhone,
  onProcess,
  phone,
  setVisible,
  visible,
}: IModalEditProfile) => (
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
        <InputFull
          placeholder="Nama"
          setValue={onChangeName}
          value={name}
          title="Nama"
        />
        <InputFull
          placeholder="Nomor Telepon"
          setValue={onChangePhone}
          value={phone}
          title="Nomor Telepon"
        />
        <ButtonNext onPress={onProcess} />
      </View>
    </View>
  </Modal>
)

export default ModalEditProfile
