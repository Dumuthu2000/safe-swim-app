import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const ContactScreen = () => {
  return (
    <View>
      <LinearGradient colors={['#D1D2FF', '#8C8CC2', '#4D4E8B', '#2D2E5B', '#09072F']} style={styles.background}>
          <Text>Contact Screen</Text>
      </LinearGradient>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000
    }
});