import { ADD_PURCHASE, FETCH_PURCHASE_REQUEST, FETCH_PURCHASE_FAILURE, FETCH_PURCHASES, FETCH_PURCHASE, NEW_STATUS } from './types';



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
// fetch multiple purchase - action creator
export const fetchPurchasesSuccess = purchases => {
  return {
    type: FETCH_PURCHASES,
    payload: purchases
  }
}
// fetch single purchase - action creator
export const fetchPurchaseSuccess = purchase => {
  return {
    type: FETCH_PURCHASE,
    payload: purchase
  }
}

// fetch multiple purchase 
export const fetchPurchases = () => async dispatch => {
  dispatch(fetchPurchaseRequest());
  try {
    const response = await fetch('http://localhost:5000/api/purchases');
    const jsonData = await response.json();
    dispatch(fetchPurchasesSuccess(jsonData));
    console.log('fetchPurchase-purchaseAction', jsonData)
  } catch (error) {
    dispatch(fetchPurchaseFailure(error));
    console.log('fetchPurchases-error', error);
  }
}

// fetch single purchase 
export const fetchPurchase = (prod_id) => async dispatch => {
  dispatch(fetchPurchaseRequest());
  try {
    const response = await fetch(`http://localhost:5000/api/purchases/${prod_id}`);
    const jsonData = await response.json();
    dispatch(fetchPurchaseSuccess(jsonData));
    console.log('fetchSinglePurchase-purchaseAction', jsonData)
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

export const setNewStatus = (purchase_id, status) => {
  return {
    type: NEW_STATUS,
    payload: { id: purchase_id, new_status: status }
  }
}

export const setPurchaseStatus = (purchase_id, status) => async dispatch => {
  dispatch(fetchPurchaseRequest());
  try {
    const response = await fetch(`http://localhost:5000/api/purchases/${purchase_id}/${status}`);
    const jsonData = await response.json();
    dispatch(fetchPurchaseSuccess(jsonData));
    dispatch(setNewStatus(purchase_id, status));
    console.log('setPurchaseStatus-purchasetAction', jsonData)
  } catch (error) {
    dispatch(fetchPurchaseFailure(error));
    console.log('fetchPurchase -error', error);
  }
}