import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PROD_REQUEST, FETCH_PROD_FAILURE } from '../actions/types';
const initialState = {
  isLoading: true,
  error: '',
  // products
  items: {},
  // product
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROD_REQUEST:
      return {
        ...state
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    case FETCH_PRODUCT:
      return {
        ...state,
        isLoading: false,
        item: action.payload
      }
    case FETCH_PROD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        item: {},
        items: {}
      }
    default:
      return state;
  }
}