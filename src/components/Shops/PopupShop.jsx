import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
class PopupShop extends Component {
  state = { quant: 1 };
  onClickCart = (item, num) => {
    console.log("onclickCart in PopupShop-Card", item, num);
    this.props.addToCart(item, num);
    // this.props.addToCart(this.props.product);
  };

  render() {
    const { product } = this.props;
    return (
      <div id={product.popupId} className="popup-fcy">
        <div className="row">
          <div className="col-md-6 text-center">
            {" "}
            <img
              src={product.popupImg}
              alt=""
              title
              className="img-fluid"
            />{" "}
          </div>
          <div className="col-md-6">
            <div className="product_meta">
              <p>
                Availability : <span>{product.isAvailable}</span>{" "}
              </p>
              <p>
                Categories : <span>{product.popupCat}</span>
              </p>
              <p>
                Tags : <span>{product.popupTag}</span>{" "}
              </p>
            </div>
            <div className="product-dis">
              <h3>{product.name}</h3>
              <hr />
              <p>{product.popupDesc}</p>
              <div className="row">
                <div className="col-2 pr-0">
                  <input
                    type="number"
                    className="input-text qty text"
                    step={1}
                    min={1}
                    max={50}
                    onChange={e => this.setState({ quant: e.target.value })}
                    defaultValue={1}
                    title="Qty"
                    size={4}
                    value={this.state.quant}
                  />
                </div>
                <div className="col-10">
                  <div>
                    <div className="row">
                      <div className="col-6">
                        <div className="add_to_cart">
                          <button
                            className="btn cart"
                            onClick={() =>
                              this.onClickCart(product, this.state.quant)
                            }
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-4 p-0">
                  <hr className="m-0 p-0" />
                </div>
                <div className="pb-3 pt-3">
                  <div className="left-icon">
                    {" "}
                    <a href="#" className="mr-1">
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>{" "}
                    <a href="#" className="mr-3">
                      <i className="fa fa-balance-scale" aria-hidden="true" />
                    </a>{" "}
                  </div>
                </div>
                <div className="col-md-12 mb-4 p-0">
                  <hr className="m-0 p-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PopupShop.propsTypes = {
  addToCart: PropTypes.func.isRequired
};
export default connect(
  null,
  { addToCart }
)(PopupShop);
