import React, { Component } from 'react'

export default class NewsLetter extends Component {
  render() {
    return (
      <div id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4>Join Our Newsletter Now</h4>
              <p className="m-0">Get E-mail updates about our latest shop and special offers.</p>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input type="email" className="form-control newsletter" placeholder="Enter your mail" />
                <span className="input-group-btn">
                  <button className="btn btn-theme" type="submit">Subscribe</button>
                </span> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
