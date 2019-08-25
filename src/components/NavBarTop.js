import React, { Component } from 'react'

export default class NavBarTop extends Component {
  render() {
    return (
      <div class="top-bg">
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
                <ul>
                  <li>
                    <ul className="social-network">
                      <li><a href="#" className="icoRss" title><i className="fa fa-rss" /></a></li>
                      <li><a href="#" className="icoFacebook" title><i className="fa fa-facebook" /></a></li>
                      <li><a href="#" className="icoTwitter" title><i className="fa fa-twitter" /></a></li>
                      <li><a href="#" className="icoGoogle" title><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#" className="icoLinkedin" title><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </li>
                  <li>
                    <ul className="top-ul">
                      <li>
                        <div className="dropdown"> <a className="dropdown-toggle" href="#" data-toggle="dropdown"><img src="template/assets/images/flag.jpg" alt="" title /> English <i className="fa fa-angle-down" /></a>
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
                          <div className="dropdown-menu dropdown-menu-right animate slideIn"> <a className="dropdown-item" href="template/login.html">Login</a> <a className="dropdown-item" href="template/my-account.html">My Account</a> <a className="dropdown-item" href="template/register.html">Register</a> <a className="dropdown-item" href="template/forgot-password.html">Forgot Password</a> </div>
                        </li>
                        <li><a href="wishlist.html"><i className="fa fa-heart-o" aria-hidden="true" /><span className="circle-2">1</span></a></li>
                        <li className="dropdown"> <a className="dropdown-toggle link" href="#" data-toggle="dropdown"><i className="fa fa-shopping-bag" aria-hidden="true" /><span className="circle-2">1</span></a>
                          <div className="dropdown-menu dropdown-menu2 dropdown-menu-right  animate slideIn">
                            <div className="container">
                              <div className="row">
                                <div className="col-3"><img src="template/assets/images/fruits/img-1.jpg" alt="" title className="img-fluid" /></div>
                                <div className="col-9">
                                  <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                  <a href="#" className="close">x</a> </div>
                                <div className="col-md-12">
                                  <hr />
                                </div>
                                <div className="col-3"><img src="assets/images/fruits/img-2.jpg" alt="" title className="img-fluid" /></div>
                                <div className="col-9">
                                  <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                  <a href="#" className="close">x</a> </div>
                                <div className="col-md-12">
                                  <hr />
                                </div>
                                <div className="col-3"><img src="assets/images/fruits/img-3.jpg" alt="" title className="img-fluid" /></div>
                                <div className="col-9">
                                  <p>1 x Product Name... <span className="price">$ 14.70</span></p>
                                  <a href="#" className="close">x</a> </div>
                                <div className="col-md-12">
                                  <hr />
                                </div>
                                <div className="col-3"><img src="assets/images/fruits/img-4.jpg" alt="" title className="img-fluid" /></div>
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
                                  <input type="button" defaultValue="Check out" className="btn check-out w-100" />
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
    )
  }
}
