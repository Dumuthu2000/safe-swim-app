import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigations/TabNavigator';

const index = () => {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator/>
      {/* <LoginScreen/> */}
    </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})