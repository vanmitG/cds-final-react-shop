import { ADD_PURCHASE } from './types';

export const addPurchase = (buyer_id, cart_items) => dispatch => {
  dispatch({
    type: ADD_PURCHASE,
    payload: { 'buyer_id': buyer_id, 'cart_items': cart_items }
  })
}