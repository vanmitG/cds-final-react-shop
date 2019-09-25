import React, { Component } from 'react'
import BreadCrumb from "../../components/BreadCrumb"
export default class FAQ extends Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="container">
          <BreadCrumb page="FAQ" />
          <div className="row">
            <div className="col-lg-12 mt-2 mb-5">
              <div id="accordion" role="tablist" className="faq">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5 className="mb-0"> Lorem Ipsum is simply dummy text of the printing. ? </h5>
                  </a> </div>
                  <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 className="mb-0"> Lorem Ipsum has been the industry's standard dummy ? </h5>
                  </a> </div>
                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree"> <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5 className="mb-0"> Many desktop publishing packages and web page editors now use Lorem  ? </h5>
                  </a> </div>
                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="heading4"> <a className="collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    <h5 className="mb-0"> Many desktop publishing packages and web page editors now use Lorem  ? </h5>
                  </a> </div>
                  <div id="collapse4" className="collapse" role="tabpanel" aria-labelledby="heading4" data-parent="#accordion">
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="heading5"> <a className="collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    <h5 className="mb-0"> Many desktop publishing packages and web page editors now use Lorem  ? </h5>
                  </a> </div>
                  <div id="collapse5" className="collapse" role="tabpanel" aria-labelledby="heading5" data-parent="#accordion">
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        {/* End */}
      </>
    )
  }
}
