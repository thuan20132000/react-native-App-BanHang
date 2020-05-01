

import React,{useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground, ActivityIndicator,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import {useSelector,useDispatch} from 'react-redux';

import CategoriesData from '../data/CategoriesData';

import * as CategoryActions from '../store/action/category';

const Slide = (props) => {

    const dispatch = useDispatch();
    const Categories = useSelector(state => state.categories.availableCategory);

    
    useEffect(()=>{
        dispatch(CategoryActions.fetchCategory());
    },[dispatch]);


    const _handlerProductCategory = (category) =>{
         props.navigation.navigate('ListProduct',{category});
    }
    return (
        <View style={[styles.wrapper, props.style]}>
            <View style={{  justifyContent: 'center' }}>
                <Text style={{
                    marginLeft: 10,
                    fontSize: 20,
                    color: '#AFAEAF'
                }}>List of Category</Text>
            </View>
            <View style={styles.slideContainer}>
                <Swiper  showsButtons={false} autoplay={true}  height='100%'>
                    {
                        Categories.map((category, index) => {
                            return (
                                <TouchableOpacity style={styles.slide} key={index}
                                    onPress={()=>_handlerProductCategory(category)}
                                >
                                    
                                    <ImageBackground  style={[styles.image]}
                                        source={{uri:category.imageUrl}}
                                    >
                                        <Text style={styles.text}>{category.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            );
                        })
                    }

                </Swiper>
            </View>

        </View>


    )
}

export default Slide;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#fff',
    },
    slideContainer:{
        flex:1
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image:{
        width:'90%',
        height:'90%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    text:{
        fontSize:20,
        color:'tomato'
    }
});


