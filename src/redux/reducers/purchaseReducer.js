
import { ADD_PURCHASE } from '../actions/types';

const initialState = {
  purchase: {
    items: [],
    customer: {}
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        purchase: { customer: action.payload.customer, items: action.payload.cartItems }
      }
    default:
      return state
  }
}