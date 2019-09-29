import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
// import { addToWishList } from "../../redux/actions/wishListAction";

class ProductCard extends Component {
  onClickCart = (item, num) => {
    console.log("onclickCart in ProductCard", item, num);
    this.props.addToCart(item, num);
    // this.props.addToCart(this.props.product);
  };
  // onClickWishList = (item, num) => {
  //   console.log("onclickWishList in ProductCard", item, num);
  //   this.props.addToWishList(item, num);
  //   // this.props.addToCart(this.props.product);
  // };
  render() {
    const { product } = this.props;
    return (
      <div className="item col-lg-4 col-md-4 mb-4 mb-4">
        <div className="sale-flag-side">
          {" "}
          <span className="sale-text">Sale</span>{" "}
        </div>
        <div className="thumbnail card product">
          <div className="img-event">
            {" "}
            <Link
              className="group list-group-image"
              to={`/shops/${product.id}`}
            >
              {" "}
              <img className="img-fluid" src={product.img_src} alt="" />
            </Link>{" "}
          </div>
          <div className="caption card-body">
            <h5 className="product-type">{product.type}</h5>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-table">
              <p>{product.short_desc}</p>
              <div className="row m-0">
                <div className="col p-0">
                  <h3 className="product-price pull-left">
                    <span>${product.price}.00</span>
                  </h3>
                  <div className="product-price pull-left">

                    <form className="form-inline">

                      <div className="stepper-widget">
                        <button type="button" className="js-qty-down">
                          -
                        </button>
                        <input
                          type="text"
                          className="js-qty-input"
                          defaultValue={1}
                        />
                        <button type="button" className="js-qty-up">
                          +
                        </button>

                        <button
                          onclick="window.location.href='cart.html'"
                          className="add2"
                        >
                          <i
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div> </div>
            </div>
            <div className="row m-0 list-n">
              <div className="col-12 p-0">
                <h3 className="product-price">${product.price}.00</h3>
              </div>
              <div className="col-12 p-0">
                <div className="product-price">
                  <form className="form-inline">
                    <div className="stepper-widget">
                      <button type="button" className="js-qty-down">
                        -
                      </button>
                      <input
                        type="text"
                        className="js-qty-input"
                        defaultValue={1}
                      />
                      <button type="button" className="js-qty-up">
                        +
                      </button>
                      <button
                        onclick="window.location.href='cart.html'"
                        className="add2"
                      >
                        <i className="fa fa-shopping-bag" aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row m-3"></div>

            <div className="row p-3">
              <div className="product-select">
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Quick view"
                  className="add-to-compare round-icon-btn mr-1"
                  data-fancybox="gallery"
                  data-src={`#${product.popupId}`}
                  data-original-title="Quick view"
                >
                  <i className="fa fa-eye" aria-hidden="true" />
                </button>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Wishlist"
                  className="add-to-wishlist round-icon-btn"
                  onClick={() => this.onClickCart(product, 5)}
                >
                  <i className="fa fa-heart-o" aria-hidden="true" />
                </button>
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ADD TO CART"
                  className="add-to-wishlist round-icon-btn"
                  onClick={() => this.onClickCart(product, 5)}
                >
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ProductCard.propsTypes = {
//   addToCart: PropTypes.func.isRequired
// };

export default connect(
  null,
  { addToCart }
)(ProductCard);

