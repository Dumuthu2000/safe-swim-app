import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigations/TabNavigator';
import { useFonts } from 'expo-font';
import SplashScreen from './screens/SplashScreen';
import { client } from '../config/KindeConfig';

export const AuthContext = createContext();

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
  const[auth, setAuth] = useState(false);

  const checkAuthenticate = async () => {
    if (await client.isAuthenticated()) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  useEffect(()=>{
    if(isLoading){
      setTimeout(()=>{
        setIsLoading(false);
      }, 4000)
    }
  }, [isLoading]);

  useEffect(()=>{
    checkAuthenticate();
  },[auth])

  if(isLoading){
    return(
      <SplashScreen/>
    )
  }
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <NavigationContainer independent={true}>
      {auth?
        <TabNavigator/> : <LoginScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default index

const styles = StyleSheet.create({})