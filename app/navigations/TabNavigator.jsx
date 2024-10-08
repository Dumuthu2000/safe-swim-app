import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarLabelStyle: { display: 'none' }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({color, size})=>(
            <Ionicons name="home" size={24} color={color} />
        ),
        // tabBarLabel:({color})=>(
        //     <Text style={{color:color, fontFamily:'poppins', fontSize:13}}>Home</Text>
        // )
      }}/>
      <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon:({color, size})=>(
            <Feather name="phone-call" size={20} color={color}/>
        ),
        // tabBarLabel:({color})=>(
        //     <Text style={{color:color, fontFamily:'poppins', fontSize:13}}>Contact</Text>
        // )
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon:({color, size})=>(
            <Ionicons name="reorder-three" size={35} color={color} />
        ),
        // tabBarLabel:({color})=>(
        //     <Text style={{color:color, fontFamily:'poppins', fontSize:13}}>Settings</Text>
        // )
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})