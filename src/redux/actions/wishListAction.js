import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST } from './types'

// export const addToWishList = (item, num) => dispatch => {
//   console.log('Add to_WISH_LIST - wishListAction', item, num)
//   dispatch({
//     type: ADD_TO_WISHLIST,
//     payload: {
//       "item": item, "quantity": num
//     }
//   })
// }

export const removeItem = (item) => dispatch => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: item
  })
}

export const emptyWishList = () => dispatch => {
  dispatch({
    type: EMPTY_WISHLIST
  })
}
