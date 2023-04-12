import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { background, logo } from '../assets';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logo} />
                <Text>Sell What You Don't Need.</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;