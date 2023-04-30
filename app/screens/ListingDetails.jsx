import { View, StyleSheet } from 'react-native';

const ListingDetailsScreen = ({ image }) => {
    return (
        <View>
            <Image source={image} />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {

    }
});

export default ListingDetailsScreen;
