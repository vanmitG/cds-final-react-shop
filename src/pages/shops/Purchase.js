import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BreadCrumb from '../../components/BreadCrumb';
import OrderCard from '../../components/Orders/OrderCard'

import { connect } from 'react-redux';
import { fetchPurchases } from '../../redux/actions/purchaseAction'
import { setPurchaseStatus } from '../../redux/actions/purchaseAction'
class Purchase extends Component {
  componentDidMount() {
    this.props.fetchPurchases();
  }

  onSetStatus = (purchase_id, status) => {
    console.log("change status of purchase: ", purchase_id, " to ", status);
    this.props.setPurchaseStatus(purchase_id, status);
  };

  static propsTypes = {
    fetchPurchases: PropTypes.func.isRequired,
    setPurchaseStatus: PropTypes.func.isRequired,
    purchases: PropTypes.object.isRequired
  }

  render() {
    const { isLoading, items, isNewStatus, error } = this.props.purchases;
    // let haveNewStatus = isNewStatus;
    // if (haveNewStatus) {
    //   console.log('purchase new status:', haveNewStatus)
    //   this.props.fetchPurchases();
    //   haveNewStatus = false;
    // }
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
            {items && items.map(item => {
              return (
                <OrderCard key={item.purchase.id} item={item} onSetStatus={this.onSetStatus} />
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

export default connect(mapStateToProps, { fetchPurchases, setPurchaseStatus })(Purchase)