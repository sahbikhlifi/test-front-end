import axios from "axios";
import { CONFIG } from "../../config/config";
import { LOGIN_SUCCESS, LOGIN_FAILURE, ADD_USER_SUCCESS, ADD_USER_FAILURE } from '../types/auth.types';

export const loginUser = data => {
  return dispatch => {
    return axios
      .post(`${CONFIG.apiHost}users/login`, data)
      .then(response => {
        if (response.data) {
          console.log({ response });
          dispatch({ type: LOGIN_SUCCESS, payload: response.data });
          localStorage.setItem("user", JSON.stringify({ token: response?.data?.refreshToken, userInfo: response?.data?.user }));
        }
        return response?.data
      })
      .catch(error => {
        console.log({ error });
        dispatch({ type: LOGIN_FAILURE, payload: error?.response });
        return error?.response
      });
  };
};

export const registerUser = data => {
  return dispatch => {
    return axios
      .post(`${CONFIG.apiHost}users/signup`, data,
    )
      .then(response => {
        console.log({response});
        dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
        localStorage.setItem("user", JSON.stringify({ token: response?.data?.refreshToken, userInfo: response?.data?.savedUser }));
        return true
      })
      .catch(error => {
        dispatch({ type: ADD_USER_FAILURE, payload: error?.response });
        return false
      });
  };
};