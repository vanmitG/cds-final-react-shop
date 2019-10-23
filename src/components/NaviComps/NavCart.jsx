import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions/cartAction";

class NavCart extends Component {
  static propsTypes = {
    removeItem: PropTypes.func.isRequired,
    carts: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  };

  onCheckOut = () => {
    console.log("/checkout");
  };
  onDelete = i => {
    console.log("delete item #", i);
    this.props.removeItem(i);
  };
  render() {
    const { carts, total } = this.props;
    return (
      <>
        <button
          className="dropdown-toggle link customHover"
          data-toggle="dropdown"
        >
          <i className="fa fa-shopping-bag" aria-hidden="true" />

          {carts.length > 0 ? (
            <span className="circle-2">{carts.length}</span>
          ) : (
            ""
          )}
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
                          <span className="price">$ {cart.item.price}</span>
                        </p>
                        <button
                          onClick={() => this.onDelete(i)}
                          className="close"
                          style={{ color: "red" }}
                        >
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
                <span className="font-15">{total * 0.1}</span>{" "}
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
                  <strong>{total * 0.1 + total}</strong>
                </span>{" "}
              </div>
              <div className="col-md-12">
                <hr />
              </div>
              <div className="col-md-12 text-center">
                <Link
                  to="/checkout"
                  className="btn check-out w-100"
                  onClick={() => this.onCheckOut()}
                >
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

const mapStateToProps = state => ({
  // items is defined in productReducer
  carts: state.cart.cart,
  total: state.cart.total
});

export default connect(
  mapStateToProps,
  { removeItem }
)(NavCart);
