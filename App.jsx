import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen, ViewImageScreen, ListingDetailsScreen, MessagesScreen } from './app/screens';
import { AppButton, Card, ListItem } from './app/components';
import { jacket, } from './app/assets';

export default function App() {

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <MessagesScreen />
    // <>
    //   <Card image={jacket} />
    //   <ListItem image={jacket} title='Brandon Hayworth' subTitle='10 Listings' />
    // </>

  );
};
