

import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Keyboard,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Header = (props) => {

  const currentScreen = props.route?.name;
  const [isMainScreen, setIsMainScreen] = useState(false);

  function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -2,
              top: -6,
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
  const ref_search_input = useRef();

  const _startSearch =  () =>{
    // console.log(ref_search_input.current._inputRef.viewConfig.validAttributes);
     props.route.name !== "Search"?props.navigation.navigate("Search"):"";
    // ref_search_input.current._inputRef.viewConfig.validAttributes.editable = true;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity style={{}} onPress={props.openMenu}>
          <FontAwesome name="bars" size={30} color="coral" />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 26 }} onPress={() => props.navigation.navigate('StackMain')}><Text>Shopping Online</Text>  </Text>
        <TouchableOpacity style={{}} onPress={props.openCart}>
          <IconWithBadge name={'ios-notifications'} size={34} color={'coral'} badgeCount={3} />
        </TouchableOpacity>
      </View>
      <View style={styles.textInputContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TextInput
              style={styles.textInput}
              placeholder="What do you want to buy?"
              clearTextOnFocus={true}
              ref={ref_search_input}
              autoFocus={props.route.name !== "Search"?false:true}
              onTouchStart={_startSearch}
              editable={props.route.name !== "Search"?false:true}
              
            />
        </TouchableWithoutFeedback>
        
        
      </View>
    </View>
  )

}

export default Header;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width
  },
  textContainer: {
    flexDirection: 'row',
    fontSize: 26,
    width: '100%',
    justifyContent: 'space-around'
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    height: 30,
    width: width - 30,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: 'coral',
    borderWidth: 2
  }
});