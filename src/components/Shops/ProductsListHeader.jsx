import React, { Component } from "react";

export default class ProductsListHeader extends Component {
  render() {
    return (
      <div className="right-heading">
        <div className="row">
          <div className="col-md-4 col-4">
            <h3>Organic Shops</h3>
          </div>
          <div className="col-md-8 col-8">
            <div className="product-filter">
              <div className="view-method">
                {" "}
                <a href="#" id="grid">
                  <i className="fa fa-th-large" />
                </a>{" "}
                <a href="#" id="list">
                  <i className="fa fa-list" />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
