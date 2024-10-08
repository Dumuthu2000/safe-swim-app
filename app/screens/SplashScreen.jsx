import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import * as Progress from 'react-native-progress';

const SplashScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const interval = 50; // Update every 50ms for smoother animation
        let timer;
        let currentProgress = 0;

        const incrementProgress = () => {
            currentProgress += interval / duration;
            if (currentProgress >= 1) {
                setProgress(1);
                clearInterval(timer);
            } else {
                setProgress(currentProgress);
            }
        };

        timer = setInterval(incrementProgress, interval);

        return () => clearInterval(timer);
    }, []);
  return (
    <View>
        <LinearGradient colors={['#D1D2FF', '#8C8CC2', '#4D4E8B', '#2D2E5B', '#09072F']} style={styles.background}>
            <Text style={{fontFamily:'qwigley', fontSize:100, textAlign:'center', color:Colors.PRIMARY, marginTop:116}}>Safe Swim</Text>
            <View style={styles.container}>
                <Image source={'../../assets/images/swim-man.png'} style={{width:356, height:311}}/>
                <Text style={{fontFamily:'blackHanSans', fontSize:25, color:Colors.WHITE}}>Swim Safe. Stay Safe...</Text>
            </View>
            <Progress.Bar color={Colors.GRAY} progress={progress} width={350} height={12} style={styles.progressBar} />
            <Image source={'../../assets/images/splash-background.png'} style={styles.background}/>
        </LinearGradient>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100vh'
    },
    progressBar: {
        marginBottom:40,
        marginHorizontal:'auto'
    }
});