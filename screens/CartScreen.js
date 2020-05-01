

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, FlatList, ActivityIndicator, Alert } from 'react-native';

import CardAddToCart from '../components/CardAddToCart';
import Header from '../components/Header';

import { SwipeListView } from 'react-native-swipe-list-view';

// import ProductData from '../data/productsData';

import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as cartActions from '../store/action/cart';
import * as orderActions from '../store/action/order';


const CartScreen = (props) => {



    const dispatch = useDispatch();
    const totalAmount = useSelector(state => state.cartItems.totalAmount);


    const carts = useSelector(state => {

        const cartToArray = [];
        for (const key in state.cartItems.items) {
            cartToArray.push({
                productId: key,
                productTitle: state.cartItems.items[key].productTitle,
                productPrice: state.cartItems.items[key].productPrice,
                productQuantity: state.cartItems.items[key].quantity,
            });
        }
        return cartToArray;
    });


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false);
    }, [setIsError]);

    const _handlerOrder = async () => {
        setIsLoading(true);
        try {
            
            await dispatch(orderActions.addOrder(carts,totalAmount));
            await dispatch(cartActions.removeAllCart());
        } catch (error) {
            console.log("" + error);
            await Alert.alert("You need to Sign in!!");
            props.navigation.navigate('Authen');

        }
        setIsLoading(false);


    }


    const _handlerRemoveItem = async (productId) => {
        await dispatch(cartActions.removeFromCart(productId))
    }


    props.navigation.setOptions({
        headerLeft: null,
        headerTitle: () => {
            return (
                <Header openMenu={() => props.navigation.openDrawer()} {...props} />
            )
        },
        headerStyle: {
            height: 90,
        }
    });

    return (
        <View>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>Total :
                    <Text style={styles.amount}>${Number.parseFloat(totalAmount).toFixed(2)}</Text>
                </Text>
                {isLoading ? <ActivityIndicator size='small' color="coral" /> :
                    <View style={styles.orderButton}>
                        <Button
                            title="Order Now"
                            onPress={_handlerOrder}
                            disabled={carts.length === 0 ? true : false}
                        />
                    </View>
                }
            </View>

            <SwipeListView style={{ marginBottom: 60 }}
                useFlatList={true}
                data={carts}
                keyExtractor={item => item.productId}
                renderItem={(rowData, rowMap, rowKey) => {
                    return (
                        <CardAddToCart

                            items={rowData}
                            key={rowData.item.productId}
                            {...props}
                        />
                    )
                }}
                renderHiddenItem={(rowData, rowMap) => (
                    <TouchableOpacity style={[styles.rowBack, { justifyContent: 'center', alignItems: 'flex-end' }]}
                        onPress={() => _handlerRemoveItem(rowData.item.productId)}
                    >
                        <Text style={[{ fontSize: 23, padding: 6, color: 'white' }]}>Delete</Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-75}
                leftOpenValue={0}
                disableRightSwipe

            // onRowOpen={(rowKey, rowMap) => {

            //     if(rowMap[rowKey] === null){
            //         return;
            //     }else{
            //         setTimeout(() => {
            //             rowMap[rowKey].closeRow()
            //         }, 2000)
            //     }




            // }}            
            />

        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    summaryContainer: {

        width: '80%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 28,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.34
    },
    summaryText: {

    },
    amount: {
        fontSize: 22,
        color: 'red',
        fontWeight: 'bold',
    },
    rowBack: {
        backgroundColor: 'coral',
        marginVertical: 10,
        height: '90%',
        // marginHorizontal:29,
        marginLeft: 30,
        marginRight: 20


    }
});