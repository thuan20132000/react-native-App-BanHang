
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Header from '../../components/Header';


const OrderHistory = (props) =>{



    const openDrawer= () =>{
        props.navigation.openDrawer();
    }
    props.navigation.setOptions({
        headerStyle:{
            backgroundColor:'tomato'
        },
        headerTitle:()=>{
            return(
                <Header openMenu={openDrawer}/>
            )
        }
    });
    return(
        <View>
                <Text>Information of User</Text>
        </View>
    )
}
export default OrderHistory;

const styles = StyleSheet.create({
    containerScreen:{
        flex:1
    }
});