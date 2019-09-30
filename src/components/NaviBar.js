import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavCart from "./NaviComps/NavCart"

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
                            <div className="dropdown-menu dropdown-menu-right animate slideIn">
                              <Link className="dropdown-item" to="/login">Login</Link> <Link className="dropdown-item" to="/my_account">My Account</Link> <Link className="dropdown-item" to="/register">Register</Link> <Link className="dropdown-item" to="/forgot_password">Forgot Password</Link>
                            </div>
                          </li>

                          <li><Link to="/wish_list"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">1</span></Link></li>
                          <li className="dropdown">
                            <NavCart carts={carts} />
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
          <div className="container">
            <Link className="navbar-brand" to="/"> <img src="/assets/images/logo.png" alt="" title="HOME" className="img-fluid" />
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" /> <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="dropdown-toggle btn btn-out-line" href="#" id="Dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home
                  </button>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown1">
                    <h5>Informations</h5>
                    <Link className="dropdown-item" to="/home">Home</Link>
                    <Link className="dropdown-item" to="/about">About Us</Link>
                    <Link className="dropdown-item" to="/faq">FAQ</Link>
                    <Link className="dropdown-item" to="/term_and_condition">Terms And Conditions</Link> <Link className="dropdown-item" to="/contact">Contact Us</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <button className="dropdown-toggle btn btn-out-line" id="Dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Shops
                  </button>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown2">
                    <h5>Organic Shops</h5>
                    <Link className="dropdown-item" to="/shops">Organic Shop</Link>
                    <Link className="dropdown-item" to="/shops">Wonderful Shop</Link>
                    <Link className="dropdown-item" to="/comming_soon">Other Shops</Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <button className="dropdown-toggle btn btn-out-line customHover" href="#" id="Dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blog
                </button>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown3">
                    <h5>Blogs / Products Reviews</h5>
                    <Link className="dropdown-item" to="/blogs">All Blogs</Link> <Link className="dropdown-item" to="/comming_soon">My Blogs</Link> <Link className="dropdown-item" to="/comming_soon">Organic News</Link> </div>
                </li>
                <li className="nav-item dropdown">
                  <button className="dropdown-toggle btn btn-out-line" href="#" id="Dropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages
                </button>
                  <div className="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="Dropdown4">
                    <h5>Quick Links</h5>
                    <Link className="dropdown-item" to="/cart">Cart</Link> <Link className="dropdown-item" to="/wish_list">Wish List</Link> <Link className="dropdown-item" to="/checkout">Checkout</Link> </div>
                </li>

              </ul>

              <div className="rate-price nav-1">
                <ul>
                  <li className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"> <i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                    <div className="dropdown-menu dropdown-menu-right animate slideIn"> <Link className="dropdown-item" to="/login">Login</Link> <Link className="dropdown-item" to="/my_account">My Account</Link> <Link className="dropdown-item" to="/register">Register</Link> <Link className="dropdown-item" to="/forgot_password">Forgot Password</Link> </div>
                  </li>
                  <li><Link to="/wish_list"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">1</span></Link>
                  </li>

                  <li className="dropdown">
                    <NavCart carts={carts} />
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