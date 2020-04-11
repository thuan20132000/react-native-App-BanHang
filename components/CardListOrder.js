import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



import { useSelector, useDispatch } from 'react-redux';



const CardListOrder = (props) => {

    var estimateDelivery = new Date();
    estimateDelivery.setDate(new Date().getDate() +2);

  
    return (


            <View style={styles.card}>
                <View style={styles.cardInfor}>
                    <Text style={styles.orderCode}>code: {props.id}</Text>
                    <Text style={styles.orderTime}>Ordered At: {props.date}</Text>
                    <Text style={styles.orderDelivery}>Estimated Delivery on {estimateDelivery.toDateString()} </Text>
                </View>
                <TouchableOpacity style={{ width: '20%', height: '100%' }}
                    onPress={()=>props.onPress()}
                >
                    <Image style={styles.cardImage}
                        source={{ uri: 'https://img.favpng.com/12/17/18/online-shopping-shopping-cart-logo-icon-png-favpng-DSd2eKs8wTkAMDxK9f9syDTQp.jpg' }}
                    />
                </TouchableOpacity>

            </View> 




    )

}
export default CardListOrder;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        height: height / 8,
        width:width - 40,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 10,
        elevation: 5,
        padding:12,
        overflow:'hidden',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        borderWidth:1,
        borderRadius:19,
        borderColor:'coral'

    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    cardInfor: {
        justifyContent: 'space-evenly',
        width: '80%',
        paddingRight: 20,
        height: '100%',
        alignItems: 'flex-start',
    
    },
    orderCode:{
        fontWeight:'bold'
    },
    orderTime:{
        color:'#b2aeae'
    },
    orderDelivery:{
        color:'#3bba4c'
    }
    

});