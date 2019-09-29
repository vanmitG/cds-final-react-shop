import { combineReducers } from 'redux';
import productReducer from './productReducer'
<<<<<<< HEAD
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import wishListReducer from './wishListReducer';

export default combineReducers({
  products: productReducer
  , cart: cartReducer
  , order: orderReducer
  , wishList: wishListReducer
});


=======

export default combineReducers({
  products: productReducer
});
>>>>>>> ab6932cae0e01f3a6a48d092de249392339a2769
