

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const MenuDrawerContent = (props) => {

    const userName = "Thuan Truong";
    const [isLoggin, setIsLoggin] = useState(true);



    const _handlerInfo = () => {
        props.navigation.navigate('Authen')
    }
    const _handlerOrder = () => {
        props.navigation.navigate('OrderHistory')

    }
    const _handlerSignout = () => {
        setIsLoggin(false);

    }
    const _handlerSignin = () =>{
        // console.log(props.navigation);
        props.navigation.navigate('Authen');
    }

   
    return (
        <View style={styles.container}>
            <Image style={styles.userImage}
                source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png' }}
            />

            {isLoggin ? (
                <View style={styles.userFunctionsContainer}>
                    <View style={styles.userAuthContainer}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>{userName}</Text>
                    </View>
                    <TouchableOpacity style={styles.userFunction} onPress={_handlerOrder}>
                        <Text style={styles.userFunctionText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userFunction} onPress={_handlerInfo}>
                        <Text style={styles.userFunctionText}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userFunction} onPress={_handlerSignout}>
                        <Text style={styles.userFunctionText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                    <TouchableOpacity style={styles.userAuthContainer} onPress={_handlerSignin}>
                        <Text style={styles.userAuthText}>SIGN IN</Text>
                    </TouchableOpacity>
                )

            }



        </View>
    )
}
export default MenuDrawerContent;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginTop: 100
    },
    userImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    userAuthContainer: {
        backgroundColor: 'coral',
        width: '50%',
        padding: 10,
        borderRadius: 12,
        marginVertical: 10,
        
    },
    userAuthText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white'
    },
    userFunctionsContainer: {
        width: '90%',
        alignItems:'center'
    },
    userFunction: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'coral',
        borderRadius: 12,
        width:'50%'

    },
    userFunctionText: {
        textAlign: 'center',
        color: 'white',
    },
});
