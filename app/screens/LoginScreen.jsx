import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { client } from '../../config/KindeConfig';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import { AuthContext } from '../index';
import swimpoolImage from '../../assets/images/swim-waterfall.png'
import swimManImage from '../../assets/images/swim-man.png'

const LoginScreen = () => {
  const{auth, setAuth} = useContext(AuthContext)

const handleSignUp = async () => {
  const token = await client.register();
  if (token) {
    setAuth(true);
  }
};

const handleSignIn = async () => {
  const token = await client.login();
  if (token) {
    setAuth(true); 
  }
};
  return (
    <View>
      <LinearGradient colors={['#D1D2FF', '#8C8CC2', '#8C8CC2', '#4D4E8B', '#2D2E5B', '#09072F']} style={styles.background}>
        <View>
          <Image source={swimpoolImage} style={styles.backgroundImage}/>
        </View>
        <Text style={styles.welcomeTag}>Welcome To</Text>
        <Text style={styles.heading}>Safe Swim</Text>
        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5, marginHorizontal:'auto', marginTop:10}}>
          <Text style={{fontSize:18, color:Colors.WHITE}}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{fontSize:18, color:'#D1D2FF'}}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:'auto'}}>
          <Image source={swimManImage} style={{width:120, height:150}}/> 
        </View> 
      </LinearGradient>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000
  },
  backgroundImage: {
    width:430,
    height:400
  },
  heading: {
    fontFamily:'qwigley',
    color:Colors.PRIMARY,
    fontSize:96,
    textAlign:'center',
  },
  welcomeTag: {
    color:Colors.WHITE,
    fontFamily:'poppins',
    fontSize:40,
    paddingLeft:10
  },
  signInButton: {
    backgroundColor:Colors.PRIMARY,
    width:350,
    padding:10,
    marginHorizontal:'auto',
    borderRadius:10
  },
  signIn: {
    color:Colors.WHITE,
    fontFamily:'poppins-bold',
    fontSize:20,
    textAlign:'center'
  }
})