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
    const { isLoading, items, error } = this.props.products;
    return (
      <div>
        <h1>Shop22</h1>
        {
          isLoading
            ? console.log('isloading', isLoading)
            : console.log('isloading', isLoading)
        }
        {
          this.props.products.products && this.props.products.products.map((product) => {
            return (
              <h3>{product.id}</h3>
            )


          })
            ? console.log('with length', this.prob.products.products.length)
            : console.log('without length')

        }

        {/* {console.log('shops2 - this.props.products:', products)}
        {this.props.products.products && this.props.products.products.map(product =>
          console.log('shop2 in loop', this.props.products.items.products.length)
        )} */}
      </div>
    )
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