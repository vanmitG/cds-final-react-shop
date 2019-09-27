import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import SideBar from '../../components/Shops/SideBar'
import ProductsListHeader from '../../components/Shops/ProductsListHeader'
import ProductCard from '../../components/Shops/ProductCard'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productAction'


class Shops extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  // let this.props.product = [];
  render() {
    let { products } = this.props
    return (
      <>
        <div className="container">
          <BreadCrumb page='Organic Shops' />
          <div className="row">
            <SideBar />
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-12">
                  <ProductsListHeader />
                  <div className="clearfix" />
                  <div id="products" className="row view-group">
                    {/* 9 product card */}
                    {products && products.map(product => {
                      return (
                        <ProductCard product={product} />
                      );
                    })}
                    {/* 9 product card end */}
                    <div className="clearfix" />
                    {/* Pagination */}
                    <div className="text-center col">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-template d-flex justify-content-center float-none">
                          <li className="page-item"><a href="#" className="page-link"> <i className="fa fa-angle-left" /></a></li>
                          <li className="page-item"><a href="#" className="page-link active">1</a></li>
                          <li className="page-item"><a href="#" className="page-link">2</a></li>
                          <li className="page-item"><a href="#" className="page-link">3</a></li>
                          <li className="page-item"><a href="#" className="page-link"> <i className="fa fa-angle-right" /></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>

        <div id="popup-1" className="popup-fcy">
          <div className="row">
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/product-big-1.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/kiwi.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4 p-0">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6"> <img src="assets/images/product-img/orange.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6 text-center"><img src="assets/images/product-img/acai-berry.jpg" alt="" title className="img-fluid" /></div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/maracuja.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6 text-center"><img src="assets/images/product-img/cucumber.jpg" alt="" title className="img-fluid" /></div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6 text-center"> <img src="assets/images/product-img/mushroom.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6"> <img src="assets/images/product-img/persimmon.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
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
            <div className="col-md-6"> <img src="assets/images/product-img/nectarine.jpg" alt="" title className="img-fluid" /> </div>
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
                          <div className="add_to_cart"><a href="cart.html" className>ADD TO CART</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <hr className="m-0 p-0" />
                  </div>
                  <div className="pb-3 pt-3">
                    <div className="left-icon"> <a href="#" className="mr-1"><i className="fa fa-eye" aria-hidden="true" /></a> <a href="#" className="mr-3"><i className="fa fa-balance-scale" aria-hidden="true" /></a> </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <hr className="m-0 p-0" />
                  </div>
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

Shops.propsTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  // items is defined in productReducer
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Shops)