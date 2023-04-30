import { StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors';
import { AppText } from '.';

function Card({ image, title, price }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.titlesContainer}>
                <AppText style={styles.title}>Red Jacket for sale!</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    titlesContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        fontWeight: '500',
        fontSize: 24
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default Card;