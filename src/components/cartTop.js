import React, { Component } from 'react'

export default class cartTop extends Component {
  render() {
    return (
      <div className="dropdown-menu dropdown-menu2 dropdown-menu-right  animate slideIn">
        <div className="container">
          <div className="row">
            <div className="col-3"><img src="/assets/images/fruits/img-1.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-9">
              <p>1 x Product Name... <span className="price">$ 14.70</span></p>
              <a href="#" className="close">x</a> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-3"><img src="/assets/images/fruits/img-2.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-9">
              <p>1 x Product Name... <span className="price">$ 14.70</span></p>
              <a href="#" className="close">x</a> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-3"><img src="/assets/images/fruits/img-3.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-9">
              <p>1 x Product Name... <span className="price">$ 14.70</span></p>
              <a href="#" className="close">x</a> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-3"><img src="/assets/images/fruits/img-4.jpg" alt="" title className="img-fluid" /></div>
            <div className="col-9">
              <p>1 x Product Name... <span className="price">$ 14.70</span></p>
              <a href="#" className="close">x</a> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-3">
              <p className="font-15">Tax </p>
            </div>
            <div className="col-9 text-right"> <span className="font-15">$ 2.80</span> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-3">
              <p className="font-15"><strong>Total</strong></p>
            </div>
            <div className="col-9 text-right"> <span className="font-15"><strong>$ 10.80</strong></span> </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-md-12 text-center">
              <input type="button" defaultValue="Check out" className="btn check-out w-100" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
