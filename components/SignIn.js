
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Image, Alert,ActivityIndicator } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import * as authenticationActions from '../store/action/auth';


const SignIn = (props) => {


    const dispatch = useDispatch();
    const [getEmail, setEmail] = useState();
    const [getPassword, setPassword] = useState();
    const [isError, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const _handlerLogin = async () => {


        setIsLoading(true);
        try {

           await dispatch(authenticationActions.login(getEmail, getPassword));
           props.navigation.navigate("StackMain");

        } catch (error) {
            setError(""+error);
            console.log(""+error);
        }
        setIsLoading(false);

    }

    useEffect(() => {
        
        if(isError){
            Alert.alert('something was occured!!','Okay',[
                {text:isError}
            ])
        }

    },[isError]);

    return (

        <View style={styles.signinContainer}>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your email..."
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => setEmail(email.trim())}
                />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your password"
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password.trim())}

                />
            </View>

            {isLoading ? (
                <ActivityIndicator color="#fff" size='large' style={{ marginTop: 50 }} />) :
                (
                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => _handlerLogin()}
                    >
                        <Text style={styles.submitText}>SIGN IN</Text>
                    </TouchableOpacity>
                )
            }

        </View>
    )

}
export default SignIn;
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
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
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