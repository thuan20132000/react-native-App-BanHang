

import React, { useEffect } from 'react';
import {StyleSheet,View,Text,Image,Dimensions,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';

import {useSelector} from 'react-redux';

const ListProduct = (props) =>{
    const category = props.route.params?.category;

    const PRODUCTS = useSelector(state => state.products.availableProducts);
    const productList = PRODUCTS.filter((product)=>product.cate_id === category.id);
   
    
    
   
    
    const _handlerOnPress = (product) =>{
        props.navigation.navigate('ProductDetail',{product:product});
    }

    const _handlerBack = () =>{
            props.navigation.goBack();
    }
    
    props.navigation.setOptions({
        headerLeft:null,
        headerTitle: () => {
            return (
                <Header openMenu={()=>props.navigation.openDrawer()} {...props} />
            )
        },
        headerStyle:{
            height:90, 
        }
    });
    return(
        <View style={styles.screenContainer}>
            <NavigationBar style={styles.navigationBar} cateName={category.name} onPress={_handlerBack} />
            <ScrollView>
                {
                    PRODUCTS.map((product,index)=>{
                        return(
                            <Card product={product} key={index} onPress={()=>_handlerOnPress(product)}  />
                        )
                    })
                }
            </ScrollView>
               
        </View>
    )
}

export default ListProduct;

const styles = StyleSheet.create({
    screenContainer:{

    },
    navigationBar:{
        // borderWidth:1,
        // borderColor:'black',
        paddingHorizontal:20,
        height:40,
        // justifyContent:'center'
    }

});
