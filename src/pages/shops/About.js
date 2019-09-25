import React, { Component } from 'react'
import BreadCrumb from "../../components/BreadCrumb"
export default class About extends Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="container">
          <BreadCrumb page="About Us" />
          <div className="row">
            <div className="about-us">
              <div className="container">
                <div className="our-story">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="our-story_text">
                        <h1 className="title orange-underline">About Us</h1>
                        <p>Tyna Giang's integrated agro-forestry farming model is the first project in Vietnam to achieve the highest ranking in the "100 projects to combat climate change" by the Ministry of Environment, Energy and Sea. France organized in 2016 ...</p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12"> <img src="assets/images/about-img.jpg" className="img-fluid" alt="" title /> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="counter-section">
          <div className="container">
            <div className="row" id="counter">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter">
                  <div className="text-center"><img src="assets/images/customer-icon.png" alt="" title className="img-fluid" /></div>
                  <h2 className="counter-value" data-count={10}>0</h2>
                  <p className="count-text ">Our Customer</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter">
                  <div className="text-center"><img src="assets/images/customer-icon2.png" alt="" title className="img-fluid" /></div>
                  <h2 className="counter-value" data-count={25}>0</h2>
                  <p className="count-text ">Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter">
                  <div className="text-center"><img src="assets/images/customer-icon3.png" alt="" title className="img-fluid" /></div>
                  <h2 className="counter-value" data-count={150}>0</h2>
                  <p className="count-text ">Project Complete</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter">
                  <div className="text-center"><img src="assets/images/customer-icon4.png" alt="" title className="img-fluid" /></div>
                  <h2 className="counter-value" data-count={100}>0</h2>
                  <p className="count-text">Coffee With Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-choose">
          <h2>Why Choose Us</h2>
          <div className="clearfix" />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="icon-detail"><img src="assets/images/dow_icon_1.png" className="img-fluid" alt="" />
                      <h5>High Quality Service</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="icon-detail"><img src="assets/images/dow_icon_2.png" alt="" />
                      <h5>Flexibility</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="icon-detail"><img src="assets/images/dow_icon_3.png" alt="" />
                      <h5>Reliable Consistent Supply</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="icon-detail"><img src="assets/images/dow_icon_4.png" alt="" />
                      <h5>Customer Planning and Management</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div><img src="assets/images/page-img/why-choose.jpg" title alt="" className="img-fluid" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        {/* End */}
      </>
    )
  }
}
