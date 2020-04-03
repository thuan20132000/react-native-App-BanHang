

import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

const Banner = (props) =>{
    return(
        <View style={[styles.container,props.style]}>
           <View style={styles.wrapper}>
                <Text style={styles.text}>Spring Collection</Text>
            </View>
            <View style={styles.imageWrapper}>
                    
                    <Image style={{width:'90%',height:'90%',resizeMode:'stretch'}}
                        source={{uri:'https://image.freepik.com/free-vector/winter-style-banner-with-watercolor-coat-sweater-jacket_83728-2249.jpg'}}
                    />
            </View>
        </View>
    )
}

export default Banner;

const styles = StyleSheet.create({
    container:{
    //    margin:10,
    //    padding:30,
    },
    text:{
        marginLeft:10,
        fontSize:20,
        color:'#AFAEAF'
    },  
    imageWrapper:{
        justifyContent:'center',
        alignItems:'center',
    }
});