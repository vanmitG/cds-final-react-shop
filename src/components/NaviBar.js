import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
class NaviBar extends Component {
  render() {
    const { carts } = this.props
    console.log('navibar', carts.length)
    return (
      <>
        {/* Navigation */}
        <div className="top-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 top-div top1">
                <ul>
                  <li><a href="mailto:apply@coderschool.vn"><i className="fa fa-envelope" /> &nbsp;apply@coderschool.vn</a></li>
                  <li>|</li>
                  <li><i className="fa fa-phone" aria-hidden="true" /> +84 984 326 569</li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-6 col-md-12 position-relative">
                <div className="right-div">
                  {/* for small size screen */}
                  <ul>
                    <li>
                      <ul className="social-network">
                        <li><a href="/comming_soon" className="icoRss" title="RSS"><i className="fa fa-rss" /></a></li>
                        <li><a href="/comming_soon" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="/comming_soon" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="/comming_soon" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="/comming_soon" className="icoLinkedin" title="Linkin"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </li>
                    <li>
                      <ul className="top-ul">
                        <li>
                          <div className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"><img src="/assets/images/flag.jpg" alt="" title="" /> English <i className="fa fa-angle-down" /></a>
                            <div className="dropdown-menu flag-css dropdown-menu-right"> <a href="#">English</a> <a href="#"><span className="flag-icon flag-icon-fr"> </span>French</a> <a href="#"><span className="flag-icon flag-icon-it"> </span>Italian</a> <a href="#"><span className="flag-icon flag-icon-ru"> </span>Russian</a> </div>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown"> <a className="dropdown-toggle currency" href="#" data-toggle="dropdown"> <i className="fa fa-angle-down" /></a>
                            <ul className="dropdown-menu drop1 dropdown-menu-right">
                              <li className="dropdown-item"><a href="#"> US Dollar</a></li>
                              <li className="dropdown-item"><a href="#"> British Pound</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="rate-price rate-price2">
                        <ul>
                          <li className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"> <i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                            <div className="dropdown-menu dropdown-menu-right animate slideIn"> <Link className="dropdown-item" to="/login">Login</Link> <Link className="dropdown-item" to="/my_account">My Account</Link> <Link className="dropdown-item" to="/register">Register</Link> <Link className="dropdown-item" to="/forgot_password">Forgot Password</Link> </div>
                          </li>
                          <li><Link to="/wish_list"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">{carts.length}</span></Link></li>
                          <li className="dropdown"> <a className="dropdown-toggle link" href="#" data-toggle="dropdown"><i className="fa fa-shopping-bag" aria-hidden="true" /><span className="circle-2">{carts.length}</span></a>
                            <div className="dropdown-menu dropdown-menu2 dropdown-menu-right  animate slideIn">
                              <div className="container">
                                <div className="row">
                                  <div className="col-3"><img src="/assets/images/fruits/img-1.jpg" alt="" title className="img-fluid" /></div>
                                  <div className="col-9">
                                    <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                    <a href="#" className="close">x</a> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-3"><img src="/assets/images/fruits/img-2.jpg" alt="" title className="img-fluid" /></div>
                                  <div className="col-9">
                                    <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                    <a href="#" className="close">x</a> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-3"><img src="/assets/images/fruits/img-3.jpg" alt="" title className="img-fluid" /></div>
                                  <div className="col-9">
                                    <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                    <a href="#" className="close">x</a> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-3"><img src="/assets/images/fruits/img-4.jpg" alt="" title className="img-fluid" /></div>
                                  <div className="col-9">
                                    <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                    <a href="#" className="close">x</a> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-3">
                                    <p className="font-15">Tax </p>
                                  </div>
                                  <div className="col-9 text-right"> <span className="font-15">$ 2.80</span> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-3">
                                    <p className="font-15"><strong>Total</strong></p>
                                  </div>
                                  <div className="col-9 text-right"> <span className="font-15"><strong>$ 10.80</strong></span> </div>
                                  <div className="col-md-12">
                                    <hr />
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <Link to="/checkout" type="button" className="btn check-out w-100">checkout</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <div className="container"> <a className="navbar-brand" href="/"> <img src="/assets/images/logo.png" alt="" title="" className="img-fluid" /> </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" /> </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home </a>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown1"><Link className="dropdown-item" to="/home">Home</Link> <Link className="dropdown-item" to="/about">About Us</Link> <Link className="dropdown-item" to="/faq">FAQ</Link> <Link className="dropdown-item" to="/term_and_condition">Terms And Conditions</Link> <Link className="dropdown-item" to="/contact">Contact Us</Link> </div>
                </li>
                <li className="nav-item dropdown megamenu-li"> <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> SHOPS </a>
                  <div className="dropdown-menu megamenu animate slideIn">
                    <div className="row">
                      <div className="col-sm-6 col-lg-4">
                        <h5>Organic Stores</h5>
                        <Link className="dropdown-item" to="/shops">CDS-Ecom</Link> <Link className="dropdown-item" to="/shops">Another Awesome Shop</Link> <Link className="dropdown-item" to="/comming_soon">Another Wonderful Shop</Link> <Link className="dropdown-item" to="/comming_soon">Shop 4</Link> <Link className="dropdown-item" to="/comming_soon">Shop 5</Link> </div>
                      <div className="col-sm-6 col-lg-4">
                        <h5>Dietary Supplement Stores</h5>
                        <Link className="dropdown-item" to="/shops">Kunni Stores</Link> <Link className="dropdown-item" to="/shops">Kinni Stores</Link> <Link className="dropdown-item" to="/shops">Monni Stores</Link> <Link className="dropdown-item" to="/comming_soon">Shop 4</Link> <Link className="dropdown-item" to="/comming_soon">Shop 5</Link> </div>
                      <div className="col-sm-6 col-lg-4">
                        <h5>Natural Herbs</h5>
                        <Link className="dropdown-item" to="/comming_soon">Top Shop</Link> <Link className="dropdown-item" to="/comming_soon">Shop 2</Link> <Link className="dropdown-item" to="/comming_soon">Shop 3</Link> </div>
                      <div className="clearfix" />
                      <div className="col-md-12">
                        <hr />
                      </div>
                      <div className="col-md-6"><img src="/assets/images/page-img/menu-img.jpg" alt="" title="" className="img-fluid" /></div>
                      <div className="col-md-6"><img src="/assets/images/page-img/menu2-img.jpg" alt="" title="" className="img-fluid" /></div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu-li"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Category </a>
                  <div className="dropdown-menu megamenu animate slideIn" aria-labelledby="navbarDropdownBlog">
                    <div className="row">
                      <div className="col-sm-6 col-lg-3">
                        <h5>Dried Fruits</h5>
                        <Link className="dropdown-item" to="/comming_soon">Almond</Link> <Link className="dropdown-item" to="/comming_soon">Apricot</Link> <Link className="dropdown-item" to="/comming_soon">Arrowroot</Link> <Link className="dropdown-item" to="/comming_soon">Cantaloupe </Link> <Link className="dropdown-item" to="/comming_soon">Cashew</Link> </div>
                      <div className="col-sm-6 col-lg-3">
                        <h5>Fruits</h5>
                        <Link className="dropdown-item" to="/comming_soon">Apples</Link> <Link className="dropdown-item" to="/comming_soon">Apricots</Link> <Link className="dropdown-item" to="/comming_soon">Bananas</Link> <Link className="dropdown-item" to="/comming_soon">Cantaloupe</Link> <Link className="dropdown-item" to="/comming_soon">Cherry</Link> </div>
                      <div className="col-sm-6 col-lg-3">
                        <h5>Juice</h5>
                        <Link className="dropdown-item" to="/comming_soon">Sugarcane </Link> <Link className="dropdown-item" to="/comming_soon">Wheatgrass</Link> <Link className="dropdown-item" to="/comming_soon">Arrowroot</Link> <Link className="dropdown-item" to="/comming_soon">Grapefruit</Link> <Link className="dropdown-item" to="/comming_soon">Otai</Link> </div>
                      <div className="col-sm-6 col-lg-3">
                        <p><img src="/assets/images/page-img/menu3-img.jpg" alt="" title className="img-fluid" /></p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blog </a>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown3">
                    <h5>Blogs / Products Reviews</h5>
                    <Link className="dropdown-item" to="/blogs">All Blogs</Link> <Link className="dropdown-item" to="/comming_soon">My Blogs</Link> <Link className="dropdown-item" to="/comming_soon">Organic News</Link> </div>
                </li>
                <li className="nav-item dropdown megamenu-li"> <a className="nav-link dropdown-toggle" href="#" id="Dropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a>
                  <div className="dropdown-menu megamenu animate slideIn">
                    <div className="row">
                      <div className="col-sm-6 col-lg-4">
                        <h5>My Account</h5>
                        <Link className="dropdown-item" to="/login">Login</Link> <Link className="dropdown-item" to="/my_account">My Account</Link> <Link className="dropdown-item" to="/register">Register</Link> <Link className="dropdown-item" to="/forgot_password">Forgot Password</Link> </div>
                      <div className="col-sm-6 col-lg-4">
                        <h5>Quick Links</h5>
                        <Link className="dropdown-item" to="/cart">Cart</Link> <Link className="dropdown-item" to="/wish_list">Wish Lists</Link>  <Link className="dropdown-item" to="/checkout">Checkout</Link> </div>
                      <div className="col-sm-6 col-lg-4"> <Link className="dropdown-item" to="/about">About Us</Link> <Link className="dropdown-item" to="/term_and_condition">Terms Conditions</Link> <Link className="dropdown-item" to="/faq">FAQ</Link><Link className="dropdown-item" to="/contact">Contact</Link> </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="rate-price nav-1">
                <ul>
                  <li className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"> <i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                    <div className="dropdown-menu dropdown-menu-right animate slideIn"> <Link className="dropdown-item" to="/login">Login</Link> <Link className="dropdown-item" to="/my_account">My Account</Link> <Link className="dropdown-item" to="/register">Register</Link> <Link className="dropdown-item" to="/forgot_password">Forgot Password</Link> </div>
                  </li>
                  <li><Link to="/wish_list"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">1</span></Link></li>
                  <li className="dropdown"> <a className="dropdown-toggle link" href="#" data-toggle="dropdown"><i className="fa fa-shopping-bag" aria-hidden="true" /><span className="circle-2">{carts.length}</span></a>
                    <div className="dropdown-menu dropdown-menu2 dropdown-menu-right animate slideIn">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3"><img src="/assets/images/fruits/img-1.jpg" alt="" title className="img-fluid" /></div>
                          <div className="col-md-9">
                            <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                            <a href="#" className="close">x</a> </div>
                          <div className="col-md-12">
                            <hr />
                          </div>
                          <div className="col-md-3"><img src="/assets/images/fruits/img-2.jpg" alt="" title className="img-fluid" /></div>
                          <div className="col-md-9">
                            <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                            <a href="#" className="close">x</a> </div>
                          <div className="col-md-12">
                            <hr />
                          </div>
                          <div className="col-md-3"><img src="/assets/images/fruits/img-3.jpg" alt="" title className="img-fluid" /></div>
                          <div className="col-md-9">
                            <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                            <a href="#" className="close">x</a> </div>
                          <div className="col-md-12">
                            <hr />
                          </div>
                          <div className="col-md-3"><img src="/assets/images/fruits/img-4.jpg" alt="" title className="img-fluid" /></div>
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
        {/* Navigation */}
      </>
    )
  }
}
NaviBar.propsTypes = {
  carts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  // items is defined in productReducer
  carts: state.cart.cart
});

export default connect(mapStateToProps)(NaviBar)