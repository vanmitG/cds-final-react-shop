import React, { Component } from "react";

export default class PopupShop extends Component {
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
                    name="quantity"
                    defaultValue={1}
                    title="Qty"
                    size={4}
                  />
                </div>
                <div className="col-10">
                  <div>
                    <div className="row">
                      <div className="col-6">
                        <div className="add_to_cart">
                          <a href="cart.html" className="">
                            ADD TO CART
                          </a>
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
