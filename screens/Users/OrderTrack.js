
import React from 'react';
import { StyleSheet, View, Text, ListView,Image } from 'react-native';
import Header from '../../components/Header';
import Timeline from 'react-native-timeline-flatlist'


import CardListOrder from '../../components/CardListOrder';

import Categories from '../../data/CategoriesData';

const OrderHistory = (props) => {

    const {order} = props.route.params;

    console.log(order);

    const data = [
       
          {
            time: '10:45 12-03',
            title: 'Play Badminton',
            location:'Da Nang',
            description: 'The Shipments is ready to picked up',
            // icon: require('../img/badminton.png'),
            imageUrl: order.image,
          },
          {
            time: '12:45 12-03',
            title: 'Play Badminton',
            location:'TP HCM',
            description: 'The Shipments has been proccessed in location',
            // icon:require('../img/badminton.png'),
            imageUrl: order.image,
          },
          {
            time: '19:45 12-03',
            title: 'Play Badminton',
            location:'Da Nang',
            description: 'The Shipments is ready to picked up',
            // icon: require('../img/badminton.png'),
            imageUrl: order.image,
          },
          {
            time: '6:45 13-03',
            title: 'Play Badminton',
            location:'Da Nang',
            description: 'The Shipments is ready to picked up',
            // icon: require('../img/badminton.png'),
            imageUrl: order.image,
          },
          {
            time: '10:45 14-03',
            title: 'Play Badminton',
            location:'Da Nang',
            description: 'The Shipments is ready to picked up',
            // icon: require('../img/badminton.png'),
            imageUrl: order.image,
          },
         
          
    ]



    function renderDetail(rowData, sectionID, rowID) {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if(rowData.description && rowData.imageUrl)
          desc = (
            <View style={styles.descriptionContainer}>   
              <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text>
              <Text style={[styles.textLocation]}>{rowData.location}</Text>
            </View>
          )
        return (
          <View style={{flex:1}}>
            {title}
            {desc}
          </View>
        )
      }
  
    props.navigation.setOptions({
        headerStyle: {
            backgroundColor: 'tomato'
        },
        headerTitle: () => {
            return (
                <Header openMenu={()=>props.navigation.openDrawer()} {...props} />
            )
        },
        headerLeft: false

    });
    return (



        <View style={styles.timeLineContainer}>
            <Text style={styles.Title}>Track Order</Text>

            <Timeline style={[styles.timeline]}
                //..other props
                data={data}
                showTime={data.title}
                circleSize={20}
                circleColor='coral'
                lineColor='rgb(45,156,219)'
                timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                descriptionStyle={{ color: 'gray' }}
                options={{
                    style: { paddingTop: 5 }
                }}
                renderDetail={renderDetail}
                // columnFormat='single-left'

            />
        </View>

    )
}
export default OrderHistory;

const styles = StyleSheet.create({
    timeLineContainer: {
        flex: 1,
        paddingTop: 30,
        // backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'stretch',      
        padding:10,
        margin:16
    },
    Title: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign:'center',
        padding:4,
        color:'coral'
    },
    timeline:{
        paddingTop:10
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode:'cover',
        padding:4
    },
    textLocation:{
        fontWeight:'bold',
        fontSize:18,
        marginVertical:10
    },
    textDescription:{
        marginVertical:4
    }
});