

import React,{useEffect} from 'react';
import { StyleSheet, View, Text, Button, Dimensions, ScrollView } from 'react-native';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Slide from '../components/Slide';
import TopProducts from '../components/topProducts';
import {useSelector,useDispatch} from 'react-redux';

import * as productActions from '../store/action/products';



const MainScreen = (props) => {


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(productActions.fetchProducts());
    },[dispatch]);

    props.navigation.setOptions({
        headerLeft:null,
        headerTitle: () => {
            return (
                <Header openMenu={()=>props.navigation.openDrawer()} openCart={()=>props.navigation.navigate('ShoppingCart')} {...props} />
            )
        },
        headerStyle:{
            height:90, 
        }
    });
    
    return (

            <ScrollView
               
            >
                <View style={styles.screenContainer}>
                    <Banner style={styles.banner} />
                    <Slide style={styles.slide} {...props} />
                    <TopProducts style={styles.topProducts} {...props}/>
                </View>

            </ScrollView>


    )
}

export default MainScreen;

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        height:'100%'

    },
    banner: {
        backgroundColor: 'red',
        height: height / 3,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5
    },
    slide: {
        backgroundColor: 'red',
        height: height / 3,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginTop: 20

    },
    topProducts: {
        backgroundColor: 'red',
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginTop: 20

    }
});