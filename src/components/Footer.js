import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <>
        {/* Footer */}

        <div id="newsletter">

          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h4>Join Our Newsletter Now</h4>
                <p className="m-0">Get E-mail updates about our latest shop and special offers.</p>
              </div>
              <div className="col-md-5">
                <div className="input-group">
                  <input type="email" className="form-control newsletter" placeholder="Enter your mail" />
                  <span className="input-group-btn">
                    <button className="btn btn-theme" type="submit">Subscribe</button>
                  </span> </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 address wow fadeInLeft">
              <div className="footer-logo"><a href="/home"><img src="/assets/images/logo.png" alt="" title="Home" className="img-fluid" /></a> </div>
              <p>Address: Copac Square, 12 Duong Ton Dan, Phuong 13, Quan 4, Thanh Pho Ho Chi Minh</p>
              <p>Phone: +84 984 326 569</p>
              <p>Email: <a href="mailto:apply@coderschool.vn">apply@coderschool.vn</a></p>
              <ul className="social-2">
                <li><Link to="/comming_soon" title="facebook"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="/comming_soon" title="instagram +"><i className="fa fa-instagram" /></Link></li>
                <li><Link to="/comming_soon" title="twitter"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="/comming_soon" title="pinterest"><i className="fa fa-pinterest" /></Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
              <h3>Information</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/term_and_condition">Terms And Conditions</Link></li>
                <li><Link to="/contact">Contact</Link></li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
              <h3>My Account</h3>
              <ul>
                <li><Link to="/my_account">My Account</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/forgot_password">Forgot Password</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
              <h3>Quick Link</h3>
              <ul>
                <li><Link to="/shops">Shops</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/wish_list">Wish List</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="py-4 bg-dark">
          <div className="container copy-right">
            <div className="row">
              <div className="col-md-6 text-white"> Copyright © 2019 <a href="/home"> CDS-Ecom Organic Store </a>- All Rights Reserved. </div>
              <div className="col-md-6 payment">
                <div className="pull-right"> <Link to="/comming_soon"><img src="/assets/images/skrill.png" alt="" title="Skrill" /></Link> <Link to="/comming_soon"><img src="/assets/images/ob.png" alt="" title="Bit Coin" /></Link> <Link to="/comming_soon"><img src="/assets/images/paypal.png" alt="" title="PayPal" /></Link> <Link to="/comming_soon"><img src="/assets/images/am.png" alt="" title="America Express" /></Link> <Link to="/comming_soon"><img src="/assets/images/mr.png" alt="" title="Master Card" /></Link> <Link to="/comming_soon"><img src="/assets/images/visa.png" alt="" title="Visa" /></Link> </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

