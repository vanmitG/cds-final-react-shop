
import { ADD_PURCHASE } from '../actions/types';

const initialState = {
  buyer_id: '',
  cart_items: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        cart_items: action.payload.cart_items
      }
    default:
      return state
  }
}