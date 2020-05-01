import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Header from '../components/Header';


const SearchScreen = (props) =>{

    props.navigation.setOptions({
        headerLeft: null,
        headerTitle: () => {
            return (
                <Header openMenu={() => props.navigation.openDrawer()} {...props} />
            )
        },
        headerStyle: {
            height: 90,
        }
    });
    return (
        <View>
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen;
