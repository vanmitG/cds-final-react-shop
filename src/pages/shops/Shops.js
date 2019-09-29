import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import SideBar from '../../components/Shops/SideBar'
import ProductsListHeader from '../../components/Shops/ProductsListHeader'
import ProductCard from '../../components/Shops/ProductCard'
import PopupShop from '../../components/Shops/PopupShop'

import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productAction'

const Pagination = () => {
  return (
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
  )
}

class Shops extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

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
                        <ProductCard key={product.id} product={product} />
                      );
                    })}
                    {/* /9 product card */}
                    <div className="clearfix" />
                    {/* Pagination */}
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* popup for shops */}
        {products && products.map(product => {
          return (
            <PopupShop key={product.id} product={product} />
          );
        })}
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

