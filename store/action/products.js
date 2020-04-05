
import Product from '../../model/Product';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export const fetchProducts = () =>{
    
    return async dispatch =>{
        const response = await fetch(
            'http://young-cove-81839.herokuapp.com/api/products'
        );
        const resData = await response.json();


        const loadedProducts = [];
        for(const key in resData.data){
        
            loadedProducts.push(new Product(
                    key,
                    'u1',
                    resData.data[key].imageUrl,
                    resData.data[key].name,
                    resData.data[key].totalPrice,
                    resData.data[key].description,
                    resData.data[key].category_id,
                    resData.data[key].rating,
            ))

        }
        // console.log(resData.data);
        dispatch({
            type:SET_PRODUCTS,
            products:loadedProducts
        })
    }


}
