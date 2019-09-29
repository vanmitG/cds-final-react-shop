import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    let { carts } = this.props
    console.log('cartItem', carts)
    return (
      <>
        {/* Hello world */}
        <div className="row">
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
                          <div className="input-group">
                            {/* <span className="input-group-btn">
                          <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]"> <i className="fa fa-minus" /> </button>
                        </span> */}
                            <input type="text" name="quantity" className="form-control input-number" value={cart.quantity} />
                            {/* <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]"> <i className="fa fa-plus" /> </button>
                          </span>  */}
                          </div>
                        </td>
                        <td><div style={{ width: '100px' }}>
                          $30.9</div></td>
                        <td><a href="#"><i className="fa fa-trash" aria-hidden="true" /></a></td>
                      </tr>

                    );
                  })}
                  {/* Update and coupon is to be implement later */}

                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-5">
            <div className="cart_totals">
              <div className="table-responsive">
                <table cellSpacing={0} className="table table-borderless mb-0">
                  <tbody>
                    <tr className="cart-subtotal">
                      <td>Subtotal</td>
                      <td className="text-right">$20.00</td>
                    </tr>
                    <tr className="shipping">
                      <td colSpan={2} align="left" className="mb-0 pb-0"><h5 className="m-0 p-0">Shipping</h5></td>
                    </tr>
                    <tr>
                      <td className="flat-rate"><h5>Flat rate:</h5></td>
                      <td className="text-right amount">$20.00</td>
                    </tr>
                    <tr className="order-total">
                      <td><h5>Total</h5></td>
                      <td align="right">$40.00</td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout" className="btn cart w-100"> Proceed to checkout</Link> </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        {/* Hello world */}
      </>
    )
  }
}

Cart.propsTypes = {
  carts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  // items is defined in productReducer
  carts: state.cart.cart
});

export default connect(mapStateToProps)(Cart)
