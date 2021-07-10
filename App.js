import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import MyStack from './App/navigation/navigation'
const App = () => {
  return (
   <NavigationContainer>
     <MyStack/>
   </NavigationContainer>
  )
}

export default App
