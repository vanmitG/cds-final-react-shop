import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { cancelCheckout } from '../../redux/actions/checkoutAction';
import { placeOrder } from '../../redux/actions/purchaseAction'
import { emptyCart } from '../../redux/actions/cartAction'
import BreadCrumb from '../../components/BreadCrumb';

class Checkout extends Component {
  static propsTypes = {
    checkout: PropTypes.object.isRequired,
    purchase: PropTypes.object.isRequired,
    isCheckout: PropTypes.bool.isRequired,
    cancelCheckout: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
    emptyCart: PropTypes.func.isRequired
  }
  onCancelCheckout() {
    console.log('Cancel Checkout');
    this.props.cancelCheckout();
  }
  onPlaceOrder(buyer_id, carts) {
    const cart_items = carts && carts.map((cart) => {
      return ({ "product_id": cart.item.id, "qty": cart.quantity })
    })

    this.props.placeOrder(buyer_id, cart_items);
    this.props.emptyCart();
    //also empty check out
    this.onCancelCheckout();
  }
  render() {
    if (!this.props.isCheckout) {
      if (this.props.purchase.isNewItem) {
        const { msg, purchase } = this.props.purchase.new_item
        return (<div>
          <div><h3>Hello user: {purchase.user}</h3></div>
          <div><h3>{msg}</h3></div>
          <div><h3>Purchase #{purchase.id} has a total of ${purchase.total}</h3></div></div>
        )
      } else {
        return (
          <Redirect to={{
            pathname: '/cart'
          }}
          />
        )
      }
    } else {
      const { cart, buyer_id } = this.props.checkout;
      const carts = cart.cart
      console.log('cart total', cart);
      console.log('buyer_id', buyer_id);
      return (
        <>
          {/* Hello world */}
          <div className="row">
            <div className="container">
              <div className="col-12">
                <BreadCrumb page='Checkout' />
              </div>
            </div>

            <div className="col-12 col-xl-8 mb-4">
              <div className="table-responsive-md cart-table table-borderless">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">Product</th>
                      <th className="text-center">&nbsp;</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th>Total</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts && carts.map((cart, i) => {
                      return (
                        <tr key={i}>
                          <td className="product-thumbnail text-center"><Link to={`/shops/${cart.item.id}`}><img src={cart.item.img_src} className="" alt="" /></Link></td>
                          <td><div className="cart-detail">{cart.item.name}</div></td>
                          <td className="text-center"><div style={{ width: '80px' }}>${cart.item.price}.00 </div></td>
                          <td className="product-quantity" data-title="Quantity">
                            <div style={{ width: '80px' }}>{cart.quantity}

                            </div>
                          </td>
                          <td><div style={{ width: '100px' }}>
                            ${cart.item.price * cart.quantity}</div></td>
                        </tr>

                      );
                    })}
                    {/* Update and coupon is to be implement later */}

                  </tbody>
                </table>
                <button className="btn cart w-100" onClick={() => this.onCancelCheckout()}> Cancel Checkout </button>
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-5">
              <div className="cart_totals">
                <div className="table-responsive">
                  <table cellSpacing={0} className="table table-borderless mb-0">
                    <tbody>
                      <tr className="cart-subtotal">
                        <td>Subtotal</td>
                        <td className="text-right">${cart.total}</td>
                      </tr>
                      <tr className="shipping">
                        <td colSpan={2} align="left" className="mb-0 pb-0"><h5 className="m-0 p-0">Tax</h5></td>
                      </tr>
                      <tr>
                        <td className="flat-rate"><h5>10%:</h5></td>
                        <td className="text-right amount">${cart.total * 0.1}</td>
                      </tr>
                      <tr className="order-total">
                        <td><h5>Total</h5></td>
                        <td align="right">${cart.total + cart.total * 0.1}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button to="/checkout" className="btn cart w-100" onClick={() => this.onPlaceOrder(buyer_id, carts)}> Place Order</button> </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* Hello world */}

          <h1>checkout</h1>
          <h3>buyer_id: {buyer_id}</h3>
          <h3>total: {cart.total}</h3>
          {carts && carts.map((cart) => {
            return (<div>
              {cart.quantity} {cart.item.name}
            </div>
            )
          })}
        </>
      )
    }
  }
}



const mapStateToProps = state => ({
  checkout: state.checkout.checkout,
  isCheckout: state.checkout.isCheckout,
  purchase: state.purchase
});

export default connect(mapStateToProps, { cancelCheckout, placeOrder, emptyCart })(Checkout)