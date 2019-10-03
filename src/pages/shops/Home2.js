import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home2 extends Component {
  render() {
    return (
      <div>
        {/* tryslilder */}
        <div className="my-4">
          {/*Carousel Wrapper*/}
          <div id="multi-item-examples" className="carousel slide carousel-multi-item" data-ride="carousel">
            {/*Controls*/}
            {/* <div className="owl-nav">
              <button className="btn btn-out-line customHover" href="#multi-item-examples" data-slide="prev"><i className="fa fa-chevron-left" /></button>
              <button className="btn btn-out-line customHover" href="#multi-item-examples" data-slide="next"><i className="fa fa-chevron-right" /></button>
            </div> */}
            {/*/.Controls*/}
            {/*Indicators*/}
            <ol className="carousel-indicators owl-dots">
              <li data-target="#multi-item-examples" data-slide-to={0} className="active" />
              <li data-target="#multi-item-examples" data-slide-to={1} />
            </ol>
            {/*/.Indicators*/}
            {/*Slides*/}
            <div className="carousel-inner" role="listbox">
              {/*First slide*/}
              <div className="carousel-item active">
                {/* slider 1 item */}
                <div className="hero-slider-item" style={{ background: 'url(/assets/images/slider-img/slider2-1.jpg) no-repeat center top', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover' }}>
                  <div className="container banner2">
                    <div className="caption-banner">
                      <h6 className="text-white" data-animation-out="fadeOutDown" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1"> Extra 50% Off For All Winter Product </h6>
                      <h2 className="mb-4" data-animation-out="fadeOutDown" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".4">Build Your Health<br />
                        Eating Organic</h2>
                      <Link to="/contact" className="btn our-services" data-animation-out="fadeOutRight" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Our Services <i className="fa fa-arrow-right" aria-hidden="true" /></Link></div>
                  </div>
                </div>
              </div>
              {/* <div className="clearfix" /> */}
              {/*/.First slide*/}
              {/*Second slide*/}
              <div className="carousel-item">
                {/* slider 2 item */}
                <div className="hero-slider-item" style={{ background: 'url(/assets/images/slider-img/slider2-2.jpg) no-repeat center top', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover' }}>
                  <div className="container banner2">
                    <div className="caption-banner" style={{ position: 'relative', zIndex: 999, textAlign: 'center' }}>
                      <h6 className="text-white" data-animation-out="fadeOutDown" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Fruit Fresh</h6>
                      <h2 className="mb-4" data-animation-out="fadeOutDown" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".4">Orange Juice</h2>
                      <Link to="/shops" className="btn our-services" data-animation-out="fadeOutRight" data-delay-out={5} data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Shop Now <i className="fa fa-shopping-cart" aria-hidden="true" /></Link> </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              {/*/.Second slide*/}
            </div>
            {/*/.Slides*/}
          </div>
          {/*/.Carousel Wrapper*/}
        </div>
        {/* tryslilder */}
        <div className="about-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow fadeInLeft">

                <div className="about1-img bounce-animate mb-30">
                  <img src="/assets/images/product/about1.png" className="img-fluid" alt="" />
                </div>

              </div>
              <div className="col-xl-6 col-lg-6 wow fadeInRight">
                <div className="about-wrapper mb-30">
                  <div className="section-title section-title-cap mb-35">
                    <h1>The Best Trusted Farms For You</h1>
                    <p>Lorem ipsum dolor amet consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                  </div>
                  <ul className="about-list">
                    <li className="icon1">
                      <div className="about-icon">
                        <div className="block">
                          <div className="hovicon effect-9 sub-b"><i className="flaticon-grapes" /></div>
                        </div>
                      </div>
                      <div className="about-list-text">
                        <h3>Natural Foods</h3>
                        <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
                      </div>
                    </li>
                    <li className="icon2">
                      <div className="about-icon">
                        <div className="block">
                          <div className="hovicon effect-10 icon-bg-2 sub-b"><i className="flaticon-harvest" /></div>
                        </div>
                      </div>
                      <div className="about-list-text">
                        <h3>Safe Formalin</h3>
                        <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
                      </div>
                    </li>
                    <li className="icon3">
                      <div className="about-icon">
                        <div className="block">
                          <div className="hovicon effect-11 icon-bg-2 sub-b"><i className="flaticon-fruit" /></div>
                        </div>
                      </div>
                      <div className="about-list-text">
                        <h3>100% Testy Food</h3>
                        <p>Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo temincididunt labore apericons.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-area pt-120 pb-90" style={{ backgroundImage: 'url(/assets/images/page-img/bg6.jpg)' }}>
          <div className="container">

            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInDown">
                <div className="section-title section-title-cap text-center">
                  <div className="section-icon"> <img src="/assets/images/icon/icon2.png" alt="" />
                  </div>
                  <h1>Our Service</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna  aliqua minim veniam</p>
                </div>

              </div>
            </div>
            {/*bootstrap Slide*/}
            <div className="container my-4">
              <hr className="my-4" />
              {/*Carousel Wrapper*/}
              <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                {/*Controls*/}
                <div className="owl-nav">
                  <button className="btn btn-out-line" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left" /></button>
                  <button className="btn btn-out-line customHover" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right" /></button>
                </div>
                {/*/.Controls*/}
                {/*Indicators*/}
                <ol className="carousel-indicators owl-dots">
                  <li data-target="#multi-item-example" data-slide-to={0} className="active" />
                  <li data-target="#multi-item-example" data-slide-to={1} />
                  <li data-target="#multi-item-example" data-slide-to={2} />
                </ol>
                {/*/.Indicators*/}
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  {/*First slide*/}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser3.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Organic Guava</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser2.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Fresh Orange</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser1.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Natural Foods</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/*/.First slide*/}
                  {/*Second slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser2.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Fresh Orange</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>

                      <div className="col-md-4  clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser3.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Organic Guava</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>

                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser1.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Natural Foods</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/*/.Second slide*/}
                  {/*Third slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser1.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Natural Foods</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>

                      </div>
                      <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser2.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Fresh Orange</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>
                      <div className="col-md-4  clearfix d-none d-md-block">
                        <div className="service-wrapper text-center mb-30">
                          <div className="service-img"> <img src="/assets/images/product/ser3.png" alt="" /></div>
                          <div className="service-text">
                            <h3>Organic Guava</h3>
                            <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore
                        magnad </p>
                            <a className="btn" href="#">read more <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.Third slide*/}

                </div>
                {/*/.Slides*/}
              </div>
              {/*/.Carousel Wrapper*/}
            </div>
            {/* bootstrap Slide */}
          </div>
        </div>
        <div className="product-area position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                <div className="section-title section-title-cap text-center">
                  <div className="section-icon section1-icon"> <img src="/assets/images/icon/icon8.png" alt="" /> </div>
                  <h1>Our Product</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="product-wrapper text-center mb-2">
                  <div className="product-img"> <a href="single_product-2.html"><img src="/assets/images/product/product1.jpg" className="img-fluid" alt="" /></a> </div>
                  <div className="product-text">
                    <h4><a href="#">Split Kiwi</a></h4>
                    <div className="pro-rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
                    <div className="pro-price"> <span>$10.99</span> </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="product-wrapper text-center mb-2">
                  <div className="product-img"> <a href="single_product-2.html"><img src="/assets/images/product/product2.jpg" className="img-fluid" alt="" /></a> </div>
                  <div className="on-sale"> <span>-50%</span> </div>
                  <div className="product-text">
                    <h4><a href="#">Lemon</a></h4>
                    <div className="pro-rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
                    <div className="pro-price"> <span>$15.99</span> </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="product-wrapper text-center mb-2">
                  <div className="product-img"> <a href="single_product-2.html"><img src="/assets/images/product/product3.jpg" className="img-fluid" alt="" /></a> </div>
                  <div className="product-text">
                    <h4><a href="#">Pineapple</a></h4>
                    <div className="pro-rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
                    <div className="pro-price"> <span>$25.99</span> </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="product-wrapper text-center mb-2">
                  <div className="product-img"> <a href="single_product-2.html"><img src="/assets/images/product/product4.jpg" className="img-fluid" alt="" /></a> </div>
                  <div className="on-sale"> <span>-25%</span> </div>
                  <div className="product-text">
                    <h4><a href="#">Natural Orange</a></h4>
                    <div className="pro-rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
                    <div className="pro-price"> <span>$10.99</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="product-button text-center"> <Link className="btn" to="/shops">View more <i className="fa fa-long-arrow-right" aria-hidden="true" /></Link> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="cta-area" style={{ backgroundImage: 'url(/assets/images/page-img/bg7.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">
                <div className="cta-wrapper text-center">
                  <div className="cta-text"> <span>welcome to orgafe</span>
                    <h1>Other ways to keep the cost of organic food within your budget</h1>
                    <a className="btn" href="contact.html">Contact us <i className="fa fa-long-arrow-right" aria-hidden="true" /></a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="faq-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="faq-img"> <img className="bounce-animate img-fluid" src="/assets/images/product/bg3.png" alt="" /> </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="faq-box">
                  <div className="section-title section-title-cap mb-45">
                    <h1>Frequently Asked Questions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                  </div>
                  <div id="accordion" className="mt-4">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0"> <a href="#" className="btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Introducing Floatcom Better Alternative To Spreadsheets </a> </h5>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then
                      mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0"> <a href="#" className="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Powerful Image Analysis With Google Cloud Vision Python </a> </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then
                      mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0"> <a href="#" className="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Multiplayer Text Adventure Engine In Node </a> </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then
                      mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h5 className="mb-0"> <a href="#" className="btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> How To Convert An Infographic Into Gifographic Photoshop </a> </h5>
                      </div>
                      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elie sed eius then
                      mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="deal-area" style={{ backgroundImage: 'url(/assets/images/page-img/bg8.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-lg-4">
                <div className="deal-img bounce-animate mb-30"> <img src="/assets/images/product/deal.png" className="img-fluid" alt="" /> </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="deal-wrapper mb-30">
                  <div className="section-title section-title-cap mb-45">
                    <h1>Deal Of The Day</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna laudantium totam rem aperiam eaque ipsa quae inventorec.</p>
                  </div>
                  <div id="counter" className="deal-count">
                    <div className="deal-time" data-countdown="2019/6/01">
                      <div className="time-count">
                        <div className="counter-value" data-count={10}>0</div>
                        <span>days</span></div>
                      <div className="time-count">
                        <div className="counter-value" data-count={25}>0</div>
                        <span>hour</span></div>
                      <div className="time-count">
                        <div className="counter-value" data-count={150}>0</div>
                        <span>minute</span></div>
                      <div className="time-count">
                        <div className="counter-value" data-count={300}>0</div>
                        <span>Second</span></div>
                    </div>
                  </div>
                  <div className="deal-button"> <a className="btn" href="shop.html">Shop now <i className="fa fa-cart-plus" aria-hidden="true" /></a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="testimonial-area client-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                <div className="section-title section-title-cap text-center">
                  <div className="section-icon section1-icon"> <img src="/assets/images/icon/icon6.png" alt="" /> </div>
                  <h1>client’s say</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="client-active owl-carousel testimonial owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item">
                      <div className="col-xl-12">
                        <div className="client-wrapper text-center">
                          <div className="client-text">
                            <div className="text-center"> <img src="/assets/images/clint-images.jpg" alt="" title className="rounded-circle" /> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Uts enim ad minim veniam quis see nostrudexercitatiac.</p>
                            <h4>Johnny J. Stewart</h4>
                            <span>Web Designer</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="col-xl-12">
                        <div className="client-wrapper text-center">
                          <div className="client-text">
                            <div className="text-center"> <img src="/assets/images/clint-images-2.jpg" alt="" title className="rounded-circle" /> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Uts enim ad minim veniam quis see nostrudexercitatiac.</p>
                            <h4>Dr.Frank Harisk</h4>
                            <span>Founder</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="col-xl-12">
                        <div className="client-wrapper text-center">
                          <div className="client-text">
                            <div className="text-center"> <img src="/assets/images/clint-images-3.jpg" alt="" title className="rounded-circle" /> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Uts enim ad minim veniam quis see nostrudexercitatiac.</p>
                            <h4>Dr.Frank Harisk</h4>
                            <span>Founder</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="col-xl-12">
                        <div className="client-wrapper text-center">
                          <div className="client-text">
                            <div className="text-center"> <img src="/assets/images/clint-images-2.jpg" alt="" title className="rounded-circle" /> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Uts enim ad minim veniam quis see nostrudexercitatiac.</p>
                            <h4>Dr.Frank Harisk</h4>
                            <span>Founder</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item">
                      <div className="col-xl-12">
                        <div className="client-wrapper text-center">
                          <div className="client-text">
                            <div className="text-center"> <img src="/assets/images/clint-images.jpg" alt="" title className="rounded-circle" /> </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Uts enim ad minim veniam quis see nostrudexercitatiac.</p>
                            <h4>Johnny J. Stewart</h4>
                            <span>Web Designer</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-area  pt-120 pb-90" style={{ backgroundImage: 'url(/assets/images/page-img/bg10.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                <div className="section-title section-title-cap text-center">
                  <div className="section-icon section1-icon"> <img src="/assets/images/icon/icon7.png" alt="" /> </div>
                  <h1>Articles &amp; Tips</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam</p>
                </div>
              </div>
            </div>
            <div className="row  blog-bg">
              <div className="col-lg-3 col-md-6 mb-4 text-center">
                <h4>Articles dolor sit amet</h4>
                <figure className="imghvr-push-right">
                  <div className="blog-img"><img src="/assets/images/blog/blog-1.jpg" alt="" className="img-cover" /></div>
                  <figcaption className="text-center p-0">
                    <div className="blog-text">
                      <h4><a href="blog-details.html">Lorem ipsum</a></h4>
                      <p>Lorem ipsum dolor consectetur adipisicing elit sed do eiusmo we
                  tempor incididunt labore.</p>
                      <Link className="btn" to="/blogs">Read More</Link>
                      <div className="blog-meta"> <span> <i className="fa fa-calendar" aria-hidden="true" /> 05 Feb 2019</span> <span> <i className="fa fa-comment" aria-hidden="true" /> Comments (03)</span> </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 text-center">
                <h4>Articles dolor sit amet</h4>
                <figure className="imghvr-push-right">
                  <div className="blog-img"><img src="/assets/images/blog/blog-2.jpg" alt="" className="img-cover" /></div>
                  <figcaption className="text-center p-0">
                    <div className="blog-text">
                      <h4><a href="blog-details.html">Lorem ipsum</a></h4>
                      <p>Lorem ipsum dolor consectetur adipisicing elit sed do eiusmo we
                  tempor incididunt labore.</p>
                      <Link className="btn" to="/blogs">Read More</Link>
                      <div className="blog-meta"> <span> <i className="fa fa-calendar" aria-hidden="true" /> 05 Feb 2019</span> <span> <i className="fa fa-comment" aria-hidden="true" /> Comments (03)</span> </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 text-center">
                <h4>Articles dolor sit amet</h4>
                <figure className="imghvr-push-right">
                  <div className="blog-img"><img src="/assets/images/blog/blog-3.jpg" alt="" className="img-cover" /></div>
                  <figcaption className="text-center p-0">
                    <div className="blog-text">
                      <h4><a href="blog-details.html">Lorem ipsum</a></h4>
                      <p>Lorem ipsum dolor consectetur adipisicing elit sed do eiusmo we
                  tempor incididunt labore.</p>
                      <Link className="btn" to="/blogs">Read More</Link>
                      <div className="blog-meta"> <span> <i className="fa fa-calendar" aria-hidden="true" /> 05 Feb 2019</span> <span> <i className="fa fa-comment" aria-hidden="true" /> Comments (03)</span> </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 text-center">
                <h4><Link to="/blogs">Lorem ipsum dolor sit amet</Link></h4>
                <figure className="imghvr-push-right">
                  <div className="blog-img"><img src="/assets/images/blog/blog-4.jpg" alt="" className="img-cover" /></div>
                  <figcaption className="text-center p-0">
                    <div className="blog-text">
                      <h4><a href="blog-details.html">Lorem ipsum</a></h4>
                      <p>Lorem ipsum dolor consectetur adipisicing elit sed do eiusmo we
                  tempor incididunt labore.</p>
                      <a className="btn" href="blog-details.html">Read More</a>
                      <div className="blog-meta"> <span> <i className="fa fa-calendar" aria-hidden="true" /> 05 Feb 2019</span> <span> <i className="fa fa-comment" aria-hidden="true" /> Comments (03)</span> </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* Hello world */}
      </div>
    )
  }
}
