import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (

      <div className="container search-div">
        <div className="row">
          <div className="col-lg-3 col-md-4 top-dropdown">
            <div className="all-cate custom-select2">
              <select>
                <option>All Categories</option>
                <option>Fresh Meat</option>
                <option>Vegetables</option>
                <option>Fruit &amp; Nut Gifts</option>
                <option>Fresh Berries</option>
                <option>Ocean Foods</option>
                <option>Butter &amp; Eggs</option>
                <option>Fastfood</option>
                <option>Fresh Onion</option>
                <option>Papayaya &amp; Crisps</option>
                <option>Oatmeal</option>
                <option>Fresh Bananas</option>
              </select>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="input-group filter-by">
              <input type="hidden" name="search_param" defaultValue="all" id="search_param" />
              <input type="text" className="form-control" name="x" placeholder="What do you need?" />
              <span className="input-group-btn">
                <button className="btn btn-default search-bt" type="button">SEARCH</button>
              </span> </div>
          </div>
        </div>
      </div>

    )
  }
}
