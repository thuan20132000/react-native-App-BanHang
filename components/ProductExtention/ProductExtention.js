


import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TabView, SceneMap } from 'react-native-tab-view';

import ProductReview from './ProductReview';

ProductExtention.propTypes = {

};

ProductExtention.defaultProps = {

}

function ProductExtention(props) {

    const { productId } = props;

    const ProductReviews = () => (
        <ProductReview productId={productId} />
    );

    const ProductFeatures = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
            <Text>Ben map</Text>
        </View>
    );

    const ProductDescription = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
            <Text>Ben map</Text>
        </View>
    )

    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Reviews' },
        { key: 'second', title: 'Features' },
        { key: 'third', title: 'Descriptions' },

    ]);

    const renderScene = SceneMap({
        first: ProductReviews,
        second: ProductFeatures,
        third: ProductDescription,
    });

    return (
        <View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>
    );
}

export default ProductExtention;
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});