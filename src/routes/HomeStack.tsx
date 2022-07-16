import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'screens/HomeScreen'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
)

export default HomeStack
