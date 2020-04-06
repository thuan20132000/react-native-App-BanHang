
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = (props) => {


    return (

        <View style={styles.signinContainer}>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your name..."
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your email..."
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your password"
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your repassword"
                />
            </View>


        </View>
    )

}
export default SignUp;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    signinContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    textInputContainer: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 18,
        marginVertical: 6

    },
    textInput: {
        paddingHorizontal: 8,
        fontSize: 18,
        height: 40
    },

});