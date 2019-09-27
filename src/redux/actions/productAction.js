import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';
import products from '../../util/products.json'

export const fetchProducts = () => dispatch => {
  console.log('fetch many products');
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products.Products
  })
}

export const fetchProduct = (prod_id) => dispatch => {
  const product = products.Products.find(el => el.id === prod_id
  )
  console.log('prod_id:', prod_id)
  console.log('fetch single product', product);
  dispatch({
    type: FETCH_PRODUCT,
    payload: product
  })
}