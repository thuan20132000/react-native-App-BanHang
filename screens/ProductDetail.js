
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Button, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';


import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/action/cart';
import ProductExtention from '../components/ProductExtention/ProductExtention';


const ProductDetail = (props) => {


    const dispatch = useDispatch();
    const productId = props.route.params?.product.id;
    const [isLoading, setIsLoading] = useState(true);
    const [getProductId, setProductId] = useState(productId);
    const [productDetail, setProductDetail] = useState({
        id: '',
        name: '',
        price: '',
        imageUrl: '',
        description: '',
    });
    const [productReview, setProductReview] = useState();


    useEffect(() => {
        const fetchProductDetail = () => {
            fetch('http://young-cove-81839.herokuapp.com/api/products/' + getProductId)
                .then((response) => response.json())
                .then((result) => {
                    setProductDetail(result.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        fetchProductDetail();
    }, []);


    const _handlerAddToCart = () => {
        dispatch(cartActions.addToCart(productDetail));
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

        isLoading ? (

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size='small' color='red' />
            </View>

        ) : (
                <View style={styles.screenContainer}>
                    <ScrollView>
                        <View style={styles.productDetail}>
                            <Image style={styles.productImage}
                                source={{ uri: productDetail.imageUrl }}
                            />

                            <Text style={styles.productName}>{productDetail.name}</Text>
                            <Text style={styles.productPrice}>${productDetail.totalPrice}</Text>
                            <Text style={{}}>Stock :{productDetail.stock}</Text>
                            <Text style={styles.productDescription}>{productDetail.description}</Text>

                            <View style={styles.addToCartContainer}>
                                <TouchableOpacity style={styles.addToCartButton} onPress={_handlerAddToCart}>
                                    <Text style={styles.addToCartText}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ProductExtention productId={getProductId} />
                    </ScrollView>


                </View>)
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
        fontSize: 18,
        marginVertical: 8
    },
    productPrice: {
        color: 'red',
        fontSize: 22
    },
    productDescription: {
        textAlign: 'justify',
        padding: 18

    },
    productSizesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width / 2,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10
    },
    productSize: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#c1c1c1',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4bdab'
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
        width: width / 2,
        alignItems: 'center',
        alignContent: 'center'
    },
    productDetail: {
        alignItems: 'center'
    },
    active: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#fff',
    },
    addToCartContainer: {
        margin: 28
    },
    addToCartButton: {
        backgroundColor: 'coral',
        padding: 18,
        borderRadius: 32,
        width: width * 0.8,
    },
    addToCartText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    }
});