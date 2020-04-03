

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Header = (props) => {

    const currentScreen = props.route?.name;
    const [isMainScreen, setIsMainScreen] = useState(false);

    // currentScreen === 'Main'?setIsMainScreen(true):setIsMainScreen(false);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <TouchableOpacity style={{}} onPress={props.openMenu}>
                    <Ionicons name="ios-menu" size={34} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 26 }}> Shopping Online </Text>
                <TouchableOpacity style={{}} onPress={props.openMenu}>
                    <Ionicons name="ios-cart" size={34} />
                </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>

                <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        </View>
    )
}

export default Header;

const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width:width
    },
    textContainer: {
        flexDirection: 'row',
        fontSize: 26,
        width:'100%',
        justifyContent:'space-around'
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        height: 30,
        width: width -30,
        paddingHorizontal: 10,
        borderRadius: 12
    }
});