import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'

const SideBar = () => {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12">
      <div className="inner-left-menu">
        <h3>Departments</h3>
        <div className="list-css">
          <ul>
            <li><a href="shop.html">Fresh Fruits</a></li>
            <li><a href="shop.html">Fruit &amp; Nut Gifts</a></li>
            <li><a href="shop.html">Ocean Foods</a></li>
            <li><a href="shop.html">Butter &amp; Eggs</a></li>
            <li><a href="shop.html">Fastfood</a></li>
            <li><a href="shop.html">Fresh Onion</a></li>
            <li><a href="shop.html">Papaya &amp; Crisps</a></li>
            <li><a href="shop.html">Oatmeal</a></li>
            <li><a href="shop.html">Fresh Bananas</a></li>
          </ul>
        </div>
        <h3>Filter By Price</h3>
        <div className="price-range-block">
          <div id="slider-range" className="price-filter-range" />
          <div className="row">
            <div className="col-9 p-0">
              <input type="number" min={0} max={9900} oninput="validity.valid||(value='0');" id="min_price" className="price-range-field" />
              <input type="number" min={0} max={10000} oninput="validity.valid||(value='10000');" id="max_price" className="price-range-field" />
            </div>
            <div className="col-3 p-0">
              <button type="button" className="btn btn-filter">Filter</button>
            </div>
          </div>
          <br />
        </div>
        <h3>Popular Picks</h3>
        <div className="list-css">
          <ul>
            <li>
              {/* Default unchecked */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked-1" />
                <label className="custom-control-label" htmlFor="defaultUnchecked-1">Top Sales</label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked-2" />
                <label className="custom-control-label" htmlFor="defaultUnchecked-2">New Products</label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked-3" />
                <label className="custom-control-label" htmlFor="defaultUnchecked-3">Featured Products</label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked-4" />
                <label className="custom-control-label" htmlFor="defaultUnchecked-4">Bestsellers</label>
              </div>
            </li>
          </ul>
        </div>
        <h3>Product Tags</h3>
        <div className="tag_bottom"><a className="tag-btn" href="#">organic</a><a className="tag-btn" href="shop_grid%2blist_3col.html">vegatable</a><a className="tag-btn" href="#">fruits</a><a className="tag-btn" href="#">fresh meat</a><a className="tag-btn" href="#">fastfood</a><a className="tag-btn" href="#">natural</a></div>
      </div>
    </div>
  )
}

const ProductsListHeader = () => {
  return (
    <div className="right-heading">
      <div className="row">
        <div className="col-md-4 col-4">
          <h3>Organic Shops</h3>
        </div>
        <div className="col-md-8 col-8">
          <div className="product-filter">
            <div className="view-method"> <a href="#" id="grid"><i className="fa fa-th-large" /></a> <a href="#" id="list"><i className="fa fa-list" /></a> </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default class Shops extends Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="container">
          <BreadCrumb page='Organic Shops' />
          <div className="row">
            <SideBar />
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-12">
                  <ProductsListHeader />
                  <div className="clearfix" />
                  <div id="products" className="row view-group">
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="sale-flag-side"> <span className="sale-text">Sale</span> </div>
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image" href="single_product.html"> <img className="img-fluid" src="assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Green Apple</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="sale-flag-side"> <span className="sale-text">Sale</span> </div>
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-2.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">kiwi</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-3.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Orange</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-4.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Acai Berry</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-4" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="sale-flag-side"> <span className="sale-text">Sale</span> </div>
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-5.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Maracuja</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-6.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Vegetables</h5>
                          <h3 className="product-name">Cucumber</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-7.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Vegetable</h5>
                          <h3 className="product-name">Mushrooms</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-8.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Khaki</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item col-lg-4 col-md-4 mb-4 mb-4">
                      <div className="thumbnail card product">
                        <div className="img-event"> <a className="group list-group-image img-fluid" href="single_product.html"><img src="assets/images/product-img/product-img-10.jpg" alt="" className="img-fluid" /></a> </div>
                        <div className="caption card-body">
                          <h5 className="product-type">Fruits</h5>
                          <h3 className="product-name">Nectarine</h3>
                          <div className="product-table">
                            <p>Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                            <div className="row m-0">
                              <div className="col p-0">
                                <h3 className="product-price pull-left"><span>$14.00</span></h3>
                                <div className="product-price pull-left">
                                  <form className="form-inline">
                                    <div className="stepper-widget">
                                      <button type="button" className="js-qty-down">-</button>
                                      <input type="text" className="js-qty-input" defaultValue={1} />
                                      <button type="button" className="js-qty-up">+</button>
                                      <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
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
                              <h3 className="product-price">$14.00</h3>
                            </div>
                            <div className="col-12 p-0">
                              <div className="product-price">
                                <form className="form-inline">
                                  <div className="stepper-widget">
                                    <button type="button" className="js-qty-down">-</button>
                                    <input type="text" className="js-qty-input" defaultValue={1} />
                                    <button type="button" className="js-qty-up">+</button>
                                    <button onclick="window.location.href='cart.html'" className="add2"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="product-select">
                            <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-9" href="javascript:;"><i className="fa fa-eye" aria-hidden="true" /></button>
                            <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    {/* Pagination */}
                    <div className="text-center col">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-template d-flex justify-content-center float-none">
                          <li className="page-item"><a href="#" className="page-link"> <i className="fa fa-angle-left" /></a></li>
                          <li className="page-item"><a href="#" className="page-link active">1</a></li>
                          <li className="page-item"><a href="#" className="page-link">2</a></li>
                          <li className="page-item"><a href="#" className="page-link">3</a></li>
                          <li className="page-item"><a href="#" className="page-link"> <i className="fa fa-angle-right" /></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>

        <div id="popup-1" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/product-big-1.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="popup-2" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/kiwi.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-3" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="assets/images/product-img/orange.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-4" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="assets/images/product-img/acai-berry.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-5" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-6" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-7" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-8" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="assets/images/product-img/persimmon.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-9" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="assets/images/product-img/nectarine.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
      </>
    )
  }
}
