

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const ChangeInfoScreen = (props) =>{


    props.navigation.setOptions({
        headerLeft:null,
        headerTitle: () => {
            return (
                <Header openMenu={()=>props.navigation.openDrawer()} openCart={()=>props.navigation.navigate('ShoppingCart')} {...props} />
            )
        },
        headerStyle:{
            height:90, 
        }
    });
    return(
        <View>
            <Text>Main Sceeen</Text>
        </View>
    )
}

export default ChangeInfoScreen;

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});