import { View, StyleSheet, FlatList } from 'react-native';

import { ListItem } from '../components';
import { jacket, couch } from '../assets';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: jacket
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: couch
    }
];

function MessagesScreen(props) {
    return (
        <View>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description} image={item.image} />}
            />
        </View>
    )
};

const styles = StyleSheet.create({})

export default MessagesScreen;
