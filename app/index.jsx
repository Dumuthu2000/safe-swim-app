import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigations/TabNavigator';
import { useFonts } from 'expo-font';

const index = () => {
  const [loaded, error] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-semiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-black': require('../assets/fonts/Poppins-Black.ttf'),
  });
  return (
    <NavigationContainer independent={true}>
      <TabNavigator/>
      {/* <LoginScreen/> */}
    </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})