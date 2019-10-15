import { combineReducers } from 'redux';

import productReducer from './productReducer'
import cartReducer from './cartReducer';
import purchaseReducer from './purchaseReducer';
// import wishListReducer from './wishListReducer';

export default combineReducers({
  products: productReducer
  , cart: cartReducer
  , purchase: purchaseReducer
  //   , wishList: wishListReducer
});



