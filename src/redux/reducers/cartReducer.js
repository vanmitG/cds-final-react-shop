
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  cart: [],
  total: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        total: state.total + action.payload.item.price * action.payload.quantity
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0
      }
    case REMOVE_FROM_CART:
      console.log('remove from cart-cart reducer', action.payload)
      return {
        ...state
        , cart: state.cart.filter((item, i) => i !== action.payload)
        , total: state.total - state.cart[action.payload].quantity * state.cart[action.payload].item.price
      }
    default:
      return state
  }
}