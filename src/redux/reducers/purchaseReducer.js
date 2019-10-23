import { ADD_PURCHASE, FETCH_PURCHASE_REQUEST, FETCH_PURCHASE_FAILURE, FETCH_PURCHASE_SUCCESS, FETCH_PURCHASES, FETCH_PURCHASE, EDIT_PURCHASE } from '../actions/types';

const initialState = {
  isLoading: true,
  isNewItem: false,
  error: '',
  // purchases
  items: {},
  // purchase
  item: {},
  new_item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PURCHASE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_PURCHASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        item: {},
        items: {},
        new_item: {}
      }
    case ADD_PURCHASE:
      return {
        ...state,
        isLoading: false,
        isNewItem: true,
        new_item: action.payload
      }
    case FETCH_PURCHASE:
      return {
        ...state,
        isLoading: false,
        item: action.payload
      }
    case FETCH_PURCHASES:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    default:
      return state
  }
}