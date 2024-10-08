import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyProfile" component={MyProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})