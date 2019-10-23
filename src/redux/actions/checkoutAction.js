import { ADD_CHECKOUT, CANCEL_CHECKOUT } from './types';


export const addCheckout = (buyer_id, cart) => dispatch => {
  console.log('Add Checkout - Checkout Action', 'buyer:', buyer_id, cart)
  dispatch({
    type: ADD_CHECKOUT,
    payload: {
      "buyer_id": buyer_id, "cart": cart
    }
  })
}


export const cancelCheckout = () => dispatch => {
  dispatch({
    type: CANCEL_CHECKOUT
  })
}
