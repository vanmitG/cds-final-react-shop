import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import ProductCard2 from '../../components/Shop2/ProductCard2'

import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productAction'

class Shop2 extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    console.log('shops213:', this.props.products)
  }

  render() {
    const { products } = this.props.products;
    console.log(products)
    return (
      <div>
        <h1>Shop2</h1>

        {console.log('shops2 - this.props.products:', products)}
        {this.props.products.products && this.props.products.products.map(product =>
          console.log('shop2 in loop', this.props.products.items.products.length)
        )}
      </div>
    )
  }
}

Shop2.propsTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Shop2)