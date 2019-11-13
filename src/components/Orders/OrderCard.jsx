import React, { Component } from "react";

export default class OrderCard extends Component {
  render() {
    const {
      id,
      created_date,
      total,
      buyer_id,
      status_id,
      updated_date
    } = this.props.purchase;
    return (
      <ul className="col-lg-3">
        <li>id: {id}</li>
        <li>buy date: {created_date}</li>
        <li>total: {total}</li>
        <li>user id: {buyer_id}</li>
        <li>status id: {status_id}</li>
        <li>update date: {updated_date}</li>
        <hr />
      </ul>
    );
  }
}
