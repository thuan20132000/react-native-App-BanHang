
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Header from '../../components/Header';

import CardListOrder from '../../components/CardListOrder';
import { FlatList } from 'react-native-gesture-handler';

import Categories from '../../data/CategoriesData';

const OrderHistory = (props) =>{

    // console.log(Categories);




    const _goToOrderTrack = (order)=>{
        props.navigation.navigate('OrderTrack',{order});
    }

    const openDrawer= () =>{
        props.navigation.openDrawer();
    }
    props.navigation.setOptions({
        headerStyle:{
            backgroundColor:'tomato'
        },
        headerTitle:()=>{
            return(
                <Header openMenu={openDrawer} {...props}/>
            )
        },
        headerLeft:false

    });

    return(



        <View style={styles.containerScreen}>
                <Text style={styles.Title}>My Orders</Text>
                
            <FlatList
                data={Categories.categories}
                renderItem={({item})=>{
                    return (
                        <CardListOrder 
                            id={item.id}
                            name={item.name}
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