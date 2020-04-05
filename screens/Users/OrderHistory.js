
import React from 'react';
import { StyleSheet } from 'react-native';
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
                <Header openMenu={openDrawer} {...props}/>
            )
        },
        headerLeft:false

    });
    return(



        <View style={styles.containerScreen}>
                <Text>Order History</Text>
            <View>

            </View>
        </View>
    )
}
export default OrderHistory;

const styles = StyleSheet.create({
    containerScreen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:20
    }
});