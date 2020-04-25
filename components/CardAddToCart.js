import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import {
    Ionicons,
    FontAwesome
} from '@expo/vector-icons/';
import Swipeable from 'react-native-swipeable-row';



import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../store/action/cart';


const Card = (props) => {

    const dispatch = useDispatch();
    const { item } = props.items;

    const products = useSelector(state => state.products.availableProducts);

    const prod = products.find(p => p.id == item.productId);

    const [getQuantity, setQuantity] = useState(1);

    const productCart = useSelector(state => state.cartItems.items[item.productId]);


    console.log(prod);

    const _handlerAddQuanity = async () => {
        await setQuantity(productCart.productQuantity);
        await setQuantity(getQuantity + 1);
        await dispatch(cartActions.updateCart_addAmount(prod.id));


    }

    const _handlerSubQuantity = async () => {
        if (getQuantity == 1) {
            return;
        } else {
            await setQuantity(productCart.productQuantity);
            await setQuantity(getQuantity - 1);
            await dispatch(cartActions.updateCart_subAmount(prod.id));
        }
    }


    const _handlerGoDetail = () => {
        props.navigation.navigate('ProductDetail');
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


        <View style={styles.cardContainer}>
            <TouchableOpacity style={{ width: '40%', height: '100%' }} onPress={_handlerGoDetail}>
                <Image style={styles.cardImage}
                    source={{ uri: prod.imgUrl }}
                />
            </TouchableOpacity>

            <View style={styles.cardInfor}>
                <Text style={styles.productName}>{prod.name}</Text>
                <Text style={styles.productPrice}>${prod.price} x {productCart.quantity} = ${Number.parseFloat(productCart.sum).toFixed(2)}</Text>

                {
                    props.route?.name === "ShoppingCart" && (
                        <View style={styles.setQuanity}>
                            <TouchableOpacity style={[styles.quanityButton]} onPress={_handlerAddQuanity} >
                                <FontAwesome name="plus" color="coral" size={30} />
                            </TouchableOpacity>
                            <Text>{productCart.quantity}</Text>
                            <TouchableOpacity style={[styles.quanityButton]} onPress={_handlerSubQuantity}>
                                <FontAwesome name="minus" color="coral" size={30} />
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>
        </View>




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
    }

});