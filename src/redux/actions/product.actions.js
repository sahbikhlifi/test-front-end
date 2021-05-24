import axios from "axios";
import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL} from '../types/product.types'
import { CONFIG } from "../../config/config";

export const listProducts = data => {
    return dispatch => {
        return axios
        .get(`${CONFIG.apiHost}products${data ? `?data=${data}` : ""}`)
        .then(response => {
            if (response.data) {
              dispatch({ type: PRODUCT_LIST_SUCCESS, payload: response.data });
            }
            return response?.data
          })
          .catch(error => {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: error?.response });
            return error?.response
          });
    }
}

export const deleteProduct = id => {
    return dispatch => {
        return axios
        .delete(`${CONFIG.apiHost}products/delete/${id}`)
        .then(response => {
            if (response.data) {
              dispatch({ type: PRODUCT_DELETE_SUCCESS , payload: response.data });
            }
            return response?.data
          })
          .catch(error => {
            dispatch({ type: PRODUCT_DELETE_FAIL , payload: error?.response });
            return error?.response
          });
    }
}

export const updateProduct = id => {
    return dispatch => {
        return axios
        .put(`${CONFIG.apiHost}products/update/${id}`)
        .then(response => {
            if (response.data) {
              dispatch({ type: PRODUCT_UPDATE_SUCCESS , payload: response.data });
            }
            return response?.data
          })
          .catch(error => {
            dispatch({ type: PRODUCT_UPDATE_FAIL , payload: error?.response });
            return error?.response
          });
    }
}