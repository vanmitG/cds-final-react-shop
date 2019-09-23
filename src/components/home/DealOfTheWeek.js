import React, { Component } from 'react'

export default class DealOfTheWeek extends Component {
  render() {
    return (
      <>
        <div id="deal-of-the-week">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center mb-1">
                <div className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <figure className="imghvr-push-right"> <a href="shop.html"><img src="/template/assets/images/page-img/sale.jpg" className="img-fluid" alt="" title /></a>
                        <figcaption>
                          <h3>Sale off Up to 30% </h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the...</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="carousel-item">
                      <figure className="imghvr-push-right"> <a href="shop.html"><img src="/template/assets/images/page-img/sale3.jpg" className="img-fluid" alt="" title /></a>
                        <figcaption>
                          <h3>Bestsellers</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the...</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center mb-1">
                <div className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"> <img src="/template/assets/images/page-img/sale2.jpg" className="img-fluid" alt="" title /> </div>
                    <div className="carousel-item"><img src="/template/assets/images/page-img/sale4.jpg" className="img-fluid" alt="" title /></div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <h2 className="text-center wow fadeInDown">Deal Of The Week</h2>
              <div className="clearfix" />
            </div>
            <div>
              <div className="owl-carousel latest-products owl-theme wow fadeIn">
                <div className="item">
                  <div className="product">
                    <div id="carousel-1" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                        <div className="carousel-item"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-4.jpg" alt="" /></a> </div>
                      </div>
                      <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                    <a className="fa fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-16"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-2.jpg" alt="" /></a> <a className="fa fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-17"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-18"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-4.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-19"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-4.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-20"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-18"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
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
