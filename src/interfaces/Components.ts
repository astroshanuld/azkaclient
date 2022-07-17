import { ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native'

export interface ButtonProps {
  title: string
  onPress: () => void
}

export interface CardDiskonItemProps {
  name: string
  image: string
  price: number
  disc: number
  unit: string
}

export interface FooterMainProps {
  active: string
  onPressHome: () => void
  onPressHistory: () => void
  onPressCart: () => void
  onPressAccount: () => void
}

export interface InputFullProps {
  keyboardType?: KeyboardTypeOptions
  secureText?: boolean
  currency?: boolean
  placeholder: string
  setValue: (x: string) => void
  title?: string
  value: string
}

export interface ItemProfileProps {
  isSubtitle?: boolean
  icon: string
  onPress: () => void
  subtitle?: string
  subtitleColor?: string
  title: string
}

export interface LoginFormProps {
  navigation: StackNavigationProp<ParamListBase>
}

export interface TextIntProps {
  color: string
  size: number
  value: string
  options?: StyleProp<TextStyle>
}

export interface TextLoginSignUpProps {
  color: string
  colorLink: string
  isSignup: boolean
  onPress: () => void
}
