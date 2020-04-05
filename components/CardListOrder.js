import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



import { useSelector, useDispatch } from 'react-redux';



const CardListOrder = (props) => {

    const leftContent = <Text>Pull to activate</Text>;
        
    const rightButtons = [
        <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
        <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
    ];

    return (


            <View style={styles.card}>
                <View style={styles.cardInfor}>
                    <Text style={styles.orderCode}>Order: #1321</Text>
                    <Text style={styles.orderTime}>12-04-2020 3:00 PM</Text>
                    <Text style={styles.orderDelivery}>Estimated Delivery on 16/4/2020 </Text>

    
                </View>
                <TouchableOpacity style={{ width: '40%', height: '100%' }}
                    onPress={()=>props.onPress()}
                >
                    <Image style={styles.cardImage}
                        source={{ uri: props.image }}
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
        width:width - 80,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 29,
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
        width: '70%',
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