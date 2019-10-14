import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions/types';
const initialState = {
  // products
  items: {},
  // product
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload

      }
    case FETCH_PRODUCT:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}