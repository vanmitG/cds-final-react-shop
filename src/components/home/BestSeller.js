import React, { Component } from 'react'

export default class BestSeller extends Component {
  render() {
    return (
      <>
        {/*Three-images*/}
        <div id="bestsellers">
          <div className="container">
            <h2 className="wow fadeInDown">Bestsellers</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">
              <div className="item">
                <div className="product">
                  <div id="carousel-2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="badge">
                          <div className="text">Sale 14%</div>
                          <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-1.jpg" alt="" /> </a> </div>
                      </div>
                      <div className="carousel-item">
                        <div className="badge">
                          <div className="text">Sale 14%</div>
                          <a className="product-img" href="single_product.html"><img src="/template/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                  <a className="fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Strawberry</h3>
                  <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-11"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/fruits/img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star " /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">DRIED FRUITS</h5>
                  <h3 className="product-name">Fresh Walnut</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-12"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/fruits/img-4.jpg" alt="" /></a> <a className="fa fa-star fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Black Cherries</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-13"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/fruits/img-5.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Juice</h5>
                  <h3 className="product-name">Strawberry Juices</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-14"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/fruits/img-1.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star " /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">DRIED FRUITS</h5>
                  <h3 className="product-name">Fresh Walnut</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-15"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/template/assets/images/fruits/img-4.jpg" alt="" /></a> <a className="fa fa-star fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Black Cherries</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-13"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
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
