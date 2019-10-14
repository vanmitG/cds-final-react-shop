import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BreadCrumb from "../../components/BreadCrumb"
import { connect } from 'react-redux';
import { fetchProduct } from '../../redux/actions/productAction'
class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }
  render() {
    const { product } = this.props
    return (
      <>
        <div className="container">
          <BreadCrumb page="Product Details" />
          <div className="clearfix" />
        </div>
        <div className="inner-header2">
          <h3>{product.name}</h3>
        </div>
        <div className="inner-page">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-6"> <Link to="/wish_list" className="wish-list"><i className="fa fa-heart" aria-hidden="true" /></Link>
                <img className="img-fluid" src={product.popupImg} alt=""></img>
              </div>
              <div className="col-lg-6  product-text">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6">
                    <h3>{product.name}</h3>
                    <img src="/assets/images/star.png" alt="" title /> <img src="/assets/images/star.png" alt="" title /> <img src="/assets/images/star.png" alt="" title /> <img src="/assets/images/star.png" alt="" title /> <img src="/assets/images/star.png" alt="" title /> </div>
                  <div className="col-md-6 col-sm-6 text-right col-6">
                    <div className="price-css"> <span>$35.00</span>
                      <div className="clearfix" />
                      ${product.price}.00 </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-3">
                      <p>{product.short_desc}</p>
                      <div className="mt-3 text-2">
                        <p><span>Availability</span>: &nbsp;&nbsp;<img src="/assets/images/available.png" alt="" title /> In Stock</p>
                        <p><span>Vendor</span>: &nbsp;&nbsp;organicfood store</p>
                        <p><span>Product Type</span>: &nbsp;&nbsp;Malesuada nunc vel risus </p>
                      </div>
                      <div className="quality">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="input-group">
                              <h4>Quality :</h4>
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]"> <i className="fa fa-minus" /> </button>
                              </span>
                              <input type="text" name="quant[1]" className="input-number" defaultValue={1} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]"><i className="fa fa-plus" /> </button>
                              </span> </div>
                          </div>
                          <div className="col-md-6 col-sm-6"> <Link className="btn add-to-cart2" to="/shops">Add To Cart</Link> </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="share">
                        <h3 className="pull-left">Share : &nbsp; &nbsp;</h3>
                        <div className="pull-left">
                          <ul className="social-network3">
                            <li><a href="#" className="facebook-icon" title><i className="fa fa-facebook" /></a></li>
                            <li><a href="#" className="twitter-icon" title><i className="fa fa-twitter" /></a></li>
                            <li><a href="#" className="google-icon" title><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#" className="linkedin-icon" title><i className="fa fa-linkedin" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="row categories">
                        <div className="col-md-7">
                          <h3 className="pull-left"> Categories : <span>&nbsp;Organic, Healthy, Low Fat </span></h3>
                        </div>
                        <div className="col-md-5">
                          <h3 className="pull-left"> Tags : <span>&nbsp;Healthy, Low Fat</span></h3>
                        </div>
                        <div className="clearfix" />
                        <div className="list-3 row">
                          <div className="col-lg-4"><img src="/assets/images/shield.png" alt="" /> 10 days return</div>
                          <div className="col-lg-4"><img src="/assets/images/shipping.png" alt="" /> Quick Delivery</div>
                          <div className="col-lg-4"><img src="/assets/images/transfer.png" alt="" /> 35% Cashback</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
              {/* tab description */}
              <div className="col-md-12">
                <div id="tabs" className="description">
                  <div>
                    <nav>
                      <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist"> <a className="active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>&nbsp;|&nbsp;<a className id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Additional information</a>&nbsp;|&nbsp;<a className id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</a> </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active text-1" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <p className="p1"><strong>How to write product descriptions that sell <br />
                        </strong>One of the best things you can do to make your store successful is invest some time in writing great product descriptions. You want to provide detailed yet concise information that will entice potential to buy.</p>
                        <p className="p2"><strong>Think like a consumer<br />
                        </strong>Think about what you as a consumer would want to know, then include those features in your description. For clothes: materials and fit. For food: ingredients and how it was prepared. Bullets are your friends when listing features — try to limit each one to 5-8 words.</p>
                        <p className="p2"><strong>Find differentiators<br />
                        </strong>Pepper your features with details that show how the product stands out against similar offerings. For clothes: is it vintage or hard to find? For art: is the artist well known? For home décor: is it a certain style like mid-century modern? Unique product descriptions not only help you stand out, they improve your SEO.</p>
                        <p className="p2"><strong>Keep it simple<br />
                        </strong>Provide enough detail to help consumers make an informed decision, but don’t overwhelm with a laundry list of features or flowery language. Densely pack your descriptions with useful information and watch products fly off the shelf.</p>
                        {/* snippet location product_description */}
                      </div>
                      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th width="20%"><div align="left">Brand</div></th>
                              <td>Orgain</td>
                            </tr>
                            <tr>
                              <th><div align="left">Calories Per Serving</div></th>
                              <td>352 Calories</td>
                            </tr>
                            <tr>
                              <th><div align="left">Nutrition Facts</div></th>
                              <td>Low Sodium</td>
                            </tr>
                            <tr>
                              <th><div align="left">Storage life</div></th>
                              <td>1 month</td>
                            </tr>
                            <tr>
                              <th><div align="left">Per Pack</div></th>
                              <td>2, 4, 6</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row m-0 text-center-m">
                              <div className="col-lg-2 col-md-3 col-sm-2 text-center mb-3"><img src="/assets/images/review1.jpg" alt="" title className="radius image-boder img-fluid" /></div>
                              <div className="col-lg-10 col-md-9 col-sm-10">
                                <h2 className="font-15 mt-10">Daryl Michaels <span className="font-13 text-themecolor">Product: Mobile Phone</span></h2>
                                <span className="fa fa-star checked font-13" /> <span className="fa fa-star checked font-13" /> <span className="fa fa-star checked font-13" /> <span className="fa fa-star font-13" /> <span className="fa fa-star font-13" /> &nbsp;<span className="red">1 Min ago </span>
                                <div className="mt-1">
                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                </div>
                              </div>
                              <div className="clearfix" />
                              <div className="col-12">
                                <hr />
                              </div>
                              <div className="clearfix" />
                              <div className="col-lg-2 col-md-3 col-sm-2 text-center"><img src="/assets/images/review2.jpg" alt="" title="" className="radius image-boder img-fluid" /></div>
                              <div className="col-lg-10 col-md-9 col-sm-10">
                                <h2 className="font-15 mt-10">Daryl Michaels <span className="font-13 text-themecolor">Product: Mobile Phone</span></h2>
                                <span className="fa fa-star checked font-13" /> <span className="fa fa-star checked font-13" /> <span className="fa fa-star checked font-13" /> <span className="fa fa-star font-13" /> <span className="fa fa-star font-13" /> <span className="red">&nbsp;1 Min ago </span>
                                <div className="mt-1">
                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h4>Write Your Review</h4>
                            <p className="mb-3">Your email address will not be published.</p>
                            <form className="review-form">
                              <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your Name" />
                              </div>
                              <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email Address" />
                              </div>
                              <div className="form-group">
                                <textarea className="form-control" rows={5} placeholder="Your review" defaultValue={""} />
                              </div>
                              <div className="form-group">
                                <div className="input-rating"> <strong>Your Rating:</strong>
                                  <div className="stars">
                                    <input type="radio" id="star5" name="rating" defaultValue={5} />
                                    <label htmlFor="star5" />
                                    <input type="radio" id="star4" name="rating" defaultValue={4} />
                                    <label htmlFor="star4" />
                                    <input type="radio" id="star3" name="rating" defaultValue={3} />
                                    <label htmlFor="star3" />
                                    <input type="radio" id="star2" name="rating" defaultValue={2} />
                                    <label htmlFor="star2" />
                                    <input type="radio" id="star1" name="rating" defaultValue={1} />
                                    <label htmlFor="star1" />
                                  </div>
                                </div>
                                <button className="btn add-to-cart3">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /tab description */}
              <div className="clearfix" />
              <div className="related">
                <div className="col-md-12">
                  <h2 className="icon-css">Related Products</h2>

                  <div className="owl-carousel latest-products owl-theme wow fadeIn">
                    <div className="item">
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-1.jpg" alt="" /></a>
                        <h5 className="product-type">Fruits</h5>
                        <h3 className="product-name">Green Apple</h3>
                        <h3 className="product-price">$14.00 </h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-1" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-2.jpg" alt="" /></a>
                        <h5 className="product-type">Vegetables</h5>
                        <h3 className="product-name">Ingredients</h3>
                        <h3 className="product-price">$14.00</h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-2" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="sale-flag-side"> <span className="sale-text">Sale</span> </div>
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-3.jpg" alt="" /></a>
                        <h5 className="product-type">Spices</h5>
                        <h3 className="product-name">Ingredients</h3>
                        <h3 className="product-price">$14.00 <del>$35.00</del></h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-4.jpg" alt="" /></a>
                        <h5 className="product-type">Spices</h5>
                        <h3 className="product-name">Ingredients</h3>
                        <h3 className="product-price">$14.00 <del>$35.00</del></h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-4" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                        <h5 className="product-type">Spices</h5>
                        <h3 className="product-name">Ingredients</h3>
                        <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-5" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product"><a className="product-img" href="#"><img src="/assets/images/product-img/product-img-5.jpg" alt="" /></a>
                        <h5 className="product-type">Spices</h5>
                        <h3 className="product-name">Ingredients</h3>
                        <h3 className="product-price">$14.00 <del>$35.00</del> </h3>
                        <div className="product-select">
                          <button data-toggle="tooltip" data-placement="top" title className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-6" data-original-title="Quick view"><i className="fa fa-eye" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Wishlist" className="add-to-wishlist round-icon-btn" onclick="window.location.href='wishlist.html'"><i className="fa fa-heart-o" aria-hidden="true" /></button>
                          <button data-toggle="tooltip" data-placement="top" title="Add to cart" className="add-to-cart round-icon-btn" onclick="window.location.href='shop.html'"><i className="fa fa-shopping-bag" aria-hidden="true" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* /page content --------*/}
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
                          <div className="add_to_cart"><a href="#" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a className="add-to-compare round-icon-btn" data-fancybox="gallery" data-src="#popup-3" href="javascript:;"> <i className="fa fa-eye" aria-hidden="true" /> </a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
        <div id="popup-4" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/acai-berry.jpg" alt="" title className="img-fluid" /> </div>
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
        <div id="popup-5" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
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
        <div id="popup-6" className="popup-fcy">
          <div className="row">
            <div className="col-md-6"> <img src="/assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /> </div>
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
            <div className="col-md-6"> <img src="/assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
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
        {/* popur */}
        {/* End */}
      </>
    )
  }
}
SingleProduct.propsTypes = {
  fetchProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  // items is defined in productReducer
  product: state.products.item
});

export default connect(mapStateToProps, { fetchProduct })(SingleProduct)