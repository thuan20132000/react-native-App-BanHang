
import Category from '../../model/Category';

import {SET_CATEGORY} from '../action/category';

const initialState  = {
    availableCategory: [],
    // userProducts: PRODUCTS.filter(prod =>prod.ownerId === 'u1')
};

export default (state = initialState,action) =>{
    switch (action.type) {
        case SET_CATEGORY:
            return {
                availableCategory: action.category
            }
    
        default:
            break;
    }
    return state;
}