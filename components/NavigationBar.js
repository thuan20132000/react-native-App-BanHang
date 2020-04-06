
import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const NavigationBar = (props) =>{

    return(
        <View style={[styles.container,{...props.style}]}>
            <TouchableOpacity style={styles.backButton}
                onPress={props.onPress}
            >
                <Ionicons name="ios-return-left" size={54}  />
            </TouchableOpacity>
            <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryText}>{props.cateName}</Text>
            </View>
        </View>
    )
}

export default NavigationBar;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center'
    },
    backButton:{
    
        height:'100%',
        justifyContent:'center',
    },
    categoryTextContainer:{
        
        width:'80%',
        justifyContent:'center',
        height:'100%'
    },
    categoryText:{
        textAlign:'center',
        fontWeight:'bold',
        textAlignVertical:'center',
    }
}); 