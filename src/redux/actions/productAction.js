
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';
import products from '../../util/products.json'


export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch('http://localhost:5000/api/products');
    const jsonData = await response.json();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: jsonData
    });
    console.log('fetchProducts-productAction', jsonData)
  } catch (error) {
    console.log(error);
  }

}

export const fetchProduct = (prod_id) => dispatch => {
  const product = products.Products.find(el => el.id === prod_id
  )
  dispatch({
    type: FETCH_PRODUCT,
    payload: product
  })
}