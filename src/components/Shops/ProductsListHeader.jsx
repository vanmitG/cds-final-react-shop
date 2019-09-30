import React, { Component } from "react";

export default class ProductsListHeader extends Component {
  onGridClick = () => {
    console.log("grid-group-item");
  };
  onListClick = () => {
    console.log("list-group-item");
  };
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
                <button
                  className="btn btn-out-line customHover"
                  onClick={() => this.onGridClick()}
                  id="grid"
                >
                  <i className="fa fa-th-large" />
                </button>
                <button
                  id="list"
                  onClick={() => this.onListClick()}
                  className="btn btn-out-line customHover"
                >
                  <i className="fa fa-list" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
