import { ADD_PURCHASE, FETCH_PURCHASE_REQUEST, FETCH_PURCHASE_FAILURE, FETCH_PURCHASE_SUCCESS, FETCH_PURCHASES, FETCH_PURCHASE, EDIT_PURCHASE } from './types';



export const fetchPurchaseRequest = () => {
  return {
    type: FETCH_PURCHASE_REQUEST
  }
}
export const fetchPurchaseFailure = error => {
  return {
    type: FETCH_PURCHASE_FAILURE,
    payload: error
  }
}
// fetch multiple purchase
export const fetchPurchasesSuccess = purchases => {
  return {
    type: FETCH_PURCHASES,
    payload: purchases
  }
}
// fetch single purchase
export const fetchPurchaseSuccess = purchase => {
  return {
    type: FETCH_PURCHASES,
    payload: purchase
  }
}

export const fetchPurchases = () => async dispatch => {
  dispatch(fetchPurchaseRequest());
  try {
    const response = await fetch('http://localhost:5000/api/purchases');
    const jsonData = await response.json();
    dispatch(fetchPurchaseSuccess(jsonData));
    console.log('fetchPurchase-purchaseAction', jsonData)
  } catch (error) {
    dispatch(fetchPurchaseFailure(error));
    console.log('fetchPurchases-error', error);
  }
}

export const addPurchase = new_purchase => {
  return {
    type: ADD_PURCHASE,
    payload: new_purchase
  }
}


export const placeOrder = (buyer_id, cart_items) => async dispatch => {
  dispatch(fetchPurchaseRequest());
  try {
    const response = await fetch('http://localhost:5000/api/purchases', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        buyer_id: buyer_id,
        cart_items: cart_items
      })
    });
    const jsonData = await response.json();
    dispatch(addPurchase(jsonData));
    console.log('addPurchases-PurchaseAction', jsonData)
  } catch (error) {
    dispatch(fetchPurchaseFailure(error));
    console.log('fetchPurchases-error', error);
  }
}