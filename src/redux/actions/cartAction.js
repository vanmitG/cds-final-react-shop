import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';


export const addToCart = (item, num) => dispatch => {
  console.log('Add to Cart - cartAction', item, num)
  dispatch({
    type: ADD_TO_CART,
    payload: {
      "quantity": num, "item": item
    }

  })
}

export const removeItem = (item) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item
  })
}

export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART
  })
}
