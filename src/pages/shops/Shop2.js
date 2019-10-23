import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import ProductCard2 from '../../components/Shop2/ProductCard2'

import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productAction'

class Shop2 extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { isLoading, items, error } = this.props.products;
    if (isLoading) {
      console.log('product Loading:', isLoading)
      return (
        <h3>Loading Spinning</h3>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-12">
                  <BreadCrumb page='Wonderful Shop' />
                  <div className="clearfix" />
                  <div id="products" className="row view-group">
                    {items.products && items.products.map(product => {
                      return (
                        <ProductCard2 key={product.id} product={product} />
                      );
                    })}
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      )
    }
  }
}

Shop2.propsTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  products: state.products
});


export default connect(mapStateToProps, { fetchProducts })(Shop2)