import {
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    USER_LOGOUT
} from '../actions/types'

const initialState = {
    isAuth: false,
    users: [],
    error: null,
    isLoading: false,
    message: undefined,
    logged: false,
    token: '',
    failedLogin: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                token: action.payload.token
            }
        
        default:
           return state;
    }
}