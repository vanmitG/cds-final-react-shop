import { ADD_TO_WISTLIST, EMPTY_WISTLIST, REMOVE_FROM_WISTLIST } from '../actions/types';

const initialState = {
  wishList: [],
  total: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case ADD_TO_WISTLIST:
    //   return {
    //     ...state,
    //     wishList: [action.payload, ...state.wishList],
    //     // total: state.total + action.payload.price
    //   }
    case EMPTY_WISTLIST:
      return {
        ...state,
        wishList: [],
        // total: 0
      }
    case REMOVE_FROM_WISTLIST:
      return {
        ...state
        , wishList: state.wishList.filter((item, i) => i !== action.payload.index)
        // ,total: state.total - action.payload.item.cost
      }
    default:
      return state
  }
}