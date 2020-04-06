


import {LOGIN} from '../action/users';
import {LOGOUT} from '../action/users';

import Users from '../../model/Users';

const initialState = {
    user: '',
    token:'',
};

export default (state = initialState,action)=>{

    switch (action.type) {
        case LOGIN:
            state.user = action.user;
            state.token = action.token;
            // console.log(state.token);
            // console.log(initialState);
            break;

        case LOGOUT:
            state.token = action.token;
            // console.log(state.token);
            // console.log(initialState);
            break;
    
        default:
            break;
    }

    return state;

}