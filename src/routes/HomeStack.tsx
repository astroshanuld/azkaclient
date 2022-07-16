import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'screens/HomeScreen'
import LoginScreen from 'screens/LoginScreen'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
)

export default HomeStack
