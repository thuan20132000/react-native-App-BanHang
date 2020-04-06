

import React, { useEffect } from 'react';
import {View,Text,StyleSheet} from 'react-native';

import ShopNavigator from './navigation/navigator';

import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducer/products';
import cartReducer from './store/reducer/cart';
import categoriesReducer from './store/reducer/category';
import authenticationReducer from './store/reducer/auth';
import ReduxThunk from 'redux-thunk';


const rootReducer = combineReducers({
  products: productsReducer,
  cartItems : cartReducer,
  categories : categoriesReducer,
  authentication : authenticationReducer,

})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));


const App = () =>{
  

  return (
    <Provider store={store}>
          <ShopNavigator  />
     </Provider>
  )
}
export default App;
