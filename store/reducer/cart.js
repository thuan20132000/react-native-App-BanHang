import {ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_ADD_AMOUNT, UPDATE_CART_SUB_AMOUNT} from '../action/cart';
import CartItem from '../../model/CartItem';

const initialState = {
    items: [],
    totalAmount:0
};

export default (state = initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = Number(addedProduct.price);
            const productTitle = addedProduct.name;

            let updatedOrNewCartItem;
            
            
            if(state.items[addedProduct.id]){
                //already have the item in the cart

                return {...state}

                // updatedOrNewCartItem = new CartItem(
                //     state.items[addedProduct.id].quantity + 1,
                //     productPrice,
                //     productTitle,
                //     state.items[addedProduct.id].sum + productPrice
                // );

                // return{
                //     ...state,
                //     items:{...state.items,[addedProduct.id]:updatedOrNewCartItem},
                //     totalAmount: state.totalAmount + productPrice
                // }
                
            }else{

                updatedOrNewCartItem = new CartItem(1,productPrice,productTitle,productPrice);
                return{
                    ...state,
                    items:{...state.items,[addedProduct.id]:updatedOrNewCartItem},
                    totalAmount: state.totalAmount + productPrice
                }
            }
        case REMOVE_FROM_CART:         
            state.totalAmount = state.totalAmount - state.items[action.prodId].sum;
            delete state.items[action.prodId]

            break;
        
        case UPDATE_CART_ADD_AMOUNT:
          
            state.items[action.prodId].quantity = state.items[action.prodId].quantity  +1;
            state.items[action.prodId].sum = state.items[action.prodId].productPrice * state.items[action.prodId].quantity;
            state.totalAmount = state.totalAmount + state.items[action.prodId].productPrice;
            break;

        case UPDATE_CART_SUB_AMOUNT:
           
            state.items[action.prodId].quantity = state.items[action.prodId].quantity  - 1;
            state.items[action.prodId].sum = state.items[action.prodId].productPrice * state.items[action.prodId].quantity;
            state.totalAmount = state.totalAmount - state.items[action.prodId].productPrice;
            break;

         
            
    }








    return state;
}