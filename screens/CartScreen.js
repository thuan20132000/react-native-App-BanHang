

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, FlatList } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

import { SwipeListView } from 'react-native-swipe-list-view';

// import ProductData from '../data/productsData';

import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as cartActions from '../store/action/cart';


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
                    <Text style={styles.amount}>${totalAmount}</Text>
                </Text>
                {/* {isLoading ? <ActivityIndicator size='small' color={Colors.primary} /> : */}
                <View style={styles.orderButton}>
                    <Button
                        title="Order Now"
                    // disabled={cartItems.length === 0 ? true: false}
                    />
                </View>
                
            </View>
           
            <SwipeListView
                useFlatList={true}
                data={carts}
                keyExtractor={item => item.productId }
                renderItem={ (rowData, rowMap,rowKey) =>{
                    console.log(rowData)
                    return (
                        <Card
                            
                            items={rowData}
                            key={rowData.item.productId}
                            {...props}
                        />
                    )
                }}
                renderHiddenItem={ (rowData, rowMap) => (
                    <TouchableOpacity style={[styles.rowBack,{justifyContent:'center',alignItems:'flex-end'}]}
                        onPress={()=>_handlerRemoveItem(rowData.item.productId)}
                    >
                            <Text style={[{fontSize:23,padding:6,color:'white'}]}>Delete</Text>
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
    summaryContainer:{
     
        width:'80%',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        margin:10,
        borderRadius:28,
        shadowColor:'black',
        shadowOffset:{width:0,height:0.3},
        shadowOpacity:0.34
    },
    summaryText:{

    },
    amount:{
        fontSize:22,
        color:'red',
        fontWeight:'bold',
    },
    rowBack:{
        backgroundColor:'coral',
        marginVertical:10,
        height:'90%',
        // marginHorizontal:29,
        marginLeft:30,
        marginRight:20
        

    }
});