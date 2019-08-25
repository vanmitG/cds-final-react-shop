import React, { Component } from 'react'

export default class FooterTop extends Component {
  render() {
    return (

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 address wow fadeInLeft">
            <div className="footer-logo"><img src="template/assets/images/logo.png" alt="" title className="img-fluid" /></div>
            <p>Address: Copac Square, 12 Duong Ton Dan, Phuong 13, Quan 4, Thanh Pho Ho Chi Minh</p>
            <p>Phone: +84 984 326 569</p>
            <p>Email: <a href="mailto:apply@coderschool.vn">apply@coderschool.vn</a></p>
            <ul className="social-2">
              <li><a href="#" title="facebook"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title="instagram +"><i className="fa fa-instagram" /></a></li>
              <li><a href="#" title="twitter"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title="Linkedin"><i className="fa fa-pinterest" /></a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
            <h3>Information</h3>
            <ul>
              <li><a href="template/about-us.html">About Us</a></li>
              <li><a href="template/faq.html">FAQ</a></li>
              <li><a href="template/contact.html">Contact</a></li>
              <li><a href="template/shop.html">Shop</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
            <h3>My Account</h3>
            <ul>
              <li><a href="template/my-account.html">My Account</a></li>
              <li><a href="template/login.html">login</a></li>
              <li><a href="template/wishlist.html">Wishlist</a></li>
              <li><a href="template/register.html">Register</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 footer-link  wow fadeInLeft">
            <h3>Quick Link</h3>
            <ul>
              <li><a href="template/cart.html">Cart</a></li>
              <li><a href="template/wishlist.html">Wishlist</a></li>
              <li><a href="template/comingsoon.html">Coming Soon</a></li>
              <li><a href="template/404.html">404</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
