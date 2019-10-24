
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'

export default class MyAccount extends Component {
  render() {
    return (
      <div className="container">
        <BreadCrumb page="My Account" />
        {/*Hello world */}
        <div className="row">
          <div className="col-md-12 col-lg-2">
            {/* Nav tabs */}
            <ul role="tablist" className="nav flex-column dashboard-list">
              <li><a href="#dashboard" data-toggle="tab" className="active">Dashboard</a></li>
              <li> <a href="#orders" data-toggle="tab">Orders</a></li>
              <li><a href="#address" data-toggle="tab">Addresses</a></li>
              <li><a href="#account-details" data-toggle="tab">Account details</a></li>
              <li><a href="login.html">logout</a></li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-10">
            {/* Tab panes */}
            <div className="tab-content dashboard-content">
              <div className="tab-pane active" id="dashboard">
                <h3>Dashboard </h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center"><a href="my-account.html"><img src="assets/images/page-img/lunch-box.png" /></a></div>
                        <h2>Your Orders</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center"><a href="login.html"><img src="assets/images/page-img/login.png" /></a></div>
                        <h2>Login &amp; security</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center"><a href="my-account.html"><img src="assets/images/page-img/notebook.png" /></a></div>
                        <h2>Your Addresses</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="orders">
                <h3>Orders</h3>
                <div className="table-responsive">
                  <table className="table boder-b">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>May 10, 2018</td>
                        <td>Processing</td>
                        <td>$25.00 for 1 item </td>
                        <td><a href="cart.html" className="view">view</a></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>May 10, 2018</td>
                        <td>Processing</td>
                        <td>$17.00 for 1 item </td>
                        <td><a href="cart.html" className="view">view</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>May 10, 2018</td>
                        <td>Processing</td>
                        <td>$17.00 for 1 item </td>
                        <td><a href="cart.html" className="view">view</a></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>May 10, 2018</td>
                        <td>Processing</td>
                        <td>$17.00 for 1 item </td>
                        <td><a href="cart.html" className="view">view</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="downloads">
                <h3>Downloads</h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Downloads</th>
                        <th>Expires</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Haven - Free Real Estate PSD Template</td>
                        <td>May 10, 2018</td>
                        <td>never</td>
                        <td><a href="#" className="view">Click Here To Download Your File</a></td>
                      </tr>
                      <tr>
                        <td>Nevara - ecommerce html template</td>
                        <td>Sep 11, 2018</td>
                        <td>never</td>
                        <td><a href="#" className="view">Click Here To Download Your File</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane" id="address">
                <p>The following addresses will be used on the checkout page by default.</p>
                <h4 className="billing-address">Billing address</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="address-1">
                      <p className="biller-name"><strong>Jasmine</strong></p>
                      <address>
                        <small>4301 Peacock Springs Trl
                        Orlando FL<br />
                          P: (123) 456-7890</small>
                      </address>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="address-1">
                      <p className="biller-name"><strong>Bernadette</strong></p>
                      <address>
                        <small>14301 Peacock Springs Trl
                        Orlando FL<br />
                          P: (123) 456-7890</small>
                      </address>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="address-1">
                      <p className="biller-name"><strong>Alexandra</strong></p>
                      <address>
                        <small> 3298 Galaxy Way
                        Orlando, FL <br />
                          P: (123) 456-7890 </small>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-details">
                <h3>Account details </h3>
                <div className="login m-0">
                  <div className="login-form-container">
                    <div className="account-login-form">
                      <form action="#">
                        <p>Already have an account ? <a href="login.html">Log in instead!</a></p>
                        <div className="input-radio"><p>Social title</p>  <span className="custom-radio">
                          <input type="radio" defaultValue={1} name="id_gender" />
                          Mr.</span> &nbsp;&nbsp; <span className="custom-radio">
                            <input type="radio" defaultValue={1} name="id_gender" />
                            Mrs.</span> </div>
                        <div className="account-input-box">
                          <div className="row">
                            <div className="col-md-6">
                              <label>First Name</label>
                              <input type="text" name="first-name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label>Last Name</label>
                              <input type="text" name="last-name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label>Email</label>
                              <input type="text" name="email-name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label>Password</label>
                              <input type="password" name="user-password" className="form-control" />
                            </div>
                            <div className="col-md-6">
                              <label>Birthdate</label>
                              <input type="text" className="form-control" placeholder="MM/DD/YYYY" defaultValue name="birthday" />
                              <div className="example"> (E.g.: 05/31/1970) </div>
                            </div>
                          </div>
                        </div>
                        <div className="custom-checkbox">
                          <input type="checkbox" defaultValue={1} name="optin" />
                          <label>Receive offers from our partners</label>
                        </div>
                        <div className="custom-checkbox">
                          <input type="checkbox" defaultValue={1} name="newsletter" />
                          <label>Sign up for our newsletter<br />
                            <em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></label>
                        </div>
                        <div className="button-box">
                          <button className="btn default-btn" type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hello world */}
      </div>
    )
  }
}
