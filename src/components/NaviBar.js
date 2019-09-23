import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

export default class NaviBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-white">
        <div className="container"> <a className="navbar-brand" href="/"> <img src="template/assets/images/logo.png" alt="" title className="img-fluid" /> </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" /> </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              {/* Home Start */}
              <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="/" id="Dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home </Link>
                <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown3">
                  <h5>Organic Store Information</h5>
                  <Link className="dropdown-item" to="/home">Home</Link> <Link className="dropdown-item" to="/about">About Us</Link> <Link className="dropdown-item" to="/term_and_condition">Terms And Conditions</Link> <Link className="dropdown-item" to="/contact">Contact Us</Link> </div>
              </li>
              {/* Home End */}

              <li className="nav-item dropdown megamenu-li"> <Link className="nav-link dropdown-toggle" to="/shops" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SHOP </Link>
                <div className="dropdown-menu megamenu animate slideIn">
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <h5>With sidebar</h5>
                      <a className="dropdown-item" href="shop.html">Shop Grid</a> <a className="dropdown-item" href="shop-col-3.html">Shop 3 columns</a> <a className="dropdown-item" href="shop-col-4.html">Shop 4 columns</a> <a className="dropdown-item" href="shop-col-5.html">Shop 5 columns</a> <a className="dropdown-item" href="shop-col-6.html">Shop 6 columns</a> </div>
                    <div className="col-sm-6 col-lg-4">
                      <h5>Without sidebar</h5>
                      <a className="dropdown-item" href="shop-w-o-sidebar.html">Shop Grid</a> <a className="dropdown-item" href="shop-w-o-sidebar-col-3.html">Shop 3 columns</a> <a className="dropdown-item" href="shop-w-o-sidebar-col-4.html">Shop 4 columns</a> <a className="dropdown-item" href="shop-w-o-sidebar-col-5.html">Shop 5 columns</a> <a className="dropdown-item" href="shop-w-o-sidebar-col-6.html">Shop 6 columns</a> </div>
                    <div className="col-sm-6 col-lg-4">
                      <h5>Shop</h5>
                      <a className="dropdown-item" href="shop-filter.html">Shop Top filter</a> <a className="dropdown-item" href="single_product.html">Product Detail</a> <a className="dropdown-item" href="single_product-2.html">Product Detail V2</a> </div>
                    <div className="clearfix" />
                    {/* <div className="col-md-12">
                      <hr />
                    </div>
                    <div className="col-md-6"><img src="template/assets/images/page-img/menu-img.jpg" alt="" title className="img-fluid" /></div>
                    <div className="col-md-6"><img src="template/assets/images/page-img/menu2-img.jpg" alt="" title className="img-fluid" /></div> */}
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Category </a>
                <div className="dropdown-menu megamenu animate slideIn" aria-labelledby="navbarDropdownBlog">
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <h5>Dried Fruits</h5>
                      <a className="dropdown-item" href="shop.html">Almond</a> <a className="dropdown-item" href="shop.html">Apricot</a> <a className="dropdown-item" href="shop.html">Arrowroot</a> <a className="dropdown-item" href="shop.html">Cantaloupe </a> <a className="dropdown-item" href="shop.html">Cashew</a> </div>
                    <div className="col-sm-6 col-lg-3">
                      <h5>Fruits</h5>
                      <a className="dropdown-item" href="shop.html">Apples</a> <a className="dropdown-item" href="shop.html">Apricots</a> <a className="dropdown-item" href="shop.html">Bananas</a> <a className="dropdown-item" href="shop.html">Cantaloupe</a> <a className="dropdown-item" href="shop.html">Cherry</a> </div>
                    <div className="col-sm-6 col-lg-3">
                      <h5>Juice</h5>
                      <a className="dropdown-item" href="shop.html">Sugarcane </a> <a className="dropdown-item" href="shop.html">Wheatgrass</a> <a className="dropdown-item" href="shop.html">Arrowroot</a> <a className="dropdown-item" href="shop.html">Grapefruit</a> <a className="dropdown-item" href="shop.html">Otai</a> </div>
                    <div className="col-sm-6 col-lg-3">
                      <p><img src="template/assets/images/page-img/menu3-img.jpg" alt="" title className="img-fluid" /></p>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              {/* BlogStart */}
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blog </a>
                <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown3">
                  <h5>Blog Pages</h5>
                  <a className="dropdown-item" href="blog-left-sidebar.html">Blog Left Sidebar</a> <a className="dropdown-item" href="blog-right-sidebar.html">Blog Right Sidebar</a> <a className="dropdown-item" href="blog-w-o-sidebar.html">Blog Without Sidebar</a> <a className="dropdown-item" href="blog-details.html">Blog Details</a> </div>
              </li>
              {/* /BlogEnd */}
              <li className="nav-item dropdown megamenu-li"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a>
                <div className="dropdown-menu megamenu animate slideIn">
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <h5>My Account</h5>
                      <a className="dropdown-item" href="login.html">Login</a> <a className="dropdown-item" href="my-account.html">My Account</a> <a className="dropdown-item" href="register.html">Register</a> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a> </div>
                    <div className="col-sm-6 col-lg-4">
                      <h5>Page Link</h5>
                      <a className="dropdown-item" href="cart.html">Cart</a> <a className="dropdown-item" href="cart-2.html">Cart v2</a> <a className="dropdown-item" href="gift-card.html">Gift Card</a> <a className="dropdown-item" href="wishlist.html">Wishlist</a> <a className="dropdown-item" href="checkout.html">Checkout</a> <a className="dropdown-item" href="contact.html">Contact</a> <a className="dropdown-item" href="404.html">404 Error</a> <a className="dropdown-item" href="comingsoon.html">Coming soon</a> </div>
                    <div className="col-sm-6 col-lg-4"> <a className="dropdown-item" href="about-us.html">About Us</a> <a className="dropdown-item" href="terms-conditions.html">Terms Conditions</a> <a className="dropdown-item" href="faq.html">FAQ</a> </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="rate-price nav-1">
              <ul>
                <li className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"> <i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn"> <a className="dropdown-item" href="login.html">Login</a> <a className="dropdown-item" href="my-account.html">My Account</a> <a className="dropdown-item" href="register.html">Register</a> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a> </div>
                </li>
                <li><a href="wishlist.html"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">1</span></a></li>
                <li className="dropdown"> <a className="dropdown-toggle link" href="#" data-toggle="dropdown"><i className="fa fa-shopping-bag" aria-hidden="true" /><span className="circle-2">1</span></a>
                  <div className="dropdown-menu dropdown-menu2 dropdown-menu-right animate slideIn">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3"><img src="template/assets/images/fruits/img-1.jpg" alt="" title className="img-fluid" /></div>
                        <div className="col-md-9">
                          <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                          <a href="#" className="close">x</a> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-3"><img src="template/assets/images/fruits/img-2.jpg" alt="" title className="img-fluid" /></div>
                        <div className="col-md-9">
                          <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                          <a href="#" className="close">x</a> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-3"><img src="template/assets/images/fruits/img-3.jpg" alt="" title className="img-fluid" /></div>
                        <div className="col-md-9">
                          <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                          <a href="#" className="close">x</a> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-3"><img src="template/assets/images/fruits/img-4.jpg" alt="" title className="img-fluid" /></div>
                        <div className="col-md-9">
                          <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                          <a href="#" className="close">x</a> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-3">
                          <p className="font-15">Tax </p>
                        </div>
                        <div className="col-md-9 text-right"> <span className="font-15">$ 2.80</span> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-3">
                          <p className="font-15"><strong>Total</strong></p>
                        </div>
                        <div className="col-md-9 text-right"> <span className="font-15"><strong>$ 10.80</strong></span> </div>
                        <div className="col-md-12">
                          <hr />
                        </div>
                        <div className="col-md-12 text-center">
                          <input type="button" defaultValue="Check out" className="btn check-out w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </nav>

    )
  }
}
