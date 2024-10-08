import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigations/TabNavigator';
import { useFonts } from 'expo-font';
import SplashScreen from './screens/SplashScreen';


const index = () => {
  const [loaded, error] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-semiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-black': require('../assets/fonts/Poppins-Black.ttf'),
    'qwigley': require('../assets/fonts/Qwigley-Regular.ttf'),
    'blackHanSans': require('../assets/fonts/BlackHanSans-Regular.ttf'),
  });

  const[isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    if(isLoading){
      setTimeout(()=>{
        setIsLoading(false);
      }, 2400)
    }
  }, [isLoading]);

  if(isLoading){
    return(
      <SplashScreen/>
    )
  }
  return (
    <NavigationContainer independent={true}>
      <TabNavigator/>
      {/* <LoginScreen/> */}
      {/* <SplashScreen/> */}
    </NavigationContainer>
  )
}

export default index

const styles = StyleSheet.create({})