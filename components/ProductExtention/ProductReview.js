


import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import PropTypes from 'prop-types';
import {
    Ionicons,
    FontAwesome
} from '@expo/vector-icons/';
import { TextInput } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';




ProductReview.propTypes = {
    productId: PropTypes.number
};

ProductReview.defaultProps = {
    productId: 1
}

function ProductReview(props) {

    const { productId } = props;
    const [productReview, setProductReview] = useState('');
    const [loadedReview, setLoadedReview] = useState(false);

    useEffect(() => {
        const fetchProductReview = () => {
            fetch(`http://young-cove-81839.herokuapp.com/api/products/${productId}/reviews`)
                .then((response) => response.json())
                .then((result) => {
                    setProductReview(result);
                    setLoadedReview(true);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
        }
        setLoadedReview(false);
        fetchProductReview();

    }, [productId]);

    const handleReviewStar = (starNum) => {

        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= starNum; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                >
                    <FontAwesome name="star" size={30} color="#ffe500" />
                </TouchableOpacity>
            );
        }

        return React_Native_Rating_Bar;
    }
    const defaultRating = 5;
    const [getRating, setRating] = useState(3);

    const [review, setReview] = useState('');
    const _handleSendReview = () => {

        console.log(review);
        setReview('');

    }



    return (
        <View style={{ paddingTop: 20 }}>
            <View style={{ paddingHorizontal: 44 }}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={getRating}
                    selectedStar={(rate) => setRating(rate)}
                    fullStarColor={'#eded2d'}
                    emptyStarColor={'#e5cd16'}
                />
            </View>

            <View style={styles.reviewForm}>
                <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                    <TextInput
                        style={{
                            width: '80%',
                            backgroundColor: '#dde8c9',
                            padding: 16,
                            borderTopLeftRadius: 18,
                            borderBottomLeftRadius: 18
                        }}
                        placeholder="Enter your review..."
                        placeholderTextColor="#60605e"
                        multiline={true}
                        value={review}
                        onChangeText={(text) => setReview(text)}
                    />
                    <TouchableOpacity style={styles.reviewButton}
                        onPress={_handleSendReview}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {
                loadedReview ?
                    productReview.data.map((review, index) => {
                        return (
                            <View style={styles.reviewWrapper} key={index}>
                                <Text style={styles.reviewCustomer}>{review.customer}</Text>
                                <Text style={styles.reviewBody}>{review.body}</Text>
                                <View style={styles.reviewStar}>{review.star ? handleReviewStar(review.star) : <Text>No Rating</Text>}</View>

                            </View>
                        )
                    }) :
                    (
                        <ActivityIndicator />
                    )

            }
        </View >
    );
}

export default ProductReview;
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    reviewWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        padding: 8,
    },
    reviewCustomer: {
        color: 'blue'
    },
    reviewBody: {
        paddingVertical: 4,
        fontSize: 16
    },
    reviewStar: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    reviewForm: {
        height: 60,
        marginHorizontal: 12

    },
    reviewButton: {
        backgroundColor: 'coral',
        width: '20%',
        borderBottomRightRadius: 18,
        borderTopRightRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    }
});