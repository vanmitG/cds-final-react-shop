import { ADD_CHECKOUT, CANCEL_CHECKOUT } from './types';


export const addCheckout = (buyer_id, cart_items) => dispatch => {
  console.log('Add Checkout - Checkout Action', buyer_id, cart_items)
  dispatch({
    type: ADD_CHECKOUT,
    payload: {
      "buyer_id": buyer_id, "cart_items": cart_items
    }
  })
}


export const cancelCheckout = () => dispatch => {
  dispatch({
    type: CANCEL_CHECKOUT
  })
}
