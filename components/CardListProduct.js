import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';



import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../store/action/cart';


const Card = (props) => {
    const dispatch = useDispatch();
    const { product } = props;
    const products = useSelector(state => state.products.availableProducts);
    const [isLoading, setIsLoading] = useState(true);
    const prod = products.find(p => p.id === product.id);

    const [getQuantity, setQuantity] = useState(1);

    const productCart = useSelector(state => state.cartItems.items[product.productId]);


    const _handlerGoDetail = () => {
        props.navigation.navigate('ProductDetail', { product: prod });
        // console.log(props);
    }
    const _handlerAddToCart = () => {
        dispatch(cartActions.addToCart(product));
    }
    const _handlerOrderNow = () => {
        console.log('order');
    }

    const _onDrawerSnap = () => {
        return (
            <Text>fsdfs</Text>
        )
    }

    const leftContent = <Text>Pull to activate</Text>;

    const rightButtons = [
        <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
        <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
    ];
    return (

        // isLoading ?(<ActivityIndicator size='small' color='red' /> ):(
        <View style={styles.cardContainer}>
            <TouchableOpacity style={{ width: '40%', height: '100%' }} onPress={_handlerGoDetail}>
                <Image style={styles.cardImage}
                    source={{ uri: prod.imgUrl }}
                />
            </TouchableOpacity>

            <View style={styles.cardInfor}>
                <Text style={styles.productName}>{prod.name}</Text>
                <Text style={styles.productPrice}>${prod.price}</Text>
                {/* <Text style={{}}>Stock : {prod.stock}</Text> */}

                <View style={styles.addToCartContainer}>
                    <TouchableOpacity style={styles.addToCartButton} onPress={_handlerAddToCart}>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        // )





    )

}
export default Card;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    cardContainer: {
        height: height / 4,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 19,
        alignItems: 'center',
        marginVertical: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    cardInfor: {
        justifyContent: 'space-evenly',
        width: '60%',
        paddingRight: 20,
        height: '100%',
        paddingLeft: 20,
        alignItems: 'flex-start'

    },
    productName: {
        fontWeight: '400'
    },
    productPrice: {
        color: 'red',
        fontSize: 22
    },
    cardButton: {
        padding: 6,
        backgroundColor: 'coral',
        // borderRadius: 50,
        // width: 160,


    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#fff'
    },
    buttonContainer: {
        // width: '100%',

        alignItems: 'flex-end'

    },
    setQuanity: {
        // borderWidth:1,
        // borderColor:'black',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 40,
        alignItems: 'center'
    },
    addToCartContainer: {
        margin: 28
    },
    addToCartButton: {
        backgroundColor: 'coral',
        padding: 18,
        borderRadius: 32,
    },
    addToCartText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    }

});