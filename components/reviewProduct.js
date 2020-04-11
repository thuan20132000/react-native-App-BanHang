


import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TabView, SceneMap } from 'react-native-tab-view';


reviewProduct.propTypes = {

};

reviewProduct.defaultProps = {

}

function reviewProduct(props) {

    const { productId } = props;
    const [productReview, setProductReview] = useState('');
    const [loadedReview, setLoadedReview] = useState(false);
    useEffect(() => {
        const fetchProductReview = () => {
            fetch(`http://young-cove-81839.herokuapp.com/api/products/${productId}/reviews`)
                .then((response) => response.json())
                .then((result) => {
                    // console.log(result);
                    setProductReview(result);
                    setLoadedReview(true);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
        }
        fetchProductReview();

    }, []);


    const FirstRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
            <Text>Ben pha</Text>
        </View>
    );

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
            <Text>Ben map</Text>
        </View>
    );

    const ThirdRoute = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
            <Text>Ben map</Text>
        </View>
    )

    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Ben' },

    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <View>
            <Text>Review</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />

            {loadedReview &&
                productReview.data.map((review, index) => {
                    return (
                        <View key={index}>
                            <Text>name: {review.customer}</Text>
                            <Text>comment: {review.body}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}

export default reviewProduct;
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});