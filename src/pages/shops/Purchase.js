import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';

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
                <ul key={purchase.id} className="col-lg-3">
                  <li>id: {purchase.id}</li>
                  <li>buy date: {purchase.created_date}</li>
                  <li>total: {purchase.total}</li>
                  <li>user id: {purchase.user}</li>
                  <hr />
                </ul>
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