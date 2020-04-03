
import React from 'react';
import {StyleSheet,View,Text, Dimensions,TouchableOpacity,TextInput} from 'react-native';

const SignIn = (props) =>{


    return(

        <View style={styles.signinContainer}>

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
                
            
        </View>
    )

}
export default SignIn;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    signinContainer:{
        width:width,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60
    },
    textInputContainer:{
        backgroundColor:'#fff',
        width:'80%',
        borderRadius:18,
        marginVertical:6
       
    },
    textInput:{
        paddingHorizontal:8,
        fontSize:18,
        height:40
    },
   
});