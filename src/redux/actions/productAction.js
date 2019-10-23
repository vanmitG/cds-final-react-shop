
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PROD_REQUEST, FETCH_PROD_FAILURE } from './types';


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
export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS,
    payload: products
  }
}

export const fetchProductSuccess = product => {
  return {
    type: FETCH_PRODUCT,
    payload: product
  }
}

export const fetchProducts = () => async dispatch => {
  dispatch(fetchProductRequest());
  try {
    const response = await fetch('http://localhost:5000/api/products');
    const jsonData = await response.json();
    dispatch(fetchProductsSuccess(jsonData));
    console.log('fetchProducts-productAction', jsonData)
  } catch (error) {
    dispatch(fetchProductFailure(error));
    console.log('fetchProducts-error', error);
  }
}

export const fetchProduct = (prod_id) => async dispatch => {
  dispatch(fetchProductRequest());
  try {
    const response = await fetch(`http://localhost:5000/api/products/${prod_id}`);
    const jsonData = await response.json();
    dispatch(fetchProductSuccess(jsonData));
    console.log('fetchProduct-productAction', jsonData)
  } catch (error) {
    dispatch(fetchProductFailure(error));
    console.log('fetchProducts-error', error);
  }
}
