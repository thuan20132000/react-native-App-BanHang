

import {SIGNIN,SIGNUP,LOGOUT,AUTHENTICATE} from '../action/auth';

const intialState = {
    token:null,
    userId:null,
    name:null,
}

export default (state  = intialState,action) =>{
    switch(action.type){
        case AUTHENTICATE:
            return{
                token: action.token,
                userId: action.userId,
                name: action.name,
            };
        case LOGOUT:
            return intialState;
    }
    return state;
}