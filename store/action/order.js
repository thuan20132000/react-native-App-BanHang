

import Order from "../../model/order";
import { AsyncStorage } from "react-native";

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';


export const fetchOrders = ()=>{
    return async (dispatch) =>{
        

        const item = await AsyncStorage.getItem('userData');
        const user = JSON.parse(item);
        const userId = user.userId;
        const userToken = user.token;
        const loadedOrders = [];
        try{
            const response = await fetch(
                `http://45.32.59.144/api/order/${userId}`
            );

            if(!response.ok){
                throw new Error("Something went wrong");
                console.log("something went wrong!!");
            }
            
            const resData = await response.json();
            console.log(resData);
            for(const key in resData){
                loadedOrders.push(
                   new Order(
                        key,
                        resData[key].user_id,
                        resData[key].subtotal,
                        resData[key].created_at
                   )
                );    
            }
            dispatch({
                type:SET_ORDERS,
                orders:loadedOrders
            });

        }catch(err){
             //send to custom analytics server
            throw err;
        }
        
    };
};



export const addOrder = (cartItems,totalAmount)=>{
   

    return async (dispatch,getState) => {
        const user = getState().authentication;
        // const item = await AsyncStorage.getItem('userData');
        console.log(user);
        var currentdate = new Date(); 
        var orderDate = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        const userId = user.userId;//error here 
        const userToken = user.token;
       
        const response = await fetch(`http://45.32.59.144/api/order/${userId}`,
        {
            method:'POST', 
            headers:{
                'Content-Type':'application/json'
            },
    
            body:JSON.stringify({
               "cartItems":cartItems,
               "totalAmount":totalAmount,
               "date": currentdate
            })
        });
        if(!response.ok){
            throw new Error('Something went wrong order!');
            console.log("something went wrong order!!");
        }

        const resData = await response.json();
        dispatch({
            type:ADD_ORDER,
            orderData:{
                id:resData.name,
                items:cartItems,
                amount:totalAmount,
                dates:orderDate
            }
        });

    };
};