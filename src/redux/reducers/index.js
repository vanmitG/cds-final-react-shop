import { combineReducers } from 'redux';

import productReducer from './productReducer'
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import purchaseReducer from './purchaseReducer';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  purchase: purchaseReducer
});



