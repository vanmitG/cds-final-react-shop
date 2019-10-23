import { ADD_CHECKOUT, CANCEL_CHECKOUT } from '../actions/types';

const initialState = {
  isCheckout: false,
  checkout: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CHECKOUT:
      return {
        ...state,
        isCheckout: true,
        checkout: action.payload
      }
    case CANCEL_CHECKOUT:
      return {
        ...state,
        isCheckout: false,
        checkout: {}
      }
    default:
      return state
  }
}