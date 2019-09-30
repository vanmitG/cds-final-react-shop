import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavCart extends Component {
  onCartClick = () => {
    console.log("/cart");
  };
  render() {
    const { carts } = this.props;
    return (
      <>
        <button
          className="dropdown-toggle link customHover"
          // href="#"
          data-toggle="dropdown"
        >
          <i className="fa fa-shopping-bag" aria-hidden="true" />
          <span className="circle-2">{carts.length}</span>
        </button>
        <div className="dropdown-menu dropdown-menu2 dropdown-menu-right animate slideIn">
          <div className="container">
            <div className="row">
              {carts &&
                carts.map((cart, i) => {
                  return (
                    <>
                      <div key={i} className="col-md-3">
                        <img
                          src={cart.item.img_src}
                          alt=""
                          title=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-9">
                        <p>
                          {cart.quantity} x {cart.item.name}
                          <span className="price">$ {cart.item.price}.70</span>
                        </p>
                        <button href="#" className="close">
                          x
                        </button>{" "}
                      </div>
                      <div className="col-md-12">
                        <hr />
                      </div>
                    </>
                  );
                })}
              <div className="col-md-3">
                <p className="font-15">Tax </p>
              </div>
              <div className="col-md-9 text-right">
                {" "}
                <span className="font-15">$ 2.80</span>{" "}
              </div>
              <div className="col-md-12">
                <hr />
              </div>
              <div className="col-md-3">
                <p className="font-15">
                  <strong>Total</strong>
                </p>
              </div>
              <div className="col-md-9 text-right">
                {" "}
                <span className="font-15">
                  <strong>$ 10.80</strong>
                </span>{" "}
              </div>
              <div className="col-md-12">
                <hr />
              </div>
              <div className="col-md-12 text-center">
                <Link to="/checkout" className="btn check-out w-100">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
