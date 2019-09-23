import React, { Component } from 'react'

export default class FeatureProducts extends Component {
  render() {
    return (
      <>
        <div id="featured-products">
          <div className="container">
            <h2 className="wow fadeInDown">Featured Products</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html">
                  <div className="badge">
                    <div className="text">Sale 14%</div>
                    <img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /> </div>
                </a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$16.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 16%</div>
                    <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$16.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div id="carousel-3" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                      <div className="carousel-item"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-4.jpg" alt="" /></a> </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-3" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-3" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-9"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-10"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8"><i className="fa fa-eye" aria-hidden="true" /></button>
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
