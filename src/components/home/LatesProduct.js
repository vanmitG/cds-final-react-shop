import React, { Component } from 'react'

export default class LatesProduct extends Component {
  render() {
    return (
      <>
        <div className="products-section">
          <div className="container">
            <h2 className="wow fadeInDown">Latest Products</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">
              <div className="item">
                <div className="product">
                  <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="badge">
                          <div className="text">Sale 10%</div>
                          <a className="product-img" href="#"><img src="/template/assets/images/product-img/product-img-2.jpg" alt="#" /></a> </div>
                      </div>
                      <div className="carousel-item">
                        <div className="badge">
                          <div className="text">Sale 10%</div>
                          <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /> </a> </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="product-type">Green Apple</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$10.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$13.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Orange</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-4.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$18.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-4"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="/shop/<id>"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$13.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
