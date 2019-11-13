import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import OrderCard from '../../components/Orders/OrderCard'

import { connect } from 'react-redux';
import { fetchPurchases } from '../../redux/actions/purchaseAction'
class Purchase extends Component {
  componentDidMount() {
    this.props.fetchPurchases();
  }

  static propsTypes = {
    fetchPurchases: PropTypes.func.isRequired,
    purchases: PropTypes.object.isRequired
  }

  render() {
    const { isLoading, items, error } = this.props.purchases;
    if (isLoading) {
      console.log('purchases Loading:', isLoading)
      return (
        <h3>Loading Spinning</h3>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BreadCrumb page='purchases' />
            </div>
          </div>
          <div className="row">
            {items.purchases && items.purchases.map(purchase => {
              return (
                <OrderCard key={purchase.id} purchase={purchase} />
              );
            })}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  purchases: state.purchase
});

export default connect(mapStateToProps, { fetchPurchases })(Purchase)