
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';

import {useSelector,useDispatch} from 'react-redux';
import * as cartActions from '../store/action/cart';


const ProductDetail = (props) => {


    const productId = props.route.params?.product.id;

    const products = useSelector(state => state.products.availableProducts);
    const product = products.find(prod => prod.id === productId);

    console.log(product);
    const dispatch = useDispatch();
    const _handlerAddToCart = () =>{
            dispatch(cartActions.addToCart(product));

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
    return (
        <View style={styles.screenContainer}>
            <ScrollView>
                <View style={styles.productDetail}>
                    <Image style={styles.productImage}
                        source={{ uri: product.imgUrl }}
                    />
                    
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    {/* <View style={styles.productColorsContainer}>
                        <TouchableOpacity style={[styles.productColor,styles.active, { backgroundColor: 'red' }]} />
                        <TouchableOpacity style={[styles.productColor, { backgroundColor: 'yellow' }]} />
                        <TouchableOpacity style={[styles.productColor, { backgroundColor: 'blue' }]} />
                        <TouchableOpacity style={[styles.productColor, { backgroundColor: 'orange' }]} />

                    </View>
                    <View style={styles.productSizesContainer}>
                        <TouchableOpacity style={[styles.productSize,styles.active]}>
                            <Text>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.productSize]}>
                            <Text>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.productSize]}>
                            <Text>L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.productSize]}>
                            <Text>XL</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.addToCartContainer}>
                        <TouchableOpacity style={styles.addToCartButton} onPress={_handlerAddToCart}>
                            <Text style={styles.addToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}

export default ProductDetail;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    productImage: {
        width: width,
        height: height / 2 - 180,
        resizeMode: 'contain'
    },
    productName: {
        textAlign: 'center',
        fontSize:18,
        marginVertical:8
    },
    productPrice: {
        color:'red',
        fontSize:22
    },
    productDescription: {
        textAlign:'justify',
        padding:18

    },
    productSizesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:width/2,
        alignItems:'center',
        alignContent:'center',
        marginTop:10
    },
    productSize: {
        width:50,
        height:50,
        borderRadius:25,
        borderColor:'#c1c1c1',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e4bdab'
    },
    productAddToCart: {

    },
    productColor: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    productColorsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:width/2,
        alignItems:'center',
        alignContent:'center'
    },
    productDetail:{
        alignItems:'center'
    },
    active:{
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#fff',
    },
    addToCartContainer:{
       margin:28
    },
    addToCartButton:{
        backgroundColor:'coral',
        padding:18,
        borderRadius:32,
        width:width * 0.8,
    },
    addToCartText:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
        textAlign:'center'
    }
});