import { ADD_PURCHASE, FETCH_PURCHASE_REQUEST, FETCH_PURCHASE_FAILURE, FETCH_PURCHASES, FETCH_PURCHASE, EDIT_PURCHASE, NEW_STATUS } from '../actions/types';

const initialState = {
  isLoading: true,
  isNewItem: false,
  isNewStatus: false,
  error: '',
  // purchases
  items: [],
  // single purchase
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
        items: [],
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
        isNewStatus: false,
        items: action.payload
      }
    case NEW_STATUS:
      return {
        ...state,
        // items: state.purchase.items.map(item => {
        //   item.status = action.payload.status
        // }),
        isNewStatus: true
      }
    default:
      return state
  }
}