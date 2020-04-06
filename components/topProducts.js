

import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import {useSelector,useDispatch} from 'react-redux';
import * as  productActions from '../store/action/products';

const topProduct = (props) => {
    const dispatch = useDispatch();
    const PRODUCTS = useSelector(state => state.products.availableProducts);

    const _handlerProduct = (product) =>{
            props.navigation.navigate('ProductDetail',{product});
    }

    useEffect(()=>{
        dispatch(productActions.fetchProducts());
    },[dispatch]);

    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Top Product</Text>
            </View>
            <View style={styles.body}>
                {
                    PRODUCTS.map((product, index) => {
                        return (
                            <TouchableOpacity style={styles.productContainer} key={index}
                                onPress={()=>{
                                    _handlerProduct(product);
                                }}
                            >
                                <Image style={styles.productImage}
                                    source={{ uri:product.imgUrl }}
                                />
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>${product.price}</Text>
                            </TouchableOpacity>
                        )

                    })
                }

            </View>

        </View>
    )
}
export default topProduct;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,

    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: '#AFAEAF'
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    productContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        width: width / 2 - 59,
        height: height / 4 +60,
        marginVertical: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        backgroundColor: '#fff'
    },
    productImage: {
        width: '90%',
        height: '80%',
    },
    productTitle: {

    },
    productPrice: {
        color: 'coral',
        fontFamily: 'Avenir'
    }
});