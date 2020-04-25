
import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Button, ActivityIndicator,Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import * as authAction from '../store/action/auth';
import { useDispatch } from 'react-redux';


const SignUp = (props) => {

    const dispatch = useDispatch();

    const [getSignup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isError, setIsError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [validEmail,setValidEmail] = useState(false);
    const [validPassword,setValidPassword] = useState(false);
    const [validName,setValidName] = useState(false);
    const [isValidate,setIsValidate] = useState(false);
 
    const _handlerSignup = async () => {

        if(!isValidate){
            Alert.alert("Please enter enough information!!",'Okay')
            return;
        }
    
        setIsLoading(true);
        try {
            await dispatch(authAction.signup(getSignup.name,getSignup.email,getSignup.password));
            await props.navigation.navigate('StackMain');
        } catch (err) {
            setIsError(true);
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        if(isError){
            Alert.alert('something was occured!!','Okay',[
                {text:isError}
            ])
        }
        if(getSignup.name && getSignup.email && getSignup.password){
            setIsValidate(true);
        }
       
    },[isError,getSignup]);

    const _validateEmail = (evt) =>{
        let text = evt.nativeEvent.text;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          setValidEmail("Email is invalid!!");
        }else{
          setValidEmail(true);
        }
    }

    const _validatePassword = (evt) => {
        let text = evt.nativeEvent.text;
        if (text.length <=4) {
          setValidPassword("Password is invalid!!");
        }else{
          setValidPassword(true);
        }
    }

    const _validateName = (evt) =>{
        let text = evt.nativeEvent.text;
        if(text.length<=0 || text.length>=22){
            setValidName("Name is invalid");
        }else{
            setValidName(true);
        }
    }

    return (

        <View style={styles.signinContainer}>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your name..."
                    onChangeText={text => setSignup({ ...getSignup, name: text })}
                    onEndEditing={(evt)=>_validateName(evt)}
                />
            </View>
            <Text style={{color:'red'}}>{validName}</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your email..."
                    onChangeText={text => setSignup({ ...getSignup, email: text })}
                    onEndEditing={(evt)=>_validateEmail(evt)}
                />
            </View>
            <Text style={{color:'red'}}>{validEmail}</Text>
            
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={text => setSignup({ ...getSignup, password: text })}
                    onEndEditing={(evt)=>_validatePassword(evt)}
                />
            </View>
            <Text style={{color:'red'}}>{validPassword}</Text>

            {/* <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter your repassword"
                    secureTextEntry={true}

                />
            </View> */}

        
            {isLoading ? (
                <ActivityIndicator color="#fff"  size='large' style={{marginTop:50}} />) :
                (
                    <TouchableOpacity style={styles.submitButton}
                        onPress={()=>_handlerSignup()}
                    >
                        <Text style={styles.submitText}>SIGN UP</Text>
                    </TouchableOpacity>
                )

            }



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