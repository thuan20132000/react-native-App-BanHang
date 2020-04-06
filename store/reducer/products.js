
import PRODUCTS from '../../data/productsData';
import Product from '../../model/Product';

import {SET_PRODUCTS} from '../action/products';

const initialState  = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod =>prod.ownerId === 'u1')
};

export default (state = initialState,action) =>{
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                availableProducts: action.products
            }
    
        default:
            break;
    }
    return state;
}