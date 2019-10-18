
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PROD_REQUEST, FETCH_PROD_FAILURE } from './types';
import products from '../../util/products.json'


export const fetchProductRequest = () => {
  return {
    type: FETCH_PROD_REQUEST
  }
}
export const fetchProductFailure = error => {
  return {
    type: FETCH_PROD_FAILURE,
    payload: error
  }
}
export const fetchProductSuccess = products => {
  return {
    type: FETCH_PRODUCTS,
    payload: products
  }
}

export const fetchProducts = () => async dispatch => {
  dispatch(fetchProductRequest());
  try {
    const response = await fetch('http://localhost:5000/api/products');
    const jsonData = await response.json();
    dispatch(fetchProductSuccess(jsonData));
    console.log('fetchProducts-productAction', jsonData)
  } catch (error) {
    dispatch(fetchProductFailure(error));
    console.log('fetchProducts-error', error);
  }
}

export const fetchProduct = (prod_id) => dispatch => {
  console.error("TODO: SHOULD NOT CALL!");
  // TODO: Remove and replace with call to real backend.
  const product = products.Products.find(el => el.id === prod_id)
  dispatch({
    type: FETCH_PRODUCT,
    payload: product
  })
}