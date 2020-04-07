
import React, { useEffect, useState } from 'react';
import { StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import Header from '../../components/Header';

import CardListOrder from '../../components/CardListOrder';
import { FlatList } from 'react-native-gesture-handler';

import Categories from '../../data/CategoriesData';
import * as orderAction from '../../store/action/order';

import {useDispatch,useSelector} from 'react-redux';

const OrderHistory = (props) =>{

    // console.log(Categories);
    const dispatch = useDispatch();
    const [isLoading,setIsLoading]  = useState(true);

    const orders = useSelector(state => state.orders);
    console.log("ORDER HISTORY============");
    console.log(orders);


    useEffect(()=>{
        setIsLoading(true);
        dispatch(orderAction.fetchOrders()).then(()=>{
            setIsLoading(false);

        })
    },[]);


    const _goToOrderTrack = (order)=>{
        props.navigation.navigate('OrderTrack',{order});
    }

  
    props.navigation.setOptions({
        headerStyle:{
            backgroundColor:'tomato'
        },
        headerTitle:()=>{
            return(
                <Header openMenu={()=>props.navigation.openDrawer()} {...props}/>
            )
        },
        headerLeft:false

    });

    if(isLoading){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator
                    size='large' color="coral"
                />
            </View>
        )
    }

    return(



        <View style={styles.containerScreen}>
                <Text style={styles.Title}>My Orders</Text>
                
            <FlatList
                inverted
                data={orders.orders}
                renderItem={({item})=>{
                    return (
                        <CardListOrder 
                            id={item.id}
                            date={item.date}
                            image={item.image}

                            onPress={()=>_goToOrderTrack(item)}

                        
                        />
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default OrderHistory;

const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20,
        backgroundColor:'#fff'
    },
    Title:{
        fontSize:34,
        fontWeight:'bold'
    }
});