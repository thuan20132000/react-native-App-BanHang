

import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground, ActivityIndicator,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'

import CategoriesData from '../data/CategoriesData';

const Slide = (props) => {

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
                        CategoriesData.categories.map((category, index) => {
                            return (
                                <TouchableOpacity style={styles.slide} key={index}
                                    onPress={()=>_handlerProductCategory(category)}
                                >
                                    <ImageBackground  style={[styles.image]}
                                        source={{uri:category.image}}
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
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'center',
    },
    text:{
        fontSize:20,
        color:'tomato'
    }
});