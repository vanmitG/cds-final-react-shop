import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeItem, emptyCart } from '../../redux/actions/cartAction';
import { addCheckout } from '../../redux/actions/checkoutAction'
import BreadCrumb from '../../components/BreadCrumb'

class Cart extends Component {

  onDelete = (item) => {
    console.log("onDelete Item in Card", item);
    this.props.removeItem(item);
  };
  onClearCart = () => {
    this.props.emptyCart();
  };
  onCheckout = (buyer_id, cart) => {
    console.log("onCheckout Item in Card", buyer_id, cart);
    this.props.addCheckout(buyer_id, cart);
  }
  render() {
    let { carts, total } = this.props;
    const current_user = 1;
    console.log('cartItem', carts)
    return (
      <>
        {/* Hello world */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BreadCrumb page='Cart' />
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
                              {/* <span className="input-group-btn">
                          <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]"> <i className="fa fa-minus" /> </button>
                        </span> */}
                              {/* <input
                              type="number"
                              name="quantity"
                              className="form-control input-number"
                              // onChange={e =>
                              //   this.setState({ quant: e.target.value })
                              // }
                              value={this.state.quant[i]}
                            /> */}
                              {/* <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]"> <i className="fa fa-plus" /> </button>
                          </span>  */}
                            </div>
                          </td>
                          <td><div style={{ width: '100px' }}>
                            ${cart.item.price * cart.quantity}</div></td>
                          <td><button onClick={() => this.onDelete(i)}><i className="fa fa-trash" aria-hidden="true" /></button></td>
                        </tr>

                      );
                    })}
                    {/* Update and coupon is to be implement later */}

                  </tbody>
                </table>
                {
                  carts.length > 0
                    ? (<button className="btn cart w-100" onClick={() => this.onClearCart()}> Clear Cart </button>)
                    : ""
                }
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-5">
              <div className="cart_totals">
                <div className="table-responsive">
                  <table cellSpacing={0} className="table table-borderless mb-0">
                    <tbody>
                      <tr className="cart-subtotal">
                        <td>Subtotal</td>
                        <td className="text-right">${total}</td>
                      </tr>
                      <tr className="shipping">
                        <td colSpan={2} align="left" className="mb-0 pb-0"><h5 className="m-0 p-0">Tax</h5></td>
                      </tr>
                      <tr>
                        <td className="flat-rate"><h5>10%:</h5></td>
                        <td className="text-right amount">${total * 0.1}</td>
                      </tr>
                      <tr className="order-total">
                        <td><h5>Total</h5></td>
                        <td align="right">${total + total * 0.1}</td>
                      </tr>
                    </tbody>
                  </table>
                  {carts.length > 0 ? (<Link
                    to="/checkout"
                    className="btn cart w-100"
                    onClick={() =>
                      this.onCheckout(current_user, {
                        cart: carts,
                        total: total
                      })
                    }
                  >
                    Proceed to checkout
                  </Link>
                  ) : (
                      ""
                    )}


                </div>
              </div>
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
  carts: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired,
  addCheckout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  // items is defined in productReducer
  carts: state.cart.cart,
  total: state.cart.total
});

export default connect(mapStateToProps, { removeItem, emptyCart, addCheckout })(Cart)
