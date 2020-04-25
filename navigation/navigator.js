import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';



import MainScreen from '../screens/MainScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import TopProducts from '../components/topProducts';
import OrderHistory from '../screens/Users/OrderHistory';
import OrderTrack from '../screens/Users/OrderTrack';
import CartScreen from '../screens/CartScreen';
import ContactScreen from '../screens/ContactScreen';

import MenuDrawerContent from '../components/MenuDrawerContent';
import ProductDetail from '../screens/ProductDetail';
import ListProduct from '../screens/ListProduct';
import { useSelector } from 'react-redux';






const StackNav = createStackNavigator();
const StackProductScreen = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerTransparent: false,
        headerShown: true
      }}
    >
      <StackNav.Screen
        name="Main" component={MainScreen}
      />
      <StackNav.Screen
        name="ProductDetail" component={ProductDetail}
      />

      <StackNav.Screen
        name="ListProduct" component={ListProduct}
      />
      <StackNav.Screen
        name="ShoppingCart" component={CartScreen}
      />



    </StackNav.Navigator>
  )
}





const CartStackScreen = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ShoppingCart" component={CartScreen}
      />
    </StackNav.Navigator>
  )
}




const TabNav = createBottomTabNavigator();
const TabNavScreen = () => {



  function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }



  const carts = useSelector(state => state.cartItems);
  let countCart = Object.keys(carts.items).length;

  const users = useSelector(state => state.authentication);


  function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={countCart} />;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    users.token ? setIsLoggedIn(true) : setIsLoggedIn(false);


  })

  return (
    <TabNav.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'ios-home'
          } else if (route.name === 'cart') {
            iconName = 'ios-cart'
            return (
              <HomeIconWithBadge
                name={iconName}
                size={size}
                color={color}
              />
            )
          } else if (route.name == 'search') {
            iconName = 'ios-search'
          } else if (route.name === 'contact') {
            iconName = 'ios-contact'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarVisible: true,
        headerTransparent: false
      })}

      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}

    >
      <TabNav.Screen name="home" component={StackProductScreen} />
      <TabNav.Screen name="cart" component={CartStackScreen} />
      {/* <TabNav.Screen name="contact" component={ContactStackScreen} /> */}


    </TabNav.Navigator>
  )
}





const Auth = createStackNavigator();
const AuthScreen = (props) => {

  const users = useSelector(state => state.authentication);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    users.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  })

  return (
    <Auth.Navigator>
      <Auth.Screen
        name="StackMain"
        component={TabNavScreen}
        options={{
          headerShown: false,
          headerTransparent: false,

        }}
      />

      <Auth.Screen
        name="OrderHistory" component={OrderHistory}
      />
      <Auth.Screen
        name="OrderTrack" component={OrderTrack}
      />

      <Auth.Screen
        name="Authen"
        component={AuthenticationScreen}
      />

    </Auth.Navigator>
  )
}





const DrawerNav = createDrawerNavigator();
export default function Navigator() {


  return (
    <NavigationContainer>
      <DrawerNav.Navigator drawerType='slide'
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >

        <DrawerNav.Screen name="auth" component={AuthScreen} />

      </DrawerNav.Navigator>
    </NavigationContainer>

  );
}




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView>
      <MenuDrawerContent {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
