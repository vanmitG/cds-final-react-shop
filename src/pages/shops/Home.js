import React, { Component } from 'react'
// import NaviBar from "../../components/NaviBar"
// import Footer from "../../components/Footer"
// import HeroBanner from "../../components/home/HeroBanner"
// import BestSeller from "../../components/home/BestSeller"
// import DealOfTheWeek from "../../components/home/DealOfTheWeek"
// import FeatureCatergory from "../../components/home/FeatureCatergory"
// import FeatureProducts from "../../components/home/FeatureProducts"
// import LatesProduct from "../../components/home/LatesProduct"


export default class Home extends Component {


  render() {
    return (
      <div>
        {/* <HeroBanner /> */}
        {/* <LatesProduct />
        <FeatureProducts />
        <FeatureCatergory />
        <BestSeller />
        <DealOfTheWeek /> */}
        <div id="myModal" className="modal fade subscribe">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close2" data-dismiss="modal" aria-hidden="true">×</button>
              <div className="modal-body">
                <div className="row m-0">
                  <div className="col-md-6 p-0 position-relative">
                    <div className="newslettermodal-img"><img src="/assets/images/page-img/popup-img.jpg" alt="" title="" className="img-fluid" /></div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="newslettermodal-content">
                      <div className="text-center"><img src="/assets/images/popup-logo.png" alt="" title="" /></div>
                      <h4 className="modal-title">Sign up our newsletter</h4>
                      <p>Enter Your email address to sign up to receive our latest news and offers</p>
                      <form className="newslettermodal-content-form">
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Enter Your e-mail address" />
                        </div>
                        <button type="submit" className="btn subscribe2">Subscribe</button>
                      </form>
                      <ul>
                        <li><a href="#" className="icoRss" title="RSS"><i className="fa fa-rss" /></a></li>
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="icoLinkedin" title="LinkedIn"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="product">
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                </div>
                <div className="carousel-item">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /> </a> </div>
                </div>
              </div>
            </div>
            <h5 className="product-type">Green Apple</h5>
            <h3 className="product-name">Ingredients</h3>
            <h3 className="product-price">$10.00 <del>$35.00</del></h3>
            <div className="product-select">
              <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1"><i className="fa fa-eye" aria-hidden="true" /></button>
              <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
              <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="container search-div">
          <div className="row">
            <div className="col-lg-3 col-md-4 top-dropdown">
              <div className="all-cate custom-select2">
                <select>
                  <option>All Categories</option>
                  <option>Fresh Meat</option>
                  <option>Vegetables</option>
                  <option>Fruit &amp; Nut Gifts</option>
                  <option>Fresh Berries</option>
                  <option>Ocean Foods</option>
                  <option>Butter &amp; Eggs</option>
                  <option>Fastfood</option>
                  <option>Fresh Onion</option>
                  <option>Papayaya &amp; Crisps</option>
                  <option>Oatmeal</option>
                  <option>Fresh Bananas</option>
                </select>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="input-group filter-by">
                <input type="hidden" name="search_param" defaultValue="all" id="search_param" />
                <input type="text" className="form-control" name="x" placeholder="What do you need?" />
                <span className="input-group-btn">
                  <button className="btn btn-default search-bt" type="button">SEARCH</button>
                </span> </div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        {/* slider */}
        <div className="callbacks_container">
          <ul className="rslides" id="slider4">
            <li>
              <img src="/assets/images/rev-banner/img-1.jpg" alt="" />
            </li>
            <li>
              <img src="/assets/images/rev-banner/img-2.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div id="rev_slider_7_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="demo_creative_agency_full" data-source="gallery" style={{ background: 'linear-gradient(50deg,rgba(211,84,93,1)0%,rgba(211,84,93,1)0%,rgba(244,111,4,1)100%,rgba(244,111,4,1)100%)', padding: '0px' }}>
          <div id="rev_slider_7_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.8.1">
            <ul>
              <li data-index="rs-16" data-transition="slideright" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="/assets/images/rev-banner/images/100x50_4549a-brk_slide-1.jpg" data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description><img src="/assets/images/rev-banner/images/4549a-brk_slide-1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-16-layer-3" data-x="center" data-hoffset={-795} data-y="center" data-voffset data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6 }}><img src="/assets/images/rev-banner/images/8b74d-brk_slide_element-2.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-7" data-x={1855} data-y={73} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9 }}><img src="/assets/images/rev-banner/images/0bb69-brk_slide_element-3.png" alt="" data-ww="220px" data-hh="207px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-9" data-x={1859} data-y={788} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10 }}><img src="/assets/images/rev-banner/images/835ab-brk_slide_element-4.png" alt="" data-ww="119px" data-hh="97px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-10" data-x="center" data-hoffset={220} data-y={120} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:1500,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11, whiteSpace: 'nowrap', fontSize: '90px', lineHeight: '150px', fontWeight: 800, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Eat Organic</div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-11" data-x="center" data-hoffset={100} data-y={250} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:600,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, whiteSpace: 'nowrap', fontSize: '35px', lineHeight: '46px', fontWeight: 300, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Build your Health</div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-12" data-x={910} data-y={320} data-width="['626']" data-height="['79']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, minWidth: '626px', maxWidth: '79px', whiteSpace: 'normal', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: 'rgba(255,255,255,0.9)', letterSpacing: '0px', fontFamily: 'Open Sans' }}>Organic E-Store – is a multipurpose Bootstrap 4 HTML5 template, created by people with 10+ years’ experience in website development. It’s fully responsive, based on the module structure.</div>
                <div className="tp-caption tp-resizeme" id="slide-16-layer-1" data-x={218} data-y="center" data-voffset={-11} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-visibility="['on','on','off','off']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 26 }}><img src="/assets/images/rev-banner/images/eb646-1122x1237_1.png" alt="" data-ww="650px" data-hh="717px" data-no-retina /></div>
              </li>
              <li data-index="rs-17" data-transition="slideleft" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1800} data-thumb="/assets/images/rev-banner/images/100x50_32ebd-brk_slide-2.jpg" data-delay={5000} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description><img src="/assets/images/rev-banner/images/32ebd-brk_slide-2.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-17-layer-1" data-x={-62} data-y={73} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5 }}><img src="/assets/images/rev-banner/images/0bb69-brk_slide_element-3.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-3" data-x={-60} data-y={788} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6 }}><img src="/assets/images/rev-banner/images/835ab-brk_slide_element-4.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-5" data-x={1655} data-y={779} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 7 }}><img src="/assets/images/rev-banner/images/bd38d-brk_slide_thumb-6.png" alt="" data-ww="368px" data-hh="182px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-6" data-x={1455} data-y={340} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8 }}><img src="/assets/images/rev-banner/images/c0ff5-brk_slide_thumb-5.png" alt="" data-ww="368px" data-hh="260px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-7" data-x={1400} data-y={100} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9 }}><img src="/assets/images/rev-banner/images/d1b07-brk_slide_thumb-4.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-8" data-x={1390} data-y={503} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10 }}><img src="/assets/images/rev-banner/images/4d6c0-brk_slide_thumb-3.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-9" data-x={989} data-y={350} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11 }}><img src="/assets/images/rev-banner/images/db3cf-brk_slide_thumb-2.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-10" data-x={989} data-y={80} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12 }}><img src="/assets/images/rev-banner/images/451e1-brk_slide_thumb-1.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-11" data-x={141} data-y={250} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'nowrap', fontSize: '75px', lineHeight: '90px', fontWeight: 700, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Fresh Fruits</div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-12" data-x={608} data-y={242} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14, whiteSpace: 'nowrap', fontSize: '75px', lineHeight: '90px', fontWeight: 300, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Open Sans' }}>for you</div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-13" data-x={137} data-y={340} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 15, whiteSpace: 'nowrap', fontSize: '75px', lineHeight: '90px', fontWeight: 300, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Open Sans' }}>&amp; your Family!</div>
                <a className="tp-caption rev-btn tp-resizeme" href="#" target="_blank" id="slide-17-layer-20" data-x={133} data-y={490} data-width="['auto']" data-height="['auto']" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0,0,0,1);bg:rgba(255,255,255,0.83);bc:rgba(255,255,255,0.67);&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[22,22,22,22]" data-paddingright="[41,41,41,41]" data-paddingbottom="[22,22,22,22]" data-paddingleft="[104,104,104,104]" style={{ zIndex: 21, whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '24px', fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: '', fontFamily: 'Montserrat', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.14)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '40px 40px 40px 40px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none' }}>Visit the Store</a>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-21" data-x={93} data-y={450} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 22 }}><img src="/assets/images/rev-banner/images/4c2d9-brk_button-1.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div><a className="tp-caption rev-btn tp-resizeme" href="#" target="_blank" id="slide-17-layer-23" data-x={443} data-y={490} data-width="['auto']" data-height="['auto']" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0,0,0,1);bg:rgba(255,255,255,0.83);bc:rgba(255,255,255,0.67);&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[22,22,22,22]" data-paddingright="[41,41,41,41]" data-paddingbottom="[22,22,22,22]" data-paddingleft="[104,104,104,104]" style={{ zIndex: 23, whiteSpace: 'nowrap', fontSize: '15px', lineHeight: '24px', fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: '', fontFamily: 'Montserrat', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.14)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '40px 40px 40px 40px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none' }}>On all Products</a>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-24" data-x={432} data-y={478} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 24 }}><img src="/assets/images/rev-banner/images/4aad8-11.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-17-layer-25" data-x={459} data-y={515} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 25, whiteSpace: 'nowrap', fontSize: '26px', lineHeight: '26px', fontWeight: 700, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Montserrat' }}>17</div>
              </li>
              <li data-index="rs-18" data-transition="slideleft" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1800} data-thumb="/assets/images/rev-banner/images/100x50_3c6ad-brk_slide-3.jpg" data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description><img src="/assets/images/rev-banner/images/3c6ad-brk_slide-3.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-18-layer-1" data-x={-266} data-y="bottom" data-voffset data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5 }}><img src="/assets/images/rev-banner/images/bd38d-brk_slide_thumb-6.png" alt="" data-ww="368px" data-hh="182px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-2" data-x={-266} data-y={510} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6 }}><img src="/assets/images/rev-banner/images/c0ff5-brk_slide_thumb-5.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-3" data-x={-266} data-y={241} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 7 }}><img src="/assets/images/rev-banner/images/d1b07-brk_slide_thumb-4.png" alt="" data-ww="368px" data-hh="264px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-6" data-x={399} data-y={65} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 10 }}><img src="/assets/images/rev-banner/images/3b4b2-brk_slide_element-5.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-7" data-x={396} data-y={265} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 11, whiteSpace: 'nowrap', fontSize: '72px', lineHeight: '78px', fontWeight: 700, color: '#e6e3e8', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Deals</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-9" data-x={712} data-y={800} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12 }}><img src="/assets/images/rev-banner/images/c9ecd-brk_slide_element-9.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-10" data-x={1207} data-y={550} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:500,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'nowrap', fontSize: '36px', lineHeight: '38px', fontWeight: 700, color: '#272727', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Organic Products</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-11" data-x={1209} data-y={600} data-width="['635']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:bottom;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 14, minWidth: '635px', maxWidth: '635px', whiteSpace: 'normal', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#9f9f9f', letterSpacing: '0px', fontFamily: 'Open Sans', fontStyle: 'italic' }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-12" data-x={487} data-y={390} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 15, whiteSpace: 'nowrap', fontSize: '56px', lineHeight: '64px', fontWeight: 700, color: '#272727', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Responsive</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-13" data-x={488} data-y={470} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 16, whiteSpace: 'nowrap', fontSize: '25px', lineHeight: '30px', fontWeight: 300, color: '#333', letterSpacing: '0px', fontFamily: 'Montserrat' }}>E-Commerce Theme</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-14" data-x={488} data-y={520} data-width="['530']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 17, minWidth: '530px', maxWidth: '530px', whiteSpace: 'normal', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#333', letterSpacing: '0px', fontFamily: 'Open Sans' }}>We use lazy loading technique that delays loading of Images, CSS, JavaScript, and Fonts after the page is loaded. This speeds up the initial load of your webpage no matter how many elements it contains.</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-19" data-x={1620} data-y={532} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 21, whiteSpace: 'nowrap', fontSize: '16px', lineHeight: '20px', fontWeight: 700, color: '#81bb35', letterSpacing: '0px', fontFamily: 'Montserrat' }}>Sale</div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-20" data-x={1648} data-y={495} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 22 }}><img src="/assets/images/rev-banner/images/4aad8-11.png" alt="" data-ww="auto" data-hh="auto" data-no-retina /></div>
                <div className="tp-caption tp-resizeme rs-parallaxlevel-1" id="slide-18-layer-21" data-x={1308} data-y={38} data-width="['none','none','none','none']" data-height="['none','none','none','none']" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 23 }}><img src="/assets/images/rev-banner/images/e4c55-brk_slide_element-3.png" alt="" data-ww="380px" data-hh="475px" data-no-retina /></div>
                <div className="tp-caption tp-resizeme" id="slide-18-layer-23" data-x={1677} data-y={530} data-width="['auto']" data-height="['auto']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 24, whiteSpace: 'nowrap', fontSize: '26px', lineHeight: '26px', fontWeight: 700, color: '#ffffff', letterSpacing: '0px', fontFamily: 'Montserrat' }}>17</div>
              </li>
            </ul>
            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
          </div>
        </div>
        {/* slider */}
        <div className="clearfix" />
        <div className="banner-patten mt-4 mb-4">
          <div className="container">
            <div className="banner-div" style={{ top: 0 }}>
              <div className="row m-0">
                <div className="col-lg-4 col-md-4 col-sm-4 boder-left wow fadeInLeft"> <img src="/assets/images/shipping.png" alt="" title />
                  <h4 className="text-uppercase">Free Shipping</h4>
                  <p>For all order over 99$</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 boder-left wow fadeInLeft"> <img src="/assets/images/timing.png" alt="" title />
                  <h4 className="text-uppercase"> Delivery On Time</h4>
                  <p>Trustable &amp; Fast Delivery Services</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInLeft"> <img src="/assets/images/card.png" alt="" title />
                  <h4 className="text-uppercase">Secure Payment</h4>
                  <p>100% secure payment </p>
                  <p> </p>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        {/* /hero slider */}
        {/* Page Content */}
        <div className="products-section">
          <div className="container">
            <h2 className="wow fadeInDown">Latest Products</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">

              <div className="item">
                <div className="product">
                  <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="badge">
                          <div className="text">Sale 10%</div>
                          <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                      </div>
                      <div className="carousel-item">
                        <div className="badge">
                          <div className="text">Sale 10%</div>
                          <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /> </a> </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="product-type">Green Apple</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$10.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$13.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Orange</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$18.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-4"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 10%</div>
                    <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$13.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="featured-products">
          <div className="container">
            <h2 className="wow fadeInDown">Featured Products</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html">
                  <div className="badge">
                    <div className="text">Sale 14%</div>
                    <img src="/assets/images/product-img/product-img-1.jpg" alt="" /> </div>
                </a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$16.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="badge">
                    <div className="text">Sale 16%</div>
                    <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$16.00 <del>$35.00</del></h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div id="carousel-3" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                      <div className="carousel-item"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a> </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-3" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-3" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-9"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-10"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                  <h5 className="product-type">Spices</h5>
                  <h3 className="product-name">Ingredients</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Three-images*/}
        <div className="three-img">
          <div className="container">
            <h2 className="wow fadeInDown">Featured Category</h2>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 text-center wow fadeIn mb-3">
                <ul className="ch-grid">
                  <li>
                    <div className="ch-item" style={{ background: 'url(/assets/images/product/left-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                      <div className="ch-info">
                        <div className="img-text">
                          <h3>Fresh Oregano</h3>
                          <p>Oregano</p>
                          <p>Apricots</p>
                          <p>Bananas</p>
                          <p>Cantaloupe</p>
                          <a href="#">view more</a> </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4  col-md-6 text-center wow fadeIn mb-3">
                <ul className="ch-grid">
                  <li>
                    <div className="ch-item" style={{ background: 'url(/assets/images/product/center-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                      <div className="ch-info">
                        <div className="img-text">
                          <h3>Fresh Apple</h3>
                          <p>Apple</p>
                          <p>Wheatgrass</p>
                          <p>Arrowroot</p>
                          <p>Grapefruit</p>
                          <a href="#">view more</a> </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeIn mb-3">
                <div className="position-relative">
                  <ul className="ch-grid">
                    <li>
                      <div className="ch-item" style={{ background: 'url(/assets/images/product/right-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                        <div className="ch-info">
                          <div className="img-text">
                            <h3>Mango Shake</h3>
                            <p>Pear</p>
                            <p>Apricots</p>
                            <p>Bananas</p>
                            <p>Cantaloupe</p>
                            <a href="#">view more</a> </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Three-images*/}
        <div id="bestsellers">
          <div className="container">
            <h2 className="wow fadeInDown">Bestsellers</h2>
            <div className="owl-carousel latest-products owl-theme wow fadeIn">
              <div className="item">
                <div className="product">
                  <div id="carousel-2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="badge">
                          <div className="text">Sale 14%</div>
                          <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /> </a> </div>
                      </div>
                      <div className="carousel-item">
                        <div className="badge">
                          <div className="text">Sale 14%</div>
                          <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a> </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                  <a className="fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Strawberry</h3>
                  <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-11"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/fruits/img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star " /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">DRIED FRUITS</h5>
                  <h3 className="product-name">Fresh Walnut</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-12"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/fruits/img-4.jpg" alt="" /></a> <a className="fa fa-star fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Black Cherries</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-13"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/fruits/img-5.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Juice</h5>
                  <h3 className="product-name">Strawberry Juices</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-14"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/fruits/img-1.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star " /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">DRIED FRUITS</h5>
                  <h3 className="product-name">Fresh Walnut</h3>
                  <h3 className="product-price">$14.00</h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-15"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/fruits/img-4.jpg" alt="" /></a> <a className="fa fa-star fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                  <h5 className="product-type">Fruits</h5>
                  <h3 className="product-name">Black Cherries</h3>
                  <h3 className="product-price">$14.00 </h3>
                  <div className="product-select">
                    <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-13"><i className="fa fa-eye" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="deal-of-the-week">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center mb-1">
                <div className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <figure className="imghvr-push-right"> <a href="shop.html"><img src="/assets/images/page-img/sale.jpg" className="img-fluid" alt="" title /></a>
                        <figcaption>
                          <h3>Sale off Up to 30% </h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the...</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="carousel-item">
                      <figure className="imghvr-push-right"> <a href="shop.html"><img src="/assets/images/page-img/sale3.jpg" className="img-fluid" alt="" title /></a>
                        <figcaption>
                          <h3>Bestsellers</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the...</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center mb-1">
                <div className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"> <img src="/assets/images/page-img/sale2.jpg" className="img-fluid" alt="" title /> </div>
                    <div className="carousel-item"><img src="/assets/images/page-img/sale4.jpg" className="img-fluid" alt="" title /></div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <h2 className="text-center wow fadeInDown">Deal Of The Week</h2>
              <div className="clearfix" />
            </div>
            <div>
              <div className="owl-carousel latest-products owl-theme wow fadeIn">
                <div className="item">
                  <div className="product">
                    <div id="carousel-1" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /></a> </div>
                        <div className="carousel-item"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a> </div>
                      </div>
                      <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"> <i className="fa fa-arrow-circle-o-left" aria-hidden="true" /> </a> <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"> <i className="fa fa-arrow-circle-o-right" aria-hidden="true" /> </a> </div>
                    <a className="fa fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-16"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a> <a className="fa fa fa-star-half-full checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-17"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-18"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-19"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-20"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product"> <a className="product-img" href="single_product.html"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a> <a className="fa fa-star checked" /> <a className="fa fa-star checked" /> <a className="fa fa-star" /> <a className="fa fa-star" /> <a className="fa fa-star" />
                    <h5 className="product-type">Spices</h5>
                    <h3 className="product-name">Ingredients</h3>
                    <h3 className="product-price">$14.00</h3>
                    <div className="product-select">
                      <button data-toggle="tooltip" data-placement="top" title="Quick view" className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-18"><i className="fa fa-eye" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                      <button data-toggle="tooltip" data-placement="top" title="Add To Cart" onclick="window.location.href='cart.html'" className="add-to-cart round-icon-btn"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div id="partner">
          <div className="container">
            <div className="owl-carousel partner-logo owl-theme">
              <div className="item"> <img src="/assets/images/logo-1.png" alt="" title /></div>
              <div className="item"><img src="/assets/images/logo-2.png" alt="" title /></div>
              <div className="item"> <img src="/assets/images/logo-3.png" alt="" title /></div>
              <div className="item"> <img src="/assets/images/logo-1.png" alt="" title /></div>
              <div className="item"><img src="/assets/images/logo-2.png" alt="" title /></div>
              <div className="item"> <img src="/assets/images/logo-3.png" alt="" title /></div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div id="popup-1" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/product-big-1.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className="">ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-2" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/kiwi.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className="">ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-3" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/orange.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-4" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="/assets/images/product-img/acai-berry.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-4" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-5" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-6" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="/assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-7" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-8" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/persimmon.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-9" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/nectarine.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-9" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-10" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/kiwi.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-11" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/orange.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-12" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/orange.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-13" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-14" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="/assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-15" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-16" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/persimmon.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-8" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-17" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-18" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"><img src="/assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-19" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div className="wrap_compare">
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-7" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-20" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/product-big-1.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-21" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="/assets/images/product-img/kiwi.jpg" alt="" title className="img-fluid" /> </div>
            <div className="col-md-6">
              <div className="product_meta">
                <p>Availability : <span>not in Stock</span> </p>
                <p>Categories : <span>Vegetable Fruit</span></p>
                <p>Tags : <span>fruit green health organic</span> </p>
              </div>
              <div className="product-dis">
                <h3>Products Name</h3>
                <hr />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.  remaining essentially unchanged.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="row">
                  <div className="col-2 pr-0">
                    <input type="number" className="input-text qty text" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" size={4} />
                  </div>
                  <div className="col-10">
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*bootstrap*/}
      </div >
    )
  }
}
