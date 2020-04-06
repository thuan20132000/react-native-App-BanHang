
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ADD_AMOUNT = 'UPDATE_CART';
export const UPDATE_CART_SUB_AMOUNT = 'UPDATE_CART_SUB_AMOUNT';

export const addToCart = product =>{

    return {type:ADD_TO_CART,product:product};
}


export const removeFromCart  = productId =>{
    return{
        type:REMOVE_FROM_CART,
        prodId:productId
    }
}

export const updateCart_addAmount = (productId) =>{
    return{
        type:UPDATE_CART_ADD_AMOUNT,
        prodId:productId
    }
}

export const updateCart_subAmount = (productId) =>{
    return{
        type:UPDATE_CART_SUB_AMOUNT,
        prodId:productId
    }
}