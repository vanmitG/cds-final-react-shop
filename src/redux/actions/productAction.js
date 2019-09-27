import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';
import products from '../../util/products.json'

export const fetchProducts = () => dispatch => {
  console.log('getdatesdfsdfds');
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products.Products
  })
}