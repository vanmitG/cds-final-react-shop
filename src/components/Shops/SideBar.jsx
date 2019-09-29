import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-12 col-sm-12">
        <div className="inner-left-menu">
          <h3>Departments</h3>
          <div className="list-css">
            <ul>
              <li>
                <a href="shop.html">Fresh Fruits</a>
              </li>
              <li>
                <a href="shop.html">Fruit &amp; Nut Gifts</a>
              </li>
              <li>
                <a href="shop.html">Ocean Foods</a>
              </li>
              <li>
                <a href="shop.html">Butter &amp; Eggs</a>
              </li>
              <li>
                <a href="shop.html">Fastfood</a>
              </li>
              <li>
                <a href="shop.html">Fresh Onion</a>
              </li>
              <li>
                <a href="shop.html">Papaya &amp; Crisps</a>
              </li>
              <li>
                <a href="shop.html">Oatmeal</a>
              </li>
              <li>
                <a href="shop.html">Fresh Bananas</a>
              </li>
            </ul>
          </div>
          <h3>Filter By Price</h3>
          <div className="price-range-block">
            <div id="slider-range" className="price-filter-range" />
            <div className="row">
              <div className="col-9 p-0">
                <input
                  type="number"
                  min={0}
                  max={9900}
                  oninput="validity.valid||(value='0');"
                  id="min_price"
                  className="price-range-field"
                />
                <input
                  type="number"
                  min={0}
                  max={10000}
                  oninput="validity.valid||(value='10000');"
                  id="max_price"
                  className="price-range-field"
                />
              </div>
              <div className="col-3 p-0">
                <button type="button" className="btn btn-filter">
                  Filter
                </button>
              </div>
            </div>
            <br />
          </div>
          <h3>Popular Picks</h3>
          <div className="list-css">
            <ul>
              <li>
                {/* Default unchecked */}
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked-1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="defaultUnchecked-1"
                  >
                    Top Sales
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked-2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="defaultUnchecked-2"
                  >
                    New Products
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked-3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="defaultUnchecked-3"
                  >
                    Featured Products
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked-4"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="defaultUnchecked-4"
                  >
                    Bestsellers
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h3>Product Tags</h3>
          <div className="tag_bottom">
            <a className="tag-btn" href="#">
              organic
            </a>
            <a className="tag-btn" href="shop_grid%2blist_3col.html">
              vegatable
            </a>
            <a className="tag-btn" href="#">
              fruits
            </a>
            <a className="tag-btn" href="#">
              fresh meat
            </a>
            <a className="tag-btn" href="#">
              fastfood
            </a>
            <a className="tag-btn" href="#">
              natural
            </a>
          </div>
        </div>
      </div>
    );
  }
}
