import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL } from '../types/product.types'

const initialState = {
    allProducts: null,
    success: false,
    failure: null,
}

function productListReducers(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LIST_SUCCESS:
            return { ...state, success: true, allProducts: action.payload }
        case PRODUCT_LIST_FAIL:
            return { ...state, success: false, failure: action?.payload }
        case PRODUCT_DELETE_SUCCESS:
            const product = state.filter(product => product._id !== action.payload.id)
            return product
            case PRODUCT_UPDATE_SUCCESS:
                return { ...state, success: true, allProducts: action.payload }
            case PRODUCT_UPDATE_FAIL:
                return { ...state, success: false, failure: action.payload }
        default:
            return state;
    }
}
export default productListReducers;