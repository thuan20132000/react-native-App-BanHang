

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';



const AuthenticationScreen = (props) => {

    const [isSignin,setIsSignin] = useState(true);


    return (

        // <View style={styles.screenContainer}>
        <LinearGradient
            colors={['#dab03b', '#ec7709', '#ff5100']}
            style={{ flex: 1 }}
        >
            <View style={styles.authenContent}>
                {
                    isSignin?(
                        <SignIn/>
                    ):(
                        <SignUp/>
                    )
                }
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitText}>{isSignin?'SIGN IN':'SIGN UP'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.authenSelect}>
                <TouchableOpacity style={[styles.authButton, isSignin?styles.active:styles.inactive, { borderTopLeftRadius: 22, borderBottomLeftRadius: 22 }]}
                    onPress={()=>{
                        setIsSignin(true);
                    }}
                >
                    <Text style={[styles.buttonText]}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.authButton,!isSignin?styles.active:styles.inactive, { borderBottomRightRadius: 22, borderTopRightRadius: 22 }]}
                    onPress={()=>{
                        setIsSignin(false)
                    }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>

        // </View>

    )
}

export default AuthenticationScreen;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral',
    },
    authenContent: {
        height: '80%',
        alignItems:'center'
    },
    authenSelect: {
        flexDirection: 'row',
        justifyContent:'center'

    },
    authButton: {
        paddingHorizontal: 14,
        paddingVertical: 14,
        justifyContent: 'space-between',
        marginHorizontal: 2,
        backgroundColor: '#fff',
        width: 160,
    },

    buttonText: {
        textAlign: 'center',
        color: 'coral',
        fontWeight: 'bold',
        fontSize: 18
    },
    active: {
        backgroundColor: '#c1c1c1'
    },
    inactive: {
        backgroundColor: '#fff'
    },
    submitButton: {
        borderRadius: 18,
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 12,
        width: width * 0.8,

    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});