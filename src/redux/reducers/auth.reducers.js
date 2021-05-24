import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types/auth.types';

const initialState = {
    user: null,
    success: false,
    failure: null,
}

const AuthReducer = (stateLogin = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            const data = action.payload;
            return {...stateLogin, user: data, success: true};
        case LOGIN_FAILURE:
           return  {...stateLogin,  success: false, failure: action?.payload};
        default:
            return stateLogin;
    }
};

export default AuthReducer;