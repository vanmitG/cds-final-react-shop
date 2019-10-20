
import { ADD_CHECKOUT, CANCEL_CHECKOUT } from '../actions/types';

const initialState = {
  cart_items: {},
  buyer_id: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKOUT:
      return {
        ...state,
        buyer_id: 1,
        cart_items: action.payload
      }
    case CANCEL_CHECKOUT:
      return {
        ...state,
        buyer_id: '',
        cart_items: {}
      }
    default:
      return state
  }
}