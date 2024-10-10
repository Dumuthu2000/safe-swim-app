import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import * as Progress from 'react-native-progress';
import backgroundImage from '../../assets/images/splash-background.png'
import swimManImage from '../../assets/images/swim-man.png'

const SplashScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000; // 2 seconds
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
            <Text style={styles.heading}>Safe Swim</Text>
            <View style={styles.container}>
                <Image source={swimManImage} style={styles.swimImage}/>
                <Text style={styles.heading2}>Swim Safe. Stay Safe...</Text>
                <Progress.Bar color={Colors.WHITE} progress={progress} width={300} height={10} style={styles.progressBar}/>
            </View>
            {/* <Progress.Bar color={Colors.GRAY} progress={progress} width={200} height={10}/> */}
            <Image source={backgroundImage} style={styles.background}/>
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
        height: 1000
    },
    progressBar: {
        marginTop:35,
        marginHorizontal:'auto'
    },
    heading: {
        fontFamily:'qwigley',
        color:Colors.PRIMARY,
        fontSize:110,
        textAlign:'center',
        marginTop:116
    },
    swimImage: {
        width:356,
        height:311
    },
    heading2: {
        fontFamily:'blackHanSans',
        fontSize:25,
        color:Colors.WHITE
    }
});