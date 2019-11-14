import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { setPurchaseStatus } from "../../redux/actions/purchaseAction";

export default class OrderCard extends Component {
  onChangeStatus = (purchase_id, status) => {
    console.log("change status of purchase: ", purchase_id, " to ", status);
    this.props.onSetStatus(purchase_id, status);
  };

  static propsTypes = {
    onSetStatus: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };

  render() {
    const {
      id,
      created_date,
      total,
      purchase_items,
      updated_date
    } = this.props.item.purchase;
    const { buyer, status } = this.props.item;
    return (
      <ul className="col-lg-3">
        <li>id: {id}</li>
        <li>buy date: {created_date}</li>
        <li>total: {total}</li>
        <li>number of items: {purchase_items.length}</li>
        <li>status: {status}</li>
        <li>update date: {updated_date}</li>
        <li>buyer: {buyer}</li>
        {/* TODO how to change below to if statement */}
        {status === "placed" ? (
          <button onClick={() => this.onChangeStatus(id, "processing")}>
            Process
          </button>
        ) : (
          ""
        )}
        {status === "processing" ? (
          <button onClick={() => this.onChangeStatus(id, "delivering")}>
            Deliver
          </button>
        ) : (
          ""
        )}
        {status === "delivering" ? (
          <button onClick={() => this.onChangeStatus(id, "completed")}>
            Complete
          </button>
        ) : (
          ""
        )}
        {status === "completed" ? "" : ""}
        {status === "canceled" ? "" : ""}
        {/* <button onClick={() => this.onChangeStatus(id, "processing")}>
          Process
        </button>
        <button onClick={() => this.onChangeStatus(id, "delivering")}>
          Deliver
        </button>
        <button onClick={() => this.onChangeStatus(id, "completed")}>
          Complete
        </button> */}
        <button onClick={() => this.onChangeStatus(id, "canceled")}>
          Cancel
        </button>
        <hr />
      </ul>
    );
  }
}

// export default connect(
//   null,
//   { setPurchaseStatus }
// )(OrderCard);
