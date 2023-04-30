import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { background, logo } from '../assets';
import AppButton from '../components/Button';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.tagline}>Sell What You Don't Need.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='login' onPress={() => console.log('login tapped')} />
                <AppButton title='register' onPress={() => console.log('tapped')} color='secondary' />
            </View>
        </ImageBackground>
    )
};

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
        marginBottom: 20
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
});

export default WelcomeScreen;