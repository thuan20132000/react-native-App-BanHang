

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView,ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardListProduct from '../components/CardListProduct';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';

import { useSelector } from 'react-redux';

const ListProduct = (props) => {
    const category = props.route.params?.category;
    

    const [productList,setProductList] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const _handlerOnPress = (product) => {
        props.navigation.navigate('ProductDetail', { product: product });
    }

    const _handlerBack = () => {
        props.navigation.goBack();
    }

    const fetchProductByCategory = async ()=>{

        setIsLoading(true);
        try {
            const res = await fetch(`http://boiling-depths-30001.herokuapp.com/api/products?category=${category.id}`);
            const products = await res.json();
            setProductList(products.data);
            console.log(products.data);
        } catch (error) {
            
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchProductByCategory();
    },[]);


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
        isLoading ? (

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size='small' color='red' />
            </View>

        ) : (
        <View style={styles.screenContainer}>
            <NavigationBar style={styles.navigationBar} cateName={category.name} onPress={_handlerBack} />
            <ScrollView>
                {
                    productList.map((product, index) => {
                        return (
                            <CardListProduct product={product} key={index} onPress={() => _handlerOnPress(product)} {...props} />
                        )
                    })
                }
            </ScrollView>

        </View>
        )
    )
}

export default ListProduct;

const styles = StyleSheet.create({
    screenContainer: {

    },
    navigationBar: {
        // borderWidth:1,
        // borderColor:'black',
        paddingHorizontal: 20,
        height: 40,
        // justifyContent:'center'
    }

});
