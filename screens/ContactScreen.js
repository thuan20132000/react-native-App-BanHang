
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome';



const ContactScreen = (props) => {


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
        <View style={styles.screenContainer}>
            <MapView style={styles.mapContainer}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={"Thuan Truong"}
                    description={"Say Hello to ThuanTruong"}
                />
            </MapView>
            <View style={styles.contactInfo}>
                <TouchableOpacity style={[styles.contactButton]}>
                    <Icon name="map-marker" size={40} color="coral" />
                    <Text style={styles.buttonText}>12/40 Pham The Hien - TT Hue - VN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactButton]}>
                    <Icon name="phone" size={40} color="coral" />
                    <Text style={styles.buttonText}>0976904548</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactButton]}>
                    <Icon name="send" size={40} color="coral" />
                    <Text style={styles.buttonText}>thuan20132000@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ContactScreen;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    mapContainer: {
        height: height / 2,

    },
    contactInfo:{
        flexDirection:'column',
        justifyContent:'center',
        paddingHorizontal:18,
        opacity:0.9,
        backgroundColor:'#fff',
        flex:1
    },  
    contactButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:8,
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor:'coral'
    },
    buttonText:{
        color:'coral',
        fontSize:18
    }
});