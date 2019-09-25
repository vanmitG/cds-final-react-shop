import React, { Component } from 'react'
import BreadCrumb from "../../components/BreadCrumb"
export default class Contact extends Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="container">
          <BreadCrumb page="Contact Us" />
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
        <div className="contact-page contact-us">
          {/* <div className="feature map">
            <img src="https://miro.medium.com/max/3840/1*Pgjvkel5lPImqGyRhi3HuA.png" />
          </div> */}
          <div className="row feature">
            <img className="img-fluid" style={{ 'maxWidth': '100', 'height': 'auto' }} src="https://miro.medium.com/max/3840/1*Pgjvkel5lPImqGyRhi3HuA.png" />
          </div>
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-10">
                <div className="contact-method">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="method-block"> <i className="fa fa-map-marker" />
                        <div className="method-block_text">
                          <p>Copac Square, 12 Duong Ton Dan, Phuong 13, Quan 4</p>
                          <p>Ho Chi Minh City</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="method-block"><i className="fa fa-envelope" />
                        <div className="method-block_text">
                          <p> <span>Phone : </span>+84 984 326 569 </p>
                          <p><span>Mail : </span><a href="mailto:apply@coderschool.vn">apply@coderschool.vn</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="method-block"><i className="fa fa-clock-o" />
                        <div className="method-block_text">
                          <p> <span>Week Days : </span>10:00 – 22:00</p>
                          <p><span>Sunday : </span> <span className="text-danger">Close</span> </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leave-message">
                  <h1 className="title" style={{ 'color': '#f16c26' }}><strong>Leave Message</strong></h1>
                  <p style={{ 'color': '#f16c26' }}>Our staff will call back later and answer your questions.</p>
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea className="form-control" cols={30} rows={10} placeholder="Your message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="form-group">
                          <input type="button" className="btn add-to-cart2" defaultValue="Submit" />
                        </div>
                      </div>
                    </div>
                  </form>
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
